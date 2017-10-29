import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
var url = "http://localhost:3000"
@Injectable()

export class DataService {
	
	http: any;

	constructor(@Inject(Http) http) {
		this.http = http;
	}

    getUsers() {
        return this.http.get(url +'/users');
    }
    getPosts() {
        return this.http.get(url +'/posts');
    }
    getAlbum() {
        return this.http.get(url +'/albums');
    }
    getPhotos() {
        return this.http.get(url +'/photos');
    }
    getComments() {
        return this.http.get(url +'/comments');
    }

    addUser(data) {
        let headers = new Headers({"Content-Type": "application/json"});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url + '/adduser', JSON.stringify(data), options)
            .map(res => res.json());
    }


}