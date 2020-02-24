
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
<<<<<<< Updated upstream
	var cursors;
	var collectibles;
	var scoreText;
	var bombes;
	var pointDeVieText;
	var ennemi;
=======
	var ennemi1;
	var bananes;

	var scoreText;
	var pointDeVieText;
	var projectiles;
	var timerEnnemi1;
>>>>>>> Stashed changes

}
var aleatoire = 4;
var score = 0;
var compteurSaut = 0;
var pointDeVie = 3;
var mouvEn = 0;
var ennemi1Disparais = 0;
var invincible = 0;
var timerInvincible;

function preload(){
	this.load.image("background", "Assets/PixelAdventure1/Background/Test.png");
<<<<<<< Updated upstream
	this.load.image("support", "Assets/PixelAdventure1/Terrain/Support.png");
	this.load.image("surface1", "Assets/PixelAdventure1/Terrain/Surface1.png");
	this.load.image("surface1SB", "Assets/PixelAdventure1/Terrain/Surface1SB.png");
	this.load.image("surface1BD", "Assets/PixelAdventure1/Terrain/Surface1BD.png");
	this.load.image("surface1BG", "Assets/PixelAdventure1/Terrain/Surface1BG.png");
	this.load.image("bombes", "bombes.png");
=======
	this.load.image("baseRebord", "Assets/PixelAdventure1/Terrain/Visuel/BaseRebord.png");
	this.load.image("hautRebord", "Assets/PixelAdventure1/Terrain/Visuel/HautRebord.png");
	this.load.image("bordureDroite", "Assets/PixelAdventure1/Terrain/Visuel/Bordure_Droite.png");
	this.load.image("bordureGauche", "Assets/PixelAdventure1/Terrain/Visuel/Bordure_Gauche.png");

	this.load.image("BlocBas1", "Assets/PixelAdventure1/Terrain/Visuel/BlocBas1.png");
	this.load.image("BlocBas2", "Assets/PixelAdventure1/Terrain/Visuel/BlocBas2.png");
	this.load.image("BlocBas3", "Assets/PixelAdventure1/Terrain/Visuel/BlocBas3.png");
	this.load.image("BlocBas4", "Assets/PixelAdventure1/Terrain/Visuel/BlocBas4.png");
	this.load.image("plat_Gauche1", "Assets/PixelAdventure1/Terrain/Visuel/Plateforme_Gauche1.png");
	this.load.image("plat_Gauche2", "Assets/PixelAdventure1/Terrain/Visuel/Plateforme_Gauche2.png");
	this.load.image("Plate_GaucheMid", "Assets/PixelAdventure1/Terrain/Visuel/Plateforme_Gauche_Milieu.png");
	this.load.image("Plateforme_GaucheHaut", "Assets/PixelAdventure1/Terrain/Visuel/Plateforme_Gauche_Haut.png");
	this.load.image("CarreRec", "Assets/PixelAdventure1/Terrain/Visuel/CarreRec_Haut.png");
	this.load.image("Plat_Droite", "Assets/PixelAdventure1/Terrain/Visuel/Plateforme_Droite.png");
	this.load.image("Dessus_Plat1", "Assets/PixelAdventure1/Terrain/Visuel/DessusPlat1.png");
	this.load.image("Dessus_Plat2", "Assets/PixelAdventure1/Terrain/Visuel/DessusPlat2.png");
	this.load.image("3_Carre1", "Assets/PixelAdventure1/Terrain/Visuel/3Carre1.png");
	this.load.image("3_Carre2", "Assets/PixelAdventure1/Terrain/Visuel/3Carre2.png");
	this.load.image("Plat_Fine", "Assets/PixelAdventure1/Terrain/Visuel/Plateforme_Fine.png");
	this.load.image("Bloc_Droite1", "Assets/PixelAdventure1/Terrain/Visuel/BlocDroite1.png");
	this.load.image("Bloc_Droite2", "Assets/PixelAdventure1/Terrain/Visuel/BlocDroite2.png");
	this.load.image("Bloc_Droite3", "Assets/PixelAdventure1/Terrain/Visuel/BlocDroite3.png");
	this.load.image("Bloc_Droite4", "Assets/PixelAdventure1/Terrain/Visuel/BlocDroite4.png");
	this.load.image("Bloc_Or", "Assets/PixelAdventure1/Terrain/Visuel/Or.png");

	this.load.image("ennemiprojectile", "Assets/PixelAdventure1/Enemies/Trunk/Bullet.png");
	this.load.image("PVpicture", "Assets/PixelAdventure1/Background/PV.png");
	this.load.image("PVdownpicture", "Assets/PixelAdventure1/Background/PVdown.png");
>>>>>>> Stashed changes

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
	this.load.spritesheet("ennemimeurt", "Assets/PixelAdventure1/Enemies/Trunk/Hit.png",
	{frameWidth: 64, frameHeight:32});
}

