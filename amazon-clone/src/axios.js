import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-a17ca.cloudfunctions.net/api' // THE API (cloud function) URL
    //http://localhost:5001/clone-a17ca/us-central1/api
});

export default instance;