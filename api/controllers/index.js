exports = module.exports = {};
const rapyd = require('../helpers/rapyd');

const status = {
    OK: 200,
    BADREQUEST: 400
}

const jResp = (res, msg, status = 200, data = {}, err = {}) => {
    return res.status(status).send({
        message: msg,
        status: status,
        data: data,
        error: err
    });
}


exports.hello = (req, res) => {
    return jResp(res, "Hello, Welcome to the RapydBuddy API service");
}

exports.transfer = (req, res) => {
    const url_path = "/v1/account/transfer";
    const method = "post"
    const body = JSON.stringify(req.body)
    const Rapyd = new rapyd();
    Rapyd.callAPI(method, url_path, body).then(r => {
        if (r.status === "SUCCESS") {
            return jResp(res, r.status, status.OK, r.data);
        }
        else {
            return jResp(res, r.status, status.OK, r.data, { error: r.error_code });
        }
    }).catch(err => {
        return jResp(res, "ERROR", status.BADREQUEST, {}, err?.response?.data?.status);
    });
}

exports.userWallet = (req, res) => {
    const walletId = req.params.walletId;
    const url_path = `/v1/user/${walletId}`;
    const method = "get"
    const body = ''
    if (walletId != "") {
        const Rapyd = new rapyd();
        Rapyd.callAPI(method, url_path, body).then(r => {
            if (r.status === "SUCCESS") {
                return jResp(res, r.status, status.OK, r.data);
            }
            else {
                return jResp(res, r.status, status.OK, r.data, { error: r.error_code });
            }
        }).catch(err => {
            return jResp(res, "ERROR", status.BADREQUEST, {}, err?.response?.data?.status);
        });
    }
    else {
        return jResp(res, "ERROR", status.BADREQUEST, { error: "Invalid wallet Id" });
    }
}

exports.walletBallance = (req, res) => {
    const walletId = req.params.walletId;
    const url_path = `/v1/user/${walletId}/accounts`;
    const method = "get"
    const body = ''
    if (walletId != "") {
        const Rapyd = new rapyd();
        Rapyd.callAPI(method, url_path, body).then(r => {
            if (r.status === "SUCCESS") {
                return jResp(res, r.status, status.OK, r.data);
            }
            else {
                return jResp(res, r.status, status.OK, r.data, { error: r.error_code });
            }
        }).catch(err => {
            return jResp(res, "ERROR", status.BADREQUEST, {}, err?.response?.data?.status);
        });
    }
    else {
        return jResp(res, "ERROR", status.BADREQUEST, { error: "Invalid wallet Id" });
    }
}

exports.walletTransactions = (req, res) => {
    const walletId = req.params.walletId;
    const url_path = `/v1/user/${walletId}/transactions`;
    const method = "get"
    const body = ''
    if (walletId != "") {
        const Rapyd = new rapyd();
        Rapyd.callAPI(method, url_path, body).then(r => {
            if (r.status === "SUCCESS") {
                return jResp(res, r.status, status.OK, r.data);
            }
            else {
                return jResp(res, r.status, status.OK, r.data, { error: r.error_code });
            }
        }).catch(err => {
            return jResp(res, "ERROR", status.BADREQUEST, {}, err?.response?.data?.status);
        });
    }
    else {
        return jResp(res, "ERROR", status.BADREQUEST, { error: "Invalid wallet Id" });
    }
}