// ==UserScript==
// @name         baiduTiebaInner
// @namespace    https://github.com/jeasonstudio/
// @version      0.1
// @description  Hey
// @author       Jeason
// @match        https://tieba.baidu.com/*
// @include        https://tieba.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    $(".head_banner , .card_head").fadeOut(1000);
    $(".j_encourage_entry , .celebrity").fadeOut(1000);
    
})();