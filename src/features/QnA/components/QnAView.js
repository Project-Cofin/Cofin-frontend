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
        
            <table>  
                <div class="view_comment" id="focus_cmt">
                    <div id="comment_wrap" class="comment_wrap show" data-article-lv="10" data-sort-type data-comment-cnt="0">
                        <div class="comment_count">
                            <div class="f1 num_box">
                                전체 댓글
                                <em class="font_red">
                                    <span id="comment_total">2</span>
                                    개
                                </em>
                                <div class="selecet_box array_latest">
                                    <select name="selCommentSort">
                                        <option value="D">등록순</option>
                                        <option value="N">최신순</option>
                                    </select>
                                    <div class="select_area" onclick="showLayer(this, 'commentSortLayer);return false;">
                                        <span class="comment_sort_txt">등록순</span>
                                        <span class="blind">정렬 기준선택</span>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comment_box">
                    <ul class="cmt_list">
                        <li id="comment_li_965648" class="ub-content">
                            <div class="cmt_info clear" data-no="965648" data-rcnt="0" data-article-no="158651">
                                <div class="cmt_nickbox">
                                    <span class="gall_writer ub-writer" data-nick="봑봑이">
                                        <span class="nickname in" title="봑봑이">
                                            <em>봑봑이</em>
                                        </span>                                    
                                    </span>
                                </div>
                                <div class="clear cmt_txtbox btn_reply_write_all">
                                    <p class="usertxt ub-word">코로나 말고 확인은 할 수 있는데 그냥 간단한 수준임.</p>
                                </div>
                                <div class="fr clear">
                                    <span class="date_time">12.29 13:56:22</span>
                                <div class="cmt_mdf_del" data-type="cmt" re_no="965648" data-my="N" data-article-no="158651">
                                    <button type="button" class="btn_cmt_delete">삭제</button>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li id="comment_li_965649" class="ub-content">
                            <div class="cmt_info clear" data-no="965649" data-rcnt="0" data-article-no="158651">
                                <div class="cmt_nickbox">
                                    <span class="gall_writer ub-writer" data-nick="ㅇㅇ">
                                        <span class="nickname">
                                            <em title="ㅇㅇ">ㅇㅇ</em>
                                        </span>
                                    </span>
                                </div>
                                <div class="clear cmt_txtbox btn_reply_write_all">
                                    <p class="usertxt ub-word">엄청 아픈거 아니면 여기서 확인하고 심하면 병원가셈.</p>
                                </div>
                                <div class="fr clear">
                                    <span class="date_time">12.29 14:02:39</span>
                                    <div class="cmt_mdf_del" data-type="cmt" re_no="965649" data-my="N" data-article-no="158651">
                                        <button type="button" class="btn_cmt_delete">삭제</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="cmt_write_box clear">
                    <div class="f1">
                        <div class="user_info_input">
                            <label for="user_nick" class="blind">닉네임</label>
                            <input type="text" id="name_158651" name="name" placeholder="닉네임" maxlength="20"></input>                            
                        </div>
                        <div class="user_info_input">
                            <label for="user_pw" class="blind">비밀번호</label>
                            <input type="password" id="password_158651" name="password" placeholder="비밀번호" maxlength="20"></input>
                        </div>
                        <div class="cmt_txt_cont">
                            <div class="cmt_write" >
                                <label for="cmt_textarea" class="cmt_textarea_label" onclick="$('.cmt_textarea_label').hide();$(this).siblings('textarea').focus();">
                                    타인의 권리를 침해하거나 명예를 훼손하는 댓글은 운영원칙 및 관련 법률에 제재를 받을 수 있습니다.<br/>
                                    Shift+Enter 키를 동시에 누르면 줄바꿈이 됩니다.
                                </label>
                                <textarea id="memo" onfocus="$('.cmt_textarea_label').hide();" maxlength="400"
                                onkeyup="javascript:reply_length_count(158651);"></textarea>
                            </div>
                            <div class="cmt_cont_bottm clear">
                                <button type="button" class="btn_blue btn_svc small repley_add" data-no="158651">등록</button>
                            </div>
                        </div>
                    </div>                    
                </div>            
            </table>
        </div>
    </>);
};

export default QnAView