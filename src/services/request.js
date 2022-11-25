import axios from "axios";

class myRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            // baseURL not baseUrl
            baseURL,
            timeout
        })
        this.instance.interceptors.response.use(res => {
            return res.data
        }, error => {
            return error
        })
    }
    request(config) {
        return this.instance.request(config)
    }
    get(config) {
        return this.request({ ...config, method: 'get' })
    }
    post(config) {
        return this.request({ ...config, method: 'post' })
    }
}

export default new myRequest("http://codercba.com:1888/airbnb/api", 10000)