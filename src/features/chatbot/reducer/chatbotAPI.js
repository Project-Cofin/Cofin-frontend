import axios from "axios"
const SERVER = 'http://127.0.0.1:8002/api/chatbot'
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege..'
}

const chatAnswer = x => axios.post(`${SERVER}/chat-answer`, JSON.stringify(x), {headers})
const statusAnswer = x => axios.post(`${SERVER}/find-by-detail`, JSON.stringify(x), {headers})
const getStatus = () => axios.get(`${SERVER}/find-all`)

export default {
  chatAnswer,
  statusAnswer,
  getStatus
}