class Target extends Piece {
	Target(int yy, int xx) {
		y = yy;
		x = xx;
	}
	
	public void moveUp() {
		//System.out.println("FourWay.moveUp()");
		if (b.level[y-1][x] instanceof Blank) {
			b.swap(y-1,x,y,x);
		} else {
			b.level[y-1][x].moveUp();
		}
	}
	
	public void moveDown() {
		//System.out.println("FourWay.moveDown()");
		if (b.level[y+1][x] instanceof Blank) {
			b.swap(y+1,x,y,x);
		} else {
			b.level[y+1][x].moveDown();
		}
	}
	
	public void moveLeft() {
		//System.out.println("FourWay.moveLeft()");
		if (b.level[y][x-1] instanceof Blank) {
			b.swap(y,x-1,y,x);
		} else {
			b.level[y][x-1].moveLeft();
		}
	}
	
	public void moveRight() {
		//System.out.println("FourWay.moveRight()");
		if (b.level[y][x+1] instanceof Blank) {
			b.swap(y,x+1,y,x);
		} else {
			b.level[y][x+1].moveRight();
		}
	}
}