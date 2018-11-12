import { Component } from '@angular/core'
import { NgModule } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html'
})

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ]
})

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html'
})

export class PublicComponent {}