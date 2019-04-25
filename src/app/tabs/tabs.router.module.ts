import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#homePageModule'
          }
        ]
      },
      {
        path: 'books',
        children: [
          {
            path: '',
            loadChildren: '../books/books.module#booksPageModule'
          }
        ]
      },
      {
        path: 'podcast',
        children: [
          {
            path: '',
            loadChildren: '../podcast/podcast.module#podcastPageModule'
          }
        ]
      },
      {
        path: 'alertPage',
        children: [
          {
            path: '',
            loadChildren: '../alert-page/alert-page.module#AlertPagePageModule'
          }
        ]
      },
      {
        path: 'config',
        children: [
          {
            path: '',
            loadChildren: '../config/config.module#ConfigPageModule'
          },
          {
            path:'alertConfig',
            loadChildren:'../config-panic-btn/config-panic-btn.module#ConfigPanicBtnPageModule'
          }
        ]
      },
    
      {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
