import { HttpEvent } from "@angular/common/http";
import { MonoTypeOperatorFunction, OperatorFunction } from "rxjs";

export interface User{
    pipe(arg0: MonoTypeOperatorFunction<unknown>, arg1: OperatorFunction<unknown, HttpEvent<any>>): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>>;
    id:string,
    email:string,
    userName:string,
    token:string,
    type:string
}