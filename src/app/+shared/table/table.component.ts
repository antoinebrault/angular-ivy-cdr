import { StatusPanelDef } from '@ag-grid-community/all-modules';
import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TemplateStatusComponent } from './template-status.component';

@Component({
  selector: 'app-table',
  exportAs: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input()
  templateStatus: TemplateRef<any>;

  statusBar: { statusPanels: StatusPanelDef[] } = {
    statusPanels: []
  };
  frameworkComponents = {
    templateStatus: TemplateStatusComponent
  };

  ngOnInit() {
    if (this.templateStatus) {
      this.statusBar.statusPanels.push({
        statusPanel: 'templateStatus',
        statusPanelParams: { template: this.templateStatus },
        align: 'right'
      });
    }
  }
}
