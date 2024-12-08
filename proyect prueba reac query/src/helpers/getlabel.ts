import githubApi from '../lib/axios';


export const getLabels = async ()=> {
    const { data } = await githubApi.get(`/labels/`);
    return data;
}