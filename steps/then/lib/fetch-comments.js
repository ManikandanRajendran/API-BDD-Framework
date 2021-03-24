import { expect } from 'chai';
import { fetchComments } from '../../../api-calls/GET-calls';
import { validateEmail } from '../../../helper/helper';


export default function () {
  return (
    this
      .then('GET the comments using post id and validate the email',async function fetchComment()
      {
          for(const id of this.ctx.postIds )
          {
            const response = await fetchComments.call(this, id);
            let result = await validateEmail.call(this, response, id);
            expect(result).to.be.true;
          }
      })      
  );
}
