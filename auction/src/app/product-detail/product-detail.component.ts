import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Product, Comment, ProductService} from "../shared/product.service";
import {WebSocketService} from "../shared/web-socket.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public showCreateComment = false;
  public product: Product;
  public comments: Comment[];
  public newComment: string;
  public newRating = 5;
  public isWatched = false;
  public currentBid: number;
  public subscription: Subscription;

  constructor(private routerInfo: ActivatedRoute,
              private productService: ProductService,
              private websocket: WebSocketService) {
  }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      // 从路由中获取的参数都是字符串，需要转为数字类型的id
      const productId: number = Number.parseInt(params['id']);
      this.productService.getProduct(productId).subscribe(
        product => {
          this.product = product;
          this.currentBid = product.price;
        }
      );
      this.productService.getCommentsForProductId(productId).subscribe(
        comments => this.comments = comments
      );
    });

    // 测试接受websocket消息
    this.websocket.createObservableSocket('ws://localhost:8085')
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('end'),
      );
  }

  addComment() {
    this.comments.unshift(new Comment(0, this.product.id, '2017-08-24', 'zhangsan', this.newRating, this.newComment));
    this.showCreateComment = !this.showCreateComment;
    this.newRating = 5;
    this.newComment = '';
    // 取平均值
    this.product.rating = this.comments.reduce((s, comment) => s + comment.rating, 0) / this.comments.length;

    // 测试发送websocket请求
    this.websocket.sendMessage('hello, from client');

  }

  watchProduct() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.isWatched = false;
      this.subscription = null;
    } else {
      this.isWatched = true;
      this.subscription = this.websocket.createObservableSocket('ws://localhost:8085', this.product.id).subscribe(
        products => {
          this.currentBid = products.find(p => p.productId === this.product.id).bid;
        }
      );
    }
  }

}
