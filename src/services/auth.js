import httpService from "./httpService"


export const loginWithPhoneService = (phone, password) => {
    return httpService('/auth/login', 'post', {
        phone,
        password,
    })
}

export const loginWithEmailService = (email, password) => {
    return httpService('/auth/login', 'post', {
        email,
        password,
    })
}

export const userService = () => {
    return httpService('/auth/user', 'get')
}