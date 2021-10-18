
class Ball
{
    
    constructor()
    {
        this.x = width / 2;
        this.y = height / 2;
        this.varianceX = 2.5, this.varianceY = 0;
        this.speed = 7;
        this.radius = 15;
        this.isReady = false;
    }
    touchedTop()
    {
        return this.y - this.radius < 0;
    }
    touchedBottom()
    {
        return this.y + this.radius > height;
    }
    touchedLeft()
    {
        if(this.x - this.radius < 0)
        {
            score2 ++;
            player2.batLength += 10
            return true;
        }
        return false;
    }
    touchedRight()
    {
        if (this.x + this.radius >= width)
        {
            score1 ++;
            player1.batLength += 10

            return true;
        }
        return false;
    }
    reset()
    {
            this.x = width / 2;
            this.y = height / 2;
            this.varianceX = -this.varianceX;
            this.varianceY = -this.varianceY;
    }
    update()
    {
        fill(r, g, b);
        circle(this.x, this.y, this.radius * 2);
        
        if(this.isReady)
        {
            this.x += this.speed * this.varianceX;
            this.y += this.speed * this.varianceY;
        }
        
        // If ball is touching top
        if(this.touchedTop())
        {
            this.varianceY = 2;
        }
        // If ball is touching bottom
        if(this.touchedBottom())
        {
            this.varianceY = -2;
        }
        // Touched left
        if (this.touchedLeft())
        {
            this.reset()
            this.isReady = false;
                this.varianceY = 0;



        }
        // Touched right
        if (this.touchedRight())
        {   

            this.reset();
            this.varianceY = 0;
            this.isReady = false;
            

        }
        
        
    }
   
}