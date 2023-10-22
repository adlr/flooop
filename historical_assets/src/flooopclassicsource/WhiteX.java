class WhiteX extends Piece {
	WhiteX(int yy, int xx) {
		y = yy;
		x = xx;
	}
	
	public void moveUp() {
		if (!(b.level[y+1][x] instanceof Circle) && !(b.level[y+1][x] instanceof TargetWFlooop) ) {
			if (b.level[y-1][x] instanceof Blank) {
				b.swap(y-1,x,y,x);
			} else {
				b.level[y-1][x].moveUp();
			}
		}
	}

	public void moveDown() {
		if (!(b.level[y-1][x] instanceof Circle) && !(b.level[y-1][x] instanceof TargetWFlooop) ) {
			if (b.level[y+1][x] instanceof Blank) {
				b.swap(y+1,x,y,x);
			} else {
				b.level[y+1][x].moveDown();
			}
		}
	}
	
	public void moveLeft() {
		if (!(b.level[y][x+1] instanceof Circle) && !(b.level[y][x+1] instanceof TargetWFlooop) ) {
			if (b.level[y][x-1] instanceof Blank) {
				b.swap(y,x-1,y,x);
			} else {
				b.level[y][x-1].moveLeft();
			}
		}
	}
	
	public void moveRight() {
		if (!(b.level[y][x-1] instanceof Circle) && !(b.level[y][x-1] instanceof TargetWFlooop) ) {
			if (b.level[y][x+1] instanceof Blank) {
				b.swap(y,x+1,y,x);
			} else {
				b.level[y][x+1].moveRight();
			}
		}
	}
}