import React, { useRef } from 'react';
import classNames from 'classnames';
import { useMergedState } from '../../utils';
import './style.less';

type SliderProps = {
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  min?: number;
  step?: number;
  onAfterChange?: (value: number) => void;
  className?: string;
  style?: React.CSSProperties;
  showValue?: boolean;
  disabled?: boolean;
};

const Slider: React.FC<SliderProps> = (props) => {
  const {
    max = 100,
    min = 0,
    step = 1,
    onChange,
    className,
    onAfterChange,
    showValue,
    disabled,
    ...restProps
  } = props;

  const startX = useRef(0);
  const startValue = useRef(0);
  const sliderBox = useRef<HTMLDivElement>(null);
  const [value, setValue] = useMergedState<number>({
    value: props.value,
    defaultValue: props.defaultValue || 0,
  });
  const valueTotal = max - min;

  const format = (_value: number) => {
    if (_value < min) {
      return min;
    }
    if (_value > max) {
      return max;
    }

    const val = Math.round(_value / step) * step;
    return val;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    startX.current = e.touches[0].clientX;
    startValue.current = value;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    if (!sliderBox.current) {
      return;
    }
    const x = e.touches[0].clientX - startX.current;
    const diff = (x / sliderBox.current?.offsetWidth) * valueTotal;
    const dist = format(diff + startValue.current);
    if (props.value === undefined) {
      setValue(dist);
    }
    onChange?.(dist);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    onChange?.(value);
    onAfterChange?.(value);
  };

  const onClick = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    if (!sliderBox.current) {
      return;
    }
    const x = e.touches[0].clientX - sliderBox.current.offsetLeft;
    const diff = (x / sliderBox.current?.clientWidth) * valueTotal;
    const dist = format(diff + min);
    if (props.value === undefined) {
      setValue(dist);
    }
    onChange?.(dist);
    onAfterChange?.(dist);
  };

  const valuePercent = ((value - min) / valueTotal) * 100;
  const classes = classNames('weui-slider-box', className);

  return (
    <div className={classes} {...restProps}>
      <div
        className="weui-slider"
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-disabled={disabled}
      >
        <div
          className="weui-slider__inner"
          ref={sliderBox}
          onTouchStart={onClick}
        >
          <div
            className="weui-slider__track"
            style={{ width: `${valuePercent}%` }}
          />
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="weui-slider__handler"
            style={{ left: `${valuePercent}%` }}
          />
        </div>
      </div>
      {showValue && <div className="weui-slider-box__value">{value}</div>}
    </div>
  );
};

export default Slider;
