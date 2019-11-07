import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export class Common extends Observable {
    protected static clientId: string;
    protected static clientSecret: string;
    protected static redirectUri: string;
    protected static scopes: Array<string>; 

    constructor() {
      super();
    }

}

export class LinkedinAuthResult {
  token : LinkedinToken;
  success : boolean;
  error: string;

  constructor(success: boolean, token: LinkedinToken, error: string){
    this.success = success;
    this.token = token;
    this.error = error;
  }
}

export class LinkedinToken {
  public accessToken: string;
  public expiredTime: number;
}

