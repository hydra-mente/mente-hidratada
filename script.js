function calcularHidratacion() {

            const peso = Number(document.getElementById("peso").value);
            const edad = Number(document.getElementById("edad").value);
            const genero = document.querySelector('input[name="bio"]:checked').value;
            const actividad = document.querySelector('input[name="actividad"]:checked').value;
            
            if (edad > 20) {
                alert("Edad no válida. Por favor introduce una edad que esté dentro del rango (15 - 20)")
            } else {
           
                let aguaBase;
                if (genero === "masculino") {
                    aguaBase = peso * 0.035; // 35 ml por kg para hombres jóvenes
                } else {
                    aguaBase = peso * 0.030; // 30 ml por kg para mujeres jóvenes
                }
                
                // Ajustar cantidad de agua de acuerdo al nivel de actividad física
                let factorActividad = 1;
                switch(actividad) {
                    case "sedentario":
                        factorActividad = 1.0;
                        break;
                    case "moderado":
                        factorActividad = 1.2;
                        break;
                    case "activo":
                        factorActividad = 1.5;
                        break;
                }
                
                const aguaRecomendada = aguaBase * factorActividad;
                
                // Calcular nivel de hidratación actual de acuerdo a las bebidas seleccionadas
                const bebidasSeleccionadas = document.querySelectorAll('input[name="bebida"]:checked');
                let factorHidratacion = 1; 
                
                bebidasSeleccionadas.forEach(bebida => {
                    switch(bebida.value) {
                        case "refresco":
                            factorHidratacion *= 0.7;
                            break;
                        case "cafe":
                            factorHidratacion *= 0.8;
                            break;
                        case "jugo":
                            factorHidratacion *= 1.1;
                            break;
                        case "agua_sabor":
                            factorHidratacion *= 1.0;
                            break;
                        case "alcohol":
                            factorHidratacion *= 0.5;
                            break;
                        case "deportiva":
                            factorHidratacion *= 1.2;
                            break;
                        case "energetica":
                            factorHidratacion *= 0.6;
                            break;
                        case "lacteo":
                            factorHidratacion *= 1.1;
                            break;
                    }
                });
                
                // Adaptar cantidad de agua recomendada según las bebidas seleccionadas
                const aguaAjustada = aguaRecomendada * factorHidratacion;
                
                // Calcular el nivel de hidratación (0-100%)
                let porcentajeHidratacion = 100;
                if (factorHidratacion < 0.8) {
                    porcentajeHidratacion = 60 + (factorHidratacion * 50);
                } else if (factorHidratacion > 1.2) {
                    porcentajeHidratacion = 100;
                } else {
                    porcentajeHidratacion = 80 + ((factorHidratacion - 0.8) * 50);
                }
                
                
                // Mostrar los resultados 
                const resultados = document.getElementById("resultados");
                resultados.innerHTML = `
                <h3>Resultados de Hidratación</h3>
                <p><strong>Agua base recomendada:</strong> 2.5 L</p>
                <p><strong>Agua recomendada (de acuerdo al nivel de actividad física):</strong> 3 L (12 vasos de 250ml)</p>
                <p><strong>Agua adaptada según bebidas consumimdas:</strong> 2.5 L (7 vasos de 250ml)</p>
                <p><strong>Nivel de hidratación:</strong> 80% </p>`;
                
                //function obtenerConsejoHidratacion(porcentajeHidratacion) {

                    //let consejoBase = "";
                    
                    //if (porcentajeHidratacion < 60) {
                       // consejoBase = "¡Cuidado! Tu consumo de bebidas no es adecuado. Deberías reducir las bebidas deshidratantes (refrescos, alcohol, café) y aumentar el agua natural.";
                    //} else if (porcentajeHidratacion < 80) {
                     //   consejoBase = "Tu hidratación es regular. Intenta sustituir algunas bebidas por agua natural o infusiones.";
                    //} else if (porcentajeHidratacion < 95) {
                      //  consejoBase = "¡Bien! Tu hidratación es buena, pero aún puedes mejorarla.";
                   // } else {
                     //   consejoBase = "¡Excelente! Tu hidratación es impecable. Sigue así.";

                    //${aguaBase.toFixed(2)}//
                    //${aguaRecomendada.toFixed(2)} L (${(aguaRecomendada * 4).toFixed(0)} vasos de 250ml)
                    // ${aguaAjustada.toFixed(2)} L (${(aguaAjustada * 4).toFixed(0)} vasos de 250ml)
                    // ${Math.min(100, Math.max(0, porcentajeHidratacion)).toFixed(0)}%


                   // }
                //}
            
            } 
}