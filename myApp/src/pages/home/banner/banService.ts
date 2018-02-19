import { Injectable } from '@angular/core';




@Injectable()
export class BanService {
    public slides: Object = [];
    constructor() { }

    getBan() {
        return this.slides = [
            {
                title: 'Welcome to the Docs!',
                description: 'The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.',
                image: '../../../assets/imgs/homeImg/banImg/1.jpg',
            },
            {
                title: 'What is Ionic?',
                description: '<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.',
                image: '../../../assets/imgs/homeImg/banImg/2.jpg',
            },
            {
                title: 'What is Ionic Cloud?',
                description: 'The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.',
                image: '../../../assets/imgs/homeImg/banImg/3.jpg',
            },
            {
                title: 'slides title four',
                description: 'The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.',
                image: '../../../assets/imgs/homeImg/banImg/4.jpg',
            }
        ];
    }
}