import React from 'react'
import {UserLogin,UserLost,UserJoin} from 'features/user'
import { LayOut } from 'features/common'


export default function LoginPage(){
    return(
    <LayOut>
        <div align="center" style={{ display: "inline-block" }}>
        
            <ul type='none'>
            <li></li>
            <br/><br/>
            <li><UserLogin/></li>
            <br/><br/>
            <li><a href="/user">회원 가입</a></li>
            <br/><br/></ul>
        
        </div>
    </LayOut>
    )
}