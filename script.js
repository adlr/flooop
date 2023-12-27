function drawRedX(ctx) {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(1, 1);
  ctx.lineTo(31, 1);
  ctx.lineTo(31, 31);
  ctx.lineTo(1, 31);
  ctx.lineTo(1, 1);
  ctx.save();
  for (let i = 0; i < 4; i++) {
    ctx.translate(16, 16);
    ctx.rotate(Math.PI/2);  // 90 degree rotation
    ctx.translate(-16, -16);
    ctx.moveTo(4.5, 3);
    ctx.lineTo(27.5, 3);
    ctx.lineTo(16, 14.5);
    ctx.lineTo(4.5, 3);
  }
  ctx.restore();
  ctx.fill("evenodd");
}

function strokeUpArrow(ctx) {
  ctx.moveTo(16, 0.5);
  ctx.lineTo(22.5, 7);
  ctx.lineTo(17, 7);
  ctx.lineTo(17, 16);
  ctx.lineTo(15, 16);
  ctx.lineTo(15, 7);
  ctx.lineTo(9.5, 7);
  ctx.lineTo(16, 0.5);
}

function drawBigUpArrow(ctx) {
  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.moveTo(16, 0.5);
  ctx.lineTo(31.5, 16);
  ctx.lineTo(17, 16);
  ctx.lineTo(17, 31);
  ctx.lineTo(15, 31);
  ctx.lineTo(15, 16);
  ctx.lineTo(0.5, 16);
  ctx.lineTo(16, 0.5);
  ctx.fill();
}

function drawBigRightArrow(ctx) {
  ctx.save();
  ctx.translate(16, 16);
  ctx.rotate(Math.PI/2);
  ctx.translate(-16, -16);
  drawBigUpArrow(ctx);
  ctx.restore();
}

function drawBigDownArrow(ctx) {
  ctx.save();
  ctx.translate(16, 16);
  ctx.rotate(Math.PI);
  ctx.translate(-16, -16);
  drawBigUpArrow(ctx);
  ctx.restore();
}

function drawBigLeftArrow(ctx) {
  ctx.save();
  ctx.translate(16, 16);
  ctx.rotate(3 * Math.PI/2);
  ctx.translate(-16, -16);
  drawBigUpArrow(ctx);
  ctx.restore();
}

function drawUpDown(ctx) {
  ctx.save();
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  strokeUpArrow(ctx);
  ctx.translate(16, 16);
  ctx.rotate(Math.PI);
  ctx.translate(-16, -16);
  strokeUpArrow(ctx);
  ctx.fill();
  ctx.restore();
}

function drawLeftRight(ctx) {
  ctx.save();
  ctx.fillStyle = "#4444ff";
  ctx.beginPath();
  ctx.translate(16, 16);
  ctx.rotate(Math.PI/2);
  ctx.translate(-16, -16);
  strokeUpArrow(ctx);
  ctx.translate(16, 16);
  ctx.rotate(Math.PI);
  ctx.translate(-16, -16);
  strokeUpArrow(ctx);
  ctx.fill();
  ctx.restore();
}

function drawFourWay(ctx) {
  ctx.save();
  ctx.fillStyle = "purple";
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    strokeUpArrow(ctx);
    ctx.translate(16, 16);
    ctx.rotate(Math.PI/2);
    ctx.translate(-16, -16);
  }
  ctx.fill();
  ctx.restore();
}

function drawTarget(ctx) {
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = "white";
  for (let i = 0; i < 4; i++) {
    ctx.moveTo(1, 1);
    ctx.lineTo(8, 1);
    ctx.lineTo(8, 3);
    ctx.lineTo(3, 3);
    ctx.lineTo(3, 8);
    ctx.lineTo(1, 8);
    ctx.lineTo(1, 1);
    if (i == 3)
      break;
    ctx.translate(16, 16);
    ctx.rotate(Math.PI/2);
    ctx.translate(-16, -16);
  }
  ctx.fill();
  ctx.restore();
}

