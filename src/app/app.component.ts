import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsonToExcel';
  jsonData = [
    { Name: 'John', Age: 30 },
    { Name: 'Alice', Age: 25 },
    // Add your JSON data herej
  ];

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.jsonData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Save the Excel file with a name, e.g., 'data.xlsx'
    XLSX.writeFile(wb, 'data.xlsx');
  }
}
