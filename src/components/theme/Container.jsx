
import React from 'react';


const Container = (props) => {
    let className = "container " + props.className;
    return (
        <div className={className}>
            <div className={"row"}>
                {props.children}
            </div>
        </div>
    );
}

export default Container;