function drawWhiteX(ctx) {
  drawTarget(ctx);
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = "white";
  for (let i = 0; i < 2; i++) {
    ctx.moveTo(3.5, 2);
    ctx.lineTo(30.5, 29);
    ctx.lineTo(29, 30.5);
    ctx.lineTo(2, 3.5);
    ctx.lineTo(3.5, 2);
    if (i == 1)
      break;
    ctx.translate(16, 16);
    ctx.rotate(Math.PI/2);
    ctx.translate(-16, -16);
  }
  ctx.fill();
  ctx.restore();
}

function drawCircle(ctx) {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(16, 16, 8, 0, Math.PI * 2);
  ctx.arc(16, 16, 6, 0, Math.PI * 2);
  ctx.fill("evenodd");
}

const LEVELS = [
  "555555505555555000000502050000000000334050000555555500050000000000005050000000020000050000004023330050000555520000050000004020000050000000020010000000\n[Luke Shepard]",
  "000000000000000000000000005555555000000005000005000000005200033333333333200000000000000200000000000000200000000000000200000000000000000000000010000000\n[Luke Shepard]",
  "555555505555555000000500500003000000305000000000000305000b0000000080800b0000000005500400000000005540000005555755555755550000000000000000000000100000a0\n[John Blatz]",
  "5555055555555550000600000000050000000000000050000000000000050a0555550000005000000030505005005205500005005005050055555505405000400000555005050555550001\n[Andy de los Reyes]",
  "555555505055555000540064250000000500005250400045500005255500402000005200500002000005250500008000005200500552000006000500002000005000000000000015000000\n[Josh Paul]",
  "5555555055555299005066666005000b050200000b5004005000000053300035000000050000666500000605550b307a00000090009b00700000000a000000000007000000000010079003\n[John Blatz]",
  "55550055555555500056a0000400002820000008660002200000000055500000000200a0005003000033000900550000000000a0005000000000000005000000000008a057000017000555\n[John Blatz]",
  "0000505555555554005060bb05b9a100500000035b870050000000005055500000000025000255000300000000000550000000000050005500000000050000055000000000444000000000\n[John Blatz]",
  "555bbbb9bbbb555005bbbbbbbbb500005bbbbbbbbb500003bbbbbbbab300003bb89bbbbb300003bb55bbbba300003bbb7bbb7b300003666666666300000444444444000000000010000000\n[John Blatz]",
  "5555055555555550000605300000000054a333000000000000053000000058b3333300100000333333300000000333a3330000000053733330000050055555555555550000000080000000\n[Andy de los Reyes]",
  "55000000000005544444444444444a44444444444444a44444444444444a44444444444444a44444444444444a44444444444444a44444444444444a000000000000000550000010000055\n[John Blatz]",
  "5555a9879875555555589a8a7855555555987a9aa555555559aa988a55555555a889987555555557a9aaa7555555559a8889a55555555989898755555555989a787555555559aa1aa95555\n[John Blatz]"
];

const PieceTypes = {
  Blank: '0',
  Circle: '1',  // only used in save state
  UpDown: '2',
  LeftRight: '3',
  FourWay: '4',
  RedX: '5',
  WhiteX: '6',
  Up: '7',
  Right: '8',
  Down: '9',
  Left: 'a',
  Target: 'b',
  TargetWFlooop: 'c',  // only used in save state
};

const DIRECTION = {
  Up: 0,
  Right: 1,
  Down: 2,
  Left: 3
}

function oppositeDir(dir) {
  return (dir + 2) % 4;
}

const ANIM_TYPE = {
  Move: 0,
  Bump: 1
}

const ANIM_CIRCLE = {
  Piece: 0,
  Circle: 1,
  Both: 2
}

