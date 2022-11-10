import axios from "axios";

class request {
    constructor(baseUrl, timeout) {
        this.instance = axios.create({
            baseUrl,
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
        return this.instance.get({ ...config, method: 'get' })
    }
    post(config) {
        return this.instance.post({ ...config, method: 'post' })
    }
}

export default new request("http://codercba.com:1888/airbnb/api/", 5000)