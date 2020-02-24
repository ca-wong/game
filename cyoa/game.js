function game() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let bridge = false;

    stageOne();

    /**
     * Introduction
     */
    function stageOne() {
        ctx.font = "40px VT323";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("You have heard rumors of a treasure", 400, 300);
        ctx.fillText("somewhere around a neighboring town.", 400, 400);
        ctx.fillText("You choose to go try and find it.", 400, 500);

        ctx.font = "25px VT323";
        ctx.fillText("Click anywhere to continue", 625, 770);

        canvas.onmousedown = function stageOneGame(event) {
            stageTwo();
        };
    }

    function stageTwo() {
        ctx.drawImage(document.getElementById("start"), 0, 0);
        ctx.drawImage(document.getElementById("box"), -25, 500);
        ctx.drawImage(document.getElementById("box"), 425, 500);

        ctx.font = "35px VT323";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Go home", 175, 710);
        ctx.fillText("Go to the forest", 625, 710);

        canvas.onmousedown = function stageTwoGame(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;

            if (x <= 400) {
                stageThreeA(); // Home
            }
            else {
                stageThreeB(); // Forest
            }
        }
    }

    function stageThreeA() {
        ctx.drawImage(document.getElementById("ending"), 0, 0);

        ctx.font = "40px VT323";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Ending #1", 400, 100);
        ctx.fillText("You decide to head home, ending", 400, 300);
        ctx.fillText("your adventure before it even started.", 400, 400);
        ctx.fillText("You lazy child.", 400, 500);
    }

    /*
     * This is the first forest decision point
     */
    function stageThreeB() {
        ctx.drawImage(document.getElementById("forest1"), 0, 0);
        ctx.drawImage(document.getElementById("box"), -25, 500);
        ctx.drawImage(document.getElementById("box"), 425, 500);

        ctx.font = "35px VT323";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Go to town", 175, 710);
        ctx.fillText("Go down the path", 625, 710);

        canvas.onmousedown = function stageThreeB(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;

            if (x <= 400) {
                stageFourA(); // Town
            }
            else {
                stageFourB(); // Path
            }
        }
    }
    
    function stageFourA() {
        ctx.drawImage(document.getElementById("town"), 0, 0);
        ctx.drawImage(document.getElementById("box"), -25, 500);
        ctx.drawImage(document.getElementById("box"), 425, 500);
        ctx.drawImage(document.getElementById("box"), 200, 300);
        
        ctx.font = "35px VT323";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText = ("aklkjhgfdfghjkjhgfdsjklkfdsklfdsdfgklkjds", 175, 0);
        ctx.fillText = ("NPC1", 625, 500);
    }
    
    function stageFourB() {
        ctx.drawImage(document.getElementById("forest2"), 0, 0);
    }
}
