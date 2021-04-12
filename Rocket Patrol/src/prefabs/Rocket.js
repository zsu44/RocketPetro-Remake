class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture,frame){
        super(scene,x,y,texture,frame);
        scene.add.existing(this);
        this.movementSpeed = 2;
        this.isFiring = false;
    }
    update(){
        if(this.isFiring){
            this.y -= this.movementSpeed;
            if(this.y < borderUISize*2){
                this.y= game.config.height - borderUISize - borderPadding;
                this.isFiring = false;
            }
        } else{
        if(keyLEFT.isDown){
            this.x -= this.movementSpeed;
        }
        if(keyRIGHT.isDown){
            this.x += this.movementSpeed;
        }
        if(Phaser.Input.Keyboard.JustDown(keyF)){
            this.isFiring = ture;
        }

        this.x = Phaser.Math.Clamp(this.x, 
            borderUISize+borderPadding, 
            game.config.width - borderUISize - borderPadding);
    }
  }   
}