import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { BaseModule } from './module'
import { environment } from 'environment'

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(BaseModule).catch(err => console.error(err))