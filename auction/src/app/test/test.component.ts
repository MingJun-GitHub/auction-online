import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('test');

    const list: number[] = [1, 2, 3];
    for (let i = 0, l = list.length; i < l; i++) {
      console.log(list[i]);
    }
  }

}
