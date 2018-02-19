'use strict';
const fs = require('fs');
const querystring = require('querystring');
const path = require('path');

const express = require('express');
const router = express.Router();

// 获取主页数据
router.use(function (req, res, next) {
    if (req.url == '/' || req.url == '/home') {
        fs.readFile(path.resolve(__dirname, '..') + '/data/data.json', (err, data) => {
            if (err) {
                console.log('返回数据失败');
            } else {
                res.send(JSON.parse(data)['home']);
            }
        })
    } else {
        next();
    }
});

// 获取homeDetail部分演员列表详情
router.use(function (req, res, next) {
    if (req.url == '/roleList') {
        fs.readFile(path.resolve(__dirname,'..')+'/data/data.json',(err,data)=>{
            if(err){
                console.log('数据返回失败');
            } else {
                res.send(JSON.parse(data)['homeDetail']['player'])
            }
        })
    } else {
        next();
    }
});

// 获取homeDetail部分推荐列表部分
router.use(function(req,res,next){
    if (req.url=='/homeDetail/recmList') {
        fs.readFile(path.resolve(__dirname,'..')+'/data/data.json',(err,data)=>{
            if (err) {
                console.log('数据返回失败');
            } else {
                res.send(JSON.parse(data)['homeDetail']['recmVod']);
            }
        })
    } else {
        next();
    }
});

// 获取homeDetail播放历史记录部分
router.use(function(req,res,next){
    if (req.url == '/homeDetail/history') {
        fs.readFile(path.resolve(__dirname,'..')+'/data/data.json',(err,data)=>{
            if (err) {
                console.log('数据返回失败');
            } else {
                res.send(JSON.parse(data)['homeDetail']['historyFilm']);
            }
        })
    }
})

module.exports = router;