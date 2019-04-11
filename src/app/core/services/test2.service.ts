import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'

@Injectable()

export class Test2Service {

    url = "https://jsonplaceholder.typicode.com/posts"
    constructor(private http:HttpClient){}

    public doTest(){
        return this.http.get(this.url)
    }
}