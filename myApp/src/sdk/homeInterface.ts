import { Injectable } from '@angular/core';


@Injectable()
export class HomeInterface {
    constructor() { }

    getHomeData() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8000').then(response => {
                return response.json();
            }).then(data => {
                resolve(data);
            });
        });
    }

    // 获取演员列表
    getRolesList() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8000/roleList').then(response => {
                return response.json();
            }).then(data => {
                resolve(data);
            });
        });
    }
    // 详情页的recm部分
    getRecmList() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8000/homeDetail/recmList').then(response => {
                return response.json();
            }).then(data => {
                resolve(data);
            });
        });
    }
    // 历史记录部分
    getHistoty() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8000/homeDetail/history').then(response => {
                return response.json();
            }).then(data => {
                resolve(data);
            });
        })
    }
}