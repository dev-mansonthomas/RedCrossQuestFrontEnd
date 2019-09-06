import { Component, OnInit } from '@angular/core';
import { QrCodeScannerService } from '../qr-code-scanner.service';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {

  enabled = true;
  qrCode:string;

  constructor(private qrCodeScannerService: QrCodeScannerService) 
  { }

  ngOnInit() {
  }


  toggle(){
    this.enabled =!this.enabled ;
  }

  scanSuccessHandler($event)
  {
    console.log("scanSuccessHandler");
    console.log($event);
    this.qrCodeScannerService.decodeQueteur($event,
      ()=>{return !(typeof this.qrCode === 'undefined');}, 
      (qrCode:string)=>{this.qrCode = qrCode; console.log('qrCode decoded '+this.qrCode+' and setted')}, 
      null);
  }
  scanErrorHandler($event)
  {
    console.log("scanErrorHandler");
    console.log($event);
  }

  scanFailureHandler($event)
  {
    if(  $event !== undefined && 
         $event.name !== "NotFoundException")
    {
      console.log("scanFailureHandler");    ;
      console.log($event);
    }
    
  }

  scanCompleteHandler($event)
  {
    if($event !== undefined)
    {
      console.log("scanCompleteHandler");
      console.log($event);
  
    }
  }

}
