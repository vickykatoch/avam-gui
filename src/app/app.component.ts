import { Component } from '@angular/core';
import { LibService } from 'f-gui-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  meaning: number;

  constructor(libService: LibService) {
    this.meaning = libService.getMeaning();
  }
}
