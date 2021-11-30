import React, {useEffect, useState} from 'react'
import 'features/QnA/style/QnAWrite.css'
import styled from "styled-components"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { LayOut } from "features/common";
import ReactHtmlParser from 'react-html-parser'
import Axios from 'axios';


function QnAWrite (){
    const [QnAContent, setQnAContent] = useState({
        title: '',
        content: ''
    })

    const [viewContent, setViewContent] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:8000/api/get').then((response)=>{
            setViewContent(response.data);
        })
    },[viewContent])

    const submitQnA = () => {
        Axios.post('http://localhost:8000/api/insert', {
            title: QnAContent.title,
            content: QnAContent.content
        }).then(()=> {
            alert('등록 완료');
        })
    };

    const getValue = e => {
        const { name, value } = e.target;
        setQnAContent({
            ...QnAContent,
            [name]: value
        })
    };
    return(
    <LayOut>
        {viewContent.map(element => 
                        <div className="title">
                            <h2>{element.title}</h2>
                            <div className="cont">
                                {ReactHtmlParser(element.content)}
                            </div>
                        </div>)}
        <div>
            <br/><Table border="1" width="1200" align="center">
                <tr>
                    <h2>
                        QnA 글쓰기
                    </h2>
                </tr>
                <tr>
                    <td width="50">
                        <select>                   
                            <option>질문</option>
                            <option>백신</option>
                            <option>코로나 확진</option>
                        </select>                        
                    </td>
                    
                </tr>
                <div className='form-wrapper'>
                    <input className="title-input" type='text' placeholder='제목'  onChange={getValue} name='title'/>
                    <CKEditor 
                    min-height= "500px"
                    editor={ClassicEditor}
                    data="<p></p>"
                    onReady={editor => {}}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setQnAContent({
                            ...QnAContent,
                            content: data
                        })
                        console.log(QnAContent);
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                    >
                                       
                    
                    </CKEditor>
                    <Button className="submit-button" type="submit"
                    onClick={submitQnA}>입력</Button>
                </div>         
            </Table><br/>
        </div>
    </LayOut>
)}

export default QnAWrite

const Table = styled.table`
    text-decoration: none;
`
const Button = styled.button`
    text-align: center;
`
