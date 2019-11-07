/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module teammobile {
		export module linkedinsignin {
			export class BuildConfig {
				public static class: java.lang.Class<com.teammobile.linkedinsignin.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module teammobile {
		export module linkedinsignin {
			export class Linkedin {
				public static class: java.lang.Class<com.teammobile.linkedinsignin.Linkedin>;
				public static linkedinLoginViewResponseListener: com.teammobile.linkedinsignin.LinkedinLoginViewResponseListener;
				public login(param0: globalAndroid.content.Context, param1: com.teammobile.linkedinsignin.LinkedinLoginViewResponseListener): void;
				public initialize(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: string, param5: java.util.List<string>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module teammobile {
		export module linkedinsignin {
			export class LinkedinLoginViewResponseListener {
				public static class: java.lang.Class<com.teammobile.linkedinsignin.LinkedinLoginViewResponseListener>;
				/**
				 * Constructs a new instance of the com.teammobile.linkedinsignin.LinkedinLoginViewResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					linkedinDidLoggedIn(param0: com.teammobile.linkedinsignin.model.LinkedinToken): void;
					linkedinLoginDidFail(param0: java.util.List<string>): void;
				});
				public constructor();
				public linkedinDidLoggedIn(param0: com.teammobile.linkedinsignin.model.LinkedinToken): void;
				public linkedinLoginDidFail(param0: java.util.List<string>): void;
			}
		}
	}
}

declare module com {
	export module teammobile {
		export module linkedinsignin {
			export module helper {
				export class Constants {
					public static class: java.lang.Class<com.teammobile.linkedinsignin.helper.Constants>;
					public static PREFS: string;
					public static CLIENT_ID: string;
					public static CLIENT_SECRET: string;
					public static REDIRECT_URI: string;
					public static STATE: string;
					public static SCOPE: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module teammobile {
		export module linkedinsignin {
			export module model {
				export class LinkedinToken {
					public static class: java.lang.Class<com.teammobile.linkedinsignin.model.LinkedinToken>;
					public accessToken: string;
					public expiredTime: java.lang.Long;
					public constructor(param0: string, param1: java.lang.Long);
				}
			}
		}
	}
}

declare module com {
	export module teammobile {
		export module linkedinsignin {
			export module ui {
				export class LinkedinSignInActivity {
					public static class: java.lang.Class<com.teammobile.linkedinsignin.ui.LinkedinSignInActivity>;
					public AUTHORIZATION_URL: string;
					public ACCESS_TOKEN_URL: string;
					public RESPONSE_TYPE: string;
					public CLIENT_ID: string;
					public REDIRECT_URI: string;
					public STATE: string;
					public SCOPE: string;
					public CODE: string;
					public ERROR: string;
					public ERROR_DESCRIPTION: string;
					public GRANT_TYPE: string;
					public AUTHORIZATION_CODE: string;
					public CLIENT_SECRET: string;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public clearCache(): void;
				}
			}
		}
	}
}

//Generics information:

