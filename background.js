/**
 *                                           بسم الله الرحمن الرحيم
 * ************************************************************************************************************
 * ************************************************************************************************************
 * Safe Search Extension
 * Version: 1.0
 * This extension is for browsering internet safely avoiding the prohipted and inappropriate content.
 * ************************************************************************************************************
 * ************************************************************************************************************
*/


chrome.webRequest.onBeforeRequest.addListener((details) => {

    chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
        if (tab[0].id != undefined || tab[0].id != null) { // to prevent the error (actually dont)
            chrome.tabs.executeScript(tab[0].id, { file: "content-script.js" });
        }
    });
}, { urls: ["<all_urls>"] },
    ["blocking"])
