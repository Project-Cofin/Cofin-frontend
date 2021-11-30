import React from 'react';
import Header from 'features/common/components/Header'
import Footer from 'features/common/components/Footer'
import styled from "styled-components";
import 'features/map/style/Map.css'
import { LocalMap, LocalMapInfo, Options } from "features/map/index"


const MapLayOut = (props) => {
  return (
    <div class = "wrapper">
      <div class="Mapcontainer">
      <span className="header"><Header/></span>  

        <span class ="Options"><Options/></span><br/>
        <span class ="LocalMap"><LocalMap/></span>
        <span class ="LocalMapInfo"><LocalMapInfo/></span>

        <span class="Footer"><Footer/></span>
      </div>
    </div>
  );
}

export default MapLayOut;
