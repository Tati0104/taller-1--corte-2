let saludarPersona = (nombre, idioma = 'es') => {
    let saludo;
    switch (idioma) {
        case 'es':
            saludo = `Hola, ${nombre}`;
            break;
        case 'en':
            saludo = `Hello, ${nombre}`;
            break;
       
            saludo = `Hola, ${nombre}`; 
    }
    return saludo;
};
console.log(saludarPersona('Carlos', 'es')); 