"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var ws_1 = require("ws");
var app = express();
app.use('/', express.static(path.join(__dirname, '..', 'client')));
var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var Comment = (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
var products = [
    new Product(1, '第1个商品', 1.99, 4, '这是第一个商品,是我在学习angular时创建的.', ['电子产品', '硬件设备']),
    new Product(2, '第2个商品', 12.99, 4.5, '这是第2个商品,是我在学习angular时创建的.', ['电子产品']),
    new Product(3, '第3个商品', 13.99, 2.5, '这是第3个商品,是我在学习angular时创建的.', ['电子产品', '硬件设备']),
    new Product(4, '第4个商品', 14.99, 4.5, '这是第4个商品,是我在学习angular时创建的.', ['硬件设备']),
    new Product(5, '第5个商品', 15.99, 3.5, '这是第5个商品,是我在学习angular时创建的.', ['图书', '硬件设备'])
];
var comments = [
    new Comment(1, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(2, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(3, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(4, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(5, 2, '2017-08-24', '张三', 4, '东西不错')
];
app.get('/', function (req, res) {
    res.send('hello express');
});
app.get('/api/products', function (req, res) {
    var result = products;
    var params = req.query;
    if (params.title) {
        result = result.filter(function (p) { return p.title.indexOf(params.title) !== -1; });
    }
    if (params.price && result.length) {
        result = result.filter(function (p) { return p.price <= Number.parseInt(params.price); });
    }
    if (params.category && params.category !== '-1' && result.length) {
        result = result.filter(function (p) { return p.categories.indexOf(params.category) !== -1; });
    }
    res.json(result);
});
app.get('/api/product/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id === req.params.id - 0; }));
});
app.get('/api/product/:id/comments', function (req, res) {
    res.json(comments.filter(function (comment) { return comment.productId === req.params.id - 0; }));
});
app.listen(8000, 'localhost', function () {
    console.log('服务器已经启动，地址是：http://localhost:8000');
});
var subscription = new Map();
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    websocket.on('message', function (message) {
        var messageObj = JSON.parse(message);
        var productIds = subscription.get(websocket) || [];
        subscription.set(websocket, productIds.concat([messageObj.productId]));
    });
});
var currentBids = new Map();
setInterval(function () {
    products.forEach(function (p) {
        var currentBid = currentBids.get(p.id) || p.price;
        var newBid = currentBid + Math.random() * 5;
        currentBids.set(p.id, newBid);
    });
    // map的循环匿名函数的参数为 value，key
    subscription.forEach(function (productIds, ws) {
        if (ws.readyState === 1) {
            var newBids = productIds.map(function (pid) { return ({
                productId: pid,
                bid: currentBids.get(pid)
            }); });
            ws.send(JSON.stringify(newBids));
        }
        else {
            subscription.delete(ws);
        }
    });
}, 2000);
