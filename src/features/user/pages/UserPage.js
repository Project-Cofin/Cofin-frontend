import React from 'react'
import {UserInfo} from 'features/user'

import { LayOut } from 'features/common'

export default function UserPage(){
    return(
    <LayOut>
        <div align="center" style={{ display: "inline-block"}}>
            
            <ul type='none'>
            <li><UserInfo/></li>
            <br/><br/>
            
            <br/><br/>
            {/* <li><Button variant="outlined" onClick="join">회원 가입</Button></li> */}
            </ul>
            
        </div>
    </LayOut>
    )
};