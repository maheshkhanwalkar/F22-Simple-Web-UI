import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ColumbiaStudent } from './columbia-student';
import { ColumbiaStudentRsp } from "./columbia-student";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ColumbiaStudentServiceService {

  students: ColumbiaStudent[];
  studentServiceUrl: string;

  constructor(private http: HttpClient) {
    // console.log('The URL = ' + window.location.href);
    this.students = undefined;
  }

  getStudentServiceUrl(): string {
    const theUrl = window.location.href;
    let result: string;

    result = 'http://' + new URL(theUrl).hostname + ':5011/api/students/';
    return result;
  }


  /** GET heroes from the server */
  getStudents(studentUni): Observable<ColumbiaStudent> {
    let theUrl: string;

    theUrl = this.getStudentServiceUrl() + studentUni;
    return this.http.get<ColumbiaStudent>(theUrl);
  }
}
