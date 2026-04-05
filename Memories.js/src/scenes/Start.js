export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
        this.load.image('title', 'assets/start/title.png');
        this.load.image('start', 'assets/start/start.png');
        this.load.image('copyright', 'assets/start/copyright.png');
        this.load.image('kinder', 'assets/start/kinder.png');
        this.load.image('highschool', 'assets/start/highschool.png');
    }

    create() {
        document.fonts.ready.then(() => { 
            this.cameras.main.setBackgroundColor('#ffffff');

            this.add.text(-100, -100, 'wow, congrats on finding this hidden text!', {
                fontFamily: 'Margarine',
                fontSize: '1px',
                color: '#ffffff'
            }).setVisible(false);

            const title = this.add.image(332, 281, 'title').setOrigin(0, 0);
            const start = this.add.image(536, 433, 'start').setOrigin(0, 0);
            const copyright = this.add.image(1167, 687, 'copyright').setOrigin(0, 0);
            const kinder = this.add.image(27, 368, 'kinder').setOrigin(0, 0);
            const highschool = this.add.image(988, 0, 'highschool').setOrigin(0, 0);

            this.tweens.add({
                targets: title,
                y: title.y + 20,
                duration: 1000,
                ease: 'Linear',
                yoyo: true,
                repeat: -1
            });

            this.input.keyboard.once('keydown', () => {
                this.scene.start('Tutorial');
            });
        })
    }
}
