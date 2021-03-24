
export default function () {
  return (
    this
      .given('GET user details of the user $username',async function fetchUser(username) {
          console.log(username);
        })
      
  );
}
