function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  function setup() {
    createCanvas(400, 400);
    background("blue")
  }
  
  function draw() {
    stroke("pink");
    fill("black");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  