class Animation {
  constructor(dir, circle, type, delay, cb) {
    this.dir = dir;
    this.circle = circle;
    this.type = type;
    this.cb = cb;
    this.startTime = document.timeline.currentTime + delay;
    this.MAX_DUR = 16.666 * 5;  // ms
  }
  quadEaseInBump(frac) {
    if (frac < 0.5) {
      return frac*frac*2 * 0.5;
    } else {
      return 2*(frac-1)*(frac-1) * 0.5;
    }
  }
  quadEaseInOut(frac) {
    if (frac < 0.5) {
      return frac*frac*2;
    } else {
      return -2*(frac-1)*(frac-1)+1;
    }
  }
  getOffset(now) {  // ms
    let duration = now - this.startTime;
    if (duration < 0)
      return 0;
    const offset = 32;
    if (duration > this.MAX_DUR)
      duration = this.MAX_DUR;
    const fn = this.type === ANIM_TYPE.Move ? this.quadEaseInOut : this.quadEaseInBump;
    return offset * fn(duration / this.MAX_DUR);
  }
  adjustCtx(ctx, now, circle) {
    if (this.circle === ANIM_CIRCLE.Circle && circle === false)
      return;
    if (this.circle === ANIM_CIRCLE.Piece && circle === true)
      return;
    //console.log(`adjust by ${this.getOffset(now)}`);
    switch(this.dir) {
      case DIRECTION.Up: ctx.translate(0, -this.getOffset(now)); break;
      case DIRECTION.Right: ctx.translate(this.getOffset(now), 0); break;
      case DIRECTION.Down: ctx.translate(0, this.getOffset(now)); break;
      case DIRECTION.Left: ctx.translate(-this.getOffset(now), 0); break;
    }
  }
  isDone(now) {
    const duration = now - this.startTime;
    if (duration > this.MAX_DUR) {
      this.cb();
      return true;
    }
    return false;
  }
}

