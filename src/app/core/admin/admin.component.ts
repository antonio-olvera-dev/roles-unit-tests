import { Component, OnInit } from '@angular/core';
import { MainServiceService, Tabla } from 'src/app/shared/services/main-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  dataSource: Tabla[] = [{ position: 1, email: 'Hydr@gmio.com', role: "admin", text: 'Hfwefwe' }];
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

      const data = await this.service.getAdmin();
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
      const exit = await this.service.setAdmin(newData);

      setTimeout(() => {
        this.update = true;
      }, 100);
    }
  }

}
