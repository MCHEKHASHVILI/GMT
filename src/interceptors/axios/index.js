import axios from "axios"

let fallbackApiUrl = "https://gmt.javal.ge/wp-json/custom/v1"

axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL || fallbackApiUrl

axios.interceptors.request.use(function(config){
    if(config.method != 'post' && config.url !== 'settings'){
        config.url += '/' + localStorage.getItem('lang')
    }
    return config 
}, function(error) { return Promise.reject(error) })

export default axios