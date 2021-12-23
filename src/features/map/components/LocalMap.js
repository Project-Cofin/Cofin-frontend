import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React, {useState} from "react";
import { useSelector } from 'react-redux';
import { EventMarkerContainer } from '..';



export default function LocalMap() {
    const geoInfo = window.localStorage.getItem('sessionGeo').split(',')
    const [isOpen, setIsOpen] = useState(false)
    const [map, setMap] = useState()
    let points = useSelector(state => state.map.mapsState.map(
        x => {return {content: <div style={{ padding: "5px", color: "#000" }}>{x.name}</div>,
                      latlng: {lat: x.latitude, lng:x.longitude}}}
    )) 

    return(<>
    <Map
          center={{
            lat: geoInfo[0],
            lng: geoInfo[1],
          }}
          style={{
            width: "1000px",
            height: "600px",
          }}
          level={6}
          onCreate={setMap}
        >
            <MapMarker
            position={{lat: geoInfo[0], lng:geoInfo[1]}}
            // title='현재 위치'
            image={{
                // 무료 마커이미지의 주소: https://www.flaticon.com/kr/
                src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693914.png?token=exp=1637741898~hmac=fada3fe37d0197cf397c5d7713400e95", 
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
              onClick={(marker) => map.panTo(marker.getPosition())}
              onMouseOver={() => setIsOpen(true)}
              onMouseOut={() => setIsOpen(false)}
            >{isOpen && <div style={{ padding: "5px", color: "#000" }}>내 위치</div>}</MapMarker>
            {points.map((value) => (
              <EventMarkerContainer
                key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
                position={value.latlng}
                content={value.content}
              />
            ))}
        </Map>
    </>);
}
