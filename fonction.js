

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
	physics.pause();
	player.setTint(0xff0000);
	player.anims.play("base");
	}
}

// tue l'ennemi en lui sautant dessus ++ perd un pv si vous ne lui sautez pas dessus
function hitEnnemi1 (player, ennemi1) {
	if (pointDeVie == 0) {
		this.physics.pause();
		player.setTint(0xff0000);
		player.anims.play("base");
		ennemi1Disparais = 1;
		ennemi1.anims.play("baseEnnemi");
	} else if (player.body.center.y+30 < ennemi1.body.center.y) {
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

function hitEnnemi2 (player, ennemi2) {
	if (pointDeVie == 0) {
		this.physics.pause();
		player.setTint(0xff0000);
		player.anims.play("base");
		ennemi2Disparais = 1;
		ennemi2.anims.play("baseEnnemi");
	} else if (player.body.center.y+30 < ennemi2.body.center.y) {
	ennemi2.anims.play("mortennemi");
	ennemi2.setCollideWorldBounds(false);
		this.physics.world.colliders.getActive().find(function(i){
	    return i.name == 'ennemi2_collid'
	}).destroy();
	ennemi2Disparais = 1;
}	else if (player.body.center.y >= ennemi2.body.center.y-10) {
player.anims.play("degatsPris", true);
		if (invincible == 0) {
		pointDeVie-= 1;
		invincible = 1;
		pointDeVieText.setText("PV : "+pointDeVie);
		}
	}
}

function hitEnnemi3 (player, ennemi3) {
	if (pointDeVie == 0) {
		this.physics.pause();
		player.setTint(0xff0000);
		player.anims.play("base");
		ennemi3Disparais = 1;
		ennemi3.anims.play("baseEnnemi");
	} else if (player.body.center.y+30 < ennemi3.body.center.y) {
	ennemi3.anims.play("mortennemi");
	ennemi3.setCollideWorldBounds(false);
		this.physics.world.colliders.getActive().find(function(i){
	    return i.name == 'ennemi3_collid'
	}).destroy();
	ennemi3Disparais = 1;
}	else if (player.body.center.y >= ennemi3.body.center.y-10) {
player.anims.play("degatsPris", true);
		if (invincible == 0) {
		pointDeVie-= 1;
		invincible = 1;
		pointDeVieText.setText("PV : "+pointDeVie);
		}
	}
}

// creation projectile ennemi 1
function projectileFunction1(){
		var x = (ennemi1.body.center.x, ennemi1.body.center.y);
		if (mouvEn1 == 0) {
		var	projectile = projectiles.create((ennemi1.body.center.x-17), (ennemi1.body.center.y+3), "ennemiprojectile");
			projectile.body.setGravityY(-300);
			projectile.setVelocityX(-130);
			mouvEn1 = 2;
			aleatoire1 = 4;
	} else if (mouvEn1 == 1) {
		var	projectile = projectiles.create((ennemi1.body.center.x+17), (ennemi1.body.center.y+3), "ennemiprojectile");
			projectile.body.setGravityY(-300);
			projectile.setVelocityX(130);
			mouvEn1 = 2;
			aleatoire1 = 4;
	}
}

// creation projectile ennemi 2
function projectileFunction2(){
		var x = (ennemi2.body.center.x, ennemi2.body.center.y);
		if (mouvEn2 == 0) {
		var	projectile = projectiles.create((ennemi2.body.center.x-17), (ennemi2.body.center.y+3), "ennemiprojectile");
			projectile.body.setGravityY(-300);
			projectile.setVelocityX(-130);
			mouvEn2 = 2;
			aleatoire2 = 4;
	} else if (mouvEn2 == 1) {
		var	projectile = projectiles.create((ennemi2.body.center.x+17), (ennemi2.body.center.y+3), "ennemiprojectile");
			projectile.body.setGravityY(-300);
			projectile.setVelocityX(130);
			mouvEn2 = 2;
			aleatoire2 = 4;
	}
}

// creation projectile ennemi 3
function projectileFunction3(){
	var	x = (ennemi3.body.center.x, ennemi3.body.center.y);
		if (mouvEn3 == 0) {
		var	projectile = projectiles.create((ennemi3.body.center.x-17), (ennemi3.body.center.y+3), "ennemiprojectile");
			projectile.body.setGravityY(-300);
			projectile.setVelocityX(-130);
			mouvEn3 = 2;
			aleatoire3 = 4;
	} else if (mouvEn3 == 1) {
		var	projectile = projectiles.create((ennemi3.body.center.x+17), (ennemi3.body.center.y+3), "ennemiprojectile");
			projectile.body.setGravityY(-300);
			projectile.setVelocityX(130);
			mouvEn3 = 2;
			aleatoire3 = 4;
	}
}
// la recolte
function collectCollectible(bananes, player) {
	bananes.anims.play("collecteBananeAnim", true);
	bananes.disableBody(true,true)
	score+= 10;
	scoreText.setText("VICTOIRE + GAIN PV");
	if (score == 10){
		pointDeVie+= 1;
		pointDeVieText.setText("PV : "+pointDeVie);
	}
	compteur = 1;
}

// generation chiffre pour le déplacement de l'ennemi
function aleatoireFunction1 () {
	return aleatoire1 = Phaser.Math.Between(1,4);
}

function aleatoireFunction2 () {
	return aleatoire2 = Phaser.Math.Between(1,4);
}

function aleatoireFunction3 () {
	return aleatoire3 = Phaser.Math.Between(1,4);
}

// function d'invinciblité après avoir pris un dégat
function invincibleFunction () {
	return invincible = 0;
}
