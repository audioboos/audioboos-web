import React from "react";
import "./MiniActionButton.css";
interface IMiniActionButtonProps {
    tooltip: string;
    onClick: () => void;
    children: React.ReactNode;
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
                {children}
            </button>
        </div>
    );
};

export default MiniActionButton;
