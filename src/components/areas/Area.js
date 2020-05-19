import React from "react";

const Area = props => {

    return (
        <>
            <div>
                <h3>{props.area.name}</h3>
            </div>
            <p>
                <ul>
                    {props.area.attractions.map(attraction =>
                        <li>{attraction.name}</li>)}
                </ul>
            </p>
        </>
    )
}

export default Area