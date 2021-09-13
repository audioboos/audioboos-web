import React from "react";
import "./MiniActionButton.css";
interface IMiniActionButtonProps {
    tooltip: string;
    onclick: () => void;
    children: React.ReactNode;
}

const MiniActionButton = ({
    tooltip,
    onclick,
    children,
}: IMiniActionButtonProps) => {
    return (
        <div className="tooltip">
            <span className="tooltiptext">{tooltip}</span>
            <button>{children}</button>
        </div>
    );
};

export default MiniActionButton;
