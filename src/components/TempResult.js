import React from 'react';

const TempResult = (props) => {
    return (
        <div>
            {props.celsius>=100?<h5>The Water is boiling....</h5>:<h5>The water is not boiling yet</h5>}
        </div>
    );
};

export default TempResult;