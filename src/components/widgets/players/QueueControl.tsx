import { Popover } from "@headlessui/react";
import React from "react";
import { MdOutlineClear, MdQueueMusic } from "react-icons/md";
import { usePopper } from "react-popper";
import { useDispatch, useSelector } from "react-redux";
import { play, removeFromQueue } from "../../../store/redux/audio";
import { RootState } from "../../../store/redux/store";

const QueueControl = () => {
    let [referenceElement, setReferenceElement] = React.useState<any>();
    let [popperElement, setPopperElement] = React.useState<any>();
    let { styles, attributes } = usePopper(referenceElement, popperElement);
    const dispatch = useDispatch();
    const queue = useSelector((state: RootState) => state.audio.playQueue);

    return (
        <Popover>
            <Popover.Button ref={setReferenceElement} className="p-1">
                <MdQueueMusic className="w-8 h-8 text-current text-gray-500 delay-100 hover:text-gray-700" />
            </Popover.Button>
            <Popover.Panel
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                className="pb-3 shadow"
            >
                {queue.length !== 0 && (
                    <div className="container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
                        <div className="w-full px-4 py-5 bg-gray-100 border-b sm:px-6 ">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                Queue
                            </h3>
                        </div>
                        <ul className="flex flex-col divide-y divide">
                            {queue.map((item) => (
                                <li
                                    className="flex flex-row"
                                    key={item.track.id}
                                >
                                    <div
                                        className="flex items-center flex-1 p-4 cursor-pointer select-none"
                                        onClick={() => {
                                            dispatch(play(item.track.id));
                                        }}
                                    >
                                        <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                            <a
                                                href="/fart/face"
                                                className="relative block"
                                            >
                                                <img
                                                    alt="profil"
                                                    src={item.album.smallImage}
                                                    className="object-cover w-10 h-10 mx-auto rounded-full "
                                                />
                                            </a>
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                {item.artist.name}
                                            </div>
                                            <div className="text-sm text-gray-600 dark:text-gray-200">
                                                {item.track.name}
                                            </div>
                                        </div>
                                        <button
                                            className="flex justify-end w-24 text-right"
                                            onClick={() =>
                                                dispatch(
                                                    removeFromQueue(
                                                        item.track.id
                                                    )
                                                )
                                            }
                                        >
                                            <MdOutlineClear className="w-8 h-8" />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Popover.Panel>
        </Popover>

        // <Menu>
        //     <Menu.Button>
        //         <MiniActionButton
        //             tooltip="View playlist"
        //             onClick={() => console.log("MiniPlayer", "Favey")}
        //         >
        //             <MdQueueMusic />
        //         </MiniActionButton>
        //     </Menu.Button>
        //     <Menu.Items>
        //         <Menu.Item>Track One</Menu.Item>
        //         <Menu.Item>Track Two</Menu.Item>
        //         <Menu.Item>Track Three</Menu.Item>
        //     </Menu.Items>
        // </Menu>
    );
};

export default QueueControl;
