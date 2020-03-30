let body = {
  x: 808,
  y: 464,
  vx: -1
}

let leftear = {
  x1: 612,
  y1: 351,
  x2: 595,
  y2: 368,
  x3: 623,
  y3: 374,
  vy: -.5
}

let rightear = {
  x1: 701,
  y1: 376,
  x2: 714,
  y2: 352,
  x3: 731,
  y3: 372,
  vy: -.5
}


let flleg = {
  x1: 690,
  y1: 489,
  x2: body.x - 153, ///655
  y2: 554,
  vx: -.5
}

let frleg = {
  x1: 704,
  y1: 486,
  x2: body.x - 78, //actual value is 730
  y2: 529,
  vx: -.5
}

let sock = {
  x1: 730,
  y1: 529,
  x2: body.x - 66, ///742
  y2: 555,
  vx: -.5
}

let neck = {
  x1: 690,
  y1: 448,
  x2: 667,
  y2: 421
}

let head = {
  x1: 614,
  y1: 374,
  x2: 656,
  y2: 433,
  x3: 716,
  y3: 374
}

let lbleg = {
  x1: 893,
  y1: 494,
  x2: body.x + 63, ///871
  y2: 552,
  vx: -.5
}

let rbleg = {
  x1: 906,
  y1: 485,
  x2: body.x + 127, //935
  y2: 547,
  vx: -.5
}

let tale = {
  x1: 937,
  y1: 453,
  x2: body.x + 194, //1002
  y2: 415,
  vx: -2,
  vy: -2
}

 let tt = {
  x1: 997,
  y1: 409,
  x2: 1004,
  y2: 420,
  x3: 1014,
  y3: 406,
  vx: -2,
  vy: -2
  }


function setup() {

    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    // the p5 variables "width" and "height" hold the dimensions of the canvas


}

function draw() {

//background start

  background(105, 102, 110) ///grey background for street

fill(184, 180, 191)    ///grey sky background
noStroke()
rect(0, 0, windowWidth, 200)

fill(168, 152, 8) //yellow street line (upper)
noStroke()
rect (0, 408, windowWidth, 15)

fill(168, 152, 8) //yellow street line (lower)
noStroke()
rect (0, 435, windowWidth, 17)

fill(2, 110, 2) //green grass horizon line (upper)
noStroke()
rect (0, 196, windowWidth, 30)

fill(2, 110, 2) //green grass horizon line (lower)
noStroke()
rect (0, 698, windowWidth, 30)

fill(202, 204, 202) //white line (upper)
noStroke()
rect (0, 260, windowWidth, 10)

fill(202, 204, 202) //white line (lower)
noStroke()
rect (0, 625, windowWidth, 20)

fill(125, 102, 92) //actual first brown rect
noStroke()
rect (14, 154, 10, 40)

fill(125, 102, 92) //first brown rect
noStroke()
rect (44, 154, 10, 40)

fill(125, 102, 92) //second brown rect
noStroke()
rect (74, 154, 10, 40)

fill(125, 102, 92) //third brown rect
noStroke()
rect (104, 154, 10, 40)

fill(125, 102, 92) //fourth brown rect
noStroke()
rect (134, 154, 10, 40)

fill(125, 102, 92) //fifth brown rect
noStroke()
rect (164, 154, 10, 40)

fill(125, 102, 92) //sixth brown rect
noStroke()
rect (194, 154, 10, 40)

fill(125, 102, 92) //seventh brown rect
noStroke()
rect (224, 154, 10, 40)

fill(125, 102, 92) //eighth brown rect
noStroke()
rect (254, 154, 10, 40)

fill(125, 102, 92) //9 brown rect
noStroke()
rect (284, 154, 10, 40)

fill(125, 102, 92) //10 brown rect
noStroke()
rect (314, 154, 10, 40)

fill(125, 102, 92) //11 brown rect
noStroke()
rect (344, 154, 10, 40)

fill(125, 102, 92) //12 brown rect
noStroke()
rect (374, 154, 10, 40)

fill(125, 102, 92) //13 brown rect
noStroke()
rect (404, 154, 10, 40)

fill(125, 102, 92) //14 brown rect
noStroke()
rect (434, 154, 10, 40)

fill(125, 102, 92) //15 brown rect
noStroke()
rect (464, 154, 10, 40)

fill(125, 102, 92) //16 brown rect
noStroke()
rect (494, 154, 10, 40)

fill(125, 102, 92) //17 brown rect
noStroke()
rect (524, 154, 10, 40)

fill(125, 102, 92) //18 brown rect
noStroke()
rect (554, 154, 10, 40)

fill(125, 102, 92) //19 brown rect
noStroke()
rect (584, 154, 10, 40)

fill(125, 102, 92) //20 brown rect
noStroke()
rect (614, 154, 10, 40)

fill(125, 102, 92) //21 brown rect
noStroke()
rect (644, 154, 10, 40)

fill(125, 102, 92) //22 brown rect
noStroke()
rect (674, 154, 10, 40)

fill(125, 102, 92) //23 brown rect
noStroke()
rect (704, 154, 10, 40)

fill(125, 102, 92) //24 brown rect
noStroke()
rect (734, 154, 10, 40)

fill(125, 102, 92) //25 brown rect
noStroke()
rect (764, 154, 10, 40)

fill(125, 102, 92) //26 brown rect
noStroke()
rect (794, 154, 10, 40)

fill(125, 102, 92) //27 brown rect
noStroke()
rect (824, 154, 10, 40)

fill(125, 102, 92) //28 brown rect
noStroke()
rect (854, 154, 10, 40)

fill(125, 102, 92) //29 brown rect
noStroke()
rect (884, 154, 10, 40)

fill(125, 102, 92) //30 brown rect
noStroke()
rect (914, 154, 10, 40)

fill(125, 102, 92) //31 brown rect
noStroke()
rect (944, 154, 10, 40)

fill(125, 102, 92) //32 brown rect
noStroke()
rect (974, 154, 10, 40)

fill(125, 102, 92) //33 brown rect
noStroke()
rect (1004, 154, 10, 40)

fill(125, 102, 92) //34 brown rect
noStroke()
rect (1034, 154, 10, 40)

fill(125, 102, 92) //35 brown rect
noStroke()
rect (1064, 154, 10, 40)

fill(125, 102, 92) //36 brown rect final rect
noStroke()
rect (1094, 154, 10, 40)

fill(135, 134, 134) //silver rect for road rail
noStroke()
rect (0, 160, windowWidth, 15)

////background end



///dog start

fill(26, 25, 25) ///black oval aka body
noStroke()
ellipse(body.x, body.y, 270, 70)

body.x = body.x + body.vx


stroke(26, 25, 25) ///black line left front leg
strokeWeight(16)
line(flleg.x1, flleg.y1, flleg.x2, flleg.y2)

flleg.x1 = flleg.x1 + body.vx //anchor to body
flleg.x2 = flleg.x2 + flleg.vx + body.vx

if (flleg.x2 <= body.x - 160) {
  flleg.vx = -flleg.vx
}

if (flleg.x2 >= body.x - 140) {
  flleg.vx = -flleg.vx
}

stroke(26, 25, 25) ///black line right front leg
strokeWeight(16)
line(frleg.x1, frleg.y1, frleg.x2, frleg.y2)

frleg.x1 = frleg.x1 + body.vx ///anchor body
frleg.x2 = frleg.x2 + frleg.vx + body.vx

if (frleg.x2 <= body.x - 56) {
  frleg.vx = -frleg.vx
} /// 68

if (frleg.x2 >= body.x - 76) {
  frleg.vx = -frleg.vx
} /// 88

stroke(255, 252, 252) ///white sock right front leg
strokeWeight(14)
line(sock.x1, sock.y1, sock.x2, sock.y2)

sock.x1 = sock.x1 + body.vx /// anchor??
sock.x2 = sock.x2 + sock.vx + body.vx

if (sock.x2 <= body.x - 56) {
  sock.vx = -sock.vx
}

if (sock.x2 >= body.x - 76) {
  sock.vx = -sock.vx
}


stroke(26, 25, 25) ///black line left back leg
strokeWeight(16)
line(lbleg.x1, lbleg.y1, lbleg.x2, lbleg.y2)

lbleg.x1 = lbleg.x1 + body.vx ///anchor body
lbleg.x2 = lbleg.x2 + lbleg.vx + body.vx

if (lbleg.x2 <= body.x + 53) {
  lbleg.vx = -lbleg.vx
} /// 53

if (lbleg.x2 >= body.x + 73) {
  lbleg.vx = -lbleg.vx
} /// 73


stroke(26, 25, 25) ///black line right back leg
strokeWeight(16)
line(rbleg.x1, rbleg.y1, rbleg.x2, rbleg.y2)

rbleg.x1 = rbleg.x1 + body.vx ///anchor body
rbleg.x2 = rbleg.x2 + rbleg.vx + body.vx

if (rbleg.x2 <= body.x + 117) {
  rbleg.vx = -rbleg.vx
} /// 53

if (rbleg.x2 >= body.x + 137) {
  rbleg.vx = -rbleg.vx
} /// 73



stroke(26, 25, 25) ///black tail
strokeWeight(15)
line(tale.x1, tale.y1, tale.x2, tale.y2)

tale.x1 = tale.x1 + body.vx ///anchor body
tale.x2 = tale.x2 + tale.vx + body.vx

if (tale.x2 <= body.x + 184) {
  tale.vx = -tale.vx
} ///194

if (tale.y2 <= 300) {
    tale.vy = -tale.vy
}

if (tale.x2 >= body.x + 204) {
  tale.vx = -tale.vx
}

if (tale.y2 >= 400) {
  tale.vy = -tale.vy
 }

stroke(26, 25, 25) ///black line neck
strokeWeight(35)
line(neck.x1, neck.y1, neck.x2, neck.y2)

neck.x1 = neck.x1 + body.vx
neck.x2 = neck.x2 + body.vx

fill(26, 25, 25) //black triangle head
noStroke()
triangle(head.x1, head.y1, head.x2, head.y2, head.x3, head.y3)

head.x1 = head.x1 + body.vx
head.x2 = head.x2 + body.vx
head.x3 = head.x3 + body.vx


fill(26, 25, 25) //black triangle left ear
noStroke()
triangle(leftear.x1, leftear.y1, leftear.x2, leftear.y2, leftear.x3, leftear.y3)

leftear.x1 = leftear.x1 + body.vx
leftear.x2 = leftear.x2 + body.vx
leftear.x3 = leftear.x3 + body.vx

leftear.y1 = leftear.y1 + leftear.vy
leftear.y2 = leftear.y2 + leftear.vy
leftear.y3 = leftear.y3 + leftear.vy

if (leftear.y1 < 350) {
  leftear.vy = -leftear.vy
}

if (leftear.y1 > 352) {
  leftear.vy = -leftear.vy
}

fill(26, 25, 25) //black triangle right ear
noStroke()
triangle(rightear.x1, rightear.y1, rightear.x2, rightear.y2, rightear.x3, rightear.y3)

rightear.x1 = rightear.x1 + body.vx
rightear.x2 = rightear.x2 + body.vx
rightear.x3 = rightear.x3 + body.vx

rightear.y1 = rightear.y1 + rightear.vy
rightear.y2 = rightear.y2 + rightear.vy
rightear.y3 = rightear.y3 + rightear.vy

if (rightear.y1 < 375) {
  rightear.vy = -rightear.vy
}

if (rightear.y1 > 377) {
  rightear.vy = -rightear.vy
}


fill(255, 252, 252) //white triangle tail
 noStroke()
triangle(tt.x1, tt.y1, tt.x2, tt.y2, tt.x3, tt.y3)

tt.x1 = tale.x2 + 5
tt.x2 = tale.x2 + 10
tt.x3 = tale.x2 + 20

tt.y1 = tt.y1 + tale.vy
tt.y2 = tt.y2 + tale.vy
tt.y3 = tt.y3 + tale.vy

if (tt.x2 <= tale.x2 - 2) {
tt.vy = -tt.vy
 }

if (tt.x2 >= tale.x2 + 2) {
tt.vx = -tt.vx
 }

if (tt.y2 <= tale.y2 - 9) {
tt.vy = -tt.vy
}

if (tt.y2 <= tale.y2 + 6) {
 tt.vy = -tt.vy
 }

 if (tt.x1 <= tale.x2 - 2) {
 tt.vy = -tt.vy
 }

 if (tt.x1 >= tale.x2 + 2) {
  tt.vx = -tt.vx
 }

 if (tt.y1 <= tale.y2 - 9) {
  tt.vy = -tt.vy
 }

 if (tt.y1 <= tale.y2 + 6) {
  tt.vy = -tt.vy
 }

 if (tt.x3 <= tale.x2 - 2) {
 tt.vy = -tt.vy
 }

 if (tt.x3 >= tale.x2 + 2) {
 tt.vx = -tt.vx
 }

 if (tt.y3 <= tale.y2 - 9) {
 tt.vy = -tt.vy
 }

 if (tt.y3 <= tale.y2 + 6) {
 tt.vy = -tt.vy
 }



}

// if the window is resized, resize the canvas to match
function mouseClicked() {
    print(mouseX, mouseY)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
