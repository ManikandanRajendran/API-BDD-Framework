import {utils} from 'ya-done-api';
import { basicValidation } from '../helper/helper';

/*
=========================================================================================
This function is to fetch the user details based on the input
=========================================================================================
*/
async function fetchUserDetails(username)
{
    const path = `${this.GLOBAL.baseUrl}users?username=${username}`;
    const response = await utils.GET(null, path);
    await basicValidation(response, 200, 'OK')
    return response.data;
}


/*
=========================================================================================
This function is to fetch the user posts details based user id
=========================================================================================
*/
async function fetchPostsDetails(userId)
{
    const path = `${this.GLOBAL.baseUrl}posts?userId=${userId}`;
    const response = await utils.GET(null, path);
    await basicValidation(response, 200, 'OK')
    return response.data;
}


/*
=========================================================================================
This function is to fetch the comment details for each post id
=========================================================================================
*/
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