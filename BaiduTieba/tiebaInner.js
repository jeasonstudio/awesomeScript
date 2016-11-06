// ==UserScript==
// @name         baiduTiebaInner
// @namespace    https://github.com/jeasonstudio/
// @version      0.1
// @description  Hey
// @author       Jeason
// @match        https://tieba.baidu.com/*
// @include      https://tieba.baidu.com/*
// @grant        none
// ==/UserScript==

(function () {
    $(".head_banner , .card_head").fadeOut(1000);
    $(".j_encourage_entry , .celebrity").fadeOut(1000);
    $(".p_postlist > .clearfix").fadeOut(1000)
    // $(".clearfix").fadeOut(1000)
    $("iframe").fadeOut(1000)
    $(".tpoint-skin").fadeOut(1000)
    
    for (var i = 0; i < $(".p_postlist > div").length; i++) {
        console.log($(".p_postlist > div")[i]);
    }
})();