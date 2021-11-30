
import React from "react";

import { LocalMap, LocalMapInfo, Options, MapLayOut } from "..";

const LocalMapPage = () => {

    return (<>
    
        <div>
            <MapLayOut>
                <Options/>
                <LocalMap/>
                <LocalMapInfo/>
            </MapLayOut>
        </div>
    
    </>);
};

export default LocalMapPage;