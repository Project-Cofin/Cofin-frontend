import React, { useEffect, useState, useRef } from 'react';
import Pagination from '../common/Pagination';
import { paginate } from '../utils/paginate';
import axios from 'axios';

import { Link } from "react-router-dom";
 
const QnAList = () => {
    const getQnA = () => { // 영화 정보를 반환하는 함수
      const QnA = [
        { title: "질문 1", writer: "띠리빠바", date: "2019-07-17", review: "5"},
        { title: "질문 2", writer: "아모르파뤼", date: "2019-07-17", review: "5"},
        { title: "신고 1", writer: "십센티", date: "2019-07-17", review: "5"},
        { title: "질문 3", writer: "뿌바라", date: "2019-07-17", review: "5"},
        { title: "답변 1", writer: "넥넥타르", date: "2019-07-17", review: "5"},
        { title: "질문 4", writer: "알로하오에", date: "2019-07-17", review: "5"},
        { title: "답변 2", writer: "채강소다파팅", date: "2019-07-17", review: "5"},
        { title: "신고 2", writer: "빠다꼬꼬낫", date: "2019-07-17", review: "5"},
        { title: "질문 5", writer: "유후유후", date: "2019-07-17", review: "5"},
        { title: "질문 6", writer: "명란젓에밥비벼머거", date: "2019-07-17", review: "5"}
      ]
      
      return QnA;
    }
  
    const [QnA, setQnA] = useState({
        data: getQnA(),
        pageSize: 5,
        currentPage: 1
    });

    const handlePageChange = (page) => {
        setQnA({ ...QnA, currentPage: page });
      }
    
    const { data, pageSize, currentPage } = QnA;

    const pagedQnA = paginate(data, currentPage, pageSize);
  
    const { length: count } = QnA.data;
    
    if(count === 0)
      return <p>정보가 없습니다.</p>

    return (
        <>
        <p>{count} 개의 질문이 있습니다.</p>
        <div class="ui middle aligned center aligned grid">
            <br/><h2 class="ui teal image header">
                QnA 게시판
            </h2>
            <table className="table">
                <thead>
                    <tr>
                        
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {pagedQnA.map((QnA) => (
                        <tr key={QnA.title}>
                            
                            <td>{QnA.title}</td>
                            <td>{QnA.writer}</td>
                            <td>{QnA.date}</td>
                            <td>{QnA.review}</td>
                        </tr>
                    ))}
                </tbody>

                
            
                <Pagination
                    pageSize={pageSize} 
                    currentPage={currentPage} 
                    itemsCount={count}
                    onPageChange={handlePageChange}
                />
                
                
                {/* <nav aria-label="Page navigation example">
                    <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav> */}
                
            </table><br/>
            <table>
                <div class="search-wrap">
                    <div class="col-4 input-group">
                        <input id="Search" type="text" class="form-control kw" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="btn_search">찾기</button>
                        </div>                    
                        <Link to="/write" style={{marginLeft:"650px"}}>                        
                            <button class="btn btn-outline-secondary">게시글 작성하기</button>                        
                        </Link>
                    </div>    
                </div>
            </table>       
        </div>
    </>);
};
 
export default QnAList;





//   return (
//     <>
//     <div class="ui middle aligned center aligned grid" align="center">
//         <h2 class="ui teal image header">
//             QnA 게시판
//         </h2>
//         <div class="ui large form">
//         <div class="ui stacked segment">
//         <QnATable headersName={["번호", '제목', '작성자', '작성일', '조회수']} >
//             <QnATableRow>
//                 <QnATableColumn>1</QnATableColumn>
//                 <QnATableColumn>첫번째 게시글</QnATableColumn>
//                 <QnATableColumn>ss지존준넥서스ss</QnATableColumn>
//                 <QnATableColumn>2020-01-01</QnATableColumn>
//                 <QnATableColumn>12</QnATableColumn>
//             </QnATableRow>
//             <QnATableRow>
//                 <QnATableColumn>2</QnATableColumn>
//                 <QnATableColumn>두번째 게시글</QnATableColumn>
//                 <QnATableColumn>채강$$준넥서스</QnATableColumn>
//                 <QnATableColumn>2020-04-16</QnATableColumn>
//                 <QnATableColumn>5</QnATableColumn>
//             </QnATableRow>
//             <QnATableRow>
//                 <QnATableColumn>3</QnATableColumn>
//                 <QnATableColumn>세번째 게시글</QnATableColumn>
//                 <QnATableColumn>허접♥등신♥</QnATableColumn>
//                 <QnATableColumn>2020-09-07</QnATableColumn>
//                 <QnATableColumn>66</QnATableColumn>
//             </QnATableRow>
//             <QnATableRow>
//                 <QnATableColumn>4</QnATableColumn>
//                 <QnATableColumn>네번째 게시글</QnATableColumn>
//                 <QnATableColumn>닉넴짓기귀찮다</QnATableColumn>
//                 <QnATableColumn>2021-07-29</QnATableColumn>
//                 <QnATableColumn>43</QnATableColumn>
//             </QnATableRow>
           
//             <a href="/write"><button class="ui fluid large teal submit button">게시글 작성하기</button></a>
//         </QnATable>
//         </div>
//         </div>
//     </div>
//     </>
//   )
