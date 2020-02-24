
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
	var cursors;

	var platforms;
	var player;
	var ennemi;
	var bananes;

	var scoreText;
	var pointDeVieText;
	var bombes;

}
var score = 0;
var compteurSaut = 0;
var pointDeVie = 3;
var mouvEn = 0;

function preload(){
	this.load.image("background", "Assets/PixelAdventure1/Background/Test.png");
	this.load.image("support", "Assets/PixelAdventure1/Terrain/Support.png");
	this.load.image("bombes", "bombes.png");

	// Animations Collectibles
	this.load.spritesheet("bananeidle", "Assets/PixelAdventure1/Items/Fruits/Bananas.png",
	{frameWidth: 32, frameHeight:32});
	this.load.spritesheet("bananerecup", "Assets/PixelAdventure1/Items/Fruits/Collected.png",
	{frameWidth: 32, frameHeight:32});
	// Animations Perso joueur
	this.load.spritesheet("persoidle", "Assets/PixelAdventure1/MainCharacters/NinjaFrog/Idle.png",
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
	this.load.spritesheet("ennemiidle", "Assets/PixelAdventure1/Enemies/Trunk/Idle.png",
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


// LE JOUEUR
player = this.physics.add.sprite(100,350,"persoidle");
player.setCollideWorldBounds(true);
this.physics.add.collider(player,platforms);
player.setBounce(0);
player.body.setGravityY(300);

cursors = this.input.keyboard.createCursorKeys();

// L'ENNEMI
ennemi = this.physics.add.sprite(400,350,"ennemiidle");
ennemi.setCollideWorldBounds(true);
this.physics.add.collider(ennemi, platforms);
ennemi.setBounce(0);
ennemi.body.setGravityY(300);

// LES COLLECTIBLES
 bananes = this.physics.add.sprite(50,400,"bananeidle");
this.physics.add.collider(bananes,platforms);
bananes.setBounce(0);
bananes.body.setGravityY(0);


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
frames: this.anims.generateFrameNumbers("persoidle", {start: 0, end: 10}),
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
frames: this.anims.generateFrameNumbers("ennemiidle", {start: 0, end: 17}),
frameRate: 20,
repeat:-1
});


// COLLECTIBLES
this.anims.create({
key: "bananeAnim",
frames: this.anims.generateFrameNumbers("bananeidle", {start: 0, end: 16}),
frameRate: 20,
repeat:-1
});
this.anims.create({
key: "collecteBananeAnim",
frames: this.anims.generateFrameNumbers("bananerecup", {start: 0, end: 5}),
frameRate: 20,
repeat:-1
});




	this.physics.add.overlap(player, ennemi);

	bombes = this.physics.add.group();
	this.physics.add.collider(bombes, platforms);
	this.physics.add.collider(player, bombes, hitbomb, null, this);

	this.physics.add.collider(bananes, platforms);
	this.physics.add.overlap(bananes, player, collectCollectible, null, this);

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

function collectCollectible(bananes, player) {
	bananes.disableBody(true,true)
	score+= 10;
	scoreText.setText("score : "+score);
	if (score > 40) {
		var x = (player.x<400)? Phaser.Math.Between(400,800) : Phaser.Math.Between(0,400);
		var bombe = bombes.create(x, 16, "bombes");
		bombe.setBounce(1);
		bombe.setCollideWorldBounds(true);
		bombe.setVelocity(Phaser.Math.Between(-200, 200), 20);
	}
}



function update(){

	bananes.anims.play("bananeAnim", true);

/* anime groupe

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
