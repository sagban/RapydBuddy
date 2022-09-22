const CryptoJS = require("crypto-js");
const axios = require('axios').default;

class Rapyd {

    constructor() {
        this.base_url = "https://sandboxapi.rapyd.net";
        this.salt = CryptoJS.lib.WordArray.random(12);                              // Randomly generated for each request.
        this.timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString(); // Current Unix time (seconds).
        this.access_key = "XXXXXXXXXXXXXX";                                                       // The access key from Client Portal.
        this.secret_key = "XXXXXXXXXXXX";
    }

    getHeader(http_method, url_path, data) {
        const to_sign =
            http_method + url_path + this.salt + this.timestamp + this.access_key + this.secret_key + data;
        let signature = CryptoJS.enc.Hex.stringify(
            CryptoJS.HmacSHA256(to_sign, this.secret_key)
        );

        signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));
        return {
            access_key: this.access_key,
            signature: signature,
            salt: this.salt,
            timestamp: this.timestamp,
            "Content-Type": `application/json`,
        };

    }

    callAPI(http_method, url_path, data) {
        const request = {
            baseURL: this.base_url,
            headers: this.getHeader(http_method, url_path, data),
            url: url_path,
            method: http_method,
            data: data,
        };
        return axios(request);
    }



}

module.exports = Rapyd;
