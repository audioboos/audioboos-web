import React from "react";

const ServerOutput = () => {
    const [output, setOutput] = React.useState("");

    return <React.Fragment>{output && <div>{output}</div>}</React.Fragment>;
};

export default ServerOutput;
