import React from 'react'
import { Button } from '@mui/material';

// const Goodbye=()=>{
//     return(
//         console.log("Good Bye"))
// }

export default function Unregister(){
    return(
        <div align="center" style={{ display: "inline-block" }}>
        <h1><b>회원 탈퇴</b></h1>
        <form>
            <label for="id">아이디 : </label>                
            <input type="text" id="id" /><br/><br/>
        
            <label for="pw">비밀번호 : </label>
            <input type="password" id="pw" /><br/><br/>

            {/* separate instance where input is wrong */}
            {/* <Wrong/> */}                        
            <br/>
            <Button variant="outlined"
            input type="submit" 
            title="탈퇴 확인" 
            value="확인" 
            onclick="Goodbye()">탈퇴 확인</Button>
            <br/><br/>
        </form>
    </div>
    )};