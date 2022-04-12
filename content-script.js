/**
 *                                           بسم الله الرحمن الرحيم
 * ************************************************************************************************************
 * ************************************************************************************************************
 * ************************************************************************************************************
 * 
 * Safe Search Extension
 * Version: 1.0
 * This extension is for browsering internet safely avoiding the prohipted and inappropriate content.
 * 
 * ************************************************************************************************************
 * ************************************************************************************************************
 * ************************************************************************************************************
*/


// Global variables
var ytContentCard;

var FILTER_EN_CONTENT = [
    [32, 97, 110, 97, 108, 32],
    [32, 97, 114, 115, 101, 32],
    [32, 97, 115, 115, 32],
    [
        32, 98, 105, 107,
        105, 110, 105, 32
    ],
    [
        98, 108, 111,
        119, 106, 111,
        98
    ],
    [
        98, 108, 111, 119,
        32, 106, 111, 98
    ],
    [
        98, 111, 108,
        108, 111, 99,
        107
    ],
    [98, 111, 111, 98, 115],
    [
        32, 98, 114, 97,
        108, 101, 115, 115,
        32
    ],
    [32, 98, 117, 116, 116, 32],
    [
        32, 98, 117, 116,
        116, 115, 32
    ],
    [
        98, 117, 116,
        116, 112, 108,
        117, 103
    ],
    [
        98, 117, 116,
        116, 108, 117,
        103
    ],
    [
        99, 108, 105,
        116, 111, 114,
        105, 115
    ],
    [
        99, 111, 99, 107,
        32, 99, 117, 109,
        32
    ],
    [
        99, 117, 110, 110,
        105, 108, 105, 110,
        103, 117, 115, 32
    ],
    [32, 99, 117, 110, 116, 32],
    [32, 100, 105, 99, 107, 32],
    [100, 105, 108, 100, 111],
    [
        100, 111, 103, 103,
        121, 32, 115, 116,
        121, 108, 101
    ],
    [32, 100, 121, 107, 101, 32],
    [101, 114, 111, 116, 105, 99],
    [
        101, 106, 97, 99,
        117, 108, 97, 116,
        101
    ],
    [
        102, 101, 108,
        108, 97, 116,
        105, 111
    ],
    [
        102, 101, 108,
        99, 104, 105,
        110, 103
    ],
    [
        102, 111, 114,
        101, 112, 108,
        97, 121
    ],
    [32, 102, 117, 99, 107, 32],
    [
        102, 32, 117, 32,
        99, 32, 107
    ],
    [
        102, 117, 100, 103,
        101, 112, 97, 99,
        107, 101, 114
    ],
    [
        102, 117, 100, 103,
        101, 32, 112, 97,
        99, 107, 101, 114
    ],
    [
        104, 97, 110,
        100, 106, 111,
        98
    ],
    [
        104, 97, 110, 100,
        32, 74, 111, 98
    ],
    [32, 104, 111, 109, 111, 32],
    [32, 106, 105, 122, 122, 32],
    [
        107, 110, 111,
        98, 101, 110,
        100
    ],
    [
        32, 108, 97, 98,
        105, 97, 32
    ],
    [
        108, 101, 115,
        98, 105, 97,
        110
    ],
    [32, 108, 103, 98, 116, 32],
    [
        32, 76, 105, 98,
        105, 100, 111, 32
    ],
    [
        32, 108, 109, 102,
        97, 111, 32
    ],
    [
        108, 111, 118, 101,
        32, 66, 105, 116,
        101
    ],
    [
        109, 97, 115, 116,
        117, 114, 98, 97,
        116
    ],
    [32, 109, 105, 108, 102, 32],
    [109, 117, 102, 102, 32],
    [110, 97, 107, 101, 100],
    [
        110, 105, 112,
        112, 108, 101,
        115
    ],
    [110, 105, 103, 103, 101, 114],
    [110, 105, 103, 103, 97],
    [32, 110, 117, 100, 101, 32],
    [
        111, 114, 97, 108,
        32, 115, 101, 120
    ],
    [
        111, 114, 97,
        108, 115, 101,
        120
    ],
    [111, 114, 103, 97, 115, 109],
    [112, 101, 110, 105, 115],
    [112, 105, 115, 115, 32],
    [112, 114, 105, 99, 107, 32],
    [112, 111, 114, 110, 32],
    [112, 117, 115, 115, 121],
    [113, 117, 101, 101, 114],
    [32, 115, 101, 120, 32],
    [32, 115, 101, 120, 121, 32],
    [32, 115, 108, 117, 116, 32],
    [115, 109, 101, 103, 109, 97],
    [115, 112, 117, 110, 107],
    [32, 116, 105, 116, 115, 32],
    [
        116, 114, 105, 98,
        98, 105, 110, 103
    ],
    [116, 111, 115, 115, 101, 114],
    [118, 97, 103, 105, 110, 97],
    [32, 119, 97, 110, 107, 32],
    [119, 104, 111, 114, 101],
    [
        32, 99, 97, 114,
        110, 97, 108, 32
    ],
    [
        32, 104, 111,
        116, 116, 121,
        32
    ],
    [
        112, 97, 115, 115,
        105, 111, 110, 97,
        116, 101
    ],
    [
        118, 101, 110,
        101, 114, 101,
        97, 108
    ],
    [
        118, 105, 98, 114,
        97, 116, 111, 114
    ],
    [
        118, 111, 108, 117,
        112, 116, 117, 111,
        117, 115
    ],
    [118, 117, 108, 118, 97],
    [119, 97, 110, 116, 111, 110],
    [
        120, 45, 114,
        97, 116, 101,
        100
    ],
    [
        120, 32, 114, 97,
        116, 101, 100, 32
    ],
    [
        119, 105, 116, 104, 111,
        117, 116, 32, 99, 108,
        111, 116, 104, 101, 115
    ]
];

var FILTER_RU_CONTENT = [
    [
        1082, 1091,
        1087, 1072,
        1085, 1080,
        1103
    ],
    [
        1089, 1077, 1082,
        1089, 1091, 1072,
        1083, 1100, 1085,
        1099, 1081
    ],
    [1085, 1102],
    [1087, 1086, 1088, 1085, 1086],
    [
        1076, 1077,
        1074, 1091,
        1096, 1082,
        1080
    ],
    [
        1089, 1077, 1082,
        1089, 1091, 1072,
        1083, 1100, 1085,
        1099, 1077
    ],
    [1089, 1080, 1089, 1100, 1082, 1080],
    [1074, 1091, 1083, 1100, 1074, 1072],
    [1082, 1080, 1089, 1082, 1080],
    [
        1072, 1085, 1072,
        1083, 1100, 1085,
        1099, 1081
    ],
    [1084, 1080, 1085, 1077, 1090],
    [
        1079, 1072,
        1076, 1085,
        1080, 1094,
        1072
    ],
    [1089, 1077, 1082, 1089],
    [1089, 1086, 1089, 1082, 1080],
    [1075, 1086, 1083, 1099, 1081],
    [1086, 1088, 1075, 1072, 1079, 1084],
    [
        1083, 1077, 1089,
        1073, 1080, 1103,
        1085, 1082, 1072
    ],
    [1087, 1080, 1079, 1076, 1072],
    [
        1092, 1072, 1083,
        1083, 1086, 1080,
        1084, 1080, 1090,
        1072, 1090, 1086,
        1088
    ],
    [1075, 1077, 1081],
    [1041, 1083, 1103, 1076, 1100],
    [1078, 1086, 1087, 1072],
    [
        1101, 1088, 1086,
        1090, 1080, 1095,
        1077, 1089, 1082,
        1080, 1081
    ],
    [1087, 1077, 1085, 1080, 1089],
    [
        1076, 1088,
        1086, 1095,
        1080, 1090,
        1100
    ]
];

var FILTER_AR_CONTENT = [
    [1580, 1606, 1587, 32],
    [32, 1587, 1603, 1587, 32],
    [1587, 1603, 1587, 1610],
    [1587, 1603, 1587, 1609],
    [1593, 1575, 1585, 1610],
    [1605, 1610, 1604, 1601],
    [1588, 1585, 1575, 1605, 1610, 1591],
    [1588, 1585, 1605, 1608, 1591, 1577],
    [1593, 1575, 1585, 1609],
    [1593, 1575, 1585, 1610, 1577],
    [32, 1605, 1604, 1591, 32],
    [1576, 1610, 1603, 1610, 1606, 1610],
    [1581, 1604, 1605, 1577],
    [1581, 1604, 1605, 1575, 1578],
    [1576, 1603, 1610, 1606, 1610],
    [
        1605, 1575,
        1610, 1608,
        1607, 1575,
        1578
    ],
    [1604, 1608, 1575, 1591],
    [32, 1587, 1581, 1575, 1602, 32],
    [1591, 1610, 1586],
    [1591, 1610, 1575, 1586],
    [32, 1576, 1586, 32],
    [1576, 1586, 1575, 1586],
    [32, 1606, 1610, 1603, 32],
    [32, 1606, 1575, 1603, 32],
    [1593, 1575, 1607, 1585, 1607, 32],
    [32, 1588, 1585, 1580, 1610, 32],
    [1606, 1607, 1608, 1583],
    [1605, 1608, 1605, 1587],
    [1588, 1585, 1605, 1608, 1591],
    [1593, 1585, 1576, 1583],
    [1591, 1610, 1586],
    [32, 1591, 1610, 1575, 1586, 32],
    [32, 1576, 1586, 32],
    [32, 1576, 1586, 1575, 1586, 32],
    [1605, 1578, 1606, 1575, 1603, 1577],
    [
        32, 1605, 1579,
        1610, 1585, 1577,
        32
    ],
    [32, 1605, 1601, 1575, 1578, 1606]
];
// End Global Variables
//#endregion
//---------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------//


// Scan Function
async function scan() {
    let filterTolerance = 1; //most effecint filter (mor number more tolerence)
    let tolerance = 0;
    let scanResult = false;
    let pageTotalContent = document.body.textContent.toLocaleLowerCase();

    const searchContent = (() => {
        FILTER_EN_CONTENT.forEach((codeWord) => {
            let word = '';
            codeWord.forEach((letter) => {
                word = word + String.fromCharCode(letter);
            })
            if (pageTotalContent.includes(word)) {
                console.log("English inappropriate content found! " + word);
                tolerance++;
                if (tolerance > filterTolerance && !scanResult) {
                    scanResult = true;
                    window.location.href = chrome.extension.getURL("");
                    return;
                }
            }
        });
        FILTER_AR_CONTENT.forEach((codeWord) => {
            let word = '';
            codeWord.forEach((letter) => {
                word = word + String.fromCharCode(letter);
            })
            if (pageTotalContent.includes(word)) {
                console.log("Arabic inappropriate content found! " + word);
                tolerance++;
                if (tolerance > filterTolerance && !scanResult) {
                    scanResult = true;
                    window.location.href = chrome.extension.getURL("");
                    return;
                }
            }
        });
        FILTER_RU_CONTENT.forEach((codeWord) => {
            let word = '';
            codeWord.forEach((letter) => {
                word = word + String.fromCharCode(letter);
            })
            if (pageTotalContent.includes(word)) {
                console.log("Russien inappropriate content found! " + word);
                tolerance++;
                if (tolerance > filterTolerance && !scanResult) {
                    scanResult = true;
                    window.location.href = chrome.extension.getURL("");
                    return;
                }
            }
        });
        //console.log(tolerance);
        return scanResult;
    })
    searchContent();
    return scanResult;
}

// CSS Styling Function
function css(element, styles) {
    for (const styleRule in styles) {
        element.style[styleRule] = styles[styleRule];
    }
}

// Function to cover the page if NSFW content detected
function coverContent() {
    var cover = document.createElement("div");
    cover.id = "suspected-content-cover";
    css(cover, {
        'position': 'fixed',
        'top': '0px',
        'left': '0px',
        'width': '100%',
        'height': '100%',
        'filter': 'blur(19px)',
        'z-index': '5',
        'background': '#c0c0c0fc'
    })
    document.body.appendChild(cover);
}

function unCover() {
    if (document.body.querySelector("#suspected-content-cover")) {
        document.body.querySelector("#suspected-content-cover").remove();
    }
}

// Validation Fundtion
async function validateBrowsing() {
    if (document.body.classList.contains("suspected-content")) {
        return;
    } else {
        scan().then((result) => {
            if (result == true) {
                document.body.classList.add("suspected-content");
                coverContent();
                console.log("Ok");

            } else {
                document.body.classList.add("save-content");
                unCover();
            }
        })

    }
}

// Calling the Main Validation function
validateBrowsing();

