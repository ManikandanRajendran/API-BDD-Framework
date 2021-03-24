import { expect } from 'chai';
import { fetchPostsDetails } from '../../../api-calls/GET-calls';
import { checkUserIds, getPostIds } from '../../../helper/helper';

export default function () {
  return (
    this
      .when('GET the posts by using user id', async function fetchPosts()
      {
        const response = await fetchPostsDetails.call(this, this.ctx.userId);
        await checkUserIds.call(this, response);
        let result = await getPostIds.call(this, response);
        expect(result).to.be.true;
      })
  );
}
