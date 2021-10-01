import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import React from "react";

const EventReceiver = () => {
    const [connection, setConnection] = React.useState<HubConnection>();
    // const { enqueueSnackbar } = useSnackbar();
    const [message, setMessage] = React.useState("");
    const [percentage, setPercentage] = React.useState(0);

    React.useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(`${process.env.REACT_APP_API_URL}/hubs/job`)
            .withAutomaticReconnect()
            .build();
        setConnection(newConnection);
    }, []);

    React.useEffect(() => {
        if (connection) {
            connection
                .start()
                .then((result) => {
                    connection.on("QueueJobMessage", (message) => {
                        setMessage(message.message);
                        setPercentage(message.percentage);
                    });
                })
                .catch((e) => console.log("Connection failed: ", e));
        }
    }, [connection]);
    return (
        <React.Fragment>
            {message && (
                <div>
                    <div className="block w-64 p-4 m-auto bg-white rounded-lg shadow">
                        <div>
                            <span className="inline-block px-2 py-1 text-xs font-light text-white bg-gray-400 rounded-full">
                                {message}
                            </span>
                        </div>
                        <div className="w-full h-4 mt-3 bg-gray-400 rounded-full">
                            <div
                                style={{ width: `${percentage}%` }}
                                className="h-full text-xs text-center text-white bg-pink-300 rounded-full"
                            >
                                {percentage}%
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default EventReceiver;
