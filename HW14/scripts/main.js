/*
Author: Anabel Assante
File Name: HW14 part1.html
Date: 04/20/2026
Purpose: HW 14 - Phaser.io

Required Add-ons:
Spacebar Jump
Altered Star Gravity
New Player Sprite
Level Design Upgrade (More/Meaningful Platforms)
Second Collectible

Extra Add-ons:
Game Over screen + Updated Score
Player reset when Bombs Spawn for increased difficulty
*/

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
//declaring my variables to be called later
var player;
var stars;
var bombs;
var platforms;
var cursors;
var spaceKey;
var score = 0;
var gameOver = false;
var scoreText;
var honeys;
//calling the new game config
var game = new Phaser.Game(config);

function preload ()
{
    //preloading all of the assets to be called upon in game, sprite width/height depends on canvas
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('honey', 'assets/honey.png');
    this.load.spritesheet('dude', 'assets/bearsprite1.png',
        { frameWidth: 32, frameHeight: 48 });
}

function create ()
{
    //creating the game space, adding the sky
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();
//creating my ground/following platforms
    platforms.create(400, 568, 'ground')
        .setScale(2)
        .refreshBody();

    platforms.create(600, 425, 'ground');
    platforms.create(-100, 100, 'ground');
    platforms.create(900, 90, 'ground');
    platforms.create(250, 250, 'ground');
    platforms.create(20, 425, 'ground');
//making player
    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
//making player walk left, declaring the sprites for the animation
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
//the turning/idle sprite where the character stays front facing
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4} ],
        frameRate: 20
    });
//walking to the right with the declared leftover sprites
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
//declaring controls, arrow keys and space bar for jumping
    cursors = this.input.keyboard.createCursorKeys();
    spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
//creating stars for collectibles
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }, 
    });
//stars physics, added less gravity to add a space-like effect
    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        child.setGravityY(-200);

    });
//honey collectibles, worth more points so fewer.  Spaced out to be one on each platform
    honeys = this.physics.add.group({
        key: 'honey',
        repeat: 3,
        setXY: { x:0, y:0, stepX: 250 },
    });
//honey physics/bounce has normal gravity
    honeys.children.iterate(function(child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
    });
//declaring bomb group, but will spawn later
    bombs = this.physics.add.group();
//scre text
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
//all of the collision physics to keep items from falling out of world
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(honeys, platforms);
//overlap for collectibles, but no overlap for damaging items
    this.physics.add.overlap(player, stars, collectStar, null, this);
    this.physics.add.overlap(player, honeys, collectHoney, null, this);
    this.physics.add.collider(player, bombs, hitBomb, null, this);
}
//update/animation functions
function update ()
{
    //player movement functions including left, right, and jump
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (spaceKey.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}

//collecting star function
function collectStar (player, star)
{
    star.disableBody(true, true);

    score += 10;
    scoreText.setText('Score: ' + score);
    if (stars.countActive(true) === 0)
    {
        // Spawning new batch of stars
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);
            child.setGravityY(-200);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        //creating bombs after stars were collected, increases difficulty with players being reset when spawning
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
        player.setPosition(100, 450);
        player.setVelocity(0, 0);

    }
}

//hit bomb  with player function
function hitBomb(player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
//alert to reveal final score
    alert('Game over!  Your final score is: ' + score);
}

//collection of Honey collectible, altered score
function collectHoney(player, honey)
{
    honey.disableBody(true, true);
    score += 20;
    scoreText.setText('Score: ' + score);
    if (honeys.countActive(true) === 0)
    {
        // A new batch of honey to collect
        honeys.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });
}
};