if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}
module.exports = {
    googleClient : process.env.GOOGLE_ID,
    googleSecret : process.env.GOOGLE_SECRET,
    callBackUrl  : process.env.CALLBACK_URL
};