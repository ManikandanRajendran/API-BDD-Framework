
export default function () {
  return (
    this
      .then('GET the comments using post id',async function testThenSteps() {
          console.log('test then');
        })

      .then('validate whether the email address of each comment is valid',async function testThenSteps() {
        console.log('test then');
      })
  );
}
