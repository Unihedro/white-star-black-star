var things = localStorage.things ? JSON.parse(localStorage.things) : [0,0,0]

var resKeys = ['red','green','blue']
var focus = null;
function render() {
  [red.innerText, green.innerText, blue.innerText] = things;
}

function gameTick(){
  focus&&things[resKeys.indexOf(focus)]++
  render()
}

setInterval(gameTick, 600)
setInterval(function saveGame(){ localStorage.things = JSON.stringify(things) }, 10000)

red.onmouseover = () => focus = 'red'
green.onmouseover = () => focus = 'green'
blue.onmouseover = () => focus = 'blue'