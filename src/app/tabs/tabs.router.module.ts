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
        path: 'calendar',
        children: [
          {
            path: '',
            loadChildren: '../calendar/calendar.module#CalendarPageModule'
          }
        ]
      },
      {
        path: 'config',
        children: [
          {
            path: '',
            loadChildren: '../config/config.module#ConfigPageModule'
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
