export const environment = {
    production: false,
    apiBaseUrl: "https://solqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://solqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "d5c5977f-36d4-41a3-b226-4ad8f0e79bbc",
        clientId: "783673f5-8103-4b78-a1a4-5d6ff2af3d2b",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