class Board {
  constructor() {
    this.width = 15;
    this.height = 10;
    this.circlePos = [0, 0];
    this.loadLevel(0);
    this.drawFunctions = {};
    this.drawFunctions[PieceTypes.Blank] = () => {};
    this.drawFunctions[PieceTypes.UpDown] = drawUpDown;
    this.drawFunctions[PieceTypes.LeftRight] = drawLeftRight;
    this.drawFunctions[PieceTypes.FourWay] = drawFourWay;
    this.drawFunctions[PieceTypes.RedX] = drawRedX;
    this.drawFunctions[PieceTypes.WhiteX] = drawWhiteX;
    this.drawFunctions[PieceTypes.Up] = drawBigUpArrow;
    this.drawFunctions[PieceTypes.Right] = drawBigRightArrow;
    this.drawFunctions[PieceTypes.Down] = drawBigDownArrow;
    this.drawFunctions[PieceTypes.Left] = drawBigLeftArrow;
    this.drawFunctions[PieceTypes.Target] = drawTarget;
    this.animations = {};
    this.queuedMoves = [];
  }
  checkForQueuedMoves() {
    if (this.queuedMoves.length) {
      this.handleMove(this.queuedMoves.shift());
    }
  }
  pieceAt(x, y) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height)
      return PieceTypes.RedX;
    return this.board[y * this.width + x];
  }
  loadLevel(num) {
    this.board = [];
    this.level = num;
    let str = LEVELS[num];
    let i = 0;
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let piece = str[i];
        switch(piece) {
          case PieceTypes.Circle:
            piece = PieceTypes.Blank;
            this.circlePos[0] = x;
            this.circlePos[1] = y;
            break;
          case PieceTypes.TargetWFlooop:
            piece = PieceTypes.Target;
            this.circlePos[0] = x;
            this.circlePos[1] = y;
            break;
        }
        i++;
        this.board.push(piece);
      }
    }
    this.author = str.match(/\[(.*)\]/)[1];
    //console.log(this.author);
  }
  nextLevel() {
    if (this.level + 1 >= LEVELS.length) {
      console.log(`you beat the game`);
      return;
    }
    // This may be called within a draw() call, so queue this up to run after that exits.
    setTimeout(() => {
      this.loadLevel(this.level + 1);
      draw(0);
    }, 0);
  }
  getCreditString() {
    let levelString = '' + (this.level + 1);
    switch(this.level + 1) {
      case 1: levelString = "one"; break;
      case 2: levelString = "two"; break;
      case 3: levelString = "three"; break;
      case 4: levelString = "four"; break;
      case 5: levelString = "five"; break;
      case 6: levelString = "six"; break;
      case 7: levelString = "seven"; break;
      case 8: levelString = "eight"; break;
      case 9: levelString = "nine"; break;
      case 10: levelString = "ten"; break;
      case 11: levelString = "eleven"; break;
      case 12: levelString = "twelve"; break;
    }
    return `Level ${levelString} by ${this.author}.`;
  }
  draw(ctx, now) {
    let animCells = null;
    if (now !== 0 && Object.keys(this.animations).length) {
      // We're animating. Only do minimal updates
      animCells = this.cellsAffectedByAnimation();
      // Object.keys(animCells).forEach(key => {
      //   const y = Math.floor(key / this.width);
      //   const x = key - y * this.width;
      //   console.log(`cell: ${x}, ${y}`);
      // });
    } else {
      // blank canvas
      //console.log(`blank canvas`);
      ctx.fillStyle = "black";
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fill();  
    }

    const textHeight = 16;
    // Should be 15x10 grid of 32x32 icons. Let's scale.
    const boardWidth = 15 * 32;
    const boardHeight = 10 * 32 + textHeight;
    const idealXScale = canvas.width / boardWidth;
    const idealYScale = canvas.height / boardHeight;
    //console.log(`${idealXScale}, ${idealYScale}`);
    ctx.save();
    if (idealYScale > idealXScale) {
      // bound on the X axis
      //ctx.translate(0, ((canvas.height - (boardHeight * idealXScale)) / 2) | 0);
      ctx.scale(idealXScale, idealXScale);
    } else {
      // bound on the Y axis
      ctx.translate(((canvas.width - (boardWidth * idealYScale)) / 2) | 0, 0);
      ctx.scale(idealYScale, idealYScale);
    }
    // Draw credits text
    if (animCells === null) {
      ctx.fillStyle = "white";
      ctx.font = "12px serif";
      ctx.fillText(this.getCreditString(), 3, 13);
      //console.log(`draw credits, ${now}`);
    }
    ctx.save();
    ctx.translate(0, textHeight);
    ctx.beginPath();
    if (animCells) {
      ctx.save();
      // Black the cells we're redrawing
      ctx.fillStyle = "black";
      Object.keys(animCells).forEach(cell => {
        const y = Math.floor(cell / this.width);
        const x = cell - y * this.width;
        ctx.fillRect(x * 32, y * 32, 32, 32);
      });
      ctx.restore();
    }
    ctx.beginPath();
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 15; x++) {
        const cell = y * this.width + x;
        if (animCells && !animCells.hasOwnProperty(cell)) {
          continue;
        }
        //console.log(`draw ${x}, ${y}`);
        ctx.save();
        ctx.translate(x * 32, y * 32);
        ctx.save();
        let animation = null;
        if (animCells && this.animations.hasOwnProperty(cell)) {
          animation = this.animations[cell];
        }
        if (animation) {
          animation.adjustCtx(ctx, now, false);
        }
        this.drawFunctions[this.board[cell]](ctx);
        ctx.restore();
        if (this.circlePos[0] == x && this.circlePos[1] == y) {
          ctx.save();
          if (animation) {
            animation.adjustCtx(ctx, now, true);
          }
          drawCircle(ctx);
          //console.log(`draw circle: ${x}, ${y}`);
          ctx.restore();
        }
        if (animation && animation.isDone(now)) {
          delete this.animations[cell];
        }
      ctx.restore();
      }
    }
    ctx.restore();
    if (!animCells) {
      ctx.beginPath();
      ctx.strokeStyle = "white";
      ctx.moveTo(0, boardHeight + 1);
      ctx.lineTo(boardWidth, boardHeight + 1);
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
    ctx.restore();
  }
  pushAnimation(cell, dir, circle, type, delay, cb) {
    if (this.animations.hasOwnProperty(cell)) {
      console.log(`err: already animating this cell! ${cell}, ${circle}`);
      Object.keys(this.animations).forEach(cell => {
        const anim = this.animations[cell];
        console.log(`anim: ${cell}, ${anim.circle}`)
      });
      return;
    }
    this.animations[cell] = new Animation(dir, circle, type, delay, cb);
    requestAnimationFrame(animate);
  }
  delAnimation(x, y) {
    const cell = this.XYToCell(x, y);
    delete this.animations[cell];
  }
  cellsAffectedByAnimation() {
    const ret = {};
    Object.keys(this.animations).forEach(key => {
      ret[key] = true;
      const y = Math.floor(key / this.width);
      const x = key - y * this.width;
      switch(this.animations[key].dir) {
        case DIRECTION.Up: if (y > 0) { ret[(y - 1) * this.width + x] = true; } break;
        case DIRECTION.Right: if (x < (this.width - 1)) { ret[y * this.width + x + 1] = true; } break;
        case DIRECTION.Down: if (y < (this.height - 1)) { ret[(y + 1) * this.width + x] = true; } break;
        case DIRECTION.Left: if (x > 0) { ret[y * this.width + x - 1] = true; } break;
      }
    });
    return ret;
  }
  XYToCell(x, y) {
    return y * this.width + x;
  }
  handlePieceMove(x, y, dx, dy, dir, depth) {
    let piece = this.pieceAt(x, y);
    const truePiece = piece;
    if (piece === PieceTypes.WhiteX || piece === PieceTypes.Target) {
      // At this point, treat as four way
      piece = PieceTypes.FourWay;
    }
    if (piece === PieceTypes.UpDown || piece === PieceTypes.LeftRight || piece === PieceTypes.FourWay) {
      // Check for illegal moves
      if ((piece === PieceTypes.UpDown && (dir === DIRECTION.Left || dir === DIRECTION.Right)) ||
          (piece === PieceTypes.LeftRight && (dir === DIRECTION.Up || dir === DIRECTION.Down))) {
        return;
      }
      const nextPiece = this.pieceAt(x + dx, y + dy);
      if (nextPiece === PieceTypes.Blank) {
        // We can move
        this.pushAnimation(this.XYToCell(x, y), dir, ANIM_CIRCLE.Piece, ANIM_TYPE.Move, depth * 33,
          () => {
            this.board[this.XYToCell(x, y)] = PieceTypes.Blank;
            this.board[this.XYToCell(x + dx, y + dy)] = truePiece;
          });
        return;
      }
      if (nextPiece !== PieceTypes.RedX) {
        this.handlePieceMove(x + dx, y + dy, dx, dy, dir, depth + 1);
      }
      this.pushAnimation(this.XYToCell(x, y), dir, ANIM_CIRCLE.Piece, ANIM_TYPE.Bump, depth * 33, () => {});
    }
    if ([PieceTypes.Up, PieceTypes.Right, PieceTypes.Down, PieceTypes.Left].indexOf(piece) >= 0) {
      switch (piece) {
        case PieceTypes.Up: dx = 0; dy = -1; dir = DIRECTION.Up; break;
        case PieceTypes.Right: dx = 1; dy = 0; dir = DIRECTION.Right; break;
        case PieceTypes.Down: dx = 0; dy = 1; dir = DIRECTION.Down; break;
        case PieceTypes.Left: dx = -1; dy = 0; dir = DIRECTION.Left; break;
      }
      if (this.pieceAt(x + dx, y + dy) === PieceTypes.RedX) {
        // Can't swap, just bump
        this.pushAnimation(this.XYToCell(x, y), dir, ANIM_CIRCLE.Piece, ANIM_TYPE.Bump, depth * 33, () => {});
        return;
      }
      // Swap w/ other piece
      // If other piece is animating, remove it
      this.delAnimation(x + dx, y + dy);
      const otherPiece = this.board[this.XYToCell(x + dx, y + dy)];
      const otherHasCircle = this.circlePos[0] === x + dx && this.circlePos[1] === y + dy;
      this.pushAnimation(this.XYToCell(x, y), dir, ANIM_CIRCLE.Piece, ANIM_TYPE.Move, depth * 33,
      () => {
        this.board[this.XYToCell(x, y)] = otherPiece;
        this.board[this.XYToCell(x + dx, y + dy)] = piece;
        if (otherHasCircle) {
          this.circlePos[0] = x;
          this.circlePos[1] = y;
          if (this.circlePos[1] === 0) {
            this.nextLevel();
          }
        }
      });
      this.pushAnimation(this.XYToCell(x + dx, y + dy), oppositeDir(dir), ANIM_CIRCLE.Both, ANIM_TYPE.Move, depth * 33, () => {});
    }
  }
  handleMove(dir) {
    //console.log(`handle move`);
    if (Object.keys(this.animations).length) {
      // Animating. Do this move after animations end
      if (this.queuedMoves.length < 1)
        this.queuedMoves.push(dir);
      return;
    }
    let dx = 0;
    let dy = -1;
    switch (dir) {
      case DIRECTION.Right: dx = 1; dy = 0; break;
      case DIRECTION.Down: dx = 0; dy = 1; break;
      case DIRECTION.Left: dx = -1; dy = 0; break;
    }
    const curX = this.circlePos[0];
    const curY = this.circlePos[1];
    const toX = curX + dx;
    const toY = curY + dy;
    // console.log(`${toX}, ${toY}`);
    // if (toX < 0 || toX >= this.width || toY < 0 || toY >= this.height) {
    //   this.pushAnimation(curY * this.width + curX, dir, ANIM_TYPE.Bump, 0,
    //     () => {});
    //   return;
    // }
    const toPiece = this.pieceAt(toX, toY);
    //console.log(`${toPiece}`);
    if (toPiece === PieceTypes.Blank || toPiece === PieceTypes.Target) {
      this.pushAnimation(curY * this.width + curX, dir, ANIM_CIRCLE.Circle, ANIM_TYPE.Move, 0,
        () => {
          this.circlePos[0] = this.circlePos[0] + dx;
          this.circlePos[1] = this.circlePos[1] + dy;
          if (this.circlePos[1] === 0) {
            this.nextLevel();
          }
        });
      return;
    }
    if (toPiece !== PieceTypes.WhiteX) {
      this.handlePieceMove(toX, toY, dx, dy, dir, 1);
    }
    //console.log(`pushing cicle bump anim`);
    this.pushAnimation(curY * this.width + curX, dir, ANIM_CIRCLE.Circle, ANIM_TYPE.Bump, 0,
      () => {});
    return;
}
}

