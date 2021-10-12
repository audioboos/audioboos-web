import React from "react";
import "./MiniActionButton.css";
interface IMiniActionButtonProps {
    tooltip: string;
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
            <span className="tooltiptext">{tooltip}</span>
            <button className="p-2" onClick={onClick}>
                {React.cloneElement(children, {
                    className:
                        "w-8 h-8 text-current text-gray-500 hover:text-gray-700 delay-100",
                })}
            </button>
        </div>
    );
};

export default MiniActionButton;
