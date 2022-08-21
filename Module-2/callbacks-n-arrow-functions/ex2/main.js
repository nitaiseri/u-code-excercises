const returnTime = function (time) {
    alert('The current time is: ' + time)
  }
  

function getTime(func) {
    func(Date())
}

getTime(returnTime)