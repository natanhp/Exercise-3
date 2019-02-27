function requestJSON(nama=''){
    fetch("https://swapi.co/api/people/?format=json&page=1")
    .then(resnponse => {return resnponse.json();})
    .then(data =>{
        var arrayJSON = data.results;
        console.log(arrayJSON);
        var konten='<tr><th>Nama</th><th>Tinggi</th><th>Berat</th><th>Gender</th>';
        for(var i = 0; i<arrayJSON.length; i++){
            console.log(i);
            console.log(arrayJSON[i].name);
            if(nama!==''){
                if(arrayJSON[i].name.includes(nama)){
                    konten+='<tr><td>' + arrayJSON[i].name + '</td>' +'<td>' + arrayJSON[i].height + '</td>'
                    +'<td>' + arrayJSON[i].mass + '</td>'
                    +'<td>' + arrayJSON[i].gender + '</td>'+'</tr>';
                }
            }else{
                konten+='<tr><td>' + arrayJSON[i].name + '</td>' +'<td>' + arrayJSON[i].height + '</td>'
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

