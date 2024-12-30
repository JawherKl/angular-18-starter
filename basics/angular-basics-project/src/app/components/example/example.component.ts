import { Component } from '@angular/core';
import { ExampleService } from '../../services/example.service';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  message: string;

  constructor(private exampleService: ExampleService) {
    this.message = this.exampleService.getMessage();
  }
  sayHello() {
    alert('Hello from Angular!');
  }  
}
