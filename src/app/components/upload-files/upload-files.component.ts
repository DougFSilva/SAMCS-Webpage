import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { UploadingFilesService } from "src/app/services/uploading-files.service";

@Component({
  selector: "app-upload-files",
  templateUrl: "./upload-files.component.html",
  styleUrls: ["./upload-files.component.css"],
})
export class UploadFilesComponent implements OnInit {
  constructor(
    private uploadingFilesService: UploadingFilesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append("image", image);
      this.uploadingFilesService.uploadFile(
        formData,
        this.data.type,
        this.data.id
      );
    }
  }
}
