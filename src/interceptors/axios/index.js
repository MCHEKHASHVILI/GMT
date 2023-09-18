import axios from "axios"

axios.defaults.baseURL = "https://gmt.javal.ge/wp-json/custom/v1" // Get env also

// console.log(import.meta.env.API_BASE_URL)

// add language sector to each request
axios.interceptors.request.use(function(config){
    if(config.method != 'post'){
        config.url += '/' + localStorage.getItem('lang')
    }
    return config 
}, function(error) { return Promise.reject(error) })

export default axios