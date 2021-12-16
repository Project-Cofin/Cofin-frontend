import {Route, Routes} from 'react-router-dom'; 
import axios from 'axios';
//21-11-06 v6로 버전업이후 switch -> routes / component -> element= {<Home/>}/>

import { LocalMapPage, WorldMapPage } from 'features/map';
import { QnABoardPage, QnAWritePage } from 'features/QnA/index';

import MedptPage from "features/medpt/MedptPage";
import {MsgPage} from "features/message/index";
import NewsPage from "features/news/NewsPage";
import {LoginPage, JoinPage} from "features/user/index";
import {ChartPage} from 'features/corona/index';
import ChatbotPage from 'features/chatbot/pages/ChatbotPage';

//Attempted import error: 'Action' is not exported from 'history'. histroy 버전 5로 업.

function App() {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     host : '',
  //   }
  // }
  // componentDidMount() {
  //   this._getHost();
  // }
  // _getHost = async() => {
  //   const res = await axios.get('/api/host');
  //   this.setState({ host : res.data.host })
  // }
  // render() {
  //   return(
  //     <div className='App'>
  //       <h3> Welcome to <u> {this.state.host} </u> Blog! </h3>
  //     </div>
  //   )
  // }
  // function app() {
  return(<>

    <Routes>

          <Route path="/" element= { <ChartPage/> }/>
          <Route path='/home' element= { '/' }/>
          <Route path='/main/corona' element={<ChartPage/>}/>


          <Route path="/QnA" element={<QnABoardPage/>}/>
          <Route path="/write" element={<QnAWritePage/>}/>
          <Route path="/organ/chat" element={<ChatbotPage/>}/>
          <Route path="/organ/local" element={<LocalMapPage/>}/>
          <Route path='/organ/world' element= { <WorldMapPage/> }/>      

          <Route path='/medpts' element={<MedptPage/>}/>
          <Route path='/message' element={<MsgPage/>}/>
          <Route path='/news' element={<NewsPage/>}/>
          <Route path='/user' element={<LoginPage/>}/>
          <Route path='/join' element={<JoinPage/>}/>
      
    </Routes>  
</>)}







export default App;

