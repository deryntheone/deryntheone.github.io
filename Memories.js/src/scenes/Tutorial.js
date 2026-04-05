export class Tutorial extends Phaser.Scene {

    constructor() {
        super('Tutorial');
    }

    create() {
        document.fonts.ready.then(() => {
            this.cameras.main.setBackgroundColor('#ffffff');

            const { width, height } = this.scale;

            this.add.text(width / 2, height * 0.38, 'Instructions', {
                fontFamily: 'Margarine',
                fontSize: '42px',
                color: '#222222',
                fontStyle: 'bold'
            }).setOrigin(0.5);

            this.add.text(width / 2, height * 0.50, 'Find the task in each room to proceed to the next', {
                fontFamily: 'Margarine',
                fontSize: '22px',
                color: '#222222',
            }).setOrigin(0.5);

            this.add.text(width / 2, height * 0.58, 'Get through all 10 rooms to reach the end', {
                fontFamily: 'Margarine',
                fontSize: '22px',
                color: '#222222',
            }).setOrigin(0.5);

            const pressTo = this.add.text(width / 2, height * 0.88, '(press to continue)', {
                fontFamily: 'Margarine',
                fontSize: '18px',
                color: '#222222',
                fontStyle: 'bold'
            }).setOrigin(0.5);

            this.tweens.add({
                targets: pressTo,
                y: pressTo.y + 5,
                duration: 1000,
                ease: 'Linear',
                yoyo: true,
                repeat: -1
            });

            this.input.keyboard.once('keydown', () => {
                this.scene.start('Kinder');
            });
        })
    }
}