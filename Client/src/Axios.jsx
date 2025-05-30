import axios from 'axios';

const instence=axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})

export default instence;