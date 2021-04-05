import axios from 'axios';
const KEY = 'AIzaSyDy9tOcOmzkCQcwKZ5lkgARK4btJUHqnE4';

export default axios.create({
    baseURL: 'https://www.google.apis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
