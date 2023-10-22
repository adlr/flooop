class Left extends Piece {
	Left(int yy, int xx) {
		y = yy;
		x = xx;
	}

	void swapLeft() {
		if (!(b.level[y][x-1] instanceof RedX)) {
			b.swap(y,x-1,y,x);
		}
	}

	public void moveUp() {
		swapLeft();
	}
	
	public void moveDown() {
		swapLeft();
	}
	
	public void moveLeft() {
		swapLeft();
	}
	
	public void moveRight() {
		swapLeft();
	}
}