const board = new Board();

const canvas = document.getElementById('canvas');
//const ctx = canvas.getContext('2d');

let dpr = 1.0;

let windowFullySized = false;

function resizeCanvas() {
  dpr = window.devicePixelRatio || 1;
  const oldRatio = canvas.width / canvas.height;
  canvas.width = canvas.clientWidth * dpr;
  canvas.height = canvas.clientHeight * dpr;
  // console.log(`Window size: ${window.innerWidth}, ${window.innerHeight}`);
  // console.log(`Body size: ${document.body.width}, ${window.innerHeight}`);
  // console.log(`DPI is ${dpr}, resizing to ${canvas.width} x ${canvas.height}`);
  //animate(0);
  //console.log(`${canvas.clientHeight} ==? ${window.innerHeight}`);
  windowFullySized = canvas.clientHeight === window.innerHeight;
  draw(0);
  const newRatio = canvas.width / canvas.height;
  if (oldRatio <= 1 && newRatio > 1) {
    handleRotation(true);
  } else if (newRatio <= 1 && oldRatio > 1) {
    handleRotation(false);
  }
}

let scrollOffsetsZero = true;

document.addEventListener("scroll", (event) => {
  scrollOffsetsZero = window.scrollX === 0 && window.scrollY === 0;
  // console.log(`scroll pos: ${window.scrollX}, ${window.scrollY}, ${window.innerHeight}`);
});


window.addEventListener('resize', resizeCanvas);

function draw(time) {
  var ctx = canvas.getContext('2d');
  ctx.save();
  board.draw(ctx, time);
  ctx.restore();
}

function animate(time) {
  if (Object.keys(board.animations).length) {
    requestAnimationFrame(animate);
  } else {
    board.checkForQueuedMoves();
  }
  draw(time);
}

animate(0);

document.addEventListener("keydown", evt => {
  if (evt.isComposing) {
    return;
  }
  if (evt.key === "ArrowDown") {
    board.handleMove(DIRECTION.Down);
  } else if (evt.key === "ArrowLeft") {
    board.handleMove(DIRECTION.Left);
  } else if (evt.key === "ArrowUp") {
    board.handleMove(DIRECTION.Up);
  } else if (evt.key === "ArrowRight") {
    board.handleMove(DIRECTION.Right);
  } else if (evt.key === "r") {
    board.loadLevel(board.level);
    draw(0);
  } else if (evt.key === "s") {
    board.nextLevel();
    draw(0);
  } else {
    return;
  }
  document.getElementById('controls').style.opacity = 0;
});

const touches = {};

function checkTouchListeners() {
  function touchstart(evt) {
    for (let i = 0; i < evt.touches.length; i++) {
      const touch = evt.touches[i];
      touches[touch.identifier] = [touch.clientX, touch.clientY];
      console.log(`start ${touch.identifier}`);
    }
  }
  function touchmove(evt) {
  }
  function touchcancel(evt) {
    for (let i = 0; i < evt.changedTouches.length; i++) {
      console.log(`cancel ${evt.changedTouches[i].identifier}`);
      delete touches[evt.changedTouches[i].identifier];
    }
  }
  function touchend(evt) {
    for (let i = 0; i < evt.changedTouches.length; i++) {
      console.log(`end ${evt.changedTouches[i].identifier}`);
      const touch = evt.changedTouches[i];
      // console.log(`id: ${touch.identifier}`);
      // console.log(`touches: ${JSON.stringify(touches)}`);
      const dx = touch.clientX - touches[touch.identifier][0];
      const dy = touch.clientY - touches[touch.identifier][1];

      const THRESH = 50;
      if (Math.abs(dx) > Math.abs(dy) * 2 && Math.abs(dx) > THRESH) {
        board.handleMove(dx > 0 ? DIRECTION.Right : DIRECTION.Left);
      } else if (Math.abs(dy) > Math.abs(dx) * 2 && Math.abs(dy) > THRESH) {
        board.handleMove(dy > 0 ? DIRECTION.Down : DIRECTION.Up);
      }

      delete touches[evt.changedTouches[i].identifier];
    }
  }

  // Enable touch listeners
  document.body.addEventListener("touchstart", touchstart, false);
  document.body.addEventListener("touchmove", touchmove, false);
  document.body.addEventListener("touchcancel", touchcancel, false);
  document.body.addEventListener("touchend", touchend, false);
  document.body.style.touchAction = "none";
}

