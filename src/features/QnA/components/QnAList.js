import React, { useEffect, useState, useRef } from 'react';
import Pagination from '../common/Pagination';
import { paginate } from '../utils/paginate';
import axios from 'axios';
import 'features/QnA/style/QnAList.css'

import { Link } from "react-router-dom";
 
const QnAList = () => {
    const getQnA = () => { // 영화 정보를 반환하는 함수
      const QnA = [
        { no: "1", title: <Link className="QnALink" to="/QnA/view">질문 거리 하나</Link>, writer: "띠리빠바", date: "2019-07-17", review: "5"},
        { no: "2", title: "질문 2", writer: "아모르파뤼", date: "2019-07-17", review: "5"},
        { no: "3", title: "신고 1", writer: "십센티", date: "2019-07-17", review: "5"},
        { no: "4", title: "질문 3", writer: "뿌바라", date: "2019-07-17", review: "5"},
        { no: "5", title: "답변 1", writer: "넥넥타르", date: "2019-07-17", review: "5"},
        { no: "6", title: "질문 4", writer: "알로하오에", date: "2019-07-17", review: "5"},
        { no: "7", title: "답변 2", writer: "채강소다파팅", date: "2019-07-17", review: "5"},
        { no: "8", title: "신고 2", writer: "빠다꼬꼬낫", date: "2019-07-17", review: "5"},
        { no: "9", title: "질문 5", writer: "유후유후", date: "2019-07-17", review: "5"},
        { no: "10", title: "질문 6", writer: "명란젓에밥비벼머거", date: "2019-07-17", review: "5"},
        { no: "11", title: "답변 1", writer: "넥넥타르", date: "2019-07-17", review: "5"},
        { no: "12", title: "질문 4", writer: "알로하오에", date: "2019-07-17", review: "5"},
        { no: "13", title: "답변 2", writer: "채강소다파팅", date: "2019-07-17", review: "5"},
        { no: "14", title: "신고 2", writer: "빠다꼬꼬낫", date: "2019-07-17", review: "5"},
        { no: "15", title: "질문 5", writer: "유후유후", date: "2019-07-17", review: "5"}
      ]
      
      return QnA;
    }
  
    const [QnA, setQnA] = useState({
        data: getQnA(),
        pageSize: 10,
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
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {pagedQnA.map((QnA) => (
                        <tr key={QnA.title}>
                            <td>{QnA.no}</td>
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
                    onPageChange={handlePageChange}/>                
            </table><br/>
            <table>
                <div class="search-wrap">
                    <div class="col-4 input-group">
                        <input id="Search" type="text" class="form-control kw" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="btn_search">찾기</button>
                        </div>                    
                        <Link to="/write" style={{marginLeft:"900px"}}>                        
                            <button class="btn btn-outline-secondary">게시글 작성하기</button>                        
                        </Link>
                    </div>    
                </div>
            </table>       
        </div>
    </>);
};
 
export default QnAList;