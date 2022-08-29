import axios from "axios"

// #getLists
export async function getList () {
    return (await axios.get('http://jsonplaceholder.typicode.com/posts')).data
}

// #getUsers
export async function getUsers () {
    return (await axios.get('http://jsonplaceholder.typicode.com/users')).data
}
