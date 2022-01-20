import React from 'react';
interface IIconButtonProps {
  text: string;
  children: React.ReactElement;
  iconRight: boolean;
  fullWidth: boolean;
  className?: string;
  extraClasses?: string;
  onClick?: React.MouseEventHandler | undefined;
}
const defaults = {
  className:
    'inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-800',
  iconRight: false,
  fullWidth: false,
};
const IconButton = ({
  text,
  children,
  className = defaults.className,
  iconRight = defaults.iconRight,
  fullWidth = defaults.fullWidth,
  extraClasses = '',
  onClick,
}: IIconButtonProps) => {
  return (
    <button className={`${className} ${fullWidth && 'w-full justify-center'}`} onClick={onClick}>
      {!iconRight && children}
      <span>{text}</span>
      {iconRight && children}
    </button>
  );
};

export default IconButton;
