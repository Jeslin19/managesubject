import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManagestuComponent } from './managestu/managestu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ManagestuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'managestu';
}
