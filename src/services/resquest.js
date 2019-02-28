import axios from 'axios'
import apiUrl from './apiUrl'

const request = async (opts , data) => {
    let requestData = {
        method: opts.method,
        baseURL: apiUrl,
        url: opts.url,
        timeout: 5000,
        params: data,
        data: data,
        headers: opts.method == 'get' ? {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        } : {
                'X-Requsted-With': 'XMLHttpRequest',
                'Accept': 'applicattion/json',
                'Content-Type': 'application/json'
        }
    }

    if(opts.method == 'get') delete requestData.data
    if(opts.method == 'post') delete requestData.params

    let res = await axios(requestData)
    // return new Promise((resolve, rejects) => {
    //     resolve(res)
    // })
    return res
}

export default request