import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import styled from "styled-components";


function Login(){
    return (
        <div className="Login">
            <Navbar style={{marginLeft:"650px"}} bg="primary" variant="dark">
            <Nav className="mr-auto" >
                <Li type='none'>
                    <label for="user-id"/>아이디 &nbsp;
                    <input type="text" id="user-id"/>&nbsp; 
                
                    <label for="pwd1"/> 비밀번호 &nbsp;
                    <input type="password" id="pwd"/>&nbsp;
                    
                    <input type="submit" value="로그인"/>&nbsp;
                </Li>
            </Nav>
            </Navbar>
        </div>
    )
}

export default Login;


const Li = styled.li`
    
    color: white;
    flex:1;
    flexDirection:row;
    alignItems: flex-end;
`