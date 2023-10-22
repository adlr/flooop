class TargetWFlooop extends Piece {
	TargetWFlooop(int yy, int xx) {
		y = yy;
		x = xx;
	}

	public void moveUp() {
		//System.out.println("Circle.moveUp()");
		//System.out.println("[" + y + "," + x + "]");
		if ( (b.level[y-1][x] instanceof Blank) || (b.level[y-1][x] instanceof Target) ) {
			b.swap(y-1,x,y,x);
		} else {
			b.level[y-1][x].moveUp();
		}
	}
	
	public void moveDown() {
		//System.out.println("Circle.moveDown()");
		//System.out.println("[" + y + "," + x + "]");
		if ( (b.level[y+1][x] instanceof Blank) || (b.level[y+1][x] instanceof Target) ) {
			b.swap(y+1,x,y,x);
		} else {
			b.level[y+1][x].moveDown();
		}
	}
	
	public void moveLeft() {
		//System.out.println("Circle.moveLeft()");
		//System.out.println("[" + y + "," + x + "]");
		if ( (b.level[y][x-1] instanceof Blank) || (b.level[y][x-1] instanceof Target)  ) {
			//System.out.println("It's blank");
			b.swap(y,x-1,y,x);
		} else {
			b.level[y][x-1].moveLeft();
		}
	}
	
	public void moveRight() {
		//System.out.println("Circle.moveRight()");
		//System.out.println("[" + y + "," + x + "]");
		if ( (b.level[y][x+1] instanceof Blank) || (b.level[y][x+1] instanceof Target) ) {
			b.swap(y,x+1,y,x);
		} else {
			b.level[y][x+1].moveRight();
		}
	}
}