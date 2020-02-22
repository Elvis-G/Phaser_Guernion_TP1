
var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: "arcade",
		arcade: {
		gravity: {y: 300},
			debug: false
		}
	},
	scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
}

var game = new Phaser.Game(config);

function init(){
	var platforms;
	var player;
	var cursors;
	var collectibles;
	var scoreText;
	var bombes;
	var pointDeVieText;


}
var score = 0;
var compteurSaut = 0;
var pointDeVie = 3;

function preload(){
	this.load.image("background", "Assets/PixelAdventure1/Background/Test.png");
	this.load.image("herbe", "Assets/PixelAdventure1/Terrain/Herbe.png");
	this.load.image("bombes", "bombes.png");
	this.load.spritesheet("collectibles", "Assets/PixelAdventure1/Items/Fruits/Bananas.png",
	{frameWidth: 32, frameHeight:32});
	this.load.spritesheet("perso", "Assets/PixelAdventure1/MainCharacters/NinjaFrog/Idle.png",
	{frameWidth: 32, frameHeight:32});
	this.load.spritesheet("persorun", "Assets/PixelAdventure1/MainCharacters/NinjaFrog/Run.png",
	{frameWidth: 32, frameHeight:32});
	this.load.spritesheet("persojump", "Assets/PixelAdventure1/MainCharacters/NinjaFrog/Jump.png",
	{frameWidth: 32, frameHeight:32});
	this.load.spritesheet("persodoublejump", "Assets/PixelAdventure1/MainCharacters/NinjaFrog/DoubleJump.png",
	{frameWidth: 32, frameHeight:32});
	this.load.spritesheet("recup", "Assets/PixelAdventure1/Items/Fruits/collected.png",
	{frameWidth: 32, frameHeight:32});

}

function create(){
	this.add.image(400,300,"background");

	platforms = this.physics.add.staticGroup ();
	platforms.create(790,615,"herbe").setScale(1).refreshBody();
	platforms.create(745,615,"herbe").setScale(1).refreshBody();
	platforms.create(700,615,"herbe").setScale(1).refreshBody();
	platforms.create(655,615,"herbe").setScale(1).refreshBody();
	platforms.create(610,615,"herbe").setScale(1).refreshBody();
	platforms.create(565,615,"herbe").setScale(1).refreshBody();
	platforms.create(520,615,"herbe").setScale(1).refreshBody();
	platforms.create(475,615,"herbe").setScale(1).refreshBody();
	platforms.create(430,615,"herbe").setScale(1).refreshBody();
	platforms.create(385,615,"herbe").setScale(1).refreshBody();
	platforms.create(340,615,"herbe").setScale(1).refreshBody();
	platforms.create(295,615,"herbe").setScale(1).refreshBody();
	platforms.create(250,615,"herbe").setScale(1).refreshBody();
	platforms.create(205,615,"herbe").setScale(1).refreshBody();
	platforms.create(160,615,"herbe").setScale(1).refreshBody();
	platforms.create(115,615,"herbe").setScale(1).refreshBody();
	platforms.create(70,615,"herbe").setScale(1).refreshBody();
	platforms.create(35,615,"herbe").setScale(1).refreshBody();
	platforms.create(-10,615,"herbe").setScale(1).refreshBody();

	player = this.physics.add.sprite(100,450,"perso");

	player.setCollideWorldBounds(true);
	this.physics.add.collider(player,platforms);
	player.setBounce(0);
	player.body.setGravityY(300);

	cursors = this.input.keyboard.createCursorKeys();


// DÉPLACEMENTS
	this.anims.create({
		key: "gauche",
		frames: this.anims.generateFrameNumbers("persorun", {start: 0, end: 11}),
		frameRate: 20,
		repeat:-1
	});
	this.anims.create({
		key: "saut",
		frames: [{key: "persojump", frame: 0}],
		frameRate: 20,
	});
	this.anims.create({
	key: "doubleSaut",
	frames: this.anims.generateFrameNumbers("persodoublejump", {start: 0, end: 5}),
	frameRate: 20,
	repeat:-1
	});
	this.anims.create({
	key: "base",
	frames: this.anims.generateFrameNumbers("perso", {start: 0, end: 10}),
	frameRate: 20,
	repeat:-1
	});


// OBJETS
this.anims.create({
key: "bananeAnimation",
frames: this.anims.generateFrameNumbers("banane", {start: 0, end: 16}),
frameRate: 20,
repeat:-1
});
this.anims.create({
key: "collecteAnimation",
frames: this.anims.generateFrameNumbers("recup", {start: 0, end: 5}),
frameRate: 20,
repeat:-1
});

collectibles = this.physics.add.group({
key: "collectibles",
repeat: 11,
setXY: {x: 12, y: 0, stepX: 70}
});


	bombes = this.physics.add.group();

	this.physics.add.collider(bombes, platforms);
	this.physics.add.collider(player, bombes, hitbomb, null, this);

	this.physics.add.collider(collectibles, platforms);
	this.physics.add.overlap(collectibles, player, collectCollectible, null, this);

	scoreText = this.add.text(10, 10, "score : 0", {fontSize: "24px", fill:'#fff'});
	pointDeVieText = this.add.text(700, 10, "PV : 3", {fontSize: "24px", fill:'#fff'});
}

function hitbomb (player, bombe) {
	pointDeVie-= 1;
	pointDeVieText.setText("PV : "+pointDeVie);
	if (pointDeVie == 0) {
	this.physics.pause();
	player.setTint(0xff0000);
	player.anims.play("base");
	}
}

function collectCollectible(player, collectible) {
	collectible.disableBody(true,true)
	score+= 10;
	scoreText.setText("score : "+score);
	if (collectibles.countActive(true)=== 0) {
		collectibles.children.iterate(function(child){
			child.enableBody(true, child.x, 0, true, true);
		});
		var x = (player.x<400)? Phaser.Math.Between(400,800) : Phaser.Math.Between(0,400);
		var bombe = bombes.create(x, 16, "bombes");
		bombe.setBounce(1);
		bombe.setCollideWorldBounds(true);
		bombe.setVelocity(Phaser.Math.Between(-200, 200), 20);
	}
}

function update(){

	if(cursors.left.isDown){
		player.setVelocityX(-160);
		player.anims.play("gauche", true);
		player.setFlipX(true);
	} else if (cursors.right.isDown){
		player.setVelocityX(160);
		player.anims.play("gauche", true);
		player.setFlipX(false);
	} else {
		player.setVelocityX(0);
		player.anims.play("base", true);
	}


	// PREMIER jump
	if (cursors.up.isDown && player.body.touching.down && compteurSaut == 0){
			player.setVelocityY(-320);
			player.anims.play("saut", true);
			compteurSaut = 1;
	}
	// Ppréparation double jump
	if (cursors.up.isUp && !player.body.touching.down && compteurSaut == 1){
			compteurSaut = 2;
	}
	// pour éviter au joueur de l'empêcher de sauter s'il reste appuyer sur la touche saut sans la relacher avant de retoucher le sol.
	else if
		(cursors.up.isUp && player.body.touching.down && compteurSaut == 1){
			compteurSaut = 0;
		}
		// double jump
	if (compteurSaut == 2 && !player.body.touching.down && cursors.up.isDown) {
		player.setVelocityY(-320);
		player.anims.play("doubleSaut", true);
		compteurSaut = 3;
	}
	// restart le jump si pas de double jump
	if (compteurSaut == 2 && player.body.touching.down) {
		compteurSaut = 0;
	}
	// restart le jump après un double jump
	if (compteurSaut >= 3) {
		compteurSaut = 0;
	}




}
