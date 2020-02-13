import { AllCommunityModules, ModuleRegistry } from '@ag-grid-community/all-modules';
import { AgGridModule } from '@ag-grid-community/angular';
import { EnterpriseCoreModule } from '@ag-grid-enterprise/core';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TemplateStatusComponent } from './template-status.component';

ModuleRegistry.registerModules(AllCommunityModules);
ModuleRegistry.register(StatusBarModule);
ModuleRegistry.register(EnterpriseCoreModule);

@NgModule({
  imports: [CommonModule, AgGridModule.withComponents([TemplateStatusComponent])],
  declarations: [TableComponent, TemplateStatusComponent],
  exports: [TableComponent]
})
export class TableModule {}
