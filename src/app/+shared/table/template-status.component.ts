import { IStatusPanelParams } from '@ag-grid-community/all-modules';
import { Component, TemplateRef } from '@angular/core';

export interface TemplateStatusPanelParams extends IStatusPanelParams {
  template: TemplateRef<any>;
}

@Component({
  selector: 'app-template-status-component',
  template: `
    <ng-container *ngTemplateOutlet="this.params.template"></ng-container>
  `,
  styleUrls: ['./template-status.component.scss']
})
export class TemplateStatusComponent {
  params: TemplateStatusPanelParams;

  agInit(params: TemplateStatusPanelParams): void {
    this.params = params;
  }
}
