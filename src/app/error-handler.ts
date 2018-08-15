import { Response } from "@angular/http";
import {Observable} from 'rxjs/Observable';

export class ErrorHandler{
    static handle(response:Response | any){
        let message = null;
        if(response instanceof Response){
            message= `Erro ${response.status} ao tentar acessar a URL ${response.url} - ${response.statusText}`;
        } else{
            message=response.toString();
        }
        console.info(message);
        return Observable.throw(message);
    }
}