import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "models/adduser";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class RegistryService {
  uri = "http://localhost:4088";
  loggedin_user: User;

  constructor(private http: HttpClient) {}

  addUser(user) {
    const body = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    };
    this.http
      .post(`${this.uri}/signin`, body, httpOptions)
      .subscribe(res => console.log("Done"));
  }

  login(user) {
    const body = {
      email: user.email,
      password: user.password
    };
    return this.http.post(`${this.uri}/login`, body, httpOptions);
  }

  get_all_users() {
    return this.http.get(`${this.uri}/allusers`);
  }
  upload_file(body) {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "multipart/form-data"
      })
    };
    this.http
      .post(`${this.uri}/upload`, body, options)
      .subscribe(res => console.log("Done", res));
  }
}
