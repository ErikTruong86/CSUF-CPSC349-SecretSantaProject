import {shuffle} from "./drawnames.js"

document.getElementById('draw').addEventListener('click',function(event){
  const ename = document.getElementById('eventName').value
  const m1 = document.getElementById('mem1').value
  const m2 = document.getElementById('mem2').value
  const m3 = document.getElementById('mem3').value
  const m4 = document.getElementById('mem4').value
  const m5 = document.getElementById('mem5').value
  const m6 = document.getElementById('mem6').value
  const m7 = document.getElementById('mem7').value
  const m8 = document.getElementById('mem8').value
  const m9 = document.getElementById('mem9').value
  const m10 = document.getElementById('mem10').value

  //get names into an array
  const names = [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10]
  //shuffle the names
  const draw = shuffle(names);
  // map out the names so each person gets a gift and gives it
  const matches = draw.map((name,index) => {
    return {
      santa: name,
      receiver: draw[index+1] || draw[0]
    }
  });
  const stObj = new Object(ename,matches);

  console.log("Sending Rest Request to save object");
  const xhr = new XMLHttpRequest()
  xhr.open('POST','http://localhost:3000/api/secretsanta')
  //JSOn Encoding
  xhr.setRequestHeader('Content-Type','application/json')
  xhr.responseType = 'json'
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      console.log(this.response);
    }
  }
  const jsonStr = JSON.stringify(stObj)
  window.location.href = 'http://localhost:4020/result.html'

})
