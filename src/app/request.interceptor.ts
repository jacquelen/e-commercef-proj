import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("hello" ,request)
    const updatereq=request.clone({
      headers: request.headers.append("here is aheader","from interceptor")
    })
    console.log(updatereq)
    ////when replace it with updatereq variable the products dose not show in the page !!!
    ///so i put with the same request until to know how to handle this problem
    return next.handle(request);
  }
}
