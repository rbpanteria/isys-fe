import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { RouteGuard } from './route.guard'
import { HttpRequestInterceptor, HttpResponseInterceptor } from './http'

import { AppComponent } from 'components/app/app.component'
import { PublicComponent } from 'components/layout/public/public.component'
import { PrivateComponent } from 'components/layout/private/private.component'
import { LoginComponent } from 'components/login/login.component'

import { AdministrationUserComponent } from 'components/administration/user/user.component'
import { AdministrationRoleComponent } from 'components/administration/role/role.component'

const routes: Routes = [
  { 
    path: '', 
    component: PublicComponent, 
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { 
    path: '', 
    component: PrivateComponent, 
    children: [
      { path: 'administration/user', component: AdministrationUserComponent },
      { path: 'administration/role', component: AdministrationRoleComponent }
    ],
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicComponent,
    PrivateComponent,
    AdministrationUserComponent,
    AdministrationRoleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class BaseModule {}