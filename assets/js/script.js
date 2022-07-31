function encurtarUrl() {

    // Validação do link
    let url = document.getElementById("input-url").value;
    if(!url) {
        alert("É preciso inserir uma URL para encurtar");
        return;
    }


    //headers
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "ea1ea787cc42464791e69cc8fafaea00"
    }
    
    //dados
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
        });
}

function  copiar() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0,99999);

    navigator.clipboard.writeText(inputUrl.value);

    alert("URL copiada");
}