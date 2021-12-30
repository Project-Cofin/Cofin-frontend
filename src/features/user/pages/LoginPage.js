import React from 'react'
import {UserLogin,UserLost,UserJoin} from 'features/user'
import { Button } from '@mui/material'
import { LayOut } from 'features/common'
import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
    <LayOut>
        <div align="center" style={{ display: "inline-block" }}>
        
            <ul type='none'>
            <li></li>
            <br/><br/>
            <li><UserLogin/></li>
            <br/><br/>
            <Link to="/user" style={{ display: "inline-block", marginLeft:"200px", width: "800px" }}>
                <Button
                fullWidth                
                size="large"          
                variant="contained"
                >          
                회원가입          
                </Button>
            </Link>
            <br/><br/></ul>
        
        </div>
    </LayOut>
    )
}