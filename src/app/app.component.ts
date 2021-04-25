import { Component, VERSION as ngVersion } from '@angular/core';
import { VERSION as matVersion } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aacli-v11210';

  public get angularVersion(): string {
    return ngVersion.full;
  }

  public get materialVersion(): string {
    return matVersion.full;
  }
}
