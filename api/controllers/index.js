exports = module.exports = {};

const status = {
    OK: 200,
    ERROR500: 500,
    BADREQUEST: 403
}

const JResp = (msg, status = 200, data = {}, err = {}) => {
    return {
        message: msg,
        status: status,
        data: data,
        error: err
    };
}


exports.hello = (req, res) => {
    return res.json(JResp("Hello, Welcome to the RapydBuddy API service"));
}