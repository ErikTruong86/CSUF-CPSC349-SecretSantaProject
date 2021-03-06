
// Getting the information
document.getElementById('submit').addEventListener('click', function(event){
  console.log("Submit button was clicked....");

  //Retrieve user inputs
  const user = document.getElementById('user').value
  const password = document.getElementById('pwd').value
  const stObj = new Object(user,pwd)
  console.log(stObj);

  //Prepare and send REST API request
  console.log('Sending Rest request to save object....');
  const xhr = new XMLHttpRequest()
  xhr.open('POST', 'http://localhost:3000/api/secretsanta')
  //JSON Encoding
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.responseType = 'json'
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      console.log(this.response);
    }
  }
  const jsonStr = JSON.stringify(stObj)
  xhr.send(jsonStr)

  window.location.href = "http://localhost:4020/account.html"
})
