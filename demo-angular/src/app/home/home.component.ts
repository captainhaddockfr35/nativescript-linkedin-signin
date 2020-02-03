import { Component, OnInit } from "@angular/core";
import { LinkedinSignin } from "nativescript-linkedin-signin";
import * as Application from "tns-core-modules/application";
import * as utilsModule from "tns-core-modules/utils/utils";
import { isAndroid } from "tns-core-modules/platform/platform";


@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        setTimeout(() => {
            if(isAndroid){
                LinkedinSignin.init("<CLIENT_ID>", "<CLIENT_SECRET>", "<REDIRECT_URI>", new Array<string>(), utilsModule.ad.getApplicationContext());
            } else {
                LinkedinSignin.init("7794dkm4obfpn3", "G2UPIlvwQ7zw6jIW", "http://api.regionsjob.com/v1/Account/LinkedInCallback", new Array<string>(), Application.ios.rootController);
            }
            
        }, 1000);

    }

    coLinkedin(): void {
        LinkedinSignin.login().then(item => {
            console.dir(item);
            alert(item.token.accessToken);
        }).catch((error)=>{
            alert("FAIL : "+error.error);
            console.dir(error);
        });
    }
}
