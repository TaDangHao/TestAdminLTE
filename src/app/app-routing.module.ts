import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ParenComponent } from './paren/paren.component';
import { SiblingComponent } from './sibling/sibling.component';

const routes: Routes = [
  { path: 'thong-tin-tai-khoan', component: AccountComponent},
  { path: 'doi-mat-khau', component: ChangePasswordComponent},
  { path: 'test-paren', component: ParenComponent},
  { path: 'test-sibling', component: SiblingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
