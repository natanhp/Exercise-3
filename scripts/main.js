function requestJSON(nama=''){
    fetch("https://swapi.co/api/people/?format=json&page=1")
    .then(resnponse => {return resnponse.json();})
    .then(data =>{
        var arrayJSON = data.results;
        console.log(arrayJSON);
        var konten='<thead><tr class="bg-primary"><th scope="col">Nama</th><th scope="col">Tinggi</th><th scope="col">Berat</th><th scope="col">Gender</th></tr></thead>';
        for(var i = 0; i<arrayJSON.length; i++){
            console.log(i);
            console.log(arrayJSON[i].name);
            if(nama!==''){
                if(arrayJSON[i].name.includes(nama)){
                    konten+='<tr class="bg-warning"><td>' + arrayJSON[i].name + '</td>' +'<td>' + arrayJSON[i].height + '</td>'
                    +'<td>' + arrayJSON[i].mass + '</td>'
                    +'<td>' + arrayJSON[i].gender + '</td>'+'</tr>';
                }
            }else{
                konten+='<tr class="bg-warning"><td>' + arrayJSON[i].name + '</td>' +'<td>' + arrayJSON[i].height + '</td>'
            +'<td>' + arrayJSON[i].mass + '</td>'
            +'<td>' + arrayJSON[i].gender + '</td>'+'</tr>';
            }
        }

        console.log(konten);

        document.querySelector("#data").innerHTML = konten;
    });
}

requestJSON('');

document.querySelector("#cari").addEventListener("click", function(){
    var nama = document.querySelector("#keyNama").value;
    requestJSON(nama);
    console.log(nama);
})

