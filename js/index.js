function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'user-agent': 'Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.json()) // 輸出成 json
}

function predictType(result){
    if(result==0)
        return '與功能無關的評論';
    else
        return '與功能有關的評論';
}


function submit(){
    const inputText = document.getElementById('reviews').value;

    const data = {
        inputText
    }
    postData("https://appstore-app-reviews.herokuapp.com/predict",data)
    .then(data=>{
        const result = data.result;
        console.log(data);
        console.log(result);
        console.log(predictType(result));
        document.getElementById('resultText').innerHTML=predictType(result);
    })

}