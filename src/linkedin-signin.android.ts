import { Common, LinkedinAuthResult, LinkedinToken } from './linkedin-signin.common';
import * as utilsModule from "tns-core-modules/utils/utils";

export class LinkedinSignin extends Common {

    static activity : any; // Activity Android

    static linkedinConnect : com.teammobile.linkedinsignin.Linkedin

    static init(clientId: string, clientSecret: string, redirectUri: string, scopes: Array<string> = null, context: any = null) {
        LinkedinSignin.clientId = clientId;
        LinkedinSignin.clientSecret = clientSecret;
        LinkedinSignin.redirectUri = redirectUri;
        LinkedinSignin.scopes = scopes;
        LinkedinSignin.activity = context;

        let arrayJava : java.util.ArrayList<String> = new java.util.ArrayList<String>();
        if(scopes == null || scopes.length ==0){
            arrayJava.add("r_emailaddress");
            arrayJava.add("r_liteprofile");
        }
        scopes.forEach(val => arrayJava.add(val));

        this.linkedinConnect = new com.teammobile.linkedinsignin.Linkedin();
        this.linkedinConnect.initialize(context, clientId, clientSecret, redirectUri, "AZERTY_QWERTY_RANDOM_STRING", arrayJava);
    }

    static login(): Promise<LinkedinAuthResult> {
        return new Promise((resolve, reject) => { 
            LinkedinSignin.linkedinConnect.login(utilsModule.ad.getApplicationContext(), new com.teammobile.linkedinsignin.LinkedinLoginViewResponseListener({
                linkedinDidLoggedIn(linkedinToken: com.teammobile.linkedinsignin.model.LinkedinToken): void {
                    let token = new LinkedinToken();
                    token.accessToken = linkedinToken.accessToken;
                    token.expiredTime = Number(linkedinToken.expiredTime); 
                    resolve(new LinkedinAuthResult(true, token, null));
                },
                linkedinLoginDidFail(error : java.util.List<String>): void {
                    let errorMessage = "unknown error";
                    if(error.size()>0){
                        errorMessage = error.get(0);
                    }
                    reject(new LinkedinAuthResult(false, null, errorMessage));
                }
            }));
        });
    }

}
