import * as express from 'express';
import * as path from 'path';
import {Server} from 'ws';
const app = express();
app.use('/', express.static(path.join(__dirname, '..', 'client')));
export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ) {}
}
export class Comment {
    constructor(
        public id: number,
        public productId: number,
        public timestamp: string,
        public user: string,
        public rating: number,
        public content: string
    ) {}
}
const products: Product[] = [
    new Product(1, '第1个商品', 1.99, 4, '这是第一个商品,是我在学习angular时创建的.', ['电子产品', '硬件设备']),
    new Product(2, '第2个商品', 12.99, 4.5, '这是第2个商品,是我在学习angular时创建的.', ['电子产品']),
    new Product(3, '第3个商品', 13.99, 2.5, '这是第3个商品,是我在学习angular时创建的.', ['电子产品', '硬件设备']),
    new Product(4, '第4个商品', 14.99, 4.5, '这是第4个商品,是我在学习angular时创建的.', ['硬件设备']),
    new Product(5, '第5个商品', 15.99, 3.5, '这是第5个商品,是我在学习angular时创建的.', ['图书', '硬件设备'])
];
const comments: Comment[] = [
    new Comment(1, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(2, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(3, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(4, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(5, 2, '2017-08-24', '张三', 4, '东西不错')
];


app.get('/', (req, res) => {
    res.send('hello express');
});
app.get('/api/products', (req, res) => {
    let result = products;
    let params = req.query;

    if(params.title){
        result = result.filter(p => p.title.indexOf(params.title) !== -1);
    }
    if(params.price && result.length){
        result = result.filter(p => p.price <= Number.parseInt(params.price));
    }
    if(params.category && params.category !== '-1' && result.length){
        result = result.filter(p => p.categories.indexOf(params.category) !== -1);
    }
    res.json(result);
});
app.get('/api/product/:id', (req, res) => {
    res.json(products.find(product => product.id === req.params.id - 0));
});
app.get('/api/product/:id/comments',(req, res) => {
    res.json(comments.filter(comment => comment.productId === req.params.id - 0));
});

app.listen(8000, 'localhost', () => {
    console.log('服务器已经启动，地址是：http://localhost:8000');
});

const subscription = new Map<any, number[]>();
const wsServer = new Server({port: 8085});
wsServer.on("connection", websocket => {
    websocket.on('message', (message: string) => {
        let messageObj = JSON.parse(message);
        let productIds = subscription.get(websocket) || [];
        subscription.set(websocket, [...productIds, messageObj.productId]);
    });
});
const currentBids = new Map<number, number>();
setInterval(() => {
    products.forEach(p => {
        let currentBid = currentBids.get(p.id) || p.price;
        let newBid = currentBid + Math.random() * 5;
        currentBids.set(p.id, newBid);
    });
    // map的循环匿名函数的参数为 value，key
    subscription.forEach((productIds: number[], ws) => {
        if(ws.readyState === 1) {
            let newBids = productIds.map(pid => ({
                productId: pid,
                bid: currentBids.get(pid)
            }));
            ws.send(JSON.stringify(newBids));
        }else{
            subscription.delete(ws);
        }
    });
}, 2000);
