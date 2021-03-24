
export default function () {
  return (
    this
      .when('GET the posts by using user id', async function testWhenSteps() {
          console.log('test When');
        }
      )
  );
}
