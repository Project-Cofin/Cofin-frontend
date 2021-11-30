import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from 'features/home/Images/virus.png';
import styled from "styled-components";

function Navi() {
    
return (
    <div className="Navigation">
        <Navbar bg="primary" variant="dark" id="centerboxs">
            
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="로그인" id="collasible-nav-dropdown" >
                    <Link href="/user">로그인</Link>
                    <Link href="/join">회원가입</Link>
                </NavDropdown>
                <Nav.Link href= "/api/QnA">QnA</Nav.Link>
                <NavDropdown title="지도" id="collasible-nav-dropdown">
                    <Link href= "/organ/local">국내지도</Link>
                    <Link href= "/organ/world">세계지도</Link>
                </NavDropdown>
                <Nav.Link href= "/organ/chat">챗봇</Nav.Link>
                
                <Nav.Link href="/main/corona">코로나</Nav.Link>
                
                <NavDropdown title="공지" id="collasible-nav-dropdown">
                    <Link href= "/medpts">진료소</Link>
                    <Link href= "/message">재난문자</Link>
                    <Link href= "/news">뉴스</Link>
                </NavDropdown>
            
            
            </Nav>
        </Navbar>
    </div>
    )
}

export default Navi;


const Link =  styled.a`
    display: block;
    color : #0d6efd;
    text-decoration:none;
    margin: 5px 0px 5px 10px;
    font-weight: bold;
`