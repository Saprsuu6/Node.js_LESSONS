function timeFix(req,res,next) {
    req.valueTime = Date.now();
    next();
}

module.exports = timeFix;