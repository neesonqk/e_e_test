import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PendingComponent } from './pending/pending.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
    NzFormModule, NzLayoutModule,
    NzMenuModule, NzIconModule, NzAvatarModule,
    NzInputModule, NzButtonModule, NzPageHeaderModule,
    NzDescriptionsModule, NzStatisticModule, NzTabsModule,
    NzSelectModule, NzSwitchModule, NzTableModule,
    NzDividerModule, NzCheckboxModule, NzDrawerModule
} from 'ng-zorro-antd';
import { IconsProviderModule } from '../icons-provider.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
    declarations: [PendingComponent, DetailComponent],
    imports: [
        CommonModule,
        OrderRoutingModule,
        ReactiveFormsModule,
        NzFormModule,
        IconsProviderModule,
        FormsModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzAvatarModule,
        NzButtonModule,
        NzInputModule,
        NzPageHeaderModule,
        NzDescriptionsModule,
        NzStatisticModule,
        NzTabsModule,
        NzSelectModule,
        NzSwitchModule,
        NzTableModule,
        NzDividerModule,
        NzCheckboxModule,
        NzDrawerModule
    ]
})
export class OrderModule { }
