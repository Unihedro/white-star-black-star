var things = localStorage.things ? JSON.parse(localStorage.things) : [0,0,0]

var resKeys = ['red','green','blue']
var focus = null;
var selectedPanel = 'red'
var changePanel = null
var changeProgress = 0
var tasksLeft = {red: [], green:[],blue:[]}
function render() {
  [red.innerText, green.innerText, blue.innerText] = things;
  panelSwitcher.innerText = changePanel ? ['','☆★','☆☆','★☆','★★'][changeProgress] : ""
  if (tasksInfo.innerText != "tasks:"+selectedPanel) {
    tasksInfo.innerText = "tasks:"+selectedPanel
    tasks.innerHTML = ""
  }
}

function gameTick(){
  focus && things[resKeys.indexOf(focus)]++
  if (changePanel && selectedPanel != changePanel) {
      if (++changeProgress == 5)
        [selectedPanel, changePanel] = [changePanel, null]
  } else changeProgress = 0
  render()
}

setInterval(gameTick, 600)
setInterval(function saveGame(){
  localStorage.things = JSON.stringify(things)
}, 10000)

red.onmouseover = () => changePanel = focus = 'red'
green.onmouseover = () => changePanel = focus = 'green'
blue.onmouseover = () => changePanel = focus = 'blue';
[red, green, blue].forEach(el => el.onmouseout = () => changePanel = null)