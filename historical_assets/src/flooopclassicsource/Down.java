class Down extends Piece {
	Down(int yy, int xx) {
		y = yy;
		x = xx;
	}

	void swapDown() {
		if (!(b.level[y+1][x] instanceof RedX)) {
			b.swap(y+1,x,y,x);
		}
	}

	public void moveUp() {
		swapDown();
	}
	
	public void moveDown() {
		swapDown();
	}
	
	public void moveLeft() {
		swapDown();
	}
	
	public void moveRight() {
		swapDown();
	}
}