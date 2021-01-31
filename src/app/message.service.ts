import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message = '';
  status = '';
  icon = '';

  constructor() { }

  addMessage(message: string, status: string) {
    this.message = message;
    this.status = status;
    if (status === 'ok') {
      this.icon = environment.iconOk;
    } else {
      this.icon = environment.iconError
    }
  }

  clear() {
    this.message = '';
  }
}
