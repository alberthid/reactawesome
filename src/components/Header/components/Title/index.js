import React from 'react'

export const Title = (props) => {
    return (
        <div>
            <h2 className={props.bool ? 'red-text' : null}>{props.title}</h2>
        </div>
    );
}

export default Title;