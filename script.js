//delete localStorage.things;
var things = localStorage.things ? JSON.parse(localStorage.things) : [0,0,0,[],[],[],[],[],[]]
// res, owned, tasks
const resKeys = ['red','green','blue']
const amountOfThings = resKeys.length
var focus = null;
var selectedPanel = 'red'
var changePanel = null
var changeProgress = 0
const tasks = {red: [
  {name:'■',cost:[8,0,0]},
  {name:'□',cost:[5,5,5]},
  {name:'▤',cost:[24,0,0],moreCost:[{type:'□',amount:1,any:1}]},
  {name:'▥',cost:[16,16,16],moreCost:[{type:'□',amount:1,any:1}]}, // storage + 
  {name:'▦',cost:[8,16,16],moreCost:[{type:'▤',amount:1},{type:'▥',amount:1}]},
  {name:'▣',cost:[],moreCost:[{type:'□',amount:1},{type:'□',amount:5,any:1}]}
], green:[],blue:[]}
var tasksLeft = {red:[],green:[],blue:[]}
function render() {
  [red.innerText, green.innerText, blue.innerText] = things;
  panelSwitcher.innerText = changePanel ? ['','☆★','☆☆','★☆','★★'][changeProgress] :
                              things[amountOfThings + resKeys.indexOf(selectedPanel)]
  if (tasksInfo.innerText != "tasks:"+selectedPanel) {
    tasksInfo.innerText = "tasks:"+selectedPanel
    tasks.innerHTML = ""
  }
}
function getOwnedThings(thing){return things[amountOfThings + resKeys.indexOf(selectedPanel)]}
function getResourceCap(thing){
  var initial = 50
  var owned = getOwnedThings(thing);
  return initial;
}

function gameTick(){
  if (focus) {
    const thing = resKeys.indexOf(focus);
    things[thing] < getResourceCap(thing) && things[thing]++
  }
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
[red, green, blue].forEach((el, i) => el.onmouseout = () => {
  changePanel = null
  if ()
})