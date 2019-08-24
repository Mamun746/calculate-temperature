import React from 'react';

const TempResult = (props) => {
    return (
        <div style={{padding:'10px',fontSize:'40px'}}>
            {props.celsius>=100?<h4>The Water is boiling....😢</h4>:<h4>The Water is boiling yet...😄</h4>}
        </div>
    );
};

export default TempResult;