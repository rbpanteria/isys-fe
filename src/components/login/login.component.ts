import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { Base } from 'base'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug'
})

export class LoginComponent extends Base {
  form = new FormGroup({
    'username': new FormControl(''),
    'password': new FormControl('')
  })

  get controls() { return this.form.controls }

  authenticate() {
    super.post('login').subscribe(response => {
      localStorage.setItem('token', response['token'])
      super.navigate(['administration/user'])
    })
  }
}