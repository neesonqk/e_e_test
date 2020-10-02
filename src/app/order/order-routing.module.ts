import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingComponent } from './pending/pending.component';


const routes: Routes = [{
    path: 'pending', component: PendingComponent, data: {
        reuseRoute: false
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule { }
