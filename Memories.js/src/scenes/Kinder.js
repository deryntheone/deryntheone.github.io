export class Kinder extends Phaser.Scene {
    constructor() {
        super('Kinder');
    }

    preload() {
        this.load.image('photo', 'assets/photos/kinder_pic.png');
        this.load.image('background', 'assets/backgrounds/kinder_bg.png');
        this.load.image('task', 'assets/tasks/kinder_task.png');
    }

    create() {
        const { width, height } = this.scale;

        const background = this.add.image(0, 0, 'background').setOrigin(0, 0);

        const task = this.add.image(330, 590, 'task').setOrigin(0, 0);
        task.setInteractive({ useHandCursor: true });
        task.on('pointerdown', () => this.showPopup());

        const photo = this.add.image(width / 2, height / 2, 'photo').setVisible(false);
        const scaleX = width / photo.width;
        const scaleY = height / photo.height;
        photo.setScale(Math.min(scaleX, scaleY));

        const elements = [background, task];
        let pToggle = false;

        this.input.keyboard.on('keydown-P', () => {
            pToggle = !pToggle;
            elements.forEach(el => el.setVisible(!pToggle));
            photo.setVisible(pToggle);
        });
    }

    showPopup() {
        const overlay = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0.6)
            .setOrigin(0, 0)
            .setInteractive();

        const panel = this.add.rectangle(this.scale.width / 2, this.scale.height / 2, 380, 250, 0xffffff)
            .setStrokeStyle(3, 0x000000);

        const message = this.add.text(this.scale.width / 2, this.scale.height / 2 - 60, 'you did it!', {
            fontFamily: 'Margarine',
            fontSize: '32px',
            color: '#222222',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        const linkBtn = this.add.rectangle(this.scale.width / 2, this.scale.height / 2 + 20, 200, 50, 0xffffff)
            .setInteractive({ useHandCursor: true })
            .setStrokeStyle(3, 0x000000);
        const linkText = this.add.text(this.scale.width / 2, this.scale.height / 2 + 20, 'View task', {
            fontFamily: 'Margarine',
            fontSize: '18px',
            color: '#000000'
        }).setOrigin(0.5);

        linkBtn.on('pointerdown', () => {
            window.open('https://drive.google.com/file/d/1u3H9kiPf8ggMvcVrHZAYwx0j5GBr5DW3/view?usp=drive_link', '_blank');
        });

        const nextBtn = this.add.rectangle(this.scale.width / 2, this.scale.height / 2 + 85, 200, 50, 0xffffff)
            .setInteractive({ useHandCursor: true })
            .setStrokeStyle(3, 0x000000);
        const nextText = this.add.text(this.scale.width / 2, this.scale.height / 2 + 85, 'Next', {
            fontFamily: 'Margarine',
            fontSize: '18px',
            color: '#000000'
        }).setOrigin(0.5);

        nextBtn.on('pointerdown', () => {
            this.scene.start('One');
        });

        this.popup = this.add.container(0, 0, [overlay, panel, message, linkBtn, linkText, nextBtn, nextText]);
    }
}