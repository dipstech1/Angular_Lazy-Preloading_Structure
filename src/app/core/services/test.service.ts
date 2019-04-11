import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'

@Injectable()

export class TestService {

    url = "https://jsonplaceholder.typicode.com/posts"
    constructor(private http:HttpClient){}

    public doTest(){
        return this.http.get(this.url)
    }
}