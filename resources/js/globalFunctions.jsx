const validEmail = (email) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}
const validFullName = (fullname) => {
    fullname = fullname + " ";
    fullname = fullname.toLowerCase();
    fullname = fullname.trim();
    var rex = /^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+){1,})$/;
    return rex.test(fullname);
}
const validPhone = (phone) => {
    return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(phone);
}
const validNotEmpty = (text) => {
    return (text != undefined && text != "")
}
const getCurrentTime = (format) => {
    let today = new Date();
    let year = today.getFullYear();
    let month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
    let date = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
    switch (format) {
        case 'YYYY-MM-DDTHH:mm': 
            return year + "-" + month + "-" + date + "T" + "00:00";
        default:
            return year + "-" + month + "-" + date + "T" + "00:00";
    }
}
export default {
    validEmail,
    validFullName,
    validPhone,
    validNotEmpty,
    getCurrentTime
}