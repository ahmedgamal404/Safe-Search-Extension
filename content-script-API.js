//**************************************** بسم الله الرحمن الرحيم *****************************************/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function getValidation() {

    var promise = await fetch("https://microsoft-content-moderator2.p.rapidapi.com/ProcessImage/FindFaces", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-rapidapi-host": "microsoft-content-moderator2.p.rapidapi.com",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY"
        },
        "body": {
            "DataRepresentation": "URL",
            "Value": "https://moderatorsampleimages.blob.core.windows.net/samples/sample.jpg"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
}

