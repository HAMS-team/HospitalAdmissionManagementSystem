/*
    Logic：
        主要采用原生 JavaScript，
        只有在发送 Ajax 请求是才使用 JQuery
    
    ===
    1、登录注册页面的切换逻辑
    2、Ajax发送及接受响应逻辑
    ===
*/

// 封装选择器, 采用ES6箭头函数写法
const getSelector = ele => {
    return typeof ele === "string" ? document.querySelector(ele) : "";
}


// 登录注册载入

const containerShow = () => {
    var show = getSelector(".container")
    show.className += " container-show"
}


window.onload = containerShow;


// 登录注册页切换
((window, document) => {

    // 登录 -> 注册
    let toSignBtn = getSelector(".toSign"),
        toLoginBtn = getSelector(".toLogin")
        loginBox = getSelector(".login-box"),
        signBox = getSelector(".sign-box");
    
    toSignBtn.onclick = () => {
        loginBox.className += ' animate_login';
        signBox.className += ' animate_sign';
    }

    toLoginBtn.onclick = () => {
        loginBox.classList.remove("animate_login");
        signBox.classList.remove("animate_sign");
    }


})(window, document);


// 图形验证码
// var code ; //在全局定义验证码
//产生验证码
// window.onload = createCode(){
//     code = "";
//     var codeLength = 4;//验证码的长度
//     var checkCode = document.getElementById("code");
//     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
//         'S','T','U','V','W','X','Y','Z');//随机数
//     for(var i = 0; i < codeLength; i++) {//循环操作
//         var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
//         code += random[index];//根据索引取得随机数加到code上
//     }
//     checkCode.value = code;//把code值赋给验证码
// }

// Ajax 请求发送