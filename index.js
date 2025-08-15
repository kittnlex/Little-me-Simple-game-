
// ------------------- JS CHARACTER MOVEMENT ------------------- //

const character = document.getElementById("character");

function characterMove(){

    const moveAmount = 50;

    let x = 0;
    let y = 0;
    // ------------------- MOVEMENT ------------------- //
    document.addEventListener("keydown", event =>{
        if(event.key.startsWith("Arrow")){

            event.preventDefault();

            switch(event.key){
                case "ArrowUp":
                    y -= moveAmount;
                    break
                case "ArrowDown":
                    y += moveAmount;
                    break
                case "ArrowLeft":
                    x -= moveAmount;
                    break
                case "ArrowRight":
                    x += moveAmount;
                    break
            }

            character.style.top = `${y}px`;
            character.style.left = `${x}px`;

            checkCollision();

        }
    });

}



// ------------------- CREATE A CIRCLE ELEMENT ------------------- //

const circle = document.createElement('div');

// ------------------- MAIN LOOP ------------------- //

function circleCreation(){

    // ------------------- RANDOM X, Y ------------------- //

    // ------------------- RANDOM X ------------------- //
    let circlemaxX = 1400;
    let circleminX = 20;

    let randomnumX = Math.floor(Math.random()*(circlemaxX - circleminX)) + circleminX;


    // ------------------- RANDOM Y ------------------- //

    let circlemaxY = 790;
    let circleminY = 130;

    let randomnumY = Math.floor(Math.random()*(circlemaxY - circleminY)) + circleminY;


    circle.id = 'circle1';
    circle.class = "circles";

    // ------------------- APPEND DIV TO DOM------------------- //
    //Select the parent div for circle
    const parentDiv = document.getElementById("points-box");
    parentDiv.appendChild(circle);

    circle.style.left = randomnumX + 'px';

    circle.style.top = randomnumY + 'px';
    // console.log(randomnumY);
    // console.log(randomnumX);
}


// ------------------- COLLISION FUNCTION ------------------- //


function checkCollision(){

    let characterBox = character.getBoundingClientRect();
    let circleBox = circle.getBoundingClientRect();
    let collision = true;
    
    
    // console.log(characterBox);
    // console.log(circleBox);

    if(characterBox.left < circleBox.right &&
        characterBox.right > circleBox.left &&
        characterBox.top < circleBox.bottom &&
        characterBox.bottom > circleBox.top ){

            circleCreation();
            console.log(randomnumX);
        
    } else {
        collision = false;
    }

    return collision;

}


characterMove();
circleCreation();

// ------------------- FINDING THE COORDINATES ------------------- //
// let box = document.getElementById("points-box");
// let size = box.getBoundingClientRect();

// console.log(size.bottom);
// console.log(size.right);

// "use strict";

// function printScreenCoordinates(event){
//     let x = event.screenX;
//     let y = event.screenY;

//     document.getElementById(`screeNCoordinates`).innerHTML = `onclick -> screenX: ${x}, screenY: ${y}`;

    
// }
