function generarPersonaje(row,color,numPersonaje){
    let url = "https://swapi.dev/api/people/"
    fetch(url + numPersonaje,{
        headers:{
            'Content-type':'application/json'
        },
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        $(row).append(
            `
            <div class="col-12 col-md-6 col-lg-4">
            <div class="single-timeline-content d-flex">
                <div class="timeline-icon ${color}"></div>
                <div class="timeline-text">
                    <h6>${data.name}</h6>
                    <p>Estatura: ${data.height} cm. Peso: ${data.mass} kg.</p>
                </div
            </div>
        </div>
            `
        )
    }).catch(error =>{return console.error(error)});
}

$(function(){
    function * generador(row,color,numPersonaje){
        generarPersonaje(row,color,numPersonaje)
        yield;
        generarPersonaje(row,color,numPersonaje)
        yield;
        generarPersonaje(row,color,numPersonaje)
        yield;
        generarPersonaje(row,color,numPersonaje)
        yield;
        generarPersonaje(row,color,numPersonaje)
        yield;
        return "finalizado";
    }

    let contador = 0;
    $('p:contains(1 - 5)').mouseenter(()=>{
        contador++;
        if(contador <= 5){
            let generador1 = generador('#populares', "roja", contador);
            generador1.next()
        }else{
            console.log("No hay más.");
        }
    })

    let contador1 = 5;
    $('p:contains(6 - 11)').mouseenter(()=>{
        contador1++;
        if(contador1 >= 6 && contador1 <= 11){
            let generador1 = generador('#secundarios', "verde", contador1);
            generador1.next()
        }else{
            console.log("No hay más.");
        }
    })

    let contador2 = 11;
    $('p:contains(12 - 17)').mouseenter(()=>{
        contador2++;
        if(contador2 >= 12 && contador2 <= 17){
            let generador1 = generador('#otros', "azul", contador2);
            generador1.next()
        }else{
            console.log("No hay más.");
        }
    })


})