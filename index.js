// Your code here

const dodger = document.getElementById("dodger");



function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
      
    }else if(e.key === "ArrowRight") {
        moveDodgerRight()
    }
  });


function moveDodgerRight() {
    const leftNumbers2 = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers2, 10)
    if (left < 360){
        dodger.style.left = `${left + 1}px`;
    }
}


