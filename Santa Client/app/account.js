
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:3000/api/santa')
xhr.responseType = 'json'
xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.statu == 200) {
    console.log(this.response);
    const body = document.getElementsByTagName('body')[0]
    for (const s of this.response) {
      body.appendChild(document.createElement('br'))
      let c = document.createElement('a')
      c.href = '#'
      c.text = s.ename
      body.appendChild(c)
    }
  }
}

document.getElementById('button').addEventListener('click',function(click){
  window.location.href = "http://localhost:4020/event.html"
})
