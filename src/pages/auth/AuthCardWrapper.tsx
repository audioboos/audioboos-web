import PropTypes from "prop-types";
import React from "react";

interface IAuthCardWrapperProps {
    children: React.ReactNode;
}
const AuthCardWrapper = ({ children, ...other }: IAuthCardWrapperProps) => {
    return <div>I am auth card wrapper</div>;
};

AuthCardWrapper.propTypes = {
    children: PropTypes.node,
};

export default AuthCardWrapper;
