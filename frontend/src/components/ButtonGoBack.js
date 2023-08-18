import React from "react";

const ButtonGoBack = ({ history }) => {
    const handleClick = () => {
        history.goBack();
    };

    return (
        <button onClick={handleClick} className="btn btn-info btn-lg mb-2">
            Ortga qaytish
        </button>
    );
};

export default ButtonGoBack;
