// GO!
var KEYCODES = {
  f: 70,
  enter: 13,
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

var menuState = {
	visible: true
}

var menuNode = document.querySelector('.nav-menu')
var buttonNode = document.querySelector('button')

buttonNode.addEventListener('click', function() {
	if (menuState.visible) {
		menuNode.style.opacity = 0
		menuState.visible = false
		buttonNode.innerHTML = 'Show Nav'
	}
	else {
		menuNode.style.opacity = 1
		menuState.visible = true
		buttonNode.innerHTML = 'Hide Nav'
	}
})


var inputNode1 = document.querySelector('#input1')
var listNode1 = document.querySelector('#list1')

inputNode1.addEventListener('keydown', function(eventObj){
  if (eventObj.target.value !== '') {
  	if (eventObj.keyCode === KEYCODES.enter) {
  	var liNode1 = document.createElement('li')
    liNode1.innerHTML += eventObj.target.value
    listNode1.appendChild(liNode1)
    eventObj.target.value = ''
    }
  }
})



var inputNode2 = document.querySelector('#input2')
var listNode2 = document.querySelector('#list2')

inputNode2.addEventListener('keydown', function(eventObj){
  if (eventObj.target.value !== '') {
  	if (eventObj.keyCode === KEYCODES.enter) {
  	var liNode2 = document.createElement('li')
    liNode2.innerHTML += eventObj.target.value
    listNode2.appendChild(liNode2)
    eventObj.target.value = ''
    }
  }
})

















