import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
<article>
    <section>
        <img class='listing-photo' [src]='housingLocation?.photo' >
        <h2 class='listing-heading'>{{ housingLocation?.name }}</h2>
        <p class='listing-location'>{{ housingLocation?.city }}, {{ housingLocation?.state}}</p>
    </section>
    <section class='listing-features'>
        <h2 class='section-heading'>About the housing location</h2>
        <ul>
            <li>Units available: {{ housingLocation?.availableUnits}} </li>
            <li>Does this location have wifi: {{housingLocation?.wifi ? 'Yes': 'No'}} </li>
            <li>Does this location have laundry: {{housingLocation?.laundry? 'Yes': 'No' }} </li>
        </ul>
    </section>
</article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute)
    housingService: HousingService = inject(HousingService)
    housingLocationId = -1;
    housingLocation: HousingLocation|undefined;

    constructor() {
        this.housingLocationId = Number(this.route.snapshot.params['id'])
        this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId)
    }

}
