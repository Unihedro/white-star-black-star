/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

var focus = null;

var things = [0,0,0]

var resKeys = ['red','green','blue']

function render() {
  [red.innerText, green.innerText, blue.innerText] = things;
}

function gameTick(){
  focus&&things[resKeys.indexOf(focus)]++
  render()
}

setInterval(gameTick, 100)

red.onmouseover = () => focus = 'red'
green.onmouseover = () => focus = 'green'
blue.onmouseover = () => focus = 'blue'