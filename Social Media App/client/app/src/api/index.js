import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5000"})

API.interceptors.request.use((req)=>{
    if (localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchPosts = async () => await API.get('/posts')
export const createPost = async (newPost) => await API.post('/posts', newPost)

export const updatePost = async(id, updatePost) => await API.patch(`posts/${id}`, updatePost)
export const deletePost = async(id) => await API.delete(`posts/${id}`)
export const likePost = async(id) => await API.patch(`posts/${id}/likePost`)

export const signIn = async(formData) => await API.post('/user/signIn', formData)

export const signUp = async(formData)=> await API.post("/user/signUp",formData)