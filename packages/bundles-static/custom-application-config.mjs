import { entryPointUriPath, PERMISSIONS } from "./src/constants";

const config = {
    name: "Static bundles",
    entryPointUriPath: entryPointUriPath,
    cloudIdentifier: "gcp-us",
    env: {
        production: {
            applicationId: "cl94k9rym91841601v4q7hhjtsq",
            url: "https://bunrepos.vercel.app",
        },
        development: {
            initialProjectKey: "bundleorg"
        }
    },
    oAuthScopes: {
        view: ["view_products"],
        manage: ["manage_products"]
    },
    icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
    mainMenuLink: {
        defaultLabel: "Bundles",
        permissions: [PERMISSIONS.View],
        labelAllLocales: []
    }
}

export default config
