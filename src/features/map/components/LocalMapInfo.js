import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LocalMapInfo = () => {
    const info = useSelector(state => state.map.mapState )
    return(<>
        {
            info.name == '' ? 
            <></> :
            <InfoUl>
                <li>
                    <InfoDiv>
                        <h1>{info.name}</h1>
                        <label>{info.meta}</label>
                    </InfoDiv>
                </li>
            </InfoUl>
        }

    </>)
}

export default LocalMapInfo

const InfoDiv = styled.div`

    width: 1300px;
    height: 300px;
    display: inline-block;
`

const InfoUl = styled.ul`

    list-style: none;
`