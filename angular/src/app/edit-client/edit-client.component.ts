import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Client } from "../model/client.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { ApiService } from "../core/api.service";

@Component({
  selector: "app-edit-client",
  templateUrl: "./edit-client.component.html",
  styleUrls: ["./edit-client.component.css"]
})
export class EditClientComponent implements OnInit {
  client: Client;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    let clientId = window.localStorage.getItem("editClientId");
    if (!clientId) {
      alert("Invalid action.");
      this.router.navigate(["list-client"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ["", Validators.required],
      cpf: ["", Validators.required],
      email: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required]
    });
    this.apiService.getClientById(clientId).subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.apiService
      .updateClient(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["/list-client"]);
        },
        error => {
          alert(JSON.stringify(error));
        }
      );
  }
}
