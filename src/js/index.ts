let elmById = document.getElementById('one')

let elmByClassName = document.getElementsByClassName('usundt')

let elmByTagName = document.getElementsByTagName('li')

console.log(elmByTagName)

for (let i = 0; i < elmByTagName.length; i++) { 
    console.log([i])
}
document.getElementById('three').setAttribute('class', 'sundt')

for (let i = 0; i < elmByTagName.length; i++) { 
    console.log([i])
}

document.getElementsByClassName('sundt')[2].setAttribute('class', 'usundt')

for (let i = 0; i < elmByTagName.length; i++) { 
    console.log([i])
}  

var x = document.getElementById('one').parentNode.nodeName
console.log(x)

var x = document.getElementById('one').lastChild.nodeName
console.log(x)

var node = document.createElement("LI")
var textNode = document.createTextNode("Kage")
node.appendChild(textNode)
document.getElementById('listeUsund').appendChild(node)



console.log('så kommer der ikke mere')