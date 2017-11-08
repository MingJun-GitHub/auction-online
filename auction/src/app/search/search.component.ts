import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;
  categories: string[];

  constructor(public fb: FormBuilder, public productService: ProductService) {
    this.formModel = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, this.positiveNumberValidator],
      category: ['-1']
    });
  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value)
      // this.productService.searchEvent.emit(this.formModel.value);
    }
  }

  positiveNumberValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }
    if (Number.parseInt(control.value) > 0) {
      return null;
    } else {
      return {positiveNumber: true};
    }
  }

}

export class SearchParam {
  constructor(public productTitle: string,
              public priceStart: number) {
  }
}
