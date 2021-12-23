import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
import styled from "styled-components";
import 'features/common/style/NaviStyle.css'


function Login(){
    return (
        <div className="Login">
            <Navbar style={{marginLeft:"900px"}} bg="primary" variant="dark">
            <Nav className="mr-auto" >
                    <Link to="/login">                        
                        <Button class="btn btn-outline-secondary">로그인</Button>                        
                    </Link>
            </Nav>
            </Navbar>
        </div>
    )
}

export default Login;

const Button = styled.button`
    background-color:white;
`
