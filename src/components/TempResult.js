import React from 'react';

const TempResult = (props) => {
    return (
        <div style={{padding:'10px',fontSize:'40px'}}>
            {props.celsius>=100?<h5 style={{fontSize:'40px'}}>>The Water is boiling....</h5>:<h5>The water is not boiling yet</h5>}
        </div>
    );
};

export default TempResult;