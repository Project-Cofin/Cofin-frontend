import axios from "axios"
const SERVER = 'http://127.0.0.1:8000/api/QnA'
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege..'
}

const write = x => axios.post(`${SERVER}/wirte`, JSON.stringify(x), {headers})


export default {
  write
}