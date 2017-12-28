import React from 'react';

const Option = (props) => (
    <div className="option-block">
    <div className="option-text">
        {props.count}: {props.optiontext}
        </div>
        <button
        className="button button--link"
            onClick={(e) => {
                props.handleDeleteoption(props.optiontext);
            }}

        >Remove</button>
    </div>
);
export default Option;