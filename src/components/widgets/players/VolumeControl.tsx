import { Transition } from "@headlessui/react";
import React from "react";
import { MdVolumeUp } from "react-icons/md";
import { makeRangeMapper } from "../../../utils/ranges";
import MiniActionButton from "../MiniActionButton";
interface IVolumeControlProps {
    volume: number;
    onVolumeChanged: (volume: number) => void;
}
const VolumeControl = ({ volume, onVolumeChanged }: IVolumeControlProps) => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const _handleVolumeClick = (
        $event: React.MouseEvent<HTMLProgressElement>
    ) => {
        let currentTargetRect = $event.currentTarget.getBoundingClientRect();
        const eventOffsetX = $event.pageX - currentTargetRect.left;
        let mapFn = makeRangeMapper(0, currentTargetRect.width, 0, 100);
        let volume = mapFn(eventOffsetX);
        onVolumeChanged(volume / 100);
    };

    return (
        <div
            id="volume"
            className="flex flex-row items-center"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
        >
            <Transition
                show={menuOpen}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="volume-slider" className="px-1 pt-1">
                    <progress
                        className="progress"
                        value={volume * 100}
                        max={100}
                        onClick={_handleVolumeClick}
                    />
                </div>
            </Transition>
            <MiniActionButton
                onClick={() => console.log("MiniPlayer", "Favey")}
            >
                <MdVolumeUp />
            </MiniActionButton>
        </div>
    );
};

export default VolumeControl;
