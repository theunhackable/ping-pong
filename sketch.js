let ball;
let player1, player2;
let score1, score2;
let half, qurter;
let r, g, b;
function setup() 
{

	createCanvas(windowWidth, windowHeight);
	background(30, 0, 30);
	ball = new Ball();
	score1 = 0;
	score2 = 0;
	player1 = new Bat(75, height / 2 - 50);
	player2 = new Bat(width - 100, height/2 - 50);
	half = player1.batLength / 2;
	qurter = half/ 2;

}	
function draw() 
{

	background(30, 0, 30);


	fill(255);
	textSize(108);
	text(`${score1} - ${score2}`, width / 2 - 100, height / 2)
	player1.update();
	player2.update();
	ball.update();
	checkCollisionWithPlayer1();
	checkCollisionWithPlayer2();
	


}

function checkCollisionWithPlayer1()
{
	let upper_circuit = player1.x + player1.batWidth;
	if( ball.x - ball.radius <= upper_circuit && ( ball.y - ball.radius < player1.y + player1.batLength && ball.y + ball.radius > player1.y ) && ( ball.x > player1.x ) )
	{
		ball.varianceX = 2.5;
		 
		if( ball.y + ball.radius < player1.y + player1.batLength / 2 )
		{
			ball.varianceY = -random(1, 3);
		}
		else 
		{
			ball.varianceY = random(1, 3);
		}
		r = random(100, 255);
		g = random(100, 255);
		b = random(100, 255);


	}




}
function checkCollisionWithPlayer2()
{
	if ( ball.x + ball.radius >= player2.x && (ball.y + ball.radius >= player2.y && ball.y - ball.radius < player2.y + player2.batLength ) && ( ball.x < player2.x + player2.batWidth) )
	{
		ball.varianceX = -2.5;
		if( ball.y + ball.radius < player2.y + player2.batLength / 2 )
		{
			ball.varianceY = -random(1, 3);
		}
		else 
		{
			ball.varianceY = random(1, 3);
		}
		r = random(150, 255);
		g = random(150, 255);
		b = random(150, 255);
	}
}
	
