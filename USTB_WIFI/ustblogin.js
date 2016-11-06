// ==UserScript==
// @name         baiduSearch
// @namespace    https://github.com/jeasonstudio/
// @version      0.1
// @description  Hey
// @author       Jeason
// @match        http://202.204.48.??/
// @include      http://202.204.48.??/
// @grant        none
// ==/UserScript==

(function() {
    $('#uname')[0].value = 'xxxxxxx';   //学号
    $('#upass')[0].value = 'xxxxxxx';   //密码
    login();
})();