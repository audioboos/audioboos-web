import React from 'react';
interface IButtonProps {
  text: string;
  children: React.ReactNode;
}
const Button = ({ text, children }: IButtonProps) => {
  return (
    <button
      type="button"
      className="flex items-center px-6 py-2 uppercase transition duration-200 ease-in border-2 border-indigo-100 rounded-md hover:bg-gray-200 hover:text-white focus:outline-none"
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
