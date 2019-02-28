import api from './apiSetting'
import axios from 'axios'
import Url from 'Url'

const request = (opts , data) => {
    let requestData = {
        method: opts.method,
        baseURL: Url,
        url: opts.url,

    }
    axios()
}
