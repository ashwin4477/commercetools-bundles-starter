import { entryPointUriPath, PERMISSIONS } from "./src/constants";

const config = {
    name: "Dynamic bundles",
    entryPointUriPath: entryPointUriPath,
    cloudIdentifier: "gcp-us",
    env: {
        production: {
            applicationId: "",
            url: "",
        },
        development: {
            initialProjectKey: ""
        }
    },
    oAuthScopes: {
        view: ["view_products"],
        manage: ["manage_products"]
    },
    icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
    mainMenuLink: {
        defaultLabel: "Dynamic Bundles",
        permissions: [PERMISSIONS.View],
        labelAllLocales: []
    }
}

export default config
