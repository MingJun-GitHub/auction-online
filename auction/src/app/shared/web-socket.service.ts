import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class WebSocketService {

  ws: WebSocket;

  constructor() {
  }

  createObservableSocket(url: string, id?: number): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {
        this.ws.onmessage = event => observer.next(event.data);
        this.ws.onerror = event => observer.error(event);
        this.ws.onclose = event => observer.complete();
        this.ws.onopen = event => {
          if (id) {
            this.sendMessage({
              productId: id
            });
          }
        };
        return () => this.ws.close();
      }
    ).map((message: string) => JSON.parse(message));
  }

  sendMessage(message: any) {
    this.ws.send(JSON.stringify(message));
  }

}
