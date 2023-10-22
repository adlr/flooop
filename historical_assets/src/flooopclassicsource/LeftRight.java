class LeftRight extends Piece {
	LeftRight(int yy, int xx) {
		y = yy;
		x = xx;
	}

	public void moveLeft() {
		//System.out.println("LeftRight.moveLeft()");
		if (b.level[y][x-1] instanceof Blank) {
			b.swap(y,x-1,y,x);
		} else {
			b.level[y][x-1].moveLeft();
		}
	}
	
	public void moveRight() {
		//System.out.println("LeftRight.moveRight()");
		if (b.level[y][x+1] instanceof Blank) {
			b.swap(y,x+1,y,x);
		} else {
			b.level[y][x+1].moveRight();
		}
	}

}