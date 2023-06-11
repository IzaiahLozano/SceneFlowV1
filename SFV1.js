class Prod extends Phaser.Scene {
    constructor() {
        super('Production');
    }



    create() {

        this.cameras.main.setBackgroundColor('#fffff1');

        let mesg = this.add.text(
            800, 
            540,
            "Under Construction \nProduction name/logo will go here \nClick to Advance",
            {
               font: "45px Garamond",
               color: "#000000",
               wordWrap: { width: 1000 }
            }
         );


         this.input.on('pointerup', () => {
            // Advance to the next scene
            this.scene.start('menu');
        });

    }

}




class Menu extends Phaser.Scene {
    constructor() {
        super('menu');
    }



    create() {

        this.cameras.main.setBackgroundColor('#fffff1');

        let mesg = this.add.text(
            800, 
            540,
            "Under Construction \nThe menu will be next, there will be a button for the game, settings, and credits \nClick to Advance",
            {
               font: "45px Garamond",
               color: "#000000",
               wordWrap: { width: 1000 }
            }
         );


         this.input.on('pointerup', () => {
            // Advance to the next scene
            this.scene.start('lv1');
        });

    }


}




class lvl1 extends Phaser.Scene {
    constructor() {
        super('lv1');
    }



    create() {

        this.cameras.main.setBackgroundColor('#fffff1');

        let mesg = this.add.text(
            800, 
            540,
            "Under Construction \nThis will be the first level \nClick to Advance",
            {
               font: "45px Garamond",
               color: "#000000",
               wordWrap: { width: 1000 }
            }
         );


         this.input.on('pointerup', () => {
            // Advance to the next scene
            this.scene.start('lv2');
        });

    }


}




class lvl2 extends Phaser.Scene {
    constructor() {
        super('lv2');
    }



    create() {

        this.cameras.main.setBackgroundColor('#fffff1');

        let mesg = this.add.text(
            800, 
            540,
            "Under Construction \nThis will be the second level \nClick to Advance",
            {
               font: "45px Garamond",
               color: "#000000",
               wordWrap: { width: 1000 }
            }
         );


         this.input.on('pointerup', () => {
            // Advance to the next scene
            this.scene.start('lv3');
        });

    }


}




class lvl3 extends Phaser.Scene {
    constructor() {
        super('lv3');
    }



    create() {

        this.cameras.main.setBackgroundColor('#fffff1');

        let mesg = this.add.text(
            800, 
            540,
            "Under Construction \nThis will be the third level \nClick to Advance",
            {
               font: "45px Garamond",
               color: "#000000",
               wordWrap: { width: 1000 }
            }
         );


         this.input.on('pointerup', () => {
            // Advance to the next scene
            this.scene.start('Credit');
        });

    }


}




class Credit extends Phaser.Scene {
    constructor() {
        super('Credit');
    }



    create() {

        this.cameras.main.setBackgroundColor('#fffff1');

        let mesg = this.add.text(
            800, 
            540,
            "Under Construction \nThis would be the credit scene that could be accessed through the menu screen \nThe End of our basic outline",
            {
               font: "45px Garamond",
               color: "#000000",
               wordWrap: { width: 1000 }
            }
         );


         this.input.on('pointerup', () => {
            // Advance to the next scene
            this.scene.start('Production');
        });

    }


}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Prod, Menu, lvl1, lvl2, lvl3, Credit],
    title: "Scene Flow Version1",
});
