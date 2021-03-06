import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import 'features/common/style/NaviStyle.css'



function Navi() {

return (
    <div className="Navigation">
        <Navbar bg="primary" variant="dark" id="centerboxs">
            <Nav className="mr-auto">
            &emsp;<Link className="NavLink" to="/">Home</Link>
            &emsp;<Link className="NavLink" to="/user">회원가입</Link>

            &emsp;<Link className="NavLink" to= "/QnA">QnA</Link>
            &emsp;<NavDropdown title="지도" id="collasible-nav-dropdown">
                    <Link className="NavLink2" to= "/organ/local">국내지도</Link>
                    <Link className="NavLink2" to= "/organ/world">세계지도</Link>
                </NavDropdown>           
            
            &emsp;<NavDropdown title="공지" id="collasible-nav-dropdown">
                    <Link className="NavLink2"to= "/medpts">진료소</Link>
                    <Link className="NavLink2"to= "/message">재난문자</Link>
                    <Link className="NavLink2"to= "/news">뉴스</Link>
                </NavDropdown>
            &emsp;<Link className="NavLink" to= "/organ/chat">챗봇</Link>
            
            </Nav>
        </Navbar>
    </div>
    )
}

export default Navi;

