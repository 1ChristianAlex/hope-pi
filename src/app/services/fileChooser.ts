import { Injectable } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
@Injectable({
  providedIn: 'root'
})
export class FileChoser {
  constructor(private File: FileChooser) {}
  public async getFile() {
    console.log('click');
    const file = await this.File.open();
    return file;
  }
}
