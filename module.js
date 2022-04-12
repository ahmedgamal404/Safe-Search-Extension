//***************************************************************************************************/
//*************************************** بسم الله الرحمن الرحيم **********************************/
//***************************************************************************************************/








function getFilterCodeArrayMain(stringText, isArabic, options = { code: '' }) {

    if (isArabic) {
        // Function to transform the string into ascii code or binary array
        // options => {code:'binary'} otherwise it will return ascii array 
        function getFilterCodeArabicArray() {
            const FILTER_AR_CONTENT_CODE = [];

            if (options.code === "binary") {
                stringText.split('،').forEach((word) => {
                    let wordArray = [];
                    for (let i = 0; i < word.length; i++) {
                        wordArray.push(word.charCodeAt(i).toString(2))
                    }
                    FILTER_AR_CONTENT_CODE.push(wordArray)
                })
                console.log(FILTER_AR_CONTENT_CODE);
                return FILTER_AR_CONTENT_CODE;
            } else {
                stringText.split('،').forEach((word) => {
                    let wordArray = [];
                    for (let i = 0; i < word.length; i++) {
                        wordArray.push(word.charCodeAt(i))
                    }
                    FILTER_AR_CONTENT_CODE.push(wordArray)
                })
                console.log(FILTER_AR_CONTENT_CODE);
                return FILTER_AR_CONTENT_CODE;
            }
        }
        // Function to transform the ascii code or binary array into string text
        // options should be the same of getFilterCodeArray options (global var is best)
        function getFilterStringArabicContent(filterArray) {
            if (options.code === "binary") {
                let FILTER_AR_STRING_CONTENT = "";
                filterArray.forEach((wordArray) => {
                    wordArray.reverse().forEach((letter) => {
                        FILTER_AR_STRING_CONTENT = FILTER_AR_STRING_CONTENT + String.fromCharCode(parseInt(letter, 2));
                    })
                    FILTER_AR_STRING_CONTENT = FILTER_AR_STRING_CONTENT + '،';
                });
                console.log(FILTER_AR_STRING_CONTENT);
                return FILTER_AR_STRING_CONTENT;
            } else {
                let FILTER_AR_STRING_CONTENT = "";
                filterArray.forEach((wordArray) => {
                    wordArray.reverse().forEach((letter) => {
                        FILTER_AR_STRING_CONTENT = FILTER_AR_STRING_CONTENT + String.fromCharCode(letter);
                    })
                    FILTER_AR_STRING_CONTENT = FILTER_AR_STRING_CONTENT + '،';
                });
                console.log(FILTER_AR_STRING_CONTENT);
                return FILTER_AR_STRING_CONTENT;
            }
        }
        getFilterStringArabicContent(getFilterCodeArabicArray());
    } else {
        // // Function to transform the string into ascii code or binary array
        // // options => {code:'binary'} otherwise it will return ascii array 
        function getFilterCodeNonArabicArray() {
            const FILTER_EN_CONTENT_CODE = [];

            if (options.code === "binary") {
                stringText.split(',').forEach((word) => {
                    let wordArray = [];
                    for (let i = 0; i < word.length; i++) {
                        wordArray.push(word.charCodeAt(i).toString(2))
                    }
                    FILTER_EN_CONTENT_CODE.push(wordArray)
                })
                console.log(FILTER_EN_CONTENT_CODE);
                return FILTER_EN_CONTENT_CODE;
            } else {
                stringText.split(',').forEach((word) => {
                    let wordArray = [];
                    for (let i = 0; i < word.length; i++) {
                        wordArray.push(word.charCodeAt(i))
                    }
                    FILTER_EN_CONTENT_CODE.push(wordArray)
                })
                console.log(FILTER_EN_CONTENT_CODE);
                return FILTER_EN_CONTENT_CODE;
            }
        }
        // Function to transform the ascii code or binary array into string text
        // options should be the same of getFilterCodeArray options (global var is best)
        function getFilterStringNonArabicContent(filterArray) {
            if (options.code === "binary") {
                let FILTER_EN_STRING_CONTENT = "";
                filterArray.forEach((wordArray) => {
                    wordArray.forEach((letter) => {
                        FILTER_EN_STRING_CONTENT = FILTER_EN_STRING_CONTENT + String.fromCharCode(parseInt(letter, 2));
                    })
                    FILTER_EN_STRING_CONTENT = FILTER_EN_STRING_CONTENT + ',';
                });
                console.log(FILTER_EN_STRING_CONTENT);
                return FILTER_EN_STRING_CONTENT;
            } else {
                let FILTER_EN_STRING_CONTENT = "";
                filterArray.forEach((wordArray) => {
                    wordArray.forEach((letter) => {
                        FILTER_EN_STRING_CONTENT = FILTER_EN_STRING_CONTENT + String.fromCharCode(letter);
                    })
                    FILTER_EN_STRING_CONTENT = FILTER_EN_STRING_CONTENT + ',';
                });
                console.log(FILTER_EN_STRING_CONTENT);
                return FILTER_EN_STRING_CONTENT;
            }
        }
        getFilterStringNonArabicContent(getFilterCodeNonArabicArray());
    }
}
// Alterinative
// // Function to transform the string into ascii code or binary array
// // options => {code:'binary'} otherwise it will return ascii array 
// function getFilterCodeArray(stringText, options = { code: '' }) {
//     const FILTER_EN_CONTENT_CODE = [];

//     if (options.code === "binary") {
//         stringText.split(',').forEach((word) => {
//             let wordArray = [];
//             for (let i = 0; i < word.length; i++) {
//                 wordArray.push(word.charCodeAt(i).toString(2))
//             }
//             FILTER_EN_CONTENT_CODE.push(wordArray)
//         })
//         console.log(FILTER_EN_CONTENT_CODE);
//         return FILTER_EN_CONTENT_CODE;
//     } else {
//         stringText.split(',').forEach((word) => {
//             let wordArray = [];
//             for (let i = 0; i < word.length; i++) {
//                 wordArray.push(word.charCodeAt(i))
//             }
//             FILTER_EN_CONTENT_CODE.push(wordArray)
//         })
//         console.log(FILTER_EN_CONTENT_CODE);
//         return FILTER_EN_CONTENT_CODE;
//     }
// }

// // Function to transform the ascii code or binary array into string text
// // options should be the same of getFilterCodeArray options (global var is best)
// function getFilterStringContent(filterArray, options = { code: '' }) {
//     if (options.code === "binary") {
//         let FILTER_EN_STRING_CONTENT = "";
//         filterArray.forEach((wordArray) => {
//             wordArray.forEach((letter) => {
//                 FILTER_EN_STRING_CONTENT = FILTER_EN_STRING_CONTENT + String.fromCharCode(parseInt(letter, 2));
//             })
//             FILTER_EN_STRING_CONTENT = FILTER_EN_STRING_CONTENT + ',';
//         });
//         console.log(FILTER_EN_STRING_CONTENT);
//         return FILTER_EN_STRING_CONTENT;
//     } else {
//         let FILTER_EN_STRING_CONTENT = "";
//         filterArray.forEach((wordArray) => {
//             wordArray.forEach((letter) => {
//                 FILTER_EN_STRING_CONTENT = FILTER_EN_STRING_CONTENT + String.fromCharCode(letter);
//             })
//             FILTER_EN_STRING_CONTENT = FILTER_EN_STRING_CONTENT + ',';
//         });
//         console.log(FILTER_EN_STRING_CONTENT);
//         return FILTER_EN_STRING_CONTENT;
//     }
// }















// Inproperiate and prohibted and NSFW content to filter in Ar EN RU





















var FILTER_EN_CONTENT = " anal , arse , ass , bikini ,blowjob,blow job,bollock,boobs, braless , butt , butts ,buttplug,buttlug,clitoris,cock " +
    "cum ,cunnilingus , cunt , dick ,dildo,doggy style, dyke ,erotic,ejaculate,fellatio,felching,foreplay, fuck ,f u c k," +
    "fudgepacker,fudge packer,handjob,hand Job, homo , jizz ,knobend, labia ,lesbian, lgbt , Libido , lmfao ," +
    "love Bite,masturbat, milf ,muff ,naked,nipples,nigger,nigga, nude ,oral sex,oralsex,orgasm,penis,piss ,prick ," +
    "porn ,pussy,queer, sex , sexy , slut ,smegma,spunk, tits ,tribbing,tosser,vagina, wank ,whore, carnal , hotty ," +
    "passionate,venereal,vibrator,voluptuous,vulva,wanton,x-rated,x rated ,without clothes";

var FILTER_RU_CONTENT = "купания,сексуальный,ню,порно,девушки,сексуальные,сиськи,вульва,киски,анальный,минет," +
    "задница,секс,соски,голый,оргазм,лесбиянка,пизда,фаллоимитатор,гей,Блядь,жопа,эротический,пенис,дрочить"

var FILTER_AR_CONTENT = "جنس ، سكس ،سكسي،سكسى،عاري،ميلف،شراميط،شرموطة،" +
    "عارى،عارية، ملط ،بيكيني،حلمة،حلمات،بكيني،مايوهات،لواط، سحاق ،طيز،طياز، بز ،بزاز، " +
    "نيك ، ناك ،عاهره ، شرجي ،نهود،مومس،شرموط،عربد،طيز، طياز ، بز ، بزاز ،متناكة، مثيرة ، مفاتن";











getFilterCodeArrayMain(FILTER_AR_CONTENT, true, { code: "binary" })

// Assci code
//فكرة التشفير جميلة و هي عبارة عن تحويل الكلام هذا الى أرقام كمتغيرات 
// ثم عند استخدامها يتم تحويلها بدون طباعتها و المقارنه بها اي نص بعد وضعها في متغير 
// في الواقع هنالك افضل من ذلك بكثير و لكن حتي الان هذا ما علمته

// const EN_WORDS_IN_ASCII = FILTER_EN_CONTENT.split(',')
// const EN_WORDS_IN_ASCI = [];
// EN_WORDS_IN_ASCII.forEach((word) => {
//     let arr = [];
//     for (let i = 0; i < word.length; i++) {
//         arr.push(word.charCodeAt(i))
//     }
//     EN_WORDS_IN_ASCI.push(arr)
// })

// const FILTER_EN_CONTENT_CODE =
//     [
//         [32, 97, 110, 97, 108, 32],
//         [32, 97, 114, 115, 101, 32],
//         [32, 97, 115, 115, 32],
//         [
//             32, 98, 105, 107,
//             105, 110, 105, 32
//         ],
//         [
//             98, 108, 111,
//             119, 106, 111,
//             98
//         ],
//         [
//             98, 108, 111, 119,
//             32, 106, 111, 98
//         ],
//         [
//             98, 111, 108,
//             108, 111, 99,
//             107
//         ],
//         [98, 111, 111, 98, 115],
//         [
//             32, 98, 114, 97,
//             108, 101, 115, 115,
//             32
//         ],
//         [32, 98, 117, 116, 116, 32],
//         [
//             32, 98, 117, 116,
//             116, 115, 32
//         ],
//         [
//             98, 117, 116,
//             116, 112, 108,
//             117, 103
//         ],
//         [
//             98, 117, 116,
//             116, 108, 117,
//             103
//         ],
//         [
//             99, 108, 105,
//             116, 111, 114,
//             105, 115
//         ],
//         [
//             99, 111, 99, 107,
//             32, 99, 117, 109,
//             32
//         ],
//         [
//             99, 117, 110, 110,
//             105, 108, 105, 110,
//             103, 117, 115, 32
//         ],
//         [32, 99, 117, 110, 116, 32],
//         [32, 100, 105, 99, 107, 32],
//         [100, 105, 108, 100, 111],
//         [
//             100, 111, 103, 103,
//             121, 32, 115, 116,
//             121, 108, 101
//         ],
//         [32, 100, 121, 107, 101, 32],
//         [101, 114, 111, 116, 105, 99],
//         [
//             101, 106, 97, 99,
//             117, 108, 97, 116,
//             101
//         ],
//         [
//             102, 101, 108,
//             108, 97, 116,
//             105, 111
//         ],
//         [
//             102, 101, 108,
//             99, 104, 105,
//             110, 103
//         ],
//         [
//             102, 111, 114,
//             101, 112, 108,
//             97, 121
//         ],
//         [32, 102, 117, 99, 107, 32],
//         [
//             102, 32, 117, 32,
//             99, 32, 107
//         ],
//         [
//             102, 117, 100, 103,
//             101, 112, 97, 99,
//             107, 101, 114
//         ],
//         [
//             102, 117, 100, 103,
//             101, 32, 112, 97,
//             99, 107, 101, 114
//         ],
//         [
//             104, 97, 110,
//             100, 106, 111,
//             98
//         ],
//         [
//             104, 97, 110, 100,
//             32, 74, 111, 98
//         ],
//         [32, 104, 111, 109, 111, 32],
//         [32, 106, 105, 122, 122, 32],
//         [
//             107, 110, 111,
//             98, 101, 110,
//             100
//         ],
//         [
//             32, 108, 97, 98,
//             105, 97, 32
//         ],
//         [
//             108, 101, 115,
//             98, 105, 97,
//             110
//         ],
//         [32, 108, 103, 98, 116, 32],
//         [
//             32, 76, 105, 98,
//             105, 100, 111, 32
//         ],
//         [
//             32, 108, 109, 102,
//             97, 111, 32
//         ],
//         [
//             108, 111, 118, 101,
//             32, 66, 105, 116,
//             101
//         ],
//         [
//             109, 97, 115, 116,
//             117, 114, 98, 97,
//             116
//         ],
//         [32, 109, 105, 108, 102, 32],
//         [109, 117, 102, 102, 32],
//         [110, 97, 107, 101, 100],
//         [
//             110, 105, 112,
//             112, 108, 101,
//             115
//         ],
//         [110, 105, 103, 103, 101, 114],
//         [110, 105, 103, 103, 97],
//         [32, 110, 117, 100, 101, 32],
//         [
//             111, 114, 97, 108,
//             32, 115, 101, 120
//         ],
//         [
//             111, 114, 97,
//             108, 115, 101,
//             120
//         ],
//         [111, 114, 103, 97, 115, 109],
//         [112, 101, 110, 105, 115],
//         [112, 105, 115, 115, 32],
//         [112, 114, 105, 99, 107, 32],
//         [112, 111, 114, 110, 32],
//         [112, 117, 115, 115, 121],
//         [113, 117, 101, 101, 114],
//         [32, 115, 101, 120, 32],
//         [32, 115, 101, 120, 121, 32],
//         [32, 115, 108, 117, 116, 32],
//         [115, 109, 101, 103, 109, 97],
//         [115, 112, 117, 110, 107],
//         [32, 116, 105, 116, 115, 32],
//         [
//             116, 114, 105, 98,
//             98, 105, 110, 103
//         ],
//         [116, 111, 115, 115, 101, 114],
//         [118, 97, 103, 105, 110, 97],
//         [32, 119, 97, 110, 107, 32],
//         [119, 104, 111, 114, 101],
//         [
//             32, 99, 97, 114,
//             110, 97, 108, 32
//         ],
//         [
//             32, 104, 111,
//             116, 116, 121,
//             32
//         ],
//         [
//             112, 97, 115, 115,
//             105, 111, 110, 97,
//             116, 101
//         ],
//         [
//             118, 101, 110,
//             101, 114, 101,
//             97, 108
//         ],
//         [
//             118, 105, 98, 114,
//             97, 116, 111, 114
//         ],
//         [
//             118, 111, 108, 117,
//             112, 116, 117, 111,
//             117, 115
//         ],
//         [118, 117, 108, 118, 97],
//         [119, 97, 110, 116, 111, 110],
//         [
//             120, 45, 114,
//             97, 116, 101,
//             100
//         ],
//         [
//             120, 32, 114, 97,
//             116, 101, 100, 32
//         ],
//         [
//             119, 105, 116, 104, 111,
//             117, 116, 32, 99, 108,
//             111, 116, 104, 101, 115
//         ]
//     ]










