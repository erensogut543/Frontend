import {Component,  OnInit,  ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Sales} from "../../sales.model";
import {SalesService} from "../../sales.service";
import {FineUploader, UIOptions} from 'fine-uploader';




@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.css'],

})
export class AddSalesComponent implements OnInit {
  uploadForm: FormGroup;
  uploader: FineUploader;
  uiOptions: UIOptions;
  sale: Sales[];
  // resim = {
  //   "filesize": "", /* bytes */
  //   "filetype": "",
  //   "filename": "",
  //   "base64":   ""};

  UserImageFile: File;
  @ViewChild('UserImage') User_Image;


  baslik = '';
  aciklama = '';
  fiyat = '';


  constructor(
              private salesService: SalesService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.uiOptions = {
      element: document.getElementById('fine-uploader-gallery'),
      template: 'qq-template-gallery',
      autoUpload: false,
      debug: true
    }

    /**
     * Instantiate the FineUploader and pass in the uiOptions
     */
    this.uploader = new FineUploader(this.uiOptions);
    this.initForm();
    // let subscription = this.salesService.saleChanged
    //   .subscribe(
    //     (sale: Sales[]) => {
    //       this.sale = sale;
    //     });
    // this.sale = this.salesService.getSales();
    this.sale= this.salesService.getSales();
    this.salesService.saleAdded.subscribe(
      (sale:Sales[])=>{
        this.sale=sale;
      }
    );

    this.salesService.getSales();
    this.salesService.displaySales();




  }
  public initForm(){


    this.uploadForm = new FormGroup({
      'uploadData': new FormGroup({
        'header': new FormControl(null),
        'description': new FormControl(null , [Validators.required, Validators.max(9999)]),
        'price': new FormControl( null, Validators.required),
        'file': new FormControl(null)
      })
    });


  }


  onSubmit() {
    this.salesService.addSales(this.uploadForm.value.uploadData);
    console.log(this.uploadForm.value);

    console.log(this.salesService.getSales());
    // this.serverService.storeServers(this.soruService.getSoru());


    const Image = this.User_Image.nativeElement;
    if(Image.files && Image.files[0]) {
      this.UserImageFile = Image.files[0];
    }
    console.log(this.UserImageFile);


  }


  onCancel() {
    this.router.navigate(['/home'], {relativeTo: this.route});
  }
  onClear() {
    this.uploadForm.reset();
  }

}
