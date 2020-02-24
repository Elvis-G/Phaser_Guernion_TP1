
var config = {
	type: Phaser.AUTO,
	width: 600,
	height: 450,
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
	var ennemi;

}
var score = 0;
var compteurSaut = 0;
var pointDeVie = 3;
var mouvEn = 0;

function preload(){
	this.load.image("background", "Assets/PixelAdventure1/Background/Test.png");
	this.load.image("support", "Assets/PixelAdventure1/Terrain/Support.png");
	this.load.image("surface1", "Assets/PixelAdventure1/Terrain/Surface1.png");
	this.load.image("surface1SB", "Assets/PixelAdventure1/Terrain/Surface1SB.png");
	this.load.image("surface1BD", "Assets/PixelAdventure1/Terrain/Surface1BD.png");
	this.load.image("surface1BG", "Assets/PixelAdventure1/Terrain/Surface1BG.png");
	this.load.image("bombes", "bombes.png");

	this.load.spritesheet("collectibles", "Assets/PixelAdventure1/Items/Fruits/Bananas.png",
	{frameWidth: 32, frameHeight:32});
	this.load.spritesheet("recup", "Assets/PixelAdventure1/Items/Fruits/collected.png",
	{frameWidth: 32, frameHeight:32});
	// Animations Perso joueur
	this.load.spritesheet("perso", "Assets/PixelAdventure1/MainCharacters/NinjaFrog/Idle.png",
	{frameWidth: 32, frameHeight:32});
	this.load.spritesheet("persorun", "Assets/PixelAdventure1/MainCharacters/NinjaFrog/Run.png",
	{frameWidth: 32, frameHeight:32});
	this.load.spritesheet("persojump", "Assets/PixelAdventure1/MainCharacters/NinjaFrog/Jump.png",
	{frameWidth: 32, frameHeight:32});
	this.load.spritesheet("persodoublejump", "Assets/PixelAdventure1/MainCharacters/NinjaFrog/DoubleJump.png",
	{frameWidth: 32, frameHeight:32});
	this.load.spritesheet("persohit", "Assets/PixelAdventure1/MainCharacters/NinjaFrog/Hit.png",
	{frameWidth: 32, frameHeight:32});
	// Animations Ennemi
	this.load.spritesheet("ennemi", "Assets/PixelAdventure1/Enemies/Trunk/Idle.png",
	{frameWidth: 64, frameHeight:32});
	this.load.spritesheet("ennemirun", "Assets/PixelAdventure1/Enemies/Trunk/Run.png",
	{frameWidth: 64, frameHeight:32});
	this.load.spritesheet("ennemiattack", "Assets/PixelAdventure1/Enemies/Trunk/Attack.png",
	{frameWidth: 64, frameHeight:32});
}

function create(){
	this.add.image(400,300,"background");

	platforms = this.physics.add.staticGroup ();
// Le bas de l'écran
	platforms.create(591,445,"support").setScale(1).refreshBody();
	platforms.create(567,445,"support").setScale(1).refreshBody();
	platforms.create(543,445,"support").setScale(1).refreshBody();
	platforms.create(519,445,"support").setScale(1).refreshBody();
	platforms.create(495,445,"support").setScale(1).refreshBody();
	platforms.create(471,445,"support").setScale(1).refreshBody();
	platforms.create(447,445,"support").setScale(1).refreshBody();
	platforms.create(423,445,"support").setScale(1).refreshBody();
	platforms.create(399,445,"support").setScale(1).refreshBody();
	platforms.create(375,445,"support").setScale(1).refreshBody();
	platforms.create(351,445,"support").setScale(1).refreshBody();
	platforms.create(327,445,"support").setScale(1).refreshBody();
	platforms.create(303,445,"support").setScale(1).refreshBody();
	platforms.create(279,445,"support").setScale(1).refreshBody();
	platforms.create(255,445,"support").setScale(1).refreshBody();
	platforms.create(231,445,"support").setScale(1).refreshBody();
	platforms.create(207,445,"support").setScale(1).refreshBody();
	platforms.create(183,445,"support").setScale(1).refreshBody();
	platforms.create(159,445,"support").setScale(1).refreshBody();
	platforms.create(135,445,"support").setScale(1).refreshBody();
	platforms.create(111,445,"support").setScale(1).refreshBody();
	platforms.create(87,445,"support").setScale(1).refreshBody();
	platforms.create(63,445,"support").setScale(1).refreshBody();
	platforms.create(39,445,"support").setScale(1).refreshBody();
	platforms.create(15,445,"support").setScale(1).refreshBody();
// Les plateformes
/*	platforms.create(114,350,"surface1SB").setScale(1).refreshBody();
	platforms.create(69,350,"surface1SB").setScale(1).refreshBody();
	platforms.create(23,350,"surface1BG").setScale(1).refreshBody();
	platforms.create(577,150,"surface1BD").setScale(1).refreshBody(); */


// LE JOUEUR
	player = this.physics.add.sprite(100,350,"perso");
	player.setCollideWorldBounds(true);
	this.physics.add.collider(player,platforms);
	player.setBounce(0);
	player.body.setGravityY(300);

	cursors = this.input.keyboard.createCursorKeys();

// L'ENNEMI
ennemi = this.physics.add.sprite(400,350,"ennemi");
ennemi.setCollideWorldBounds(true);
this.physics.add.collider(ennemi, platforms);
ennemi.setBounce(0);
ennemi.body.setGravityY(300);




// DÉPLACEMENTS JOUEUR
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
	this.anims.create({
	key: "degatsPris",
	frames: this.anims.generateFrameNumbers("persohit", {start: 0, end: 6}),
	frameRate: 20,
	repeat:-1
	});


// DÉPLACEMENTS ENNEMI
this.anims.create({
key: "runEnnemi",
frames: this.anims.generateFrameNumbers("ennemirun", {start: 0, end: 13}),
frameRate: 20,
repeat:-1
});
this.anims.create({
key: "attackEnnemi",
frames: this.anims.generateFrameNumbers("ennemiattack", {start: 0, end: 10}),
frameRate: 20,
repeat:-1
});
this.anims.create({
key: "baseEnnemi",
frames: this.anims.generateFrameNumbers("ennemi", {start: 0, end: 17}),
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
repeat: 8,
setXY: {x: 12, y: 0, stepX: 70}
});


	bombes = this.physics.add.group();

	this.physics.add.collider(bombes, platforms);
	this.physics.add.overlap(player, ennemi);
	this.physics.add.collider(player, bombes, hitbomb, null, this);

	this.physics.add.collider(collectibles, platforms);
	this.physics.add.overlap(collectibles, player, collectCollectible, null, this);

	scoreText = this.add.text(10, 10, "score : 0", {fontSize: "16px", fill:'#fff'});
	pointDeVieText = this.add.text(530, 10, "PV : 3", {fontSize: "16px", fill:'#fff'});
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


/* Lorsque l'ennemi rentre en collision avec une surface change de direction
setVeolictyX a lui attribuer pour qu'il se déplace avec l'animation lié (avec setFlipX comme pour le joueur ) => le tout similaire au joueur*/

/* Lorsque l'ennemi nous voie, le faire attaquer
l'attaque génère un pépin qui se déplace dans la direction où il regarde
si le pépin entre en contact avec le joueur -1 pv */

/* si le joueur saute sur l'ennemi et que son hauteur est supérieur à celui de l'ennemi, alors au moment de collide il le tue
à l'inverse il perd un point de vie s'il rentre en contact avec celui-ci*/

/* SI il y a le temps, placé moi-même les bananes, (voir d'autres fruits si plus de temps) et faire un décors joli */

/* Lorsque tout les fruits sont récupérés gagnent une vie */

/* Demander à Joseph :
 - Comment faire pour que l'animation se déroule entièrement
 - Quelle commande rentrer pour que l'ennemi est la capacité d'attaquer lorsqu'il est face à face avec nous
 - Comment faire pour prendre la hauteur de l'ennemi et la notre */

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
