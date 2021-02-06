import { Component, OnInit } from '@angular/core';
import { MainServiceService, Tabla } from 'src/app/shared/services/main-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  dataSource: Tabla[] = [{ position: 1, email: 'Hydrogen@gmio.com', role: "users", text: 'Hfwefwe' }];
  displayedColumns = ['position', 'email', 'role', 'text'];

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
      this.dataSource = [];
      for (let i = 0; i < data.length; i++) {
        this.dataSource.push({
          position: i,
          email: data[i].email,
          role: data[i].role,
          text: data[i].text
        });
      }

      setTimeout(() => {
        this.update = true;
      }, 100);
    } catch (error) {

    }
  }
  async saveForm() {
    if (this.text.length > 0) {
      this.update = false;
      const num = this.dataSource.length + 1;
      const newData: Tabla = {
        position: num,
        email: this.service.user.email,
        role: this.service.user.role,
        text: this.text
      }
      
      this.dataSource.push(newData);
      const exit = await this.service.setUsers(newData);

      setTimeout(() => {
        this.update = true;
      }, 100);
    }
  }

}
