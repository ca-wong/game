function game() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let bridge = false;

    stageOne();

    function stageOne() {
        ctx.font = '35px monospace';
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("You have heard rumors of a treasure", 400, 300);
        ctx.fillText("somewhere around a neighboring town.", 400, 400);
        ctx.fillText("You choose to go try and find it.", 400, 500);

        ctx.font = '25px monospace';
        ctx.fillText("Click to continue", 625, 770);

        canvas.onmousedown = function stageOneGame(event) {
            stageTwo();
        };
    } //intro

    function stageTwo() {
        ctx.drawImage(document.getElementById("start"), 0, 0);
        ctx.drawImage(document.getElementById("box"), -25, 500);
        ctx.drawImage(document.getElementById("box"), 425, 500);

        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Go home", 175, 710);
        ctx.fillText("Go to the", 625, 695);
        ctx.fillText("forest", 625, 725);


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
    } //entrance of forest

    function stageThreeA() {

        ctx.drawImage(document.getElementById("ending"), 0, 0);

        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Ending #1", 400, 100);
        ctx.fillText("You decide to head home, ending", 400, 300);
        ctx.fillText("your adventure before it even started.", 400, 400);
        ctx.fillText("You lazy child.", 400, 500);

        endings();

    } //ending1

    function stageThreeB() {
        ctx.drawImage(document.getElementById("forest1"), 0, 0);
        ctx.drawImage(document.getElementById("box"), -25, 500);
        ctx.drawImage(document.getElementById("box"), 425, 500);

        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Go to town", 175, 710);
        ctx.fillText("Go down the", 625, 695);
        ctx.fillText("path", 625, 725);

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
        };
    } //forest1

    function stageFourA() {
        ctx.drawImage(document.getElementById("town"), 0, 0);
        ctx.drawImage(document.getElementById("box"), -25, 400);
        ctx.drawImage(document.getElementById("box"), 425, 400);
        ctx.drawImage(document.getElementById("box"), 200, 200);
        ctx.drawImage(document.getElementById("box"), 200, 600);

        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("npc2", 175, 610);
        ctx.fillText("npc1", 625, 610);
        ctx.fillText("npc3", 400, 410);
        ctx.fillText("Go back", 400, 775);

        canvas.onmousedown = function stageFourA(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;

            if (x <= (800 / 3)) {
                stageFourA1(); //npc2
            }
            else if (x <= (800 / 3 * 2)) {
                if (y <= 600) {
                    stageFourA2(); //npc3
                }
                else {
                    stageThreeB();
                }
            }
            else {
                stageFourA3(); //npc1
            }
        };
    } //town
    
    function stageFourA1() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("LeftNPC1"), 300, 75);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        ctx.drawImage(document.getElementById("box"), 10, 460);
        ctx.drawImage(document.getElementById("box"), 390, 460);
        
        
        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Hello!", 205, 670);
        ctx.fillText("Goodbye.", 595, 670);
        
         canvas.onmousedown = function stageFourA1(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            if (x <= 400) {
                dialogue1a();
            }
            else {
                dialogue1b();
            }
        }
    } //LeftNPC
    
    function dialogue1a() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("LeftNPC1"), 300, 75);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        
        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText("Oh, hello! What can I do for you?", 75, 620);
        
        ctx.font = "20px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Click to continue", 625, 740);
        
         canvas.onmousedown = function dialogue1a(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            dialogueChoice1_1();
        };
    }
    
    function dialogueChoice1_1() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("LeftNPC1"), 300, 75);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        ctx.drawImage(document.getElementById("box"), 10, 460);
        ctx.drawImage(document.getElementById("box"), 390, 460);
        
        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Treasure?", 205, 670);
        ctx.fillText("Nevermind.", 595, 670);
        
         canvas.onmousedown = function dialogueChoice1_1(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            if (x <= 400) {
                dialogue1c();
            }
            else {
                dialogue1d();
            }
        };
    }
    
    function dialogue1c() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("LeftNPC2"), 300, 75);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        
        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText("A treasure? I think I overheard my", 75, 615);
        ctx.fillText("brother talking about something", 75, 655);
        ctx.fillText("like that.", 75, 695);
        
        ctx.font = "20px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Click to continue", 625, 740);
        
         canvas.onmousedown = function dialogue1c(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            dialogueChoice1_2();
        };
    }
    
    function dialogueChoice1_2() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("LeftNPC1"), 300, 75);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        ctx.drawImage(document.getElementById("box"), 10, 460);
        ctx.drawImage(document.getElementById("box"), 390, 460);
        
        ctx.font = "30px monopspace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Where is it?", 205, 670);
        ctx.fillText("Nevermind.", 595, 670);
        
         canvas.onmousedown = function dialogueChoice1_2(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            if (x <= 400) {
                dialogue1e();
            }
            else {
                dialogue1f();
            }
        };
    }
    
    function dialogue1e() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("LeftNPC3"), 300, 75);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        
        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText("I wasn't really, uh, listening to my", 75, 615);
        ctx.fillText("brother. But I think there was something", 75, 655);
        ctx.fillText("about a cave?", 75, 695);
        
        ctx.font = "20px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Click to continue", 625, 740);
        
         canvas.onmousedown = function dialogue1e(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            stageFourA();
        };
    }
    
    function dialogue1f() {
        stageFourA();
    }
    
    function dialogue1d() {
        stageFourA();
    }
    
    function dialogue1b() {
        stageFourA();
    }
    
    function stageFourA2() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("MiddleNPC1"), 325, 100);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        ctx.drawImage(document.getElementById("box"), 10, 460);
        ctx.drawImage(document.getElementById("box"), 390, 460);
        
        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Uh... Hello?", 205, 670);
        ctx.fillText("Goodbye.", 595, 670);
        
        canvas.onmousedown = function stageFourA2(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            if (x<=400) {
                dialogue2a();
            }
            else {
                dialogue2b();
            }
        };
    } //MiddleNPC
    
    function dialogue2a() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("MiddleNPC1"), 325, 100);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        
        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText("...", 75, 620);
        
        ctx.font = "20px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Click to continue", 625, 740);
        
        canvas.onmousedown = function dialogue2a(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            dialogueChoice2_1();
        };
    }
    
    function dialogueChoice2_1() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("MiddleNPC1"), 325, 100);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        ctx.drawImage(document.getElementById("box"), 10, 460); 
        ctx.drawImage(document.getElementById("box"), 390, 460);
        
        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Treasure?", 205, 670);
        ctx.fillText("Nevermind.", 595, 670);
        
        canvas.onmousedown = function stageFourA2(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            if (x<=400) {
                dialogue2c();
            }
            else {
                dialogue2d();
            }
        };
    }
    
    function dialogue2c() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("MiddleNPC2"), 325, 100);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        
        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText("All those rumors are bogus. But I", 75, 615);
        ctx.fillText("do know where one is.", 75, 655);
        
        ctx.font = "20px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Click to continue", 625, 740);
        
        canvas.onmousedown = function dialogue2c(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            dialogueChoice2_2();
        };
    } //reference dialogue
    
    function dialogueChoice2_2() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("MiddleNPC1"), 325, 100);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        ctx.drawImage(document.getElementById("box"), 10, 460);
        ctx.drawImage(document.getElementById("box"), 390, 460);
        
        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Then... where", 205, 650);
        ctx.fillText("can I find one?", 205, 685);
        ctx.fillText("Nevermind.", 595, 670);
        
        canvas.onmousedown = function dialogueChoice2_2(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            if (x<=400) {
                dialogue2e();
            }
            else {
                dialogue2f();
            }
        };
    }
    
    function dialogue2e() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("MiddleNPC2"), 325, 100);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        
        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText("There's one across the bridge.", 75, 620);
        
        ctx.font = "20px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Click to continue", 625, 740);
        
        canvas.onmousedown = function dialogue2e(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            dialogue2g();
        };
    }
    
    function dialogue2g() {
        bridge = true;
        
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("MiddleNPC3"), 325, 100);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        
        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText("But it's a dangerous journey, so", 75, 615);
        ctx.fillText("take this. It'll help you.", 75, 655);
        
        ctx.font = "20px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Click to continue", 625, 740);
        
        canvas.onmousedown = function dialogue2g(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            stageFourA();
        };
    }
    
    function dialogue2f() {
        stageFourA();
    }
    
    function dialogue2d() {
        stageFourA();
    }
    
    function dialogue2b() {
        stageFourA();
    }
    
    function stageFourA3() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("RightNPC1"), 325, 50);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        ctx.drawImage(document.getElementById("box"), 10, 460);
        ctx.drawImage(document.getElementById("box"), 390, 460);
        
        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Hello!", 205, 670);
        ctx.fillText("Goodbye.", 595, 670);
        
        canvas.onmousedown = function stageFourA2(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            if (x<=400) {
                dialogue3a();
            }
            else {
                dialogue3b();
            }
        };
    } //rightNPC
    
    function dialogue3a() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("RightNPC1"), 325, 50);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        
        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText("Hey there! Watcha' need?", 75, 620);
        
        ctx.font = "20px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Click to continue", 625, 740);
        
        canvas.onmousedown = function dialogue3a(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            dialogueChoice3_1();
        }
    }
    
    function dialogueChoice3_1() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("RightNPC1"), 325, 50);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        ctx.drawImage(document.getElementById("box"), 10, 460);
        ctx.drawImage(document.getElementById("box"), 390, 460);
        
        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Treasure?", 205, 670);
        ctx.fillText("Nevermind.", 595, 670);
        
        canvas.onmousedown = function dialogue3a(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            if (x <=400) {
                dialogue3c();
            }
            else {
                dialogue3d();
            }
        };
    }
    
    function dialogue3c() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("RightNPC2"), 325, 50);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        
        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText("A treasure, eh? I think I heard", 75, 615);
        ctx.fillText("something 'bout that on ma way", 75, 655);
        ctx.fillText("here.", 75, 695);
        
        ctx.font = "20px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Click to continue", 625, 740);
        
        canvas.onmousedown = function dialogue3a(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            dialogueChoice3_2();
        }
    }
    
    function dialogueChoice3_2() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("RightNPC1"), 325, 50);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        ctx.drawImage(document.getElementById("box"), 10, 460);
        ctx.drawImage(document.getElementById("box"), 390, 460);
        
        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Where is it?", 205, 670);
        ctx.fillText("Nevermind.", 595, 670);
        
        canvas.onmousedown = function dialogueChoice3_2(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            if (x <=400) {
                dialogue3e();
            }
            else {
                dialogue3f();
            }
        };
    }
    
    function dialogue3e() {
        ctx.drawImage(document.getElementById("town2"), 0, 0);
        ctx.drawImage(document.getElementById("RightNPC3"), 325, 50);
        ctx.drawImage(document.getElementById("textbox"), 0, 0);
        
        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "left";
        ctx.fillText("Well, the only thing I remember is", 75, 615);
        ctx.fillText("something 'bout a cave.", 75, 655);
        
        ctx.font = "20px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Click to continue", 625, 740);
        
        canvas.onmousedown = function dialogue3a(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            stageFourA();
        };
    }
    
    function dialogue3f() {
        stageFourA();
    }
    
    function dialogue3d() {
        stageFourA();
    }
    
    function dialogue3b() {
        stageFourA();
    }
    
    function stageFourB() {
        ctx.drawImage(document.getElementById("forest2"), 0, 0);
        ctx.drawImage(document.getElementById("box"), -25, 500);
        ctx.drawImage(document.getElementById("box"), 425, 500);

        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("go to the", 175, 695);
        ctx.fillText("bridge", 175, 725);
        ctx.fillText("go to the", 625, 695);
        ctx.fillText("cave", 625, 725);

        canvas.onmousedown = function stageFourB(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;

            if (x <= 400) {
                if (bridge == true) {
                    stageFiveA1(); //bridge (survive)
                }
                else {
                    stageFiveA2(); //bridge (death)
                }
            }
            else {
                stageFiveB(); //cave
            }
        };
    } //forest2

    function stageFiveA1() {
        ctx.drawImage(document.getElementById("bridge"), 0, 0);
        ctx.drawImage(document.getElementById("box"), 200, 100);
        ctx.drawImage(document.getElementById("box"), 200, 500);

        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Cross", 400, 310);
        ctx.fillText("Go back", 400, 710);
        
        canvas.onmousedown = function stageFiveA1(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;

            if (y <= 400) {
                stageEight1(); //ending #5
            }
            else {
                stageFourB();
            }
        };
    } //bridge(survive)
    
    function stageEight1() {
        ctx.drawImage(document.getElementById("ending"), 0, 0);
        
        ctx.font = "30 px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Ending #5", 400, 100);
        ctx.fillText("You attempt to cross the bridge.", 400, 250);
        ctx.fillText("But, a suspense cable snaps, causing the bridge", 400, 350);
        ctx.fillText("to fall. Luckily, you use the grappling hook", 400, 450);
        ctx.fillText("and get safely to the other side.", 400, 550);
        
        ctx.font = "25px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Click to continue", 675, 770);
        
         canvas.onmousedown = function homeEnding(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
            
            stageEight2();
        }
        
    }
    
    function stageEight2() {
        ctx.drawImage(document.getElementById("ending"), 0, 0);
        
        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Ending #5", 400, 100);
        ctx.fillText("On the other side, you see a chest.", 400, 300);
        ctx.fillText("You open it and find many valuables inside.", 400, 400);
        ctx.fillText("Satisfied, you pick up the chest and head home.", 400, 500);
        
        endings();
    } //ending5

    function stageFiveA2() {
        ctx.drawImage(document.getElementById("bridge"), 0, 0);
        ctx.drawImage(document.getElementById("box"), 200, 100);
        ctx.drawImage(document.getElementById("box"), 200, 500);

        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Cross", 400, 310);
        ctx.fillText("Go back", 400, 710);

        canvas.onmousedown = function stageFiveA2(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;

            if (y <= 400) {
                stageSix(); //ending #2
            }
            else {
                stageFourB();
            }
        }
    } //bridge(death)

    function stageFiveB() {
        ctx.drawImage(document.getElementById("cave"), 0, 0);
        ctx.drawImage(document.getElementById("box"), -25, 500);
        ctx.drawImage(document.getElementById("box"), 425, 500);

        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Go left", 175, 710);
        ctx.fillText("Go right", 625, 710);

        canvas.onmousedown = function homeEnding(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;

            if (x <= 400) {
                stageSevenA(); //ending #3
            }
            else {
                stageSevenB(); //ending #4
            }
        };
    } //cave

    function stageSix() {
        ctx.drawImage(document.getElementById("ending"), 0, 0);

        ctx.font = "35px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Ending #2", 400, 100);
        ctx.fillText("You attempt to cross the bridge, but", 400, 300);
        ctx.fillText("the bridge collapses and you fall to your death.", 400, 400);
        ctx.fillText("Maybe someone in the town can help you...", 400, 500);

        endings();
    } //ending2

    function stageSevenA() {
        ctx.drawImage(document.getElementById("ending"), 0, 0);

        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Ending #3", 400, 100);
        ctx.fillText("You follow the left path, finding", 400, 300);
        ctx.fillText("chunks of sapphire scattered across the floor.", 400, 400);
        ctx.fillText("You fill your satchel with as much as you can", 400, 500);
        ctx.fillText("and head home.", 400, 600);

        endings();
    } //ending3

    function stageSevenB() {
        ctx.drawImage(document.getElementById("ending"), 0, 0);

        ctx.font = "30px monospace";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Ending #4", 400, 100);
        ctx.fillText("You follow the right path and stumble upon", 400, 300);
        ctx.fillText("a vein of orange topaz in the walls around you.", 400, 400);
        ctx.fillText("You mine as much as you can and", 400, 500);
        ctx.fillText("and head back home.", 400, 600);

        endings();
    } //ending4

    function endings() {
        canvas.onmousedown = function homeEnding(event) {
            const rect = canvas.getBoundingClientRect(),
                x = event.clientX - rect.left,
                y = event.clientY - rect.top;
            let data = ctx.getImageData(x, y, 1, 1).data;
        }
    }
}
