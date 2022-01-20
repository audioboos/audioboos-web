import React from 'react';
import IHookFormProps from '../../components/IHookFormProps';

const SetupConfirm = ({ register }: IHookFormProps) => {
  React.useEffect(() => {
    console.log('SetupConfirm', register);
  });
  return (
    <>
      <div>{register}</div>
    </>
  );
};

export default SetupConfirm;
