import React from 'react';

type ActionsProps = {
  text: string;
};

const Actions: React.FC<ActionsProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default Actions;
