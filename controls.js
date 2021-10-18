function keyPressed()
{
	txt =  keyCode;
	if (key == "p" || key == "q" )
	{
		ball.isReady = true;
	}
	if (key == "P" || key == "Q" )
	{
		ball.isReady = false;
	}
	if (keyCode == 87)
	{
		// Player1 Move up
		player1.up = true

	}
	if (keyCode == 83)
	{
		// Player1 Move Down
		player1.down = true;

	}
	if (keyCode == 38)
	{
		// player2 move up
		player2.up = true
	}
	if (keyCode == 40)
	{
		// player2 move down
		player2.down = true;
	}
}
function keyReleased()
{
	if (keyCode == 87)
	{
		// Player1 Move up
		player1.up = false;

	}
	if (keyCode == 83)
	{
		// Player1 Move Down
		player1.down = false;

	}
	if (keyCode == 38)
	{
		// player2 move up
		player2.up = false;
	}
	if (keyCode == 40)
	{
		// player2 move down
		player2.down = false;
	}
}