import React from 'react'
import UserJoin from 'features/user/2-join/UserJoin'
import { LayOut } from 'features/common/index'

export default function JoinPage(){
    return(
        <div>
            <LayOut>
            <text align="center"><h1><b>회원가입</b></h1></text>    
            {<UserJoin><b>회원가입</b></UserJoin>}
            {/* onclick/uncollapse module */}
            </LayOut>
        </div>
    )
}