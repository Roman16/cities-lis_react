import axios from "axios";


const baseApiUrl = 'https://lenovo-shop.applemint.eu/api/';
const token = 'YXBwbGVtaW50OmFwcGxlbWludA==';

const http = (method, url, data) => {
    return new Promise((resolve, reject) => {
        return axios({
            method: method,
            url: baseApiUrl + url,
            data: data,
            headers: {
                'authorization': `Basic ${token}`
            }
        })
            .then((result) => {
                resolve(result.data);
            })
            .catch(error => {
                console.log(error);
                reject(error.message);
            });
    })

};

export default http;