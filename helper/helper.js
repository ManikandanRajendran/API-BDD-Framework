import { expect } from 'chai';
import * as validator from 'email-validator';


/*
=========================================================================================
This function is for basic validation before manipulate the response data
=========================================================================================
*/
async function basicValidation(response, code, name)
{
    expect(response.status).to.be.eql(code);
    expect(response.statusText).to.be.eql(name);
    expect(response.data).to.not.be.empty;
}


/*
=========================================================================================
This function is to get and store the post Ids
=========================================================================================
*/
async function getPostIds(response)
{
    let ids = [];
    response.forEach(value => {
        expect(value).to.have.property('id');
        expect(typeof value['id']).to.be.eql('number');
        ids.push(value['id']);
    });
    this.ctx.postIds = ids;
    return true;
}


/*
=========================================================================================
This function is to validate whether the posts are fetched for given user
=========================================================================================
*/
async function checkUserIds(response)
{
    (response).forEach(value => {
        expect(value['userId']).to.be.eql(this.ctx.userId);
    });
}


/*
=========================================================================================
This function is to validate the email in the comments response
=========================================================================================
*/
async function validateEmail(response, id)
{
    response.forEach(value =>{
        expect(value['postId']).to.be.eql(id);
        expect(value).to.have.property('email');
        expect(typeof value['email']).to.be.eql('string');
        expect(validator.validate(value['email'])).to.be.true;
    })
    return true
}




export {
    basicValidation,
    getPostIds,
    checkUserIds,
    validateEmail
} 