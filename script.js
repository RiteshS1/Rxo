let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "120px";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function checkWin(){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            if(turn =="X"){
                document.querySelector("#results").innerHTML = "Player 1 wins!🎉";
            }else{
                document.querySelector("#results").innerHTML = "Player 2 wins!🎉";
            }
            document.querySelector("#play-again").style.display = "inline"

            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6"
                boxes[winConditions[i][j]].style.color = "#000"
            }
            confetti({
                particleCount: 1400,
                spread: 770,
                gravity:0.9,
                scalar:1.1,               
                origin: { y: 0.7 }
            });
            
            
            
            
        }
    }
}

function checkDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline"
        }
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff"
    })
})

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});
//---------------------------trying smth for mouse--------------------


// const canvas = document.getElementById('trailCanvas');
// const ctx = canvas.getContext('2d');

// // Set canvas size
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Variables for trail effect
// const trailColor = 'rgba(0, 150, 255, 0.6)'; // Color of the trail
// const trailRadius = 1; // Smaller size of the trail dot, adjust as needed
// const trailDecay = 0.95; // How quickly the trail fades out

// // Array to store trail positions
// let trail = [];

// // Update canvas size on window resize
// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });

// // Draw the mouse trails
// function drawTrail() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

//     // Draw each trail dot
//     ctx.beginPath();
//     for (let i = 0; i < trail.length; i++) {
//         const [x, y, alpha] = trail[i];
//         ctx.globalAlpha = alpha;
//         ctx.arc(x, y, trailRadius, 0, Math.PI * 1);
//         ctx.fillStyle = trailColor;
//         ctx.fill();
//     }
//     ctx.closePath();

//     // Update the alpha value for fading effect
//     trail = trail.map(([x, y, alpha]) => [x, y, alpha * trailDecay]);
// }

// // Update the trail array with the new mouse position
// function updateTrail(x, y) {
//     trail.push([x, y, 20]); // Add a new trail dot with full opacity
// }

// // Track mouse movement
// document.addEventListener('mousemove', (e) => {
//     updateTrail(e.clientX, e.clientY);
// });

// // Animation loop
// function animate() {
//     drawTrail();
//     requestAnimationFrame(animate);
// }

// animate();
