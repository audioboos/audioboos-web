import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import React from "react";

const EventReceiver = () => {
    const [connection, setConnection] = React.useState<HubConnection>();
    // const { enqueueSnackbar } = useSnackbar();
    const [message, setMessage] = React.useState("");

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
                        console.log(
                            "EventReceiver",
                            "QueueJobMessage",
                            message
                        );
                        enqueueSnackbar(message.message);
                        setMessage(message.message);
                    });
                })
                .catch((e) => console.log("Connection failed: ", e));
        }
    }, [connection]);
    return <React.Fragment>{message}</React.Fragment>;
};

export default EventReceiver;
function enqueueSnackbar(message: any) {
    throw new Error("Function not implemented.");
}

