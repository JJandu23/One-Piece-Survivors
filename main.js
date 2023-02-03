const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/Navy.png");
ASSET_MANAGER.queueDownload("./img/luffy7.png");
ASSET_MANAGER.queueDownload("./img/Doflamingo.png");
ASSET_MANAGER.queueDownload("./img/One_Piece_Survivors_Map.png");

ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

	params.screenWidth = 1024;
	params.screenHeight = 768;

    //gameEngine.addEntity(new SceneManager(gameEngine));
	
	var waveMaker = new Wave(gameEngine);

	waveMaker.spawnRand();
	var player = new Luffy(gameEngine, gameEngine.uniqueEId++);
	gameEngine.addEntity(player);


    gameEngine.start();
	
	/* var test = false;
	if(test){
		for( i = 0; i < 40; i++){
			for(j = 0; j < 40; j++){ 
				var enemy = new Enemy(gameEngine, gameEngine.uniqueEId++)
				enemy.x = 190 + (i*14)
				enemy.y = 50 + (j*14)
				gameEngine.addEnemy(enemy)
				idMaker++
			}
	
		}
		gameEngine.enemies[0].radius = 60
	} */





	gameEngine.init(ctx);

	


	gameEngine.start();
});

