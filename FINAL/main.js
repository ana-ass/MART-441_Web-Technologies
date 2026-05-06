/*
Author: Anabel Assante
File Name: Final index.html
Date: 05/06/2026
Purpose: Final - Phaser.io
*/

//defining Base Level, building of the game
class BaseLevel extends Phaser.Scene {
    constructor(key) {
        super({key});
//want wolves to be chosen to spawn
        this.shouldSpawnWolves = false;
        this.initialWolfCount = 0;
    }

preload () {    
    //declaring assets, all spritesheet width's determined by total width/number of frames
    this.load.image('sky', 'assets/orig.png');
    this.load.image('platform', 'assets/platform.png');
    this.load.image('ground', 'assets/ground.png')
    this.load.spritesheet('coin', 'assets/coin_.png',
        { frameWidth: 16, frameHeight: 16});
    this.load.spritesheet('wolf', 'assets/TimberWolf.png',
        { frameWidth: 32, frameHeight: 32});
    this.load.image('egg', 'assets/Egg_item.png');
    this.load.spritesheet('dude', 'assets/chicken.png',
        { frameWidth: 31, frameHeight: 32 });

    this.load.audio('theme', 'assets/11_The_Mighty_Kingdom.mp3');
    }
//need the data set for the score to stay
create(data) {
    //declaring music registry.  This is to keep music from restarting every level
    if(!this.registry.get('music')){
        this.music = this.sound.add('theme', {
            loop: true,
            volume: 0.5
        });
        this.music.play();
        this.registry.set('music', this.music);
    }
   
//keyboard music controls
    this.input.keyboard.on('keydown_M', () => {
        let music = this.registry.get('music');

        if (!music) return;
        
        if(music.isPlaying) {
            music.pause();
        } else {
            music.resume();
        }
    });
//declaring score at start, able to change and gameOver state
    this.score = data.score ?? 0;
    this.gameOver = false;

//building my background/platforms
    this.add.image(400, 300, 'sky');

    this.platforms = this.physics.add.staticGroup();
    this.createPlatforms();
//spawning in Player, bouncy because bird/chicken
    this.player = this.physics.add.sprite(100, 450, 'dude');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
//declaring all animations
    this.createAnimations();
//key input for controls
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
//adding my coins
    this.coins = this.physics.add.group({
        key: 'coin',
        repeat: this.coinCount,
        setXY: { x: 20, y:-100, stepX: 70}
    });

//declaring coin animation/bounce
    this.coins.children.iterate(c => {
        c.play('spin');
        c.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
    });
//making/declaring eggs
    this.eggs = this.physics.add.group({
        key: 'egg',
        repeat: this.eggCount - 1,
        setXY: { x: 20, y: -100, stepX: 250}
    });
//setting egg/bounce
    this.eggs.children.iterate(e => {
        e.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
    });
//adding wolves to spawn
    this.wolves = this.physics.add.group();
//display/update score
    this.scoreText = this.add.text(16, 16, 'Score: ' + this.score, { fontSize: '32px', fontFamily: 'GameFont', fill: '#fff'});
//colliders
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.coins, this.platforms);
    this.physics.add.collider(this.wolves, this.platforms);
    this.physics.add.collider(this.eggs, this.platforms);
//collider with functions
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);
    this.physics.add.overlap(this.player, this.eggs, this.collectEgg, null, this);
    this.physics.add.collider(this.player, this.wolves, this.hitWolf, null, this);
//wolf Spawn
    if (this.shouldSpawnWolves){
        this.spawnInitialWolves();
    }
}
    update() {
        //keyboard controls
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);
    
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(160);
    
            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);
    
            this.player.anims.play('turn');
        }
    
        if (this.spaceKey.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
//wolf jump, movements, and avoiding overlap behavior
        this.wolves.children.iterate(wolf => {
            if (!wolf || !wolf.body) return;
    
            let speed = 70;
            let jumpStrength = -450;

            if (wolf.x < this.player.x) {
                wolf.setVelocityX(speed);
                wolf.flipX = false;
            } else {
                wolf.setVelocityX(-speed);
                wolf.flipX = true;
            }

            this.wolves.children.iterate(other => {
                if (!other || other === wolf) return;

                let dist = Phaser.Math.Distance.Between(
                    wolf.x, wolf.y,
                    other.x, other.y
                );
                let minDist = 40;

                if(dist < minDist) {
                    let push = (minDist - dist) * 2;

                    if (wolf.x < other.x){
                        wolf.setVelocityX(wolf.body.velocity.x - push);
                    } else {
                        wolf.setVelocityX(wolf.body.velocity.x + push);
                    }
                }
            })
//wolf following player even onto platforms
            let playerAbove = this.player.y < wolf.y - 20;
            let closeX = Math.abs(this.player.x - wolf.x) < 150;
            let onGround = wolf.body.touching.down;

            if(playerAbove && closeX && onGround){
                wolf.setVelocityY(jumpStrength);
            }
        })
    }
