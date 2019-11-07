
declare class LinkedInConfig extends NSObject {

	static alloc(): LinkedInConfig; // inherited from NSObject

	static new(): LinkedInConfig; // inherited from NSObject

	linkedInKey: string;

	linkedInSecret: string;

	redirectURL: string;

	scope: string;

	constructor(o: { linkedInKey: string; linkedInSecret: string; redirectURL: string; scope: string; });

	initWithLinkedInKeyLinkedInSecretRedirectURLScope(linkedInKey: string, linkedInSecret: string, redirectURL: string, scope: string): this;
}

declare var LinkedInSignInVersionNumber: number;

declare var LinkedInSignInVersionString: interop.Reference<number>;

declare class LinkedinHelper extends NSObject {

	static alloc(): LinkedinHelper; // inherited from NSObject

	static new(): LinkedinHelper; // inherited from NSObject

	constructor(o: { linkedInConfig: LinkedInConfig; });

	initWithLinkedInConfig(linkedInConfig: LinkedInConfig): this;

	loginFromLoadingTitleStringLoadingTitleFontNavigationColorCompletionFailureCancel(viewController: UIViewController, loadingTitleString: string, loadingTitleFont: UIFont, navigationColor: UIColor, completion: (p1: string) => void, failure: (p1: NSError) => void, cancel: () => void): void;
}