function create(){
	this.add.image(400,300,"background");
	platforms = this.physics.add.staticGroup ();
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

// BORDURES
// bas de l'écran
	platforms.create(300,445,"baseRebord").setScale(1).refreshBody();
// haut de l'écran
	platforms.create(300,5,"hautRebord").setScale(1).refreshBody();
// gauche de l'écran
	platforms.create(5,225,"bordureGauche").setScale(1).refreshBody();
// droite de l'écran
	platforms.create(595,225,"bordureDroite").setScale(1).refreshBody();

// PLATEFORMES
// BLoc Pierre bas de l'écran
	platforms.create(280,433,"BlocBas1").setScale(1).refreshBody();
	platforms.create(263,410,"BlocBas2").setScale(1).refreshBody();
	platforms.create(287,402,"BlocBas3").setScale(1).refreshBody();
	platforms.create(240,418,"BlocBas4").setScale(1).refreshBody();
// Plateforme Gauche
	platforms.create(172,292,"plat_Gauche2").setScale(1).refreshBody();
	platforms.create(79,305,"plat_Gauche1").setScale(1).refreshBody();
// Plateforme Milieu Gauche
	platforms.create(162,175,"Plate_GaucheMid").setScale(1).refreshBody();
// Plateforme Haut Gauche
	platforms.create(56,70,"Plateforme_GaucheHaut").setScale(1).refreshBody();
// Rectangle+Carre en haut
	platforms.create(270,41,"CarreRec").setScale(1).refreshBody();
// Plateforme Droite
	platforms.create(478,252,"Plat_Droite").setScale(1).refreshBody();
	platforms.create(583,204,"Dessus_Plat1").setScale(1).refreshBody();
	platforms.create(567,220,"Dessus_Plat2").setScale(1).refreshBody();
// Les 2 carrés
	platforms.create(350,100,"3_Carre1").setScale(1).refreshBody();
// Plateforme Fine Haut
	platforms.create(450,55,"Plat_Fine").setScale(1).refreshBody();
// Bloc de Pierre en Haut à droite
	platforms.create(583,82,"Bloc_Droite1").setScale(1).refreshBody();
	platforms.create(567,82,"Bloc_Droite2").setScale(1).refreshBody();
	platforms.create(543,106,"Bloc_Droite3").setScale(1).refreshBody();
	platforms.create(519,98,"Bloc_Droite4").setScale(1).refreshBody();
	platforms.create(543,66,"Bloc_Or").setScale(1).refreshBody();


// UN TIMER DEPLACEMENT ENNEMI
timerEnnemi1 = this.time.addEvent({ delay: 3000, callback: aleatoireFunction, loop: true });

// TIMER INVINCIBLE
timerInvincible = this.time.addEvent({ delay: 2000, callback: invincibleFunction, loop: true });

// LE JOUEUR
<<<<<<< Updated upstream
	player = this.physics.add.sprite(100,350,"perso");
	player.setCollideWorldBounds(true);
	this.physics.add.collider(player,platforms);
	player.setBounce(0);
	player.body.setGravityY(300);
=======
player = this.physics.add.sprite(30,420,"persoidle");
player.setCollideWorldBounds(true);
this.physics.add.collider(player,platforms);
player.setBounce(0);
player.body.setGravityY(300);
>>>>>>> Stashed changes

	cursors = this.input.keyboard.createCursorKeys();

// L'ENNEMI
<<<<<<< Updated upstream
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
=======
ennemi1 = this.physics.add.sprite(400,420,"ennemiidle");
ennemi1.setCollideWorldBounds(true);
this.physics.add.collider(ennemi1, platforms).name = 'ennemi1_collid';
ennemi1.setBounce(0);
ennemi1.body.setGravityY(300);

// LES COLLECTIBLES
 bananes = this.physics.add.sprite(543,32,"bananeidle");
this.physics.add.collider(bananes,platforms);
bananes.setBounce(0);
bananes.body.setGravityY(-300);



// DÉPLACEMENTS JOUEUR ANIMATION
this.anims.create({
	key: "gauche",
	frames: this.anims.generateFrameNumbers("persorun", {start: 0, end: 11}),
	frameRate: 20,
	repeat:-1
});
this.anims.create({
	key: "saut",
	frames: [{key: "persojump", frame: 0}],
	frameRate: 1,
});
// animation se déroule trop vite
this.anims.create({
key: "doubleSaut",
frames: this.anims.generateFrameNumbers("persodoublejump", {start: 0, end: 5}),
frameRate: 1,
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
>>>>>>> Stashed changes


// DÉPLACEMENTS ENNEMI ANIMATION
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
this.anims.create({
key: "mortennemi",
frames: this.anims.generateFrameNumbers("ennemimeurt", {start: 0, end: 4}),
frameRate: 20,
repeat:-1
});


<<<<<<< Updated upstream
// OBJETS
=======
// COLLECTIBLES ANIMATION
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
collectibles = this.physics.add.group({
key: "collectibles",
repeat: 8,
setXY: {x: 12, y: 0, stepX: 70}
});


	bombes = this.physics.add.group();

	this.physics.add.collider(bombes, platforms);
	this.physics.add.overlap(player, ennemi);
	this.physics.add.collider(player, bombes, hitbomb, null, this);
=======
	this.physics.add.collider(player, ennemi1, hitEnnemi, null, this);

	projectiles = this.physics.add.group();
	this.physics.add.collider(projectiles, platforms, projectileplateforms, null, this);
	this.physics.add.collider(player, projectiles, hitprojectile, null, this);
>>>>>>> Stashed changes

	this.physics.add.collider(collectibles, platforms);
	this.physics.add.overlap(collectibles, player, collectCollectible, null, this);

	scoreText = this.add.text(10, 10, "score : 0", {fontSize: "16px", fill:'#fff'});
	pointDeVieText = this.add.text(530, 10, "PV : 3", {fontSize: "16px", fill:'#fff'});
}


// projectile disparais quand rencontre platforms
function projectileplateforms (projectile, platforms) {
	projectile.disableBody(true,true);
}

// projectile enleve 1PV lorsque projectile touche le joueur + projectile disparais
function hitprojectile (player, projectile) {
	player.anims.play("degatsPris", true);
	projectile.disableBody(true,true);
	if (invincible == 0) {
	pointDeVie-= 1;
	invincible = 1;
	pointDeVieText.setText("PV : "+pointDeVie);
	}
	if (pointDeVie == 0) {
	this.physics.pause();
	player.setTint(0xff0000);
	player.anims.play("base");
	}
}

<<<<<<< Updated upstream
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
=======
// tue l'ennemi en lui sautant dessus ++ perd un pv si vous ne lui sautez pas dessus
function hitEnnemi (player, ennemi1) {
	if (pointDeVie == 0) {
		this.physics.pause();
		player.setTint(0xff0000);
		player.anims.play("base");
		ennemi1Disparais = 1;
		ennemi1.anims.play("baseEnnemi");
	} else if (player.body.center.y < ennemi1.body.center.y) {
		ennemi1.anims.play("mortennemi");
		ennemi1.setCollideWorldBounds(false);
		this.physics.world.colliders.getActive().find(function(i){
		    return i.name == 'ennemi1_collid'
		}).destroy();
		ennemi1Disparais = 1;
	}	else if (player.body.center.y >= ennemi1.body.center.y-10) {
	player.anims.play("degatsPris", true);
	if (invincible == 0) {
	pointDeVie-= 1;
	invincible = 1;
	pointDeVieText.setText("PV : "+pointDeVie);
	}
}
}

// creation projectile
function projectileFunction(){
		var x = (ennemi1.body.center.x, ennemi1.body.center.y);
		if (mouvEn == 0) {
			var projectile = projectiles.create((ennemi1.body.center.x-17), (ennemi1.body.center.y+3), "ennemiprojectile");
			projectile.body.setGravityY(-300);
			projectile.setVelocityX(-130);
			mouvEn = 2;
			aleatoire = 4;
	} else if (mouvEn == 1) {
			var projectile = projectiles.create((ennemi1.body.center.x+17), (ennemi1.body.center.y+3), "ennemiprojectile");
			projectile.body.setGravityY(-300);
			projectile.setVelocityX(130);
			mouvEn = 2;
			aleatoire = 4;
	}
}

// la recolte
function collectCollectible(bananes, player) {
	bananes.anims.play("collecteBananeAnim", true);
	bananes.disableBody(true,true)
	score+= 10;
	scoreText.setText("score : "+score);
	if (score == 10){
		pointDeVie+= 1;
		pointDeVieText.setText("PV : "+pointDeVie);
	}
}

// generation chiffre pour le déplacement de l'ennemi
function aleatoireFunction () {
	return aleatoire = Phaser.Math.Between(1,4);
}

// function d'invinciblité après avoir pris un dégat
function invincibleFunction () {
	return invincible = 0;
}

function update(){

// animations bananes
	bananes.anims.play("bananeAnim", true);

>>>>>>> Stashed changes

if (ennemi1Disparais == 0) {
if (aleatoire == 1) {
	ennemi1.anims.play("attackEnnemi", true);
	projectileFunction();
} else if (aleatoire == 2) {
	ennemi1.setVelocityX(-80);
	ennemi1.anims.play("runEnnemi", true);
	ennemi1.setFlipX(false);
	mouvEn=0;
	// lorsque l'ennemi s'approche des bordures, change de direction
	if (ennemi1.body.center.x < 40){
		aleatoire = 3;
	}
} else if (aleatoire == 3) {
	ennemi1.setVelocityX(80);
	ennemi1.anims.play("runEnnemi", true);
	ennemi1.setFlipX(true);
	mouvEn=1;
	// lorsque l'ennemi s'approche des bordures, change de direction
	if (ennemi1.body.center.x > 560){
		aleatoire = 2;
	}
} else if (aleatoire == 4) {
	ennemi1.setVelocityX(0);
	ennemi1.anims.play("baseEnnemi", true);
}
}

	if(cursors.left.isDown){
		player.setVelocityX(-120);
		player.anims.play("gauche", true);
		player.setFlipX(true);
	} else if (cursors.right.isDown){
		player.setVelocityX(120);
		player.anims.play("gauche", true);
		player.setFlipX(false);
	} else {
		player.setVelocityX(0);
		player.anims.play("base", true);
	}

	// PREMIER jump
	if (cursors.up.isDown && player.body.touching.down && compteurSaut == 0){
			player.setVelocityY(-280);
			player.anims.play("saut", true);
			compteurSaut = 1;
	}
	// Préparation double jump
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
		player.setVelocityY(-280);
			player.anims.play("doubleSaut", true);
		compteurSaut = 3;
	}

	// restart le jump si pas de double jump
	if (compteurSaut == 2 && player.body.touching.down) {
		compteurSaut = 0;
	}
	// restart le jump après un double jump
	if (compteurSaut >= 3 && player.body.touching.down) {
		compteurSaut = 0;
	}

<<<<<<< Updated upstream




=======
/* Pas mal des animations que j'ai ajouté s'effectue mais trop vite pour qu'ellles soient appréciées, voir même visible lors du jeu.
Notamment celle du doubleSaut, celle de la collecte entrainant la disparition du collectible ou encore celle ou le joueur prend un dégat*/
>>>>>>> Stashed changes

}