//updating all animations
    createAnimations() {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4} ],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'spin',
            frames: this.anims.generateFrameNumbers('coin', {start: 0, end: 12}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('wolf', {start: 0, end: 4}),
            frameRate: 10,
            repeat: -1
        });
    }
//coin disappear and add to score upon collecting, bonus score not required
    collectCoin (player, coin)
    {
    coin.disableBody(true, true);

    this.score += 10;
    this.scoreText.setText('Score: ' + this.score);
}
//egg collection adds to score and determined going to the next level
    collectEgg(player, egg)
    {
        egg.disableBody(true, true);
        this.score += 20;
        this.scoreText.setText('Score: ' + this.score);
        if (this.eggs.countActive(true) === 0)
        {
            this.nextLevel();
    
    
        }  
}
//wolf spawn, lower bounce because lack of feathers
    spawnWolf() {
        let x = (this.player.x < 400) 
        ? Phaser.Math.Between(400, 800) 
        : Phaser.Math.Between(0, 400);
       
        let wolf = this.wolves.create(x, 500, 'wolf');
        wolf.setBounce(0);
        wolf.setCollideWorldBounds(true);
        wolf.setVelocity(0, 0);
        wolf.setGravityY(300);

        wolf.play('run');
    }
//keeping wolf spawn contained
    spawnInitialWolves(){
        for (let i = 0; i < this.initialWolfCount; i++){
            this.spawnWolf();
        }
    }

//player hitting wolf triggering game over
    hitWolf(player, wolf)
    {
    this.player.setTint(0xff0000);
    this.physics.pause();

    this.player.anims.play('turn');

    this.gameOver = true;

    this.time.delayedCall(50, () => {
        alert('Game over, you got caught!  Your final score is: ' + this.score);
    });
}

}
//level 1 class
class Level1 extends BaseLevel {
    constructor() {
        super('Level1');
        this.coinCount = 3;
        this.eggCount = 1;
        this.shouldSpawnWolves = true;
        this.initialWolfCount = 1;
    }
    //spawn level platforms
    createPlatforms() {
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(400, 400, 'platform');
        this.platforms.create(100, 250, 'platform');
    }
//move to next scene and keep score
    nextLevel() {
        this.scene.start('Level2', {score: this.score});
    }
}
//level 2 class
class Level2 extends BaseLevel {
    constructor() {
        super('Level2');
        this.coinCount = 6;
        this.eggCount = 2;

        this.shouldSpawnWolves = true;
        this.initialWolfCount = 2;
    }
    //spawn level specific platforms
    createPlatforms() {
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(650, 450, 'platform');
        this.platforms.create(300, 300, 'platform');
        this.platforms.create(700, 200, 'platform');
        this.platforms.create(100, 150, 'platform');
        this.platforms.create(50, 450, 'platform');
    }
//move to next scene, and keep score
    nextLevel() {
        this.scene.start('Level3', {score: this.score});
    }
}

//level 3 class
class Level3 extends BaseLevel {
    constructor() {
        super('Level3');
        this.coinCount = 10;
        this.eggCount = 3;

        this.shouldSpawnWolves = true;
        this.initialWolfCount = 3;
    }
    //spawn level platforms
    createPlatforms() {
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 300, 'platform');
        this.platforms.create(200, 375, 'platform');
        this.platforms.create(400, 250, 'platform');
        this.platforms.create(100, 150, 'platform');
        this.platforms.create(700, 70, 'platform');
        this.platforms.create(400, 450, 'platform');
    }
//Game over, all levels completed
    nextLevel() {
        alert('You beat the game with a score of: ' + this.score + '!');
    }
}
//config to start Phaser game, where it ties in, and declaring the scene classes
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },

    scene: [Level1, Level2, Level3]
};

var game = new Phaser.Game(config);