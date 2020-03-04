class Scene2 extends Phaser.Scene {
	constructor(){
		super("deuxieme_scene")
	}

init(){
this.cursors;

this.platforms;
this.player;
this.ennemi1;
this.ennemi2;
this.ennemi3;
this.bananes;

this.scoreText;
this.pointDeVieText;
this.projectiles;
this.timerEnnemi1;
this.timerEnnemi2;
this.timerEnnemi3;

this.aleatoire1 = 4;
this.aleatoire2 = 4;
this.aleatoire3 = 4;
this.ennemi1Disparais = 0;
this.ennemi2Disparais = 0;
this.ennemi3Disparais = 0;
this.mouvEn1 = 0;
this.mouvEn2 = 0;
this.mouvEn3 = 0;

this.score = 0;
this.compteur = 0;
this.compteurSaut = 0;
this.pointDeVie = 3;

this.invincible = 0;
this.timerInvincible;

}


preload(){


	this.load.image("background", "Assets/PixelAdventure1/Background/Test.png");
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
	this.load.spritesheet("ennemimeurt", "Assets/PixelAdventure1/Enemies/Trunk/Hit.png",
	{frameWidth: 64, frameHeight:32});
}


create(){


	this.add.image(400,300,"background");
	this.platforms = this.physics.add.staticGroup ();

// BORDURES
// bas de l'écran
	this.platforms.create(300,445,"baseRebord").setScale(1).refreshBody();
// haut de l'écran
	this.platforms.create(300,5,"hautRebord").setScale(1).refreshBody();
// gauche de l'écran
	this.platforms.create(5,225,"bordureGauche").setScale(1).refreshBody();
// droite de l'écran
	this.platforms.create(595,225,"bordureDroite").setScale(1).refreshBody();

// PLATEFORMES
// BLoc Pierre bas de l'écran
	this.platforms.create(280,433,"BlocBas1").setScale(1).refreshBody();
	this.platforms.create(263,410,"BlocBas2").setScale(1).refreshBody();
	this.platforms.create(287,402,"BlocBas3").setScale(1).refreshBody();
	this.platforms.create(240,418,"BlocBas4").setScale(1).refreshBody();
// Plateforme Gauche
	this.platforms.create(172,292,"plat_Gauche2").setScale(1).refreshBody();
	this.platforms.create(79,305,"plat_Gauche1").setScale(1).refreshBody();
// Plateforme Milieu Gauche
	this.platforms.create(162,175,"Plate_GaucheMid").setScale(1).refreshBody();
// Plateforme Haut Gauche
	this.platforms.create(56,70,"Plateforme_GaucheHaut").setScale(1).refreshBody();
// Rectangle+Carre en haut
	this.platforms.create(270,41,"CarreRec").setScale(1).refreshBody();
// Plateforme Droite
	this.platforms.create(478,252,"Plat_Droite").setScale(1).refreshBody();
	this.platforms.create(583,204,"Dessus_Plat1").setScale(1).refreshBody();
	this.platforms.create(567,220,"Dessus_Plat2").setScale(1).refreshBody();
// Les 2 carrés
	this.platforms.create(350,100,"3_Carre1").setScale(1).refreshBody();
// Plateforme Fine Haut
	this.platforms.create(440,55,"Plat_Fine").setScale(1).refreshBody();
// Bloc de Pierre en Haut à droite
	this.platforms.create(583,82,"Bloc_Droite1").setScale(1).refreshBody();
	this.platforms.create(567,82,"Bloc_Droite2").setScale(1).refreshBody();
	this.platforms.create(543,106,"Bloc_Droite3").setScale(1).refreshBody();
	this.platforms.create(519,98,"Bloc_Droite4").setScale(1).refreshBody();
	this.platforms.create(543,66,"Bloc_Or").setScale(1).refreshBody();


// UN TIMER DEPLACEMENT ENNEMI 1
this.timerEnnemi1 = this.time.addEvent({ delay: 2000, callback: this.aleatoireFunction1, loop: true });

// UN TIMER DEPLACEMENT ENNEMI 2
this.timerEnnemi2 = this.time.addEvent({ delay: 2000, callback: this.aleatoireFunction2, loop: true });

// UN TIMER DEPLACEMENT ENNEMI 3
this.timerEnnemi3 = this.time.addEvent({ delay: 2000, callback: this.aleatoireFunction3, loop: true });

// TIMER INVINCIBLE
this.timerInvincible = this.time.addEvent({ delay: 2000, callback: this.invincibleFunction, loop: true });

// LE JOUEUR
this.player = this.physics.add.sprite(30,420,"persoidle");
this.player.setCollideWorldBounds(true);
this.physics.add.collider(this.player,this.platforms);
this.player.setBounce(0);
this.player.body.setGravityY(300);

this.cursors = this.input.keyboard.createCursorKeys();

// L'ENNEMI 1
this.ennemi1 = this.physics.add.sprite(400,420,"ennemiidle");
this.ennemi1.setCollideWorldBounds(true);
this.physics.add.collider(this.ennemi1, this.platforms).name = 'ennemi1_collid';
this.ennemi1.setBounce(0);
this.ennemi1.body.setGravityY(300);

// L'ENNEMI 2
this.ennemi2 = this.physics.add.sprite(60,270,"ennemiidle");
this.ennemi2.setCollideWorldBounds(true);
this.physics.add.collider(this.ennemi2, this.platforms).name = 'ennemi2_collid';
this.ennemi2.setBounce(0);
this.ennemi2.body.setGravityY(300);

// L'ENNEMI 3
this.ennemi3 = this.physics.add.sprite(450,210,"ennemiidle");
this.ennemi3.setCollideWorldBounds(true);
this.physics.add.collider(this.ennemi3, this.platforms).name = 'ennemi3_collid';
this.ennemi3.setBounce(0);
this.ennemi3.body.setGravityY(300);


// LES COLLECTIBLES
 this.bananes = this.physics.add.sprite(543,32,"bananeidle");
this.physics.add.collider(this.bananes,this.platforms);
this.bananes.setBounce(0);
this.bananes.body.setGravityY(-300);



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
frames: this.anims.generateFrameNumbers("ennemiidle", {start: 0, end: 17}),
frameRate: 20,
repeat:-1
});
this.anims.create({
key: "mortennemi",
frames: this.anims.generateFrameNumbers("ennemimeurt", {start: 0, end: 4}),
frameRate: 20,
repeat:-1
});


// COLLECTIBLES ANIMATION
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

	this.physics.add.collider(this.player, this.ennemi1, this.hitEnnemi1, null, this);
	this.physics.add.collider(this.player, this.ennemi2, this.hitEnnemi2, null, this);
	this.physics.add.collider(this.player, this.ennemi3, this.hitEnnemi3, null, this);

	this.projectiles = this.physics.add.group();
	this.physics.add.collider(this.projectiles, this.platforms, this.projectileplateforms, null, this);
	this.physics.add.collider(this.player, this.projectiles, this.hitprojectile, null, this);

	this.physics.add.collider(this.bananes, this.platforms);
	this.physics.add.overlap(this.bananes, this.player, this.collectCollectible, null, this);

	this.scoreText = this.add.text(10, 10, "Niveau en cours", {fontSize: "16px", fill:'#fff'});
	this.pointDeVieText = this.add.text(530, 10, "PV : 3", {fontSize: "16px", fill:'#fff'});
}



update(){



// animations bananes
	this.bananes.anims.play("bananeAnim", true);

// ENNEMI 1 MOUVEMENT (celui du bas)
if (this.ennemi1Disparais == 0) {
if (this.aleatoire1 == 1) {
	this.ennemi1.anims.play("attackEnnemi", true);
	projectileFunction1();
} else if (this.aleatoire1 == 2) {
	this.ennemi1.setVelocityX(-80);
	this.ennemi1.anims.play("runEnnemi", true);
	this.ennemi1.setFlipX(false);
	this.mouvEn1=0;
	// lorsque l'ennemi s'approche des bordures, change de direction
	if (this.ennemi1.body.center.x < 360){
		this.aleatoire1 = 3;
	}
} else if (this.aleatoire1 == 3) {
	this.ennemi1.setVelocityX(80);
	this.ennemi1.anims.play("runEnnemi", true);
	this.ennemi1.setFlipX(true);
	this.mouvEn1=1;
	// lorsque l'ennemi s'approche des bordures, change de direction
	if (this.ennemi1.body.center.x > 550){
		this.aleatoire1 = 2;
	}
} else if (this.aleatoire1 == 4) {
	this.ennemi1.setVelocityX(0);
	this.ennemi1.anims.play("baseEnnemi", true);
}
}

// ENNEMI 2 MOUVEMENT (celui du milieu)
if (this.ennemi2Disparais == 0) {
if (this.aleatoire2 == 1) {
	this.ennemi2.anims.play("attackEnnemi", true);
	projectileFunction2();
	if (this.ennemi2.body.center.x > 190){
		this.aleatoire2 = 4;
	}
} else if (this.aleatoire2 == 2) {
	this.ennemi2.setVelocityX(-80);
	this.ennemi2.anims.play("runEnnemi", true);
	this.ennemi2.setFlipX(false);
	this.mouvEn2=0;
	// lorsque l'ennemi s'approche des bordures, change de direction
	if (this.ennemi2.body.center.x < 50){
		this.aleatoire2 = 3;
	}
} else if (this.aleatoire2 == 3) {
	this.ennemi2.setVelocityX(80);
	this.ennemi2.anims.play("runEnnemi", true);
	this.ennemi2.setFlipX(true);
	this.mouvEn2=1;
	// lorsque l'ennemi s'approche des bordures, change de direction
	if (this.ennemi2.body.center.x > 190){
		this.aleatoire2 = 2;
	}
} else if (this.aleatoire2 == 4) {
	this.ennemi2.setVelocityX(0);
	this.ennemi2.anims.play("baseEnnemi", true);
}
}

// ENNEMI 3 MOUVEMENT (le plus haut)
if (this.ennemi3Disparais == 0) {
if (this.aleatoire3 == 1) {
	this.ennemi3.anims.play("attackEnnemi", true);
	projectileFunction3();
	if (this.ennemi3.body.center.x < 365){
		this.aleatoire3 = 4;
	}
} else if (this.aleatoire3 == 2) {
	this.ennemi3.setVelocityX(-80);
	this.ennemi3.anims.play("runEnnemi", true);
	this.ennemi3.setFlipX(false);
	this.mouvEn3=0;
	// lorsque l'ennemi s'approche des bordures, change de direction
	if (this.ennemi3.body.center.x < 365){
		this.aleatoire3 = 3;
	}
} else if (this.aleatoire3 == 3) {
	this.ennemi3.setVelocityX(80);
	this.ennemi3.anims.play("runEnnemi", true);
	this.ennemi3.setFlipX(true);
	this.mouvEn3=1;
	// lorsque l'ennemi s'approche des bordures, change de direction
	if (this.ennemi3.body.center.x > 505){
		this.aleatoire3 = 2;
	}
} else if (this.aleatoire3 == 4) {
	this.ennemi3.setVelocityX(0);
	this.ennemi3.anims.play("baseEnnemi", true);
}
}

	if(this.cursors.left.isDown){
		this.player.setVelocityX(-120);
		this.player.anims.play("gauche", true);
		this.player.setFlipX(true);
	} else if (this.cursors.right.isDown){
		this.player.setVelocityX(120);
		this.player.anims.play("gauche", true);
		this.player.setFlipX(false);
	} else {
		this.player.setVelocityX(0);
		this.player.anims.play("base", true);
	}

	// PREMIER jump
	if (this.cursors.up.isDown && this.player.body.touching.down && this.compteurSaut == 0){
			this.player.setVelocityY(-280);
			this.player.anims.play("saut", true);
			this.compteurSaut = 1;
	}
	// Préparation double jump
	if (this.cursors.up.isUp && !this.player.body.touching.down && this.compteurSaut == 1){
			this.compteurSaut = 2;
	}
	// pour éviter au joueur de l'empêcher de sauter s'il reste appuyer sur la touche saut sans la relacher avant de retoucher le sol.
	else if
		(this.cursors.up.isUp && this.player.body.touching.down && this.compteurSaut == 1){
			this.compteurSaut = 0;
		}
		// double jump
	if (this.compteurSaut == 2 && !this.player.body.touching.down && this.cursors.up.isDown) {
			this.player.setVelocityY(-280);
			this.player.anims.play("doubleSaut", true);
			this.compteurSaut = 3;
	}

	// restart le jump si pas de double jump
	if (this.compteurSaut == 2 && this.player.body.touching.down) {
		this.compteurSaut = 0;
	}
	// restart le jump après un double jump
	if (this.compteurSaut >= 3 && this.player.body.touching.down) {
		this.compteurSaut = 0;
	}

/* Pas mal des animations que j'ai ajouté s'effectue mais trop vite pour qu'ellles soient appréciées, voir même visible lors du jeu.
Notamment celle du doubleSaut, celle de la collecte entrainant la disparition du collectible ou encore celle ou le joueur prend un dégat*/
}
}
