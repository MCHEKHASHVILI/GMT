import axios from "axios"
axios.defaults.baseURL = "https://gmt.javal.ge/wp-json/custom/v1" // Get env also

// add language sector to each request
axios.interceptors.request.use(function(config){
    config.url += '/en'
    return config 
}, function(error) { return Promise.reject(error) })

export default axios