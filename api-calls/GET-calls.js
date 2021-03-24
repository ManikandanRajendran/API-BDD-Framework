import {utils} from 'ya-done-api';
import { basicValidation } from '../helper/helper';

async function fetchUserDetails(username)
{
    const path = `${this.GLOBAL.baseUrl}users?username=${username}`;
    const response = await utils.GET(null, path);
    await basicValidation(response, 200, 'OK')
    return response.data;
}

async function fetchPostsDetails(userId)
{
    const path = `${this.GLOBAL.baseUrl}posts?userId=${userId}`;
    const response = await utils.GET(null, path);
    await basicValidation(response, 200, 'OK')
    return response.data;
}

async function fetchComments(postId)
{
    const path = `${this.GLOBAL.baseUrl}comments?postId=${postId}`;
    const response = await utils.GET(null, path);
    await basicValidation(response, 200, 'OK')
    return response.data;
}

export {
    fetchUserDetails,
    fetchPostsDetails,
    fetchComments
} 