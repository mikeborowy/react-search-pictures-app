import axios from 'axios';

export const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d7b850771fb3e9ae4ba2661f49a9bc9689dcdba87fdbc021f659d2dac74b5103'
    }
})