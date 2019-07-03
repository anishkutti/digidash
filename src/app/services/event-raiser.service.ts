import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class EventRaiserService {
public eventClientChanged=new Subject();
public eventClientTChange =new Subject();

  constructor() { }
  triggerEvent(eventName: string, eventParam: any) {
    switch (eventName) {
      case 'CLIENT_CHANGED': {
        this.eventClientChanged.next(eventParam)
        break;
      }
    }
  }
}
