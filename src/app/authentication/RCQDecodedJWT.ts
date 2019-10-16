export class RCQDecodedJWT {

    constructor(JSONInstance:any)
    {
        this.authenticated = JSONInstance.authenticated;
        this.errorCode     = JSONInstance.errorCode    ;
        this.username      = JSONInstance.username     ;
        this.uid           = JSONInstance.uid          ;
        this.ulId          = JSONInstance.ulId         ;
        this.ulName        = JSONInstance.ulName       ;
        this.ulMode        = JSONInstance.ulMode       ;
        this.queteurId     = JSONInstance.queteurId    ;
        this.roleId        = JSONInstance.roleId       ;
        this.d             = JSONInstance.d            ;
        this.aud           = JSONInstance.aud          ;
        this.exp           = JSONInstance.exp          ;
        this.iat           = JSONInstance.iat          ;
        this.nbf           = JSONInstance.nbf          ;
        this.iss           = JSONInstance.iss          ; 
    }

    public authenticated :string;
    public errorCode     :string;
    public username      :string;
    public uid           :number;
    public ulId          :number;
    public ulName        :string;
    public ulMode        :number;
    public queteurId     :number;
    public roleId        :number;
    public d             :string;
    public aud           :string;
    public exp           :number;
    public iat           :number;
    public nbf           :number;
    public iss           :string;
}
  