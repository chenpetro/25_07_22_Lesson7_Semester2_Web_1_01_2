// const box = document.querySelector('.box');

// console.log(box); // Logs the box element to confirm it's selected.


// function clickBox() {
//     console.log('You clicked at the red box');
// }
    
// const box = document.querySelector('.box')

// console.log(box);


// box.onclick = function () {
//  console.log('You clicked at the red box');
//  box.style.width = '300px'
// }

// box.addEventListener('click',() =>{
//     console.log('You clicked at the red box');
    
// })

// box.addEventListener('click',function() {
//     console.log('You clicked at the red box');
    
// })

// box.addEventListener('mouseover', function () {
//     console.log('You hovered over the red box');
    
// })

// box.addEventListener('mouseout', function () {
//     console.log('You hovered over the red box');
    
// })

// box.addEventListener('dblclick', function () {
//     console.log('You double-clicked the red box');
    
// })

// box.addEventListener('dblclick', function () {
//     console.log('You double-clicked the red box');
// });

// box.addEventListener('conexmenu', function () {
//     console.log('You double-clicked the red box');
// });

const box = document.querySelector('.box');
// let count = 0
// box.addEventListener('click', function (event) {
    // console.log(event);
    // console.log(event.type);
    // console.log(event.currentTarget);
// count = ++count
//     console.log(event.target);
    // box.innerHTML += '<h1>text</h1>'
//     box.innerHTML = count
// });

// box.addEventListener('mouseover', function (event) {
// box.classList.add("box-black")
// });
// box.addEventListener('mouseout', function (event) {
//     box.classList.remove("box-black")
//     });

// box.addEventListener('mouseover', function (event) {
//     box.classList.toggle("box-black")
//     if (box.classList.contains('box-black')) {
//         console.log("Your block is now black");
//     }
//     else {
//         console.log("Your block is now red");

//     }
//         });

// let box = document.createElement('div')
// box.className = "box-yellow"
// document.body.append(box)
// document.body.prepend(box)

// h1.before(box)

// console.log(box);

addBlock = document.querySelector('.add-block')
boxYellow = document.querySelector('#box-yellow')

console.log(addBlock);
console.log(boxYellow);
addBlock.addEventListener('click', function (event) {
boxYellow.classList.toggle("box-yellow")
})


 box.addEventListener('mousedown', function () {
     console.log('mousedown');
    
 })
 box.addEventListener('mouseup', function () {
    console.log('mouseup');
   
})

document.body.addEventListener('keydown', function () {
    console.log('keydown');
   
})

document.body.addEventListener('keyup', function () {
    console.log('keyup');
   
})