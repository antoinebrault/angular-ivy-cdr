import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  test = 'test';

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.test = 'test updated';
      this.cdr.detectChanges();

      console.log('should update');
    }, 5000)
  }
}
