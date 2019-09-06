import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrCodeScannerService {

  queteurQRCodeLength = 24;
  troncQRCodeLength   = 22;

  queteurRegEx = /^QUETEUR-([0-9]{6})-([0-9]{9})$/g;
  troncRegEx = /^TRONC-([0-9]{6})-([0-9]{9})$/g;

  audio = new Audio("assets/sounds/bip_scanner.mp3");


  constructor() 
  {
    this.audio.load();
  }

  /**
   * Look for queteurData in the decoded data produced by qr-scanner library
   *
   * @param data: the data decoded by the qr-scanner library (it may be corrupted)
   * @param checkQueteurAlreadyDecodedFunction : function that must return true if the queteur is already decoded.
   *                  (if you leave the QRCode a few second in front of the camera, it will decode several time the QRCode)
   * @param queteurDecodedAndFoundInDB : function called when the QRCode is a queteur and it's found in DB (it takes a queteur in parameter)
   * @param queteurDecodedAndNotFoundInDB : function called when the decodeded queteur id is not found is DB. Used to display an error to the user
   *
   * @return boolean true : if the decodeded data length is 24, meaning it's potentially a queteur (but might not match math the regex or not be found in db)
   *                 false: if the length is not 24
   * */
  decodeQueteur(data:string, checkQueteurAlreadyDecodedFunction:Function, queteurDecodedAndFoundInDB:Function, queteurDecodedAndNotFoundInDB:Function)
  {
    //console.log(data);

    if(data  && data.length === this.queteurQRCodeLength)
    {
      if(checkQueteurAlreadyDecodedFunction())
      {
        console.log("qrCode already decoded");
        return;
      }


      var match = this.queteurRegEx.exec(data);
      if(match !== null)
      {
        console.debug("Queteur data match RegEx");
        var ulId       = parseInt(match[1]);
        var queteurId  = parseInt(match[2]);

        console.debug("ulId:"+ulId );
        console.debug("queteurId:"+queteurId);
        queteurDecodedAndFoundInDB(data);
        this.audio.play();
        /*
        QueteurResource.get({'id':queteurId}).$promise.then(function(queteur)
          {
            $log.debug("queteurId:"+queteurId +" found in Database");
            $log.debug(queteur);

            //play scanner beep
            local.sound.play();

            queteurDecodedAndFoundInDB(queteur);
          },
          function(reason)
          {
            $log.error("Error while fetching queteur queteurId='"+queteurId+"' ulId='"+ulId+"' in database: '"+ JSON.stringify(reason)+"'");
            queteurDecodedAndNotFoundInDB(reason, queteurId, ulId);
          }
        );
        */
      }
      else
      {
        console.info("data do not match RegEx, data='"+data+"'");
      }

    }
    
  }


}
