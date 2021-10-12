import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  Items: string[] = ["first","second","third"]
  InputText = ""
  ListAdd() {
    if (this.InputText !== ""){
      this.Items.push(this.InputText)
      this.InputText = ""}
    else
      alert("Вы оставили поле пустым")

  }
}
