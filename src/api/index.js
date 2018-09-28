import axios from 'axios';
import {BASE_URL} from '../constants'

const API = axios.create({
baseURL: BASE_URL,
timeout: 30000
});

API.interceptors.request.use(function (config) {

var token = localStorage.getItem('access_token');
if(token){
config.headers['Authorization'] = 'Bearer '+token;
}
return config;
}, function (error) {
return Promise.reject(error);
});

// Add a response interceptor
API.interceptors.response.use(function (response) {
const data ={
success : true,
data: response.data,
message: 'Petición exitosa!',
code: response.status
}


return data;
}, function (error) {
const data = {
success : false,
data: error.response ? error.response.data : null,
message: 'Petición fallida!',
code: error.response ? error.response.status : -1
}
var status = error.response ? error.response.status : -1;
switch (status) {
case 500:
data.success = false;
data.message = 'Disculpe, ha ocurrido un error interno.'
break;
case -1:
data.success = false;
data.message = 'Por favor revise su conexión a internet.'
break;
case 400:
data.success = false;
data.message = 'Disculpe, ha enviado una petición inválida.'
break;
case 401:
data.success = false;
data.message = 'Disculpe, no está autorizado para realizar esta acción.'
break;
default:
break;
}
return data;
});

export default API;
