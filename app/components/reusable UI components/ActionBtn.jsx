import React from 'react'

const ActionBtn = ({text ,icon}) => {
    return (
        <button className="actionBtn flex items-center justify-center">
            {icon} 
            {text}{" "}
        </button>
    );
}

export default ActionBtn