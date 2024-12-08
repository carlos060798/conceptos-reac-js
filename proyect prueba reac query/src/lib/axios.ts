import axios from 'axios';


const githubApi= axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        ///'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    }
});







export default githubApi;