import { Component, OnInit } from "@angular/core";
import { RegistryService } from "../registry.service";

@Component({
  selector: "app-first-page",
  templateUrl: "./first-page.component.html",
  styleUrls: ["./first-page.component.css"]
})
export class FirstPageComponent implements OnInit {
  ngOnInit() {}
  constructor(public registryService: RegistryService) {}
  fileChange(event) {
    let fileList: File = event.target.files;
    // if (fileList.length > 0) {
    let file: File = fileList;
    let formData: FormData = new FormData();
    formData.append("uploads", file, file.name);
    this.registryService.upload_file(formData);
    // let headers = new Headers();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    // headers.append("Content-Type", "multipart/form-data");
    // headers.append("Accept", "application/json");
    // let options = new RequestOptions({ headers: headers });
    //   this.http
    //     .post(`${this.apiEndPoint}`, formData)
    //     .map(res => res.json())
    //     .catch(error => Observable.throw(error))
    //     .subscribe(data => console.log("success"), error => console.log(error));
    // }
  }
}
