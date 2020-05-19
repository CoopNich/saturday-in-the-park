import React, { useState, useEffect } from "react";
import Area from "./Area";
import AreaManager from "../../modules/AreaManager";

const AreaList = (props) => {
    const [areas, setAreas] = useState([]);

    const getAreas = () => {
        return AreaManager.getAll().then(areasArray => {
            setAreas(areasArray)
        });
    };

    useEffect(() => {
        getAreas();
    }, []);

    return (
        <>
            <div>
                {areas.map(area =>
                    <Area
                        key={area.id}
                        area={area}
                        {...props}
                    />
                )}
            </div>
        </>

    )

}

export default AreaList