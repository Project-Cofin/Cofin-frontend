import React from 'react'
import { Link } from "react-router-dom";
import 'features/QnA/style/QnAView.css'


const QnAView = () => {
   
    return (
        <>
        <div class="ui middle aligned center aligned grid">
            <br/><h2 class="ui teal image header">
                QnA 게시판
            </h2>
            <table className="table" style={{width: "100%"}}>
                <colgroup>
                    <col width="10%" />
                    <col width="40%" />
                    <col width="10%" />
                    <col width="20%" />
                    <col width="10%" />
                </colgroup>
                <thead>
                    <tr>
                        <th>1</th>
                        <th>질문 거리 하나</th>
                        <th>띠리빠바</th>
                        <th>2019-07-17</th>
                        <th>5</th>
                    </tr>                    
                </thead>                             
            </table>
            <table>
                <tbody class="view_contents">
                    <div class="inner clear">
                        <div class="writing_view_box">
                            <pre></pre>
                            <div class="write_dic" style={{overflow:"hidden", width:"1000px", margin:"100px"}}>
                            코로나 말고 다른 증상의 바이러스도 체크해주나요?
                            <br/>열이나 기침은 없는데 코가 시큰 거리고 구역질이 자주 납니다.
                            </div>
                        </div>
                    </div>
                </tbody> 
            </table>
            <table>
                <div class="search-wrap">
                    <div class="col-4 input-group">                  
                        <Link to="/write" style={{marginLeft:"1000px"}}>                        
                            <button class="btn btn-outline-secondary">게시글 작성하기</button>                                                          
                        </Link>
                            <button class="btn btn-outline-secondary">수정</button>
                            <button class="btn btn-outline-secondary">삭제</button>                          
                    </div>    
                </div>
            </table> 
            <br/>
        </div>  
        
      
    </>);
};

export default QnAView