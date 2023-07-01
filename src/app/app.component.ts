import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
  <main>
    <header>
        <img class='brand-logo' src='/assets/logo.svg' alt='logo' >
    </header>
    <section class="content">
        <app-home></app-home>
    </section>
</main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
