import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { EventMarkerContainer } from '..';
import { medPoints } from '../reducer/mapSlice';


export default function LocalMap() {
    const geoInfo = window.localStorage.getItem('sessionGeo').split(',')
    const [isOpen, setIsOpen] = useState(false)
    const [map, setMap] = useState()
    let points = useSelector(state => state.map.mapsState.map(
        x => {return {content: <div style={{ padding: "5px", color: "#000" }}>{x.name}</div>,
                      latlng: {lat: x.latitude, lng:x.longitude},
                      id: x.med_point != null ? x.med_point.split(']')[0].substr(1) : "None"
                    }}
    )) 
    const dispatch = useDispatch()
    useEffect(()=>{ dispatch(medPoints({'latitude': geoInfo[0], 'longitude': geoInfo[1]})) },[])
    return(<>
    <Map
          center={{
            lat: geoInfo[0],
            lng: geoInfo[1],
          }}
          style={{
            width: "1400px",
            height: "500px",
          }}
          level={6}
          onCreate={setMap}
        >
            <MapMarker
            position={{lat: geoInfo[0], lng:geoInfo[1]}}
            // title='현재 위치'
            image={{
                // 무료 마커이미지의 주소: https://www.flaticon.com/kr/
                src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693914.png?token=exp=1640744173~hmac=5f68502ee432a4e90af0d717a89536a8", 
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
                id={value.id}
              />
            ))}
        </Map>
    </>);
}