import axios from "axios"
const SERVER = 'http://127.0.0.1:8000/api'
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege..'
}

const today = () => axios.get(`${SERVER}/crwaling/today`)
const week = () => axios.get(`${SERVER}/crwaling/week`)
const confirmed = () => axios.get(`${SERVER}/googledrive/confirmed`)

export default {
  today,
  week,
  confirmed
}