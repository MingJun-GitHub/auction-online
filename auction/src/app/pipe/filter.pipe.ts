import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // 第一个参数：要被过滤的元素，之后的参数就是要被过滤的条件
  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(list: any[], field: string, keyword: string): any[] {
    if (field && keyword) {
      return list.filter(item => item[field].indexOf(keyword) >= 0);
    }else {
      return list;
    }
  }
}
