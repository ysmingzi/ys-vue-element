import axios from 'axios'

// 全局默认配置
axios.defaults.timeout = 15000
axios.defaults.baseURL = 'https://yangsen.com/api/'

// 请求拦截器
axios.interceptors.request.use((config) => {
    let token = localStorage.getItem('token')
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded' //设置跨域头部
    };
    if (token) {
      config.headers['token'] = token //后台接收的参数，后面我们将说明后台如何接收
    }
    return config
}, (err) => {
        return Promise.reject(err)
})


// 响应拦截器
axios.interceptors.response.use((response) => {
    return response
}, (err) => {
        return Promise.reject(err)
})

// post封装
export async function post(url,data={},headers={}) {
    try {
        let { res } = await axios({
        method: 'post',
        url,
            data,
        headers
    })
    return res
    } catch (err) {
        console.log(err)
        return { result: false, obj: null };
    }
}
// 用promise分装
// export function post(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, data)
//       .then(response => {
//         resolve(response.data);
//       }, err => {
//         reject(err);
//       })
//   })
// }



export async function get(url, params = {}, headers = {}) {
    try {
        let res = await axios({
            url,
            method: 'GET',
            headers,
            params
        })
        return res
    } catch (err) {
        console.log(err)
        return { result: false, obj: null };
    }
}

// promise封装get
// export function get(url, params = {}, headers = {}) {
//     return new Promise((reslove, reject) => {
//         axios({
//             method: 'GET',
//             url,
//             params,
//             headers
//         }).then(response => {
//             reslove(response)
//         }).catch(err){
//             reject(err)
//         }
//     })
// }