function handleReloadClick(evt) {
  board.loadLevel(board.level);
  draw(0);
  evt.stopPropagation();
}

const reloadTouches = {};

function handleReloadTouchstart(evt) {
  for (let i = 0; i < evt.touches.length; i++) {
    const touch = evt.touches[i];
    reloadTouches[touch.identifier] = [touch.clientX, touch.clientY];
  }
  evt.stopPropagation();
}

function handleReloadTouchmove(evt) {
  evt.stopPropagation();
}

function handleReloadTouchcancel(evt) {
  for (let i = 0; i < evt.changedTouches.length; i++) {
    console.log(`rcancel ${evt.changedTouches[i].identifier}`);
    delete reloadTouches[evt.changedTouches[i].identifier];
  }
  evt.stopPropagation();
}

function handleReloadTouchend(evt) {
  for (let i = 0; i < evt.changedTouches.length; i++) {
    console.log(`end ${evt.changedTouches[i].identifier}`);
    const touch = evt.changedTouches[i];
    // console.log(`id: ${touch.identifier}`);
    // console.log(`touches: ${JSON.stringify(touches)}`);
    const dx = touch.clientX - reloadTouches[touch.identifier][0];
    const dy = touch.clientY - reloadTouches[touch.identifier][1];

    const THRESH = 150;
    if (Math.abs(dx) > Math.abs(dy) * 2 && Math.abs(dx) > THRESH) {
      if (dx > 0) {
        //console.log(`next level`);
        board.nextLevel();
      }
    }

    delete reloadTouches[evt.changedTouches[i].identifier];
  }
  evt.stopPropagation();
}

