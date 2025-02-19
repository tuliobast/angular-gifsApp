import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gifs-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
