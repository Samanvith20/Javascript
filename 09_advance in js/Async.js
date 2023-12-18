async function getUsers() {
  try {
    const response = await fetch(`https://api.github.com/users/samanvith`);
    const data = await response.json();
    console.log(data);
    console.log(data.followers);
  } catch (error) {
    console.log("Error: ", error);
  }
}

getUsers(); 
