import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, exhaustMap, take } from "rxjs";
import { AuthService } from "./Authentication.service";

@Injectable({providedIn:'root'})
export class Authenticationinterceptor implements HttpInterceptor {
   constructor(private authser:AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   

        const token=localStorage.getItem('token');
        console.log(token)
        return  this.authser.user.pipe(
            take(1),
            exhaustMap((user)=>{
            if(!user){
                return next.handle(req);
            }
            const modefiedReq= req.clone({params:new HttpParams().set('auth',!token)});
                return next.handle(modefiedReq);
            }));    
        }

}