import axios from "axios"

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: {
        Accept: 'application/json'
    },
    params: {
        api_key: '1a75d305d7ed8e664aae37b760eebb22',
        language: 'es-ES'
    }
    
});

export default movieDB;