import OriginDialog from './Dialog';
import { alert, confirm } from './methods';

type DialogType = typeof OriginDialog & {
  alert: typeof alert;
  confirm: typeof confirm;
};

const Dialog = OriginDialog as DialogType;

Dialog.alert = alert;
Dialog.confirm = confirm;

export default Dialog;
