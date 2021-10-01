import ExclamationCircleIcon from "@heroicons/react/outline/ExclamationCircleIcon";
import InformationCircleIcon from "@heroicons/react/outline/InformationCircleIcon";
import ShieldExclamationIcon from "@heroicons/react/outline/ShieldExclamationIcon";
import React from "react";

enum AlertWidgetType {
    Information,
    Warning,
    Error,
}
interface IAlertWidgetProps {
    text: string;
    allowDismiss: boolean;
    type: AlertWidgetType;
}

const AlertWidget = ({
    text,
    allowDismiss = true,
    type = AlertWidgetType.Information,
}: IAlertWidgetProps) => {
    const renderIcon = (type: AlertWidgetType) => {
        switch (type) {
            case AlertWidgetType.Information:
                return <InformationCircleIcon className="w-8 h-8" />;
            case AlertWidgetType.Warning:
                return <ShieldExclamationIcon className="w-8 h-8" />;
            case AlertWidgetType.Error:
                return <ExclamationCircleIcon className="w-8 h-8" />;
        }
    };
    const getClass = (type: AlertWidgetType) => {
        switch (type) {
            case AlertWidgetType.Information:
                return "text-blue-500 border border-blue-500";
            case AlertWidgetType.Warning:
                return "text-yellow-500 border border-yellow-500";
            case AlertWidgetType.Error:
                return "text-red-400 border border-red-400";
        }
    };
    return (
        <div
            className={`flex items-center px-5 py-4 mb-2 rounded-md justify-between ${getClass(
                type
            )}`}
        >
            <div className="flex items-center w-full">
                {renderIcon(type)}
                {text}
            </div>
            {allowDismiss && (
                <button
                    type="button"
                    className="flex flex-shrink-0 p-2 -mr-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:-mr-2"
                >
                    <span className="sr-only">Dismiss</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-6 h-6 text-blue-500"
                        viewBox="0 0 1792 1792"
                    >
                        <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path>
                    </svg>
                </button>
            )}
        </div>
    );
};
export { AlertWidgetType };
export default AlertWidget;
