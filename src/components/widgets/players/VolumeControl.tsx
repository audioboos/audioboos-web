import { Popover } from "@headlessui/react";
import React from "react";
import { MdVolumeUp } from "react-icons/md";
import { usePopper } from "react-popper";
import { makeRangeMapper } from "../../../utils/ranges";
interface IVolumeControlProps {
    volume: number;
    onVolumeChanged: (volume: number) => void;
}
const VolumeControl = ({ volume, onVolumeChanged }: IVolumeControlProps) => {
    let [referenceElement, setReferenceElement] = React.useState<any>();
    let [popperElement, setPopperElement] = React.useState<any>();
    let { styles, attributes } = usePopper(referenceElement, popperElement);

    const _handleVolumeClick = (
        $event: React.MouseEvent<HTMLProgressElement>
    ) => {
        let currentTargetRect = $event.currentTarget.getBoundingClientRect();
        const eventOffsetX = $event.pageX - currentTargetRect.left;
        let mapFn = makeRangeMapper(0, currentTargetRect.width, 0, 100);
        let volume = mapFn(eventOffsetX);
        if (volume >= 0) {
            onVolumeChanged(volume / 100);
        }
    };

    return (
        <Popover>
            <Popover.Button ref={setReferenceElement} className="p-1">
                <MdVolumeUp className="w-8 h-8 text-current text-gray-500 delay-100 hover:text-gray-700" />
            </Popover.Button>
            <Popover.Panel
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                className="shadow"
            >
                <div id="volume-slider" className="">
                    <progress
                        className="progress"
                        value={volume * 100}
                        max={100}
                        onClick={_handleVolumeClick}
                    />
                </div>
            </Popover.Panel>
        </Popover>
    );
};

export default VolumeControl;
