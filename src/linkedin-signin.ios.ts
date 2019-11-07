import { Common, LinkedinAuthResult, LinkedinToken } from './linkedin-signin.common';


export class LinkedinSignin extends Common {

    static linkedInHelper : LinkedinHelper;
    static viewController : UIViewController;

    static init(clientId: string, clientSecret: string, redirectUri: string, scopes: Array<string> = null, context: any = null) {
        LinkedinSignin.clientId = clientId;
        LinkedinSignin.clientSecret = clientSecret;
        LinkedinSignin.redirectUri = redirectUri;
        LinkedinSignin.scopes = scopes;

        this.viewController = context;

        let scopesString : string = scopes.join(",").length > 0 ? scopes.join(",") : "r_emailaddress,r_liteprofile,w_member_social";

        let linkedInConfig = new LinkedInConfig({ linkedInKey: clientId, linkedInSecret: clientSecret, redirectURL: redirectUri, scope: scopesString });

        this.linkedInHelper = new LinkedinHelper({linkedInConfig});
    }

    static login(): Promise<LinkedinAuthResult> {
        
        return new Promise((resolve, reject) => { 
            this.linkedInHelper.loginFromLoadingTitleStringLoadingTitleFontNavigationColorCompletionFailureCancel(this.viewController, "Chargement ...", null, null, success=>{
                let token = new LinkedinToken();
                    token.accessToken = success;
                resolve(new LinkedinAuthResult(true, token, null));
            }, fail=>{
                reject(new LinkedinAuthResult(false, null, fail.debugDescription));
            }, ()=>{
                reject(new LinkedinAuthResult(false, null, "cancelled"));
            });
        });
    }


}
