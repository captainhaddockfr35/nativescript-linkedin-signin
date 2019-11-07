# Nativescript LinkedIn Auth

[![npm version](https://badge.fury.io/js/nativescript-linkedin-signin.svg)](http://badge.fury.io/js/nativescript-linkedin-signin)

NativeScript plugin for LinkedIn Auth. Use OAuth2 to sign in with LinkedIn. Use [this iOS lib](https://github.com/serhii-londar/LinkedInSignIn) and [this Android lib](https://github.com/pboulch/android-linkedin-auth). 


## Installation

Add the plugin 

```javascript
tns plugin add nativescript-linkedin-signin
```

### Android 

Add this line into the AndroidManifest.xml 

```
<activity android:name="com.teammobile.linkedinsignin.ui.LinkedinSignInActivity"/>
```

## Usage 
	
```javascript
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
        }

        ngOnInit(): void {
            // Init your component properties here.
            if(isAndroid){
                LinkedinSignin.init("<CLIENT_ID>", "<CLIENT_SECRET>", "<REDIRECT_URI>", new Array<string>(), utilsModule.ad.getApplicationContext());
            } else {
                LinkedinSignin.init("<CLIENT_ID>", "<CLIENT_SECRET>", "<REDIRECT_URI>", new Array<string>(), Application.ios.rootController);
            }
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
```
    
## License

Apache License Version 2.0, January 2004
