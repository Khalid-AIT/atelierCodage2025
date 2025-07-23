
const dot = document.getElementById("dot");
const pq = document.getElementById("pq");
let leftVal = 2;
let topVal = 2;


function move(e){
  switch(e.target.id){
    case "left":
      leftVal > 2 ? leftVal -= 7 : leftVal += 0;
      break;

    case "right":
      leftVal < 58 ? leftVal += 7 : leftVal += 0;
      break;

    case "up":
      topVal > 2 ? topVal -= 7 : topVal += 0;
      break;

    case "down":
      topVal < 58 ? topVal += 7 : topVal += 0;
      break;
  }
  dot.style.left = leftVal + "vw";
  dot.style.top = topVal + "vw";
}
document.getElementById("left").addEventListener("click", move);
document.getElementById("right").addEventListener("click", move);
document.getElementById("up").addEventListener("click", move);
document.getElementById("down").addEventListener("click", move);