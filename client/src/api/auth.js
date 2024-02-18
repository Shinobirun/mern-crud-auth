import axios from "axios"

const API = 'https://localhost:3000'

export const registerRequest = user => axios.post(`${API}/register`,user)