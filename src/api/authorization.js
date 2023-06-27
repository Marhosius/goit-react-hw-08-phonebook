import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
})

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const dellToken = () => {
    delete instance.defaults.headers.common.Authorization
}

export const signUp = async (body) => {
    console.log('first', body)
    return await instance.post('/users/signup', body)
}

export const logIn = async (body) => {
    const { data } = await instance.post('/users/login', body)
    if ('token' in data) setToken(data.token)
    return data
}

export const getProfile = async () => {
    const { data } = await instance.get('/users/current')
    return data
}

