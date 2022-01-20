import React from "react";
import './mini-actionbutton.component.css';
interface IMiniActionButtonProps {
    tooltip?: string;
    onClick: () => void;
    children: React.ReactElement;
}

const MiniActionButton = ({
    tooltip,
    onClick,
    children,
}: IMiniActionButtonProps) => {
    return (
        <div className="tooltip">
            {tooltip && <span className="tooltiptext">{tooltip}</span>}
            <button className="p-1" onClick={onClick}>
                {React.cloneElement(children, {
                    className:
                        "w-8 h-8 text-current text-gray-500 hover:text-gray-700 delay-100",
                })}
            </button>
        </div>
    );
};

export default MiniActionButton;
