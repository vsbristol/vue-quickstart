import axios from 'axios';

export default function setup(router, store) {

    axios.interceptors.request.use(function(config) {
        const token = store.getters.token;
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, function(err) {
        return Promise.reject(err);
    });

    // Add a response interceptor
    axios.interceptors.response.use((response) => {
        return response;
    }, (error) => {

        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    console.log('Error: 400 Bad Request');
                    break;
                case 401:
                    console.log('Error: 401 Not Authorized')
                    this.router.push({ name: 'Login' });
                    break;
                case 403:
                    console.log('Error: 403 Forbidden');
                    break;
                case 404:
                    console.log('Error: 404 Not Found');
                    break;
                case 500:
                    console.log('Error: 500 Internal Server Error');
            }
        }
    });

}
