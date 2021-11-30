import React from "react";
import {Navbar} from 'react-bootstrap';
import logo from 'features/home/Images/virus.png';
import styled from "styled-components";


const Icon = () => {
    return(
        <>

            <Navbar bg="primary" variant="dark">
                <a href="/">
                    &nbsp; <Img src={logo} width="100" height="100"/>
                </a>
            </Navbar>

        </>
    )
}

export default Icon;

const Img = styled.img`
    border-radius: 70%;
`