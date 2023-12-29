# evaluadorPy

   - El evaluador utiliza una interfaz simple de usuario construida con HTML. Hay un campo de entrada (`input`) para que el usuario ingrese la expresión aritmética que desea evaluar.
   - También hay un botón "Evaluar" que activa la función `evaluarExpresion()` cuando se hace clic.
   - Cuando el usuario ingresa una expresión aritmética en el campo de entrada y hace clic en el botón "Evaluar", se invoca la función `evaluarExpresion()`.
   - La función `evaluarExpresion()` comienza recuperando la expresión ingresada por el usuario desde el campo de entrada.
   - Luego, se realiza una validación inicial para garantizar que los operadores estén rodeados por espacios, lo que facilita el posterior análisis de la expresión.
   - El resultado de la evaluación se muestra en un elemento HTML designado. Si hay un error durante la evaluación, se captura y se muestra un mensaje de error.
