import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/order/pending' },
    { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
    { path: 'quotation', loadChildren: () => import('./quotation/quotation.module').then(m => m.QuotationModule) }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeRoutingModule,
        DetailRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
