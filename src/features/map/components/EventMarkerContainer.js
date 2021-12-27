import React, { useState } from "react"
import { MapMarker, useMap } from "react-kakao-maps-sdk"
import { useDispatch } from "react-redux"
import { medPoint } from "../reducer/mapSlice"

export default function EventMarkerContainer({ position, content, id }) {
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false)
    const dispatch = useDispatch()

    return (
      <MapMarker
        position={position}
        image={{
          src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693879.png?token=exp=1640587315~hmac=9161899b9351e0422b3e88a9cd838671", 
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
          if (id != "None") dispatch(medPoint(id))
          map.panTo(marker.getPosition())}}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    )
  }