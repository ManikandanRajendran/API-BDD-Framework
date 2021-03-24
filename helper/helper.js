import { expect } from 'chai';
import * as validator from 'email-validator';

async function basicValidation(response, code, name)
{
    expect(response.status).to.be.eql(code);
    expect(response.statusText).to.be.eql(name);
    expect(response.data).to.not.be.empty;
}

async function getPostIds(response)
{
    let ids = [];
    response.forEach(value => {
        ids.push(value['id']);
    });
    this.ctx.postIds = ids;
    return true;
}

async function checkUserIds(response)
{
    (response).forEach(value => {
        expect(value['userId']).to.be.eql(this.ctx.userId);
    });
}

async function validateEmail(response, id)
{
    response.forEach(value =>{
        expect(value).to.have.property('email');
        expect(value['postId']).to.be.eql(id);
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