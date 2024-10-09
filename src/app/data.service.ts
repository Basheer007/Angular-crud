// src/app/item.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  dataList: string[] = [];
  constructor() {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('value');
      if (storedData) {
        this.dataList = JSON.parse(storedData);
      }
    }
  }

  getData(): string[] {
    return this.dataList;
  }

  addDataTolocalstorage(value: string) {
    if (value.trim()) {
      this.dataList.push(value);
      this.saveDataToLocalStorage();
    }
  }

  updateData(index: number, updatedValue: string) {
    if (updatedValue.trim()) {
      this.dataList[index] = updatedValue;
      this.saveDataToLocalStorage();
    }
  }

  deleteData(index: number): void {
    this.dataList.splice(index, 1);
    this.saveDataToLocalStorage();
  }
  private saveDataToLocalStorage(): void {
    localStorage.setItem('value', JSON.stringify(this.dataList));
  }
}
