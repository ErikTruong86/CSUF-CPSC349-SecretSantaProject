
//trying to getting the data of 1 object which shows the matched pair of names
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:3000/api/santa')
xhr.responseType = 'json'
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.response);
  }
}

//goes back to the account page
document.getElementById('done').addEventListener('click',function(event){
  window.location.href = "http://localhost:4020/account.html"
})
