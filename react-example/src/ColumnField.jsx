import React from "react";

const ColumnField = ({ label, value }) => {
    return (
        <div className="field">
            <div className="field-content">
                <div className="field-name">{label}</div>
                <div className="field-value">{value}</div>
            </div>
        </div>
    );
};

export default ColumnField;
