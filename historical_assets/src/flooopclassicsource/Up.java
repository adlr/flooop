class Up extends Piece {
	Up(int yy, int xx) {
		y = yy;
		x = xx;
	}

	void swapUp() {
		if (!(b.level[y-1][x] instanceof RedX)) {
			b.swap(y-1,x,y,x);
		}
	}

	public void moveUp() {
		swapUp();
	}
	
	public void moveDown() {
		swapUp();
	}
	
	public void moveLeft() {
		swapUp();
	}
	
	public void moveRight() {
		swapUp();
	}
}