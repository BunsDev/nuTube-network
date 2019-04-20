import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoContentComponent} from './no-content/no-content.component';
import {BaseComponent} from './base/base.component';

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'publish',
                loadChildren: './publish/publish.module#PublishModule'
            },
            {
                path: 'publish/:id',
                loadChildren: './publish/publish.module#PublishModule'
            },
            {
                path: 'v/:id',
                loadChildren: './view/view.module#ViewModule'
            }
        ]
    },
    {
        path: '**',
        component: NoContentComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                enableTracing: false,
                useHash: true
            }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
