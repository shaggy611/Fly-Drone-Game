import axios from "axios"

const ROOT_URL: string = 'https://api.github.com'

export async function apiCallGithub(userNameInput: string) {
    const response = await axios.get(`${ROOT_URL}/users/${userNameInput}`)

    return response
}