import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {Product, ProductService} from "../shared/product.service";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http"; // 让debounceTime起作用

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // test code start
  // dataSource: Observable<any>;
  // test code end
  public products: Observable<Product[]>;
  // public products: Array<Product>;
  // public keywords: string;
  // 响应式编程，input输入框的值改变的时候会发送valueChange事件
  // public filterField: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    // 订阅filterField字段的valueChange事件
    // this.filterField.valueChanges.debounceTime(500).subscribe(value => this.keywords = value);
    // this.products = productService.getProducts();
    // test code start
    // 此处只是定义该请求
    // this.dataSource = this.http.get('/api/products').map((res) => res.json());
    // test code end
    // 使用管道的方式
  }

  ngOnInit() {
    // 调用订阅方法时，请求才真正发送出去
    // angular提供使用管道处理请求
    // this.dataSource.subscribe((data) => this.products = data);
    this.products = this.productService.getProducts();
    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    );
  }

}

