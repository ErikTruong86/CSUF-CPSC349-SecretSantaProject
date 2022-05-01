
// get the form information
const form = document.getElementById('login-form')
form.addEventListener('submit',registerUser)

//Grabbing the information from the Registration form on the homepage
async function registerUser(event){
  //prevents the default behavior of form which is refreshing the page.
  event.preventDefault()
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  // Send data as JSON
  const result = await fetch('/api/secretsanta',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    }
    body: JSON.stringify({
      username,
      password
    })
  }).then((res)=>res.json)
  console.log(result);
}

function submission(){
  document.getElementById('login-form').submit()
  alert('Form has been submitted');
}
