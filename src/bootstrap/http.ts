import { Injectable } from '@angular/core'  
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem("token") != null) {
      request = request.clone({
                  setHeaders: { 
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                  }
                })
    }

    return next.handle(request)
  }
}

export class HttpResponseInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        console.log('Unauthorized')
      }
      
      const error = err.error.message || err.statusText
      return throwError(error)
    }))
  }
}