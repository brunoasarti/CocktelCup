/** @type {HTMLElement}*/
var ubicUsuario;
/** @type {HTMLElement} */
var UbicacionLinkElt;


window.addEventListener('load', function(){
    ubicUsuario = document.getElementById('posicionUsuario');
    UbicacionLinkElt = document.querySelector('#UbicacionLink > a'); 
        navigator.geolocation.getCurrentPosition(geoLoc, sinGeoLoc);
    
});

/** @param {GeolocationPosition} pos */
function geoLoc(pos) {
    var x = pos.coords.latitude;
    var y = pos.coords.longitude;
    ubicUsuario.textContent = `${x}, ${y}`;
    UbicacionLinkElt.href = `https://maps.google.com/?q=${x},${y}`;
    UbicacionLinkElt.textContent = 'Encuentra donde comprar';
}

/** @param {GeolocationPositionError} sinPosicion */
function sinGeoLoc(sinPosicion) {
    console.warn(sinPosicion.message);
    let msg;
    switch(sinPosicion.code) {
        case sinPosicion.PERMISSION_DENIED:
            msg = "Solicitud de ubicación rechazada";
            break;
        case sinPosicion.POSITION_UNAVAILABLE:
            msg = "Tu ubicación es anónima";
            break;
         case sinPosicion.TIMEOUT:
             msg = "Limite de tiempo superado para obtener ubicación";
             break;
         default:
             msg = "ERROR";
             break;
    }
    ubicUsuario.textContent = msg;
}