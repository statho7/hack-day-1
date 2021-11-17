import axios from 'axios'

const handler = axios.create({
  baseURL: process.env.baseUrl,
})

export const apiGet = (url) => handler.get(url)
