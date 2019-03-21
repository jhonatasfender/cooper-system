import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client } from "../model/client.model";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  baseUrl: string = "http://localhost:8888/";

  getClients() {
    return this.http.get(this.baseUrl + "list");
  }

  getClientById(id: string) {
    return this.http.get(this.baseUrl + "one/" + id);
  }

  createClient(client: Client) {
    return this.http.post(this.baseUrl + "add", client);
  }

  updateClient(client: Client) {
    return this.http.post(this.baseUrl + "edit", client);
  }

  deleteClient(id: number) {
    return this.http.delete(this.baseUrl + "delete/" + id);
  }
}
