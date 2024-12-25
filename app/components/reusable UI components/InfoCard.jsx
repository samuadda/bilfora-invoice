import React from "react";

const InfoCard = () => {
    return (
        <div>
            <div className="flex flex-col bg-priBlu rounded-lg p-4">
                <div className="flex">
                    <span>icon</span>
                    <span>title</span>
                </div>
                <span>icon link</span>
            </div>
            <div>
                <span>number</span>
                <span>chart</span>
            </div>
        </div>
    );
};

export default InfoCard;
