const generarContraseña = () =>{
    let contraseña = ""
    for (let i=0; i<6;i++){
        let dig = Math.floor(Math.random()*10);
        contraseña += dig; 
    }
    return contraseña;
}

alert ("La contraseña generada es: "+generarContraseña());