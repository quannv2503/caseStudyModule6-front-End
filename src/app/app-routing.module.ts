import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeContentComponent} from './modules/home-content/home-content.component';
import {ListAllHousesComponent} from './modules/page-content/houses/list/list-all-houses/list-all-houses.component';
import {ListOwnHousesComponent} from './modules/page-content/houses/list/list-own-houses/list-own-houses.component';
import {AboutContentComponent} from './_shared/about-content/about-content.component';
import {UserShowComponent} from './modules/page-content/user/detail/user-show/user-show.component';
import {UserUpdateComponent} from './modules/page-content/user/update/user-update/user-update.component';
import {HouseDetailViewComponent} from './modules/page-content/houses/detail/house-detail-view/house-detail-view.component';
import {UserChangePasswordComponent} from './modules/page-content/user/update/user-change-password/user-change-password.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContentComponent
  }, {
    path: 'houses',
    component: ListAllHousesComponent
  },
  {
    path: 'my-houses',
    component: ListOwnHousesComponent
  },
  {
    path: 'about',
    component: AboutContentComponent
  },
  {
    path: 'user-show',
    component: UserShowComponent
  },
  {
    path: 'user-update',
    component: UserUpdateComponent
  },
  {
    path: 'house-view',
    component: HouseDetailViewComponent
  },
  {
    path: 'change-password',
    component: UserChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
