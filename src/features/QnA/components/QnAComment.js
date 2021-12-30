import React from 'react'
import { Link } from "react-router-dom";
import 'features/QnA/style/QnAView.css'

const QnAComment = () => {
    return (
    <>
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
                        
                    </div>
                </div>
            </div>
        </div>
    
        <div class="comment_box">
            <ul class="cmt_list">
                <li id="comment_li" class="ub-content">
                    <div class="cmt_info clear" data-rcnt="0">
                        
                    </div>
                </li>
            </ul>
        </div>
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
</>);
};

export default QnAComment;