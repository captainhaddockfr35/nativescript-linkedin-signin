import { Common, LinkedinAuthResult } from './linkedin-signin.common';
export declare class LinkedinSignin extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here

  static init(clientId: string, clientSecret: string, redirectUri: string, scopes: Array<string>, context: any = null);
  static login(): Promise<LinkedinAuthResult>;
}
