import { fetchUserDetails } from '../../../api-calls/GET-calls';
import { expect } from 'chai';

export default function () {
  return (
    this

      .given('set up the test environment details for execution',async function(){
        this.GLOBAL.baseUrl = 'https://jsonplaceholder.typicode.com/';
      })

      .given('GET user details of the user $username',async function fetchUser(username) {
          const response = await fetchUserDetails.call(this,username);
          expect(response[0].username).to.be.eql(username);
          this.ctx.userId = response[0].id;
        })
      
  );
}
