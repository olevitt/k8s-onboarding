export interface API {
	conf: (string?) => Promise<any>;
	cluster: (string?) => Promise<ClusterCredentials>;
	createNamespace: (string?, string?) => Promise<any>;
	setPermissionsToNamespace: (string?, string?) => Promise<any>;
}

export interface ClusterCredentials {
	apiserverUrl: string;
	token: string;
	namespace: string;
	user: string;
}
