
carge(1)

 function carge(num){
    let container=document.querySelector('#container');             
    switch(num){
        case 1 :
            //home            
            container.innerHTML=home;
            break; 
        case 2 :
            //productos
            container.innerHTML=productos;
            break; 
        case 3 :
            //inventario
            container.innerHTML=inventario;
            break;  
            
        case 4 :
            //ventas
            container.innerHTML=ventas;
            break; 
        case 5 :
            //provedores
            container.innerHTML=provedores;
            break;
        case 6 :
            //clientes
            container.innerHTML=clientes;
            break;
        

       
    }
}

function view_modal(){  
  $('#Modal_QR').modal('show');
    let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    scanner.addListener('scan', function (content) {
    console.log(content);
    });
    Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        alert('El dispositivo o pc no cuenta con camara');
    }
    }).catch(function (e) {
    console.error(e);
    }); 

}

 




function view_prov (num){
  let tabNewProvider=$("#tabNewProvider")
  let tabListProvider=$("#tabListProvider")
  if(num==2){
    tabNewProvider.attr("hidden", "hidden")
    tabListProvider.removeAttr("hidden")

  }else{
    tabListProvider.attr("hidden", "hidden")
    tabNewProvider.removeAttr("hidden")

  }
}