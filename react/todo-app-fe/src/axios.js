import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
});

axiosInstance.interceptors.request.use(function (config) {
	const token = 'Bearer ' + localStorage.getItem('access_token');
	if(localStorage.getItem('access_token')){
		config.headers.Authorization =  token;
	}

    return config;
});

export default axiosInstance;