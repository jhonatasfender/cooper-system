import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Client } from "../model/client.model";
import { ApiService } from "../core/api.service";

@Component({
  selector: "app-list-client",
  templateUrl: "./list-client.component.html",
  styleUrls: ["./list-client.component.css"]
})
export class ListClientComponent implements OnInit {
  public clients: Array<Client>;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getClients().subscribe(data => {
      this.clients = data;
    });
  }

  deleteClient(client: Client): void {
    this.apiService.deleteClient(client.id).subscribe(data => {
      this.clients = this.clients.filter(u => u !== client);
    });
  }

  editClient(client: Client): void {
    window.localStorage.setItem("editClientId",client.id)
    this.router.navigate(["edit-client"]);
  }

  addClient(): void {
    this.router.navigate(["/add-client"]);
  }
}
