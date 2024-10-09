import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/Forms';
import { CommonModule } from '@angular/common';
import { ItemService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  inputValue: string = '';
  myList: string[] = [];
  updateValue: string = '';
  constructor(private service: ItemService) {}
  ngOnInit(): void {
    this.myList = this.service.getData();
  }

  addData() {
    this.service.addDataTolocalstorage(this.inputValue);
    this.inputValue = '';
  }
  updateItem(index: number, updatedItem: string) {
    this.service.updateData(index, updatedItem);
    this.updateValue = '';
  }
  deleteItem(index: number) {
    this.service.deleteData(index);
  }
}
