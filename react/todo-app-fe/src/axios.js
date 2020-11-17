import axios from 'axios';


const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_API_URL,
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