/*
	Flooop Applet (c) 1998 Andy de los Reyes. All Rights Reserved.
	see http://www.digicron.com/adler/
*/

import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.net.*;
import java.applet.*;

public class FlooopApplet extends Applet {
	final int WON = 1;
	final int LOST = 0;

	public static Piece level[][] = new Piece[10][15];
	Image blankImage,circleImage,fourWayImage,redXImage,upDownImage,leftRightImage;
	Image targetImage,targetWFlooopImage,upImage,downImage,leftImage,rightImage,whiteXImage;
	public int y,x,paint_ya,paint_xa,paint_yb,paint_xb,currentLevel;
	MediaTracker tracker;
	String levelAuthor = " ";
	String levelString = "one^";

	public void init() {
		currentLevel = 1;
		Toolkit t = Toolkit.getDefaultToolkit();
		URL u;
		System.out.println("**01");
		System.out.println("**0a");
		blankImage = getImage(getCodeBase(), "Black.gif");
		fourWayImage = getImage(getCodeBase(), "FourWay.gif");
		leftRightImage = getImage(getCodeBase(), "LeftRight.gif");
		redXImage = getImage(getCodeBase(), "RedX.gif");
		upDownImage = getImage(getCodeBase(), "UpDown.gif");
		upImage = getImage(getCodeBase(), "Up.gif");
		circleImage = getImage(getCodeBase(), "Circle.gif");
		downImage = getImage(getCodeBase(), "Down.gif");
		leftImage = getImage(getCodeBase(), "Left.gif");
		rightImage = getImage(getCodeBase(), "Right.gif");
		targetImage = getImage(getCodeBase(), "Target.gif");
		targetWFlooopImage = getImage(getCodeBase(), "TargetWFlooop.gif");
		whiteXImage = getImage(getCodeBase(), "WhiteX.gif");
		System.out.println("**0b");
		System.out.println("**02");
		tracker = new MediaTracker(this); // load all the images
		System.out.println("**03");
		tracker.addImage(blankImage,0);
		tracker.addImage(circleImage,0);
		tracker.addImage(fourWayImage,0);
		tracker.addImage(leftRightImage,0);
		tracker.addImage(redXImage,0);
		tracker.addImage(upDownImage,0);
		tracker.addImage(upImage,0);
		tracker.addImage(downImage,0);
		tracker.addImage(leftImage,0);
		tracker.addImage(rightImage,0);
		tracker.addImage(targetImage,0);
		tracker.addImage(targetWFlooopImage,0);
		tracker.addImage(whiteXImage,0);
		System.out.println("**04");
		defineLevel();
		try {
			tracker.waitForID(0);
		} catch (InterruptedException ie) {
			System.out.println("Image Loading was Interrupted");
			ie.printStackTrace();
		}
		System.out.println("**05");
		
		Graphics g = this.getGraphics();
		paint(g);
		g.dispose();
		
		addKeyListener (
			new KeyListener() {
				public void keyReleased(KeyEvent e) {
					switch (e.getKeyCode()) {
						case KeyEvent.VK_LEFT: System.out.println("< left"); level[y][x].moveLeft(); break;
						case KeyEvent.VK_RIGHT: System.out.println("> right"); level[y][x].moveRight(); break;
						case KeyEvent.VK_UP: System.out.println("^ up"); level[y][x].moveUp(); break;
						case KeyEvent.VK_DOWN: System.out.println("v down"); level[y][x].moveDown(); break;
						case KeyEvent.VK_ESCAPE: System.out.println("Bye!"); exit(LOST); break;
						case KeyEvent.VK_F: test(); break;
						case KeyEvent.VK_S: beatLevel(); break;
						case KeyEvent.VK_R: defineLevel(); break;
					}
				}
				public void keyPressed(KeyEvent e) { }
				public void keyTyped(KeyEvent e) { }
			}
		);
//		addMouseListener(this);
	}

	//To Replace the KeyListener which didn't work on some computers
//	public void mouseClicked(MouseEvent evt) {
//		int evtx = evt.getX();
//		int evty = evt.getY() - 20;
//		System.out.println("Click: (" + evtx + "," + evty + ")");
//		evtx /= 32;
//		evty /= 32;
//		System.out.println("Space: (" + evtx + "," + evty + ")");
//		if ( (evtx > x) && (evty == y) ) { level[y][x].moveRight(); }
//		else if ( (evtx < x) && (evty == y) ) { level[y][x].moveLeft(); }
//		else if ( (evty > y) && (evtx == x) ) { level[y][x].moveDown(); }
//		else if ( (evty < y) && (evtx == x) ) { level[y][x].moveUp(); }
//	}
//	public void mousePressed(MouseEvent evt) { System.out.println("mousePressed()"); }  // do nothing
//	public void mouseReleased(MouseEvent evt) { System.out.println("mouseReleased()"); } // do nothing
//	public void mouseEntered(MouseEvent evt) { System.out.println("mouseEntered()"); }  // do nothing
//	public void mouseExited(MouseEvent evt) { System.out.println("mouseExited()"); }   // do nothing

	void beatLevel() {
		if (currentLevel < 12) {currentLevel++; defineLevel();} else {exit(WON);}
	}

	void exit(int where) {
		try {
			switch (where) {
				case WON: this.getAppletContext().showDocument( new URL(this.getDocumentBase() + "won.html") ); break;
				case LOST: this.getAppletContext().showDocument( new URL(this.getDocumentBase() + "lost.html") ); break;
			}
		} catch (MalformedURLException murle) {
			murle.printStackTrace();
		}
	}

	void test() {
		Graphics g = this.getGraphics();
		g.fillRect(0,0,480,320);
		g.dispose();
	}

	public void defineLevel(){
		try {
			char c = ' ';
			int by;
			String filename;
			StringBuffer sb = new StringBuffer();
			System.out.println("** 0");
			System.out.println("** 1");
			System.out.println("** 2");
			filename = "Classic" + (currentLevel < 10? "0":"") + Integer.toString(currentLevel) + ".flv";
			System.out.println("** 3");
			System.out.println("** 4");
			switch (currentLevel) {
				case 1: levelString = "one"; break;
				case 2: levelString = "two"; break;
				case 3: levelString = "three"; break;
				case 4: levelString = "four"; break;
				case 5: levelString = "five"; break;
				case 6: levelString = "six"; break;
				case 7: levelString = "seven"; break;
				case 8: levelString = "eight"; break;
				case 9: levelString = "nine"; break;
				case 10: levelString = "ten"; break;
				case 11: levelString = "eleven"; break;
				case 12: levelString = "twelve"; break;
			}
			System.out.println("** 5");
			System.out.println("** 6");
			InputStream fis = FlooopApplet.class.getResourceAsStream(filename);
			System.out.println(fis.available());
			for (int i = 0; i < 10; i++) {
				for (int j = 0; j < 15; j++) {
					by = fis.read();
					c = (char)by;
					System.out.println( ">>> " + c );
					switch (c) {
						case '0' : level[i][j] = new Blank(i,j); break;
						case '1' : level[i][j] = new Circle(i,j); y = i; x = j; break;
						case '2' : level[i][j] = new UpDown(i,j); break;
						case '3' : level[i][j] = new LeftRight(i,j); break;
						case '4' : level[i][j] = new FourWay(i,j); break;
						case '5' : level[i][j] = new RedX(i,j); break;
						case '6' : level[i][j] = new WhiteX(i,j); break;
						case '7' : level[i][j] = new Up(i,j); break;
						case '8' : level[i][j] = new Right(i,j); break;
						case '9' : level[i][j] = new Down(i,j); break;
						case 'a' : level[i][j] = new Left(i,j); break;
						case 'b' : level[i][j] = new Target(i,j); break;
						case 'c' : level[i][j] = new TargetWFlooop(i,j); y = i; x = j; break;
					}
				}
			}
			while (c != '[') {
				by = fis.read();
				c = (char)by;
			}
			c = (char)fis.read();
			while (c !=']') {
				sb.append(c);
				by = fis.read();
				c = (char)by;
			}
			levelAuthor = sb.toString();
			System.out.println(levelAuthor);
			fis.close();
		} catch (FileNotFoundException fnfe) {
			fnfe.printStackTrace();
		} catch (SecurityException se) {
			se.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		}
		Piece.setBoard(this);
		Graphics g = this.getGraphics();
		paint(g);
		g.dispose();
		
	}

	public void swap(int ya, int xa, int yb, int xb) {
		if ( (level[ya][xa] instanceof Up) ||
		     (level[ya][xa] instanceof Right) ||
		     (level[ya][xa] instanceof Left) ||
		     (level[ya][xa] instanceof Down) ||
		     (level[yb][xb] instanceof Up) ||
		     (level[yb][xb] instanceof Right) ||
		     (level[yb][xb] instanceof Left) ||
		     (level[yb][xb] instanceof Down) ) {
			reflexiveSwap(ya,xa,yb,xb);
		} else if ( (level[ya][xa] instanceof Target) && (level[yb][xb] instanceof Blank) ) {
			normalSwap(ya,xa,yb,xb);
		} else if ( (level[ya][xa] instanceof Blank) && (level[yb][xb] instanceof Target) ) {
			normalSwap(ya,xa,yb,xb);
		} else if ( (level[ya][xa] instanceof Target) ||
		            (level[ya][xa] instanceof TargetWFlooop) ||
		            (level[yb][xb] instanceof Target) ||
		            (level[yb][xb] instanceof TargetWFlooop) ) {
			complexSwap(ya,xa,yb,xb);
		} else {
			normalSwap(ya,xa,yb,xb);
		}
		paint_ya = ya;
		paint_yb = yb;
		paint_xa = xa;
		paint_xb = xb;		
		repaint();

	}
		
