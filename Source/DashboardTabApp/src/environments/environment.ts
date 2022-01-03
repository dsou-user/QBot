export const environment = {
    production: false,
    apiBaseUrl: "https://qbotedudusol.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "d5c5977f-36d4-41a3-b226-4ad8f0e79bbc",
        clientId: "343f4ecb-863d-4ee0-983f-009b1bd3877b",
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
};
