import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, HousingLocationComponent],
    template: `
<section>
    <form>
        <input type='text' placeholder="Filter by city">
        <button class='primary' type='button'>Search</button>
    </form>
</section>
<section class="results">
    <app-housing-location
        [housingLocation]="housingLocation"    
    >
    </app-housing-location>
</section>
  `,
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    housingLocation: HousingLocation = {
        id: 1000,
        name: 'Nsambya Gardens',
        city: 'Kampala city',
        state: 'Central Uganda',
        photo: 'assets/pillars.png',
        availableUnits: 10,
        wifi: true,
        laundry: false
    }
}