	void normalSwap(int ya, int xa, int yb, int xb) {
		try {
			Piece p;

			System.out.println("Swap2(" + ya + "," + xa + "," + yb + "," + xb + ")");

			p = level[ya][xa];
			level[ya][xa] = level[yb][xb];
			level[yb][xb] = p;
			
			level[ya][xa].setYX(ya,xa);
			level[yb][xb].setYX(yb,xb);
			
			if (level[ya][xa] instanceof Circle) {
				y = ya;
				x = xa;
			}

			if (level[yb][xb] instanceof Circle) {
				y = yb;
				x = xb;
			}
		} catch (ArrayIndexOutOfBoundsException aioobe) {
			System.out.println("Went off the board");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		if (y == 0) {
			System.out.println("\\ / /~~\\  |  |    |  | | | |\\  |");
			System.out.println(" | |    | |  |    |  | | | | \\ |");
			System.out.println(" |  \\__/  \\__/     \\/\\/  | |  \\|");
			beatLevel();
		}
	}

	void reflexiveSwap(int ya, int xa, int yb, int xb) {
		System.out.println("Swap2(" + ya + "," + xa + "," + yb + "," + xb + ")");

		Piece p;

		p = level[ya][xa];
		level[ya][xa] = level[yb][xb];
		level[yb][xb] = p;
		
		level[ya][xa].setYX(ya,xa);
		level[yb][xb].setYX(yb,xb);
		
		if ( (level[ya][xa] instanceof Circle) || (level[ya][xa] instanceof TargetWFlooop) ) {
			y = ya;
			x = xa;
		}

		if ( (level[yb][xb] instanceof Circle) || (level[yb][xb] instanceof TargetWFlooop) ) {
			y = yb;
			x = xb;
		}
	}

	void complexSwap(int ya, int xa, int yb, int xb) {
		if (level[ya][xa] instanceof Circle) {
				level[ya][xa] = new Blank(ya,xa);
				level[yb][xb] = new TargetWFlooop(yb,xb);
				x = xb;
				y = yb;
		} else if (level[yb][xb] instanceof Circle) {
				level[yb][xb] = new Blank(yb,xb);
				level[ya][xa] = new TargetWFlooop(ya,xa);
				x = xa;
				y = ya;
		} else if (level[ya][xa] instanceof TargetWFlooop) {
			if (level[yb][xb] instanceof Blank) {
				level[yb][xb] = new Circle(yb,xb);
				level[ya][xa] = new Target(ya,xa);
				y = yb;
				x = xb;
			} else if (level[yb][xb] instanceof Target) {
				System.out.println("Swap2(" + ya + "," + xa + "," + yb + "," + xb + ")");
				Piece p;

				p = level[ya][xa];
				level[ya][xa] = level[yb][xb];
				level[yb][xb] = p;
				
				level[ya][xa].setYX(ya,xa);
				level[yb][xb].setYX(yb,xb);
				
				y = yb;
				x = xb;

			}
		} else if (level[yb][xb] instanceof TargetWFlooop) {
			if (level[ya][xa] instanceof Blank) {
				level[ya][xa] = new Circle(ya,xa);
				level[yb][xb] = new Target(yb,xb);
				y = ya;
				x = xa;
			} else if (level[ya][xa] instanceof Target) {
				System.out.println("Swap2(" + ya + "," + xa + "," + yb + "," + xb + ")");
				Piece p;

				p = level[ya][xa];
				level[ya][xa] = level[yb][xb];
				level[yb][xb] = p;
				
				level[ya][xa].setYX(ya,xa);
				level[yb][xb].setYX(yb,xb);
				
				y = ya;
				x = xa;

			}
		}
	}

	public void update(Graphics g) {
		for (int i = 0; i < 2; i++) {
			if (i == 1) { paint_ya = paint_yb; paint_xa = paint_xb; }
			if (level[paint_ya][paint_xa] instanceof Blank) {
				g.drawImage(blankImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof Circle) {
				g.drawImage(circleImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof UpDown) {
				g.drawImage(upDownImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof LeftRight) {
				g.drawImage(leftRightImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof FourWay) {
				g.drawImage(fourWayImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof RedX) {
				g.drawImage(redXImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof WhiteX) {
				g.drawImage(whiteXImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof Up) {
				g.drawImage(upImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof Right) {
				g.drawImage(rightImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof Down) {
				g.drawImage(downImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof Left) {
				g.drawImage(leftImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof Target) {
				g.drawImage(targetImage,32*paint_xa,32*paint_ya + 20,this);
			} else if (level[paint_ya][paint_xa] instanceof TargetWFlooop) {
				g.drawImage(targetWFlooopImage,32*paint_xa,32*paint_ya + 20,this);
			}
		}
	}

	public void paint(Graphics g) {
		System.out.println("Board.paint()");
		g.setColor( Color.black );
		g.fillRect(0,0,480,20);
		g.fillRect(0,340,480,20);
		g.setColor( Color.white );
		g.setFont( new Font("Serif", Font.PLAIN, 12) );
		g.drawString( "Level " + levelString + " by " + levelAuthor + ".", 3, 14 );
		g.drawString( "FlooopApplet (c) 1998 Andy de los Reyes. All Rights Reserved.    adler@digicron.com", 3, 354 );
		for ( int i = 0; i < 10; i++) {
			System.out.println("here");
			for ( int j = 0; j < 15; j++) {
				if (level[i][j] instanceof Blank) {
					g.drawImage(blankImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof Circle) {
					g.drawImage(circleImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof LeftRight) {
					g.drawImage(leftRightImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof UpDown) {
					g.drawImage(upDownImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof FourWay) {
					g.drawImage(fourWayImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof RedX) {
					g.drawImage(redXImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof Up) {
					g.drawImage(upImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof Down) {
					g.drawImage(downImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof Left) {
					g.drawImage(leftImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof Right) {
					g.drawImage(rightImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof WhiteX) {
					g.drawImage(whiteXImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof Target) {
					g.drawImage(targetImage,32*j,32*i + 20,this);
				} else if (level[i][j] instanceof TargetWFlooop) {
					g.drawImage(targetWFlooopImage,32*j,32*i + 20,this);
				}
			}
		}
	}
}
