export class End extends Phaser.Scene {
    constructor() {
        super('End');
    }

    preload() {
        this.load.image('endbackground', 'assets/backgrounds/end_bg.png');
    }

    create() {
        const { width, height } = this.scale;

        const background = this.add.image(0, 0, 'endbackground').setOrigin(0, 0);

        const title = this.add.text(width / 2, height * 0.38, 'thanks for playing!', {
                                fontFamily: 'Margarine',
                                fontSize: '42px',
                                color: '#222222',
                                fontStyle: 'bold'
                        }).setOrigin(0.5);

        this.add.text(width / 2, height * 0.50, 'MEMORIES.js by Deryn Theone Hipe (2026)', {
                fontFamily: 'Margarine',
                fontSize: '22px',
                color: '#222222',
            }).setOrigin(0.5);
        
        this.add.text(width / 2, height * 0.88, '(press to play again)', {
                fontFamily: 'Margarine',
                fontSize: '18px',
                color: '#222222',
                fontStyle: 'bold'
            }).setOrigin(0.5);
         
        this.tweens.add({
                targets: title,
                y: title.y + 20,
                duration: 1000,
                ease: 'Linear',
                yoyo: true,
                repeat: -1
        });

        this.input.keyboard.once('keydown', () => {
            this.scene.start('Start');
        });
    }

}
