import React, { useEffect, useState, useRef } from 'react';
import styled from "styled-components"
import QnATable from "features/QnA/table/QnATable";
import QnATableRow from "features/QnA/table/QnATableRow";
import QnATableColumn from "features/QnA/table/QnATableColumn";
import axios from 'axios';
import Tr from './Tr';
import Modal from './Modal';
 
const QnAList = () => {
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState('');
    const [modalOn, setModalOn] = useState(false);
    const nextId = useRef(11);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(res => setInfo(res.data))
        .catch(err => console.log(err));
    }, []);

    const handleSave = (data) => {        
        if (data.id) {
            setInfo(
                info.map(row => data.id === row.id ? {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    website: data.website
                } : row))
        } else {
            setInfo(info => info.concat(
                {
                    id: nextId.current,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    website: data.website
                }
            ))
            nextId.current += 1;
        }
    }

    const handleRemove = (id) => {
        setInfo(info => info.filter(item => item.id !== id));
    }

    const handleEdit = (item) => {
        setModalOn(true);
        const selectedData = {
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone,
            website: item.website
        };
        console.log(selectedData);
        setSelected(selectedData);
    };

    const handleCancel = () => {
        setModalOn(false);
    }

    const handleEditSubmit = (item) => {
        console.log(item);
        handleSave(item);
        setModalOn(false);

        
    }
    return (
        <div class="ui middle aligned center aligned grid" align="center">
            <br/><h2 class="ui teal image header">
                QnA 게시판
            </h2>
            <table className="min-w-full table-auto text-gray-800">
                <thead className="justify-between">
                    <tr className="bg-gray-800">
                        <th className="text-gray-300 px-4 py-3">번호.</th>                        
                        <th className="text-gray-300 px-4 py-3">작성자.</th>
                        <th className="text-gray-300 px-4 py-3">제목</th>
                        <th className="text-gray-300 px-4 py-3">작성일.</th>
                        <th className="text-gray-300 px-4 py-3">조회수.</th>
                        <th className="text-gray-300 px-4 py-3">Edit.</th>
                        <th className="text-gray-300 px-4 py-3">Delete.</th>
                    </tr>
                </thead>
                <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit}/><br/>
                <a href="/write"><button class="ui fluid large teal submit button">게시글 작성하기</button></a>
            </table><br/>
            
            {modalOn && <Modal selectedData={selected} handleCancel={handleCancel}
            handleEditSubmit={handleEditSubmit}/>}
        </div>
    );
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
