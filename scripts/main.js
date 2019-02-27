function requestJSON(){
    fetch("https://swapi.co/api/people/?format=json&page=1")
    .then(resnponse => {return resnponse.json();})
    .then(data =>{
        var konten='<tr><th>Nama</th><th>Tinggi</th><th>Berat</th><th>Gender</th>';
        for(var i = 0; i<data.results.length; i++){
            console.log(i);
            console.log(data.results[i].name);
            konten+='<tr><td>' + data.results[i].name + '</td>' +'<td>' + data.results[i].height + '</td>'
            +'<td>' + data.results[i].mass + '</td>'
            +'<td>' + data.results[i].gender + '</td>'+'</tr>';
        }

        console.log(konten);

        document.querySelector("#data").innerHTML = konten;
    });
}

function requestJSONSearch(nama){
    fetch("https://swapi.co/api/people/?format=json&search=" + nama)
    .then(resnponse => {return resnponse.json();})
    .then(data =>{
        var konten='<tr><th>Nama</th><th>Tinggi</th><th>Berat</th><th>Gender</th>';
        for(var i = 0; i<data.results.length; i++){
            console.log(i);
            console.log(data.results[i].name);
            konten+='<tr><td>' + data.results[i].name + '</td>' +'<td>' + data.results[i].height + '</td>'
            +'<td>' + data.results[i].mass + '</td>'
            +'<td>' + data.results[i].gender + '</td>'+'</tr>';
        }

        console.log(konten);

        document.querySelector("#data").innerHTML = konten;
    });
}


requestJSON();

document.querySelector("#cari").addEventListener("click", function(){
    var nama = document.querySelector("#keyNama").value;
    requestJSONSearch(nama);
    console.log(nama);
})

