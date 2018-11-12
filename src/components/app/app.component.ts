import { Component } from '@angular/core'
import * as $ from "jquery"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug'
})

export class AppComponent {}
