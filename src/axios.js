import Axios from 'axios';

const instance=Axios.create({
    baseURL:"https://messenger-backend59.herokuapp.com"
});
export default instance;
