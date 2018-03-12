var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillStyle = "#995e23";
c.fillRect(100, 100, 80, 120);
c.fillRect(350, 100, 80, 120);
c.fillRect(250, 350, 80, 120);

var y = 120;
for (var i = 0; i < 4; i++) {
  c.beginPath();
  c.arc(90, y, 10, 0, Math.PI * 2, false);
  c.fillStyle = "blue";
  c.fill();

  c.beginPath();
  c.arc(190, y, 10, 0, Math.PI * 2, false);

  c.fillStyle = "blue";
  c.fill();

  y += 30;
}

var y = 60;
function animateDown() {
  if (y < 210) {
    requestAnimationFrame(animateDown);
    c.clearRect(290, 50, 20, 200);
    c.beginPath();
    c.arc(300, y, 5, 0, Math.PI * 2, false);
    c.fillStyle = "#08a327";
    c.fill();
    c.closePath();
    y++;
  }else{
      animateLeft();
  }
}

var x = 300;
function animateLeft() {
  if (x > 205) {
    requestAnimationFrame(animateLeft);
    c.clearRect(205,203,120, 20);
    c.beginPath();
    c.arc(x, 210, 5, 0, Math.PI * 2, false);
    c.fillStyle = "#08a327";
    c.fill();
    c.closePath();
    x--;
  }
}

animateDown();