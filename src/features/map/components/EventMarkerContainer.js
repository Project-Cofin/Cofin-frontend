import React, { useState } from "react"
import { MapMarker, useMap } from "react-kakao-maps-sdk"

export default function EventMarkerContainer({ position, content }) {
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false)
  
    return (
      <MapMarker
        position={position}
        image={{
          src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693879.png?token=exp=1637741898~hmac=59a8cfd836c546dab8091bb296ba21aa", 
          size: {
            width: 45,
            height: 45,
          }, 
          options: {
            offset: {
              x: 25,
              y: 45,
            }, 
          },
        }}
        onClick={(marker) => {
          console.log(content)
          map.panTo(marker.getPosition())}}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    )
  }