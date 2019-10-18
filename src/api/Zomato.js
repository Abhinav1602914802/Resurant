import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key' :'7204016a97286d692e0562376d8ed169'
    }
})