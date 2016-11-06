// ==UserScript==
// @name         baiduSearch
// @namespace    https://github.com/jeasonstudio/
// @version      0.1
// @description  Hey
// @author       Jeason
// @match        https://www.baidu.com/*
// @include      https://www.baidu.com/*
// @grant        none
// ==/UserScript==

function judgeAdd(idChar) {
    var arr = idChar.split("");
    if ((arr[0] == '3' || arr[0] == '5') && arr.length == 4) {
        return true;
    } else {
        return false;
    }
}

(function() {
    $("#content_right").fadeOut(1000); //右侧栏消失
    $(".head_nums_cont_inner").fadeOut(1000); //工具栏消失
    $(".f13").fadeOut(1000); //快照消失
    $(".result-op").css('border-left', '5px #3385ff solid'); //百度相关结果
    $(".result-op").css('padding-left', '18px'); //百度相关结果
    $(".result").css('border-left', '5px #008000 solid'); //百度相关结果
    $(".result").css('padding-left', '18px'); //百度相关结果
    $('.general_image_pic').remove(); //删普通图片
    $('.c-span6').remove(); //百度百科图片
    // $('.xpath-log').remove()                            //删百度图片
    $('a').css('text-decoration', 'none');   //a 链接无下划线


    $(".result .c-container").css('background-color', '# ddd'); //正常结果
    if ($("#content_left > div")[$("#content_left > div").length - 1].id === '') {
        $($("#content_left > div")[$("#content_left > div").length - 1]).fadeOut(1000);
    }
    if ($("#content_left > div")[0].id === '') {
        $($("#content_left > div")[0]).fadeOut(1000);
    }
    for (var i = 0; i < $("#content_left > div").length; i++) {
        // console.log($("#content_left > div")[$("#content_left > div").length - 1].id === '')
        // console.log(this)
        if (judgeAdd(String($("#content_left > div")[i].id))) {
            // $("#content_left > div")[i].style = "display: none;"
            $($("#content_left > div")[i]).fadeOut(1000);
        }
    }
})();