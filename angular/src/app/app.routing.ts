import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { ListClientComponent } from "./list-client/list-client.component";
import { EditClientComponent } from "./edit-client/edit-client.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "add-client", component: AddClientComponent },
  { path: "list-client", component: ListClientComponent },
  { path: "edit-client", component: EditClientComponent },
  // {path : '', component : LoginComponent}
  { path: "", component: ListClientComponent }
];

export const routing = RouterModule.forRoot(routes);
