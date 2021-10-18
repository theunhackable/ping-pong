class Bat
{
    constructor(batX, batY)
    {
        this.batLength = 150;
        this.batWidth = 15
        this.x = batX;
        this.y = batY;
        this.speed = 20;
        this.up = this.down = false;
    }
    update()
    {
        fill(255);
        rect(this.x, this.y, this.batWidth, this.batLength);
        if(this.up)
        {
            if (this.y > 0)
                this.y -= this.speed;

            
        }
        if(this.down)
        {
            if (this.y + this.batLength < height )
                this.y += this.speed;
        }
    }
}