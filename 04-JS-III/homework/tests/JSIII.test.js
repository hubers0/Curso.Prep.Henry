/* eslint-disable no-undef */
const {
  devolverPrimerElemento,(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
    return array[0];
  }
  devolverUltimoElemento,(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1];
  }
  obtenerLargoDelArray,(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
  }
  incrementarPorUno,(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    var nuevoArray = [];
    for(var i = 0; i < array.length; i++) {
      nuevoArray[i] = array[i] + 1;
    }
  
    return nuevoArray;
  
  }
  agregarItemAlFinalDelArray,(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array[array.length] = elemento;
    return array;
  }
  agregarItemAlComienzoDelArray,(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
  }
  dePalabrasAFrase,(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    return palabras.join(' ');
  }
  arrayContiene,(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    for(var i = 0; i < array.length; i++) {
      if(array[i] === elemento) {
        return true;
      }
    }
    return false;
  }
  agregarNumeros,(numeros) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var suma = 0;
    for(var i = 0; i < numeros.length; i++) {
      suma = suma + numeros[i];
    }
    return suma;
  
  }
  promedioResultadosTest,(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    return agregarNumeros(resultadosTest) / resultadosTest.length;
  }
  numeroMasGrande,(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    var maximo = numeros[0];
    for(var i = 1; i < numeros.length; i++) {
      if(numeros[i] > maximo) { 
        maximo = numeros[i];
      }
    }
    return maximo;
  }
  
  multiplicarArgumentos,() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0
    // Si se pasa un argumento, simplemente devuélvelo
    // Tu código:
    if(arguments.length < 1) return 0;
    var total = 1;
    for(var i = 0; i < arguments.length; i++) {
      total = total * arguments[i];
    }
    return total;
  }
  cuentoElementos,(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
    //Escribe tu código aquí
    let contador = 0;
    for (let i = 0; i < arreglo.length ; i++) {
      if(arreglo[i] > 19){
        contador++
      }
    }
    return contador
  }
  
  diaDeLaSemana,(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    if(numeroDeDia === 1 || numeroDeDia === 7 ){
      return "Es fin de semana"
    }
    return "Es dia Laboral"
  } 
  
  empiezaConNueve,(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    let num = n.toString()
    if(num.charAt(0) === "9"){
      return true
    }
    return false
  }
  todosIguales,(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    for (var i =0 ; i < arreglo.length - 1; i++) {
      if(arreglo[i] !== arreglo[i+1]){
        return false
      }
    }
    return true
  } 
  mesesDelAño,(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    var nuevoArray = [];
    for(let i= 0; i<array.length; i++) {
      if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
        nuevoArray.push(array[i]);
      }
    }
    if(nuevoArray.length < 3) {
      return "No se encontraron los meses pedidos";
    }
    else {
        return nuevoArray;
    }
  }
  mayorACien,(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    var nuevoArray = [];
    for(let i= 0; i < array.length; i++) {
      if(array[i] > 100) {
        nuevoArray.push(array[i]);
      }
    }
    return nuevoArray;
  }
  
  breakStatement,(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    var array = [];
    var suma = numero;
    for(var i= 0; i<10; i++) {
      suma = suma + 2;
      if(suma === i) break;
      else {
        array.push(suma);
      }
    }
    if(i < 10) {
      return 'Se interrumpió la ejecución';
    }
    else {
        return array;
    }
  }
  continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    var array = [];
    var suma = numero;
    for(var i= 0; i<10; i++) {
      if(i === 5) continue;
      else {
        suma = suma + 2;
        array.push(suma);
      }
    }
    return array;
  }
} = require('../homework');

describe('devolverPrimerElemento(arr)', function() {
  it('should return the first item in the array', function() {
    expect(devolverPrimerElemento([10, 10, 16, 12])).toBe(10);
    expect(devolverPrimerElemento([97, 100, 80, 55, 72, 94])).toBe(97);
  });
});

describe('devolverUltimoElemento(arr)', function() {
  it('should return the last item in the array', function() {
    expect(devolverUltimoElemento([10, 10, 16, 12])).toBe(12);
    expect(devolverUltimoElemento([97, 100, 80, 55, 72, 94])).toBe(94);
    expect(devolverUltimoElemento(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
  });
});

describe('obtenerLargoDelArray(arr)', function() {
  it('should return the length of the array', function() {
    expect(obtenerLargoDelArray([10, 10, 16, 12])).toBe(4);
    expect(obtenerLargoDelArray([97, 100, 80, 55, 72, 94])).toBe(6);
    expect(obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe(6);
  });
});

describe('incrementarPorUno(arr)', function() {
  it('should return the array with each value incremented by one', function() {
    expect(incrementarPorUno([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
    expect(incrementarPorUno([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
    expect(incrementarPorUno([])).toEqual([]);
  });
});

describe('agregarItemAlFinalDelArray(arr, item)', function() {
  it('should return the array with the item added to the end', function() {
    expect(agregarItemAlFinalDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
    expect(agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola')).toEqual([97, 100, 80, 55, 72, 94, 'Hola']);
    expect(agregarItemAlFinalDelArray([], true)).toEqual([true]);
  });
});

describe('agregarItemAlComienzoDelArray(arr, item)', function() {
  it('should return the array with the item added to the front', function() {
    expect(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
    expect(agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'Hola')).toEqual(['Hola', 97, 100, 80, 55, 72, 94]);
    expect(agregarItemAlComienzoDelArray([], true)).toEqual([true]);
  });
});

describe('dePalabrasAFrase(words)', function() {
  it('should return a string that has all of the words from the array separated by spaces', function() {
    expect(dePalabrasAFrase(['Henry', 'JavaScript', 'Class'])).toBe('Henry JavaScript Class');
    expect(dePalabrasAFrase(['Henry'])).toBe('Henry');
  });
});

describe('arrayContiene(arr, item)', function() {
  it('should return true if the array contains the item', function() {
    expect(arrayContiene([10, 10, 16, 12], 10)).toBe(true);
    expect(arrayContiene([97, 100, 80, 55, 72, 94], 'Hola')).toBe(false);
    expect(arrayContiene([], true)).toBe(false);
  });
});

describe('agregarNumeros(numbers)', function() {
  it('should add all of the numbers in the array together and return the sum', function() {
    expect(agregarNumeros([10, 10, 16])).toBe(36);
    expect(agregarNumeros([97, 100])).toBe(197);
    expect(agregarNumeros([0])).toBe(0);
  });
});

describe('promedioResultadosTest(testScores)', function() {
  it('should return the average test score', function() {
    expect(promedioResultadosTest([10, 10, 16, 12])).toBe(12);
    expect(promedioResultadosTest([97, 100, 80, 55, 72, 94])).toBe(83);
  });
});

describe('numeroMasGrande(numbers)', function() {
  it('should return the largest number', function() {
    expect(numeroMasGrande([10, 10, 16, 12])).toBe(16);
    expect(numeroMasGrande([97, 100, 80, 55, 72, 94])).toBe(100);
    expect(numeroMasGrande([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
  });
});

describe('multiplicarArgumentos()', function () {
  it('should return the product of all the arguments', function () {
    const product = multiplicarArgumentos(5, 5);
    const product2 = multiplicarArgumentos();
    const product3 = multiplicarArgumentos(3, 3, 3, 3);
    const product4 = multiplicarArgumentos(1);
    const product5 = multiplicarArgumentos(10, 0, 10);
    expect(product).toBe(25);
    expect(product2).toBe(0);
    expect(product3).toBe(81);
    expect(product4).toBe(1);
    expect(product5).toBe(0);
  });
});

describe('cuentoElementos(arreglo)', function() {
  it('should return a counter with the total of numbers greater than 18', function() {
    expect(cuentoElementos([10, 10, 18, 21])).toBe(1);
    expect(cuentoElementos([97, 100, 190, 5, 7, 9])).toBe(3);
    expect(cuentoElementos([97, 20, 90, 50, 7, 709])).toBe(5);
  });
});

describe('diaDeLaSemana(numeroDeDia)', function() {
  it('should return he name of the day associated with that number', function() {
    expect(diaDeLaSemana(3)).toBe("Es dia Laboral");
    expect(diaDeLaSemana(2)).toBe("Es dia Laboral");
    expect(diaDeLaSemana(1)).toBe("Es fin de semana");
    expect(diaDeLaSemana(7)).toBe("Es fin de semana");
  });
});

describe('empiezaConNueve(n))', function() {
  it('should return true or false in case the received number starts with nine', function() {
    expect(empiezaConNueve(98)).toBe(true);
    expect(empiezaConNueve(9)).toBe(true);
    expect(empiezaConNueve(2)).toBe(false);
    expect(empiezaConNueve(7)).toBe(false);
    expect(empiezaConNueve(-5)).toBe(false);
  });
});

describe('todosIguales(arreglo)', function() {
  it('should return true if all the elements of the array are equal and false otherwise', function() {
    expect(todosIguales([20, 20, 20, 20 ])).toBe(true);
    expect(todosIguales([97, 100, 190, 9])).toBe(false);
   
    expect(todosIguales([230, 230, 230, 230 ])).toBe(true);
  });
});

describe('mesesDelAño(array)', function() {
  it('should return a new array with the requested months', function() {
    var ok = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
    var wrong = ["Marzo", "Diciembre", "Julio", "Noviembre"];
    expect(mesesDelAño(ok)).toEqual(["Marzo", "Noviembre", "Enero"]);
    expect(mesesDelAño(wrong)).toEqual("No se encontraron los meses pedidos");
  });
});

describe('mayorACien(array)', function() {
  it('should return an array with values grater than 100', function() {
    var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];
    expect(mayorACien(integers)).toEqual([200, 120, 160, 148]);
  });
});

describe('breakStatement(numero)', function() {
  it('should return an array with the values ​​resulting from adding 2 in each iteration', function() {
    expect(breakStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68, 70]);
  });
  it('should stop the execution if the sum value and the iteration number match', function() {
    expect(breakStatement(-4)).toEqual('Se interrumpió la ejecución');
  });
});

describe('continueStatement(numero)', function() {
  it('should return an array with the values ​​resulting from adding 2 in each iteration when the iteration number is different from 5', function() {
    expect(continueStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68]);
    expect(continueStatement(-4)).toEqual([-2, 0, 2, 4, 6, 8, 10, 12, 14]);
  });
});