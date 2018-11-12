import { Component } from '@angular/core'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.pug'
})

export class PrivateComponent {
  ngOnInit() {
    $('.nav-dropdown-toggle').on('click', function(e) {
      $(e.target).parent().toggleClass('open')
      return false
    })
  }
}
