import java.applet.*;

public class Piece {
	int x,y;
	
//	static Piece level[][];
	static FlooopApplet b;

//	Piece(int yy,int xx) {
//		y = yy;
//		x = xx;
//	}
	
	public void setYX(int yy,int xx) {
		y = yy;
		x = xx;
	}
	
//	public static void setlevel(Piece lev[][]) {
//		level = lev;
//	}
	
	public static void setBoard(FlooopApplet bb) {
		b = bb;
	}
	
	public void moveUp() {}
	public void moveDown() {}
	public void moveLeft() {}
	public void moveRight() {}
	
//	public void swap(int ya,int xa,int yb,int xb) {}
}