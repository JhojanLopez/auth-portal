import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@envs/environment';
import { Observable } from 'rxjs';
import { SignUpDTO } from '../interfaces/sign-up-dto';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  /**
   * it allows to sign up a new user
   * @param signUpRequest 
   * @returns 
   */
  signUp(signUpRequest: SignUpDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(`request: ${environment.API_BASE_URL}${environment.AUTH_ENDPOINTS.SESSION}${environment.AUTH_ENDPOINTS.PRE_SIGN_UP} - body  ${JSON.stringify(signUpRequest)}`);

    return this.http.post(
      `${environment.API_BASE_URL}${environment.AUTH_ENDPOINTS.SESSION}${environment.AUTH_ENDPOINTS.PRE_SIGN_UP}`,
      signUpRequest,
      { headers }
    );
  }

}
