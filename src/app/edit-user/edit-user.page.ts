import { Component, OnInit } from '@angular/core';
import { FileChoser } from '../services/fileChooser';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html'
})
export class EditUserPage implements OnInit {
  constructor(private File: FileChoser) {}

  ngOnInit() {}
  public pathImg = '';
  public async getFile() {
    let file = await this.File.getFile();
    this.pathImg = file;
    console.log(file);
  }
}
