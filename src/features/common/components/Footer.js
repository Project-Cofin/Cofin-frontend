import React from "react";
import styled from "styled-components";
import 'features/common/style/LayOutStyle.css'

const Footer = () => {
    return(
        <>
        <footer>
            <Foot class="ft_top_wrap normal">
                <div class="ft_title font20"> <br/>
                &nbsp; Corona Finish 대표문의
                </div>
                <div class="ft_branch_cont font20 f-1">
                &nbsp; 02) 123-5678
                </div>
                <div class="ft_top font16 after">
                    <ul class="f-1 w50 after">
                        <li><span class="bold"> Cofin</span> <span class="ft_inline-block">｜</span>서울 강남구 강남대로94길 20, 삼오빌딩(5층 ~ 9층) <span class="ft_inline-block">｜</span> 사업자등록번호 : 000-000-0000</li>
                        <li>(주)코핀 대표이사: CONAN <span class="ft_inline-block">｜</span> 문의 : 080-4466-6974 <span class="ft_inline-block">｜</span> 팩스 : 32.5596.1154</li>
                        <li>통신판매업 신고번호 : -00000호 <span class="ft_inline-block">｜</span> 개인정보보호관리책임자 : C-1</li>
                    </ul>
                    <br/>
                </div>
                
            </Foot>
        </footer>
        </>
    )
}

export default Footer;

const Foot = styled.div `
    background-color: #22294D;
    color: #FFFFFF;
`