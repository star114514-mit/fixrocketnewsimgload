// ==UserScript==
// @name         fixrocketnewsimgload
// @namespace    https://github.com/stm7128/userscripts/
// @version      1.0
// @description  Rocketnews24の画像においてしばらく灰色の物が表示される問題の改善
// @author       stm7128
// @match        *://*.rocketnews24.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.hasAttribute('data-sco-src')) {
            img.setAttribute('src', img.getAttribute('data-sco-src'));
        }
    });

})();
