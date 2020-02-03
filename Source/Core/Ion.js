import Credit from './Credit.js';
import defined from './defined.js';
import Resource from './Resource.js';

    var defaultTokenCredit;
    var cesiumWebsiteToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMjMyMDcyMi1jOGQyLTQwMjctYTViOS1mNDI1YTg5ZjQ3MWYiLCJpZCI6MjU5LCJzY29wZXMiOlsiYXNyIiwiZ2MiXSwiaWF0IjoxNTgwNzYxNzA2fQ.bW2r2CzEq3eU1S7tVZsLWvM51h3G2NJgxm1fk8dyDpA';
    var defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYmFmMDZjZi03ZTIzLTRmNDYtYmM4MS1hZmUyOTNlZWQ4N2MiLCJpZCI6MjU5LCJzY29wZXMiOlsiYXNyIiwiZ2MiXSwiaWF0IjoxNTgwNzQ2MDQzfQ.I05JcRTUCUA1RWX2y0oQa_p4dFV6tgaAKHrCU5AjlgI';

    /**
     * Default settings for accessing the Cesium ion API.
     * @exports Ion
     *
     * An ion access token is only required if you are using any ion related APIs.
     * A default access token is provided for evaluation purposes only.
     * Sign up for a free ion account and get your own access token at {@link https://cesium.com}
     *
     * @see IonResource
     * @see IonImageryProvider
     * @see IonGeocoderService
     * @see createWorldImagery
     * @see createWorldTerrain
     */
    var Ion = {};

    /**
     * Gets or sets the default Cesium ion access token.
     *
     * @type {String}
     */
    Ion.defaultAccessToken = cesiumWebsiteToken;

    /**
     * Gets or sets the default Cesium ion server.
     *
     * @type {String|Resource}
     * @default https://api.cesium.com
     */
    Ion.defaultServer = new Resource({ url: 'https://api.cesium.com/' });

    Ion.getDefaultTokenCredit = function(providedKey) {
        if (providedKey !== defaultAccessToken) {
            return undefined;
        }

        if (!defined(defaultTokenCredit)) {
            var defaultTokenMessage = '<b> \
            This application is using Cesium\'s default ion access token. Please assign <i>Cesium.Ion.defaultAccessToken</i> \
            with an access token from your ion account before making any Cesium API calls. \
            You can sign up for a free ion account at <a href="https://cesium.com">https://cesium.com</a>.</b>';

            defaultTokenCredit = new Credit(defaultTokenMessage, true);
        }

        return defaultTokenCredit;
    };
export default Ion;
