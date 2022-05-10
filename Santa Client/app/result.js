
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:3000/api/santa')
xhr.responseType = 'json'
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.response);
  }
}

document.getElementById('done').addEventListener('click',function(event){
  window.location.href = "http://localhost:4020/account.html"
})
