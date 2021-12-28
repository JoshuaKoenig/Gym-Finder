import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  public getPlace()
  {
/*     var axios = require('axios'); */

 /*    var config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyCRNpGhyxZ1mFULPE-zusPGIHBBRvYfhqM`,
      headers: {}
    }

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      }) */

/*     const key = "AIzaSyCRNpGhyxZ1mFULPE-zusPGIHBBRvYfhqM";
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyCRNpGhyxZ1mFULPE-zusPGIHBBRvYfhqM`;

    return from(
      fetch(
        url,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept-Headers': 'application/json'
          },
          method: 'GET',
          mode: 'no-cors'
        }
      ).then((data:any) => {console.log(data)})
    ); */
  }

}
