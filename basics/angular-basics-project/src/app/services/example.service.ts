import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  getMessage(): string {
    return 'Hello from Service!';
  }
}
