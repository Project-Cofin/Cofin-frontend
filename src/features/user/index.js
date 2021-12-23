import axios from 'axios';

const server = 'http://127.0.0.1:8000'
const header = {'Content-Type':'application/json'}
export const connect =()=>axios.get(`${server}/api/connect`)
export const userJoin=body=>axios.post(`${server}/api/user/join`) //new_user?
export const userDetail=id=>axios.get(`${server}/api/user/${id}`) //finduser?
export const userRetriever=(key,value)=>axios.get(`${server}/api/user/${key}/${value}`)  //finduser???
export const userModify=body=>axios.put(`${server}/api/user`,{header,body})
export const userRemove=id=>axios.delete(`${server}/api/user/${id}`)
//pages 
export {default as LoginPage} from 'features/user/pages/LoginPage'
export {default as UserPage} from 'features/user/pages/UserPage'
//components
export {default as UserJoin} from 'features/user/components/UserJoin'
export {default as UserLogin} from 'features/user/components/UserLogin'
export {default as UserLost} from 'features/user/components/UserLost'
// export {default as Logout} from 'features/user/components/Logout'
export {default as UserInfo} from 'features/user/components/UserInfo'
export {default as Unregister} from 'features/user/components/Unregister'

