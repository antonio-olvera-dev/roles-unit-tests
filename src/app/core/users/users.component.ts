import { Component, OnInit } from '@angular/core';
import { MainServiceService, Tabla } from 'src/app/shared/services/main-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  dataSource: Tabla[] = [{ position: 1, email: 'Hydrogen@gmio.com', rol: "users", text: 'Hfwefwe' }];
  displayedColumns = ['position', 'email', 'rol', 'text'];

  text: string = "";
  update: boolean = false;
  constructor(private service: MainServiceService) {
    this.load();
   }

  ngOnInit(): void {
  }

  async load() {
    try {

      const data = await this.service.getUsers();
      console.log(data);
      
      setTimeout(() => {
        this.update = true;
      }, 100);
    } catch (error) {

    }
  }
  saveForm() {
    if (this.text.length > 0) {
      this.update = false;
      const num = this.dataSource.length + 1;
      const newData: Tabla = {
        position: num,
        email: this.service.user.email,
        rol: this.service.user.rol,
        text: this.text
      }
      this.dataSource.push(newData);
      this.service.setUsers();
      setTimeout(() => {
        this.update = true;
      }, 100);
    }
  }

}