function handleFourwayClick(evt) {
  console.log(`fourway clicked`);
  const elt = document.getElementById('fourway');
  const x = evt.clientX - elt.offsetLeft;
  const y = evt.clientY - elt.offsetTop;
  if (x > y) {
    if (y > (elt.clientHeight - x)) {
      board.handleMove(DIRECTION.Right);
    } else {
      board.handleMove(DIRECTION.Up);
    }
  } else {
    if (y > (elt.clientHeight - x)) {
      board.handleMove(DIRECTION.Down);
    } else {
      board.handleMove(DIRECTION.Left);
    }
  }
  evt.stopPropagation();
}

function setControlsHandlers(enabled) {
  if (enabled) {
    console.log(`enable fourway`);
    document.getElementById('reload').addEventListener('click', handleReloadClick, false);  
    document.getElementById('fourway').addEventListener('click', handleFourwayClick, false);
    document.getElementById('reload').addEventListener("touchstart", handleReloadTouchstart, false);
    document.getElementById('reload').addEventListener("touchmove", handleReloadTouchmove, false);
    document.getElementById('reload').addEventListener("touchcancel", handleReloadTouchcancel, false);
    document.getElementById('reload').addEventListener("touchend", handleReloadTouchend, false);
  } else {
    console.log(`disable fourway`);
    document.getElementById('reload').removeEventListener('click', handleReloadClick, false);  
    document.getElementById('fourway').removeEventListener('click', handleFourwayClick, false);
    document.getElementById('reload').removeEventListener("touchstart", handleReloadTouchstart, false);
    document.getElementById('reload').removeEventListener("touchmove", handleReloadTouchmove, false);
    document.getElementById('reload').removeEventListener("touchcancel", handleReloadTouchcancel, false);
    document.getElementById('reload').removeEventListener("touchend", handleReloadTouchend, false);
  }
}
setControlsHandlers(true);

const CONTROLS = document.getElementById('controls');

function getControlsOpacity() {
  return parseFloat(window.getComputedStyle(CONTROLS).opacity);
}

function setControlsOpacity(opacity) {
  CONTROLS.style.opacity = opacity;
  setControlsHandlers(opacity > 0.01);
}

function handleRotation(enterLandscape) {
  const opacity = getControlsOpacity();
  if (enterLandscape && opacity > 0.99) {
    setControlsOpacity(0.4);
  } else if (!enterLandscape && opacity < 0.01) {
    setControlsOpacity(0.4);
  }
}

document.getElementById('controls').addEventListener('click', evt => {
  const opacity = getControlsOpacity();
  const newOpacity = (opacity === 0) ? 1 : (opacity === 1) ? 0.4 : 0;
  //console.log(`opacity: ${opacity} -> ${newOpacity}`);
  setControlsOpacity(newOpacity);
}, false);

resizeCanvas();
checkTouchListeners();
