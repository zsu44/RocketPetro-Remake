class ship extends Phaser.GameObject.Sprite{
    consturctor(scene,x,y,texture,frame){
        super(scene,x,y,texture, frame);
        scene.add.existing(this);
    }

    update(){
        this.x -= 2;

        if(this.x < -this.width){
            this.x = game.configt.width;
        }
    }
}