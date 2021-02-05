import { Component, OnInit } from '@angular/core';
import { MainServiceService, Tabla } from 'src/app/shared/services/main-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  dataSource: Tabla[] = [{position: 1, email: 'Hydrogen@gmio.com', rol: "users", text: 'Hfwefwe'}];
  displayedColumns = ['position', 'email', 'rol', 'text'];

  text: string = "";
  constructor(private service:MainServiceService) { }

  ngOnInit(): void {
  }

  saveForm() {
    if (this.text.length > 0) {
      console.log(this.text);
      const num = this.dataSource.length + 1;
      const newData:Tabla = {
        position: num,
        email:this.service.user.email,
        rol:this.service.user.rol,
        text: this.text
      }
      this.dataSource.push(newData);
      this.service.setUsers();
    }
  }

}
