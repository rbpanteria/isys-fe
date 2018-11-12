import { OnInit, Injectable } from '@angular/core'  
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from 'environment'

@Injectable({
  providedIn: 'root'
})

export class Base implements OnInit {
  private base_url = environment.base_url

  constructor(private http_client: HttpClient, private router: Router) {}

  ngOnInit() {}

  get(url, query_string = []) {
    $.each(query_string, function(index, query_string) {
			url = url + '/' + query_string
    })
    return this.http_client.get(this.base_url + url)
  }

  post(url, body = {}) {
    return this.http_client.post(this.base_url + url, body)
  }

  save(url, form) {
    let body = {}
    $.each(form.controls, function(name, control) {
      body[name] = control.value
    })

    return this.post(url, body)
  }

  navigate(commands: any[]) {
    this.router.navigate(commands)
  }

  open(selector = '.modal') {
    $(selector).addClass('is-active')
  }
}