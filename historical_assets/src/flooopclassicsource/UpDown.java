class UpDown extends Piece {
	UpDown(int yy, int xx) {
		y = yy;
		x = xx;
	}

	public void moveUp() {
		//System.out.println("UpDown.moveUp()");
		if (b.level[y-1][x] instanceof Blank) {
			b.swap(y-1,x,y,x);
		} else {
			b.level[y-1][x].moveUp();
		}
	}

	public void moveDown() {
		//System.out.println("UpDown.moveDown()");
		if (b.level[y+1][x] instanceof Blank) {
			b.swap(y+1,x,y,x);
		} else {
			b.level[y+1][x].moveDown();
		}
	}
}