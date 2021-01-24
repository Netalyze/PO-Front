import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trip-submit',
  templateUrl: './trip-submit.component.html',
  styleUrls: ['./trip-submit.component.css']
})
export class TripSubmitComponent implements OnInit {

  tripSubmitForm!: FormGroup;
  @ViewChild("fileDrop", { static: false })
  fileDropEl!: ElementRef;
  trips = 
  [
    {'id': 1}, {'id': 2}
];
  files: any = [];
  filesSize = 0;
  submitted = false;
  fileSizeValid = true;
  loading = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.tripSubmitForm = this.formBuilder.group({
      trip: ['', Validators.required],
      comment: ['', Validators.maxLength(200)],
      guide: ['']
    });
  }

  get form() { return this.tripSubmitForm.controls; }

  onFileDropped($event: any) {
    for (const item of $event) {
      if (this.verifyFilesSize(item.size))
      this.files.push(item);
    else 
      this.fileSizeValid = false;
    }
  }

  fileBrowseHandler(files: any) {
    files = files.files;
    for (const item of files) {
      if (this.verifyFilesSize(item.size))
        this.files.push(item);
      else 
        this.fileSizeValid = false;
    }
    this.fileDropEl.nativeElement.value = "";
  }

  verifyFilesSize(bytes: any) {
    if ((this.filesSize + bytes) > 52428180)
      return false;
    this.filesSize += bytes;
    return true;
  }

  formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  onSubmit() {
    this.submitted = true;
    if (this.tripSubmitForm.invalid) {
      return;
    }
    this.router.navigate(['/']);
  }
}
