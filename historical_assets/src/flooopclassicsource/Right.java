class Right extends Piece {
	Right(int yy, int xx) {
		y = yy;
		x = xx;
	}

	void swapRight() {
		if (!(b.level[y][x+1] instanceof RedX)) {
			b.swap(y,x+1,y,x);
		}
	}

	public void moveUp() {
		swapRight();
	}
	
	public void moveDown() {
		swapRight();
	}
	
	public void moveLeft() {
		swapRight();
	}
	
	public void moveRight() {
		swapRight();
	}
}