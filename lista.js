//Lista de contactos inicial
contactos = [
    {'nombre': 'andrea perez'},
    {'nombre': 'rosa Godoy'}, 
    {'nombre': 'paula peña'}
  ]
  //Función para añadir un contacto
  function agregar_contacto(lista, nombre) {
    lista.push({'nombre': nombre});
  }
  //Función para eliminar un contacto
  function eliminar_contacto(lista, nombre) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].nombre === nombre) {
        lista.splice(i, 1);
        break;
      }
    }
  }
  //Función para imprimir los contactos
  function imprimir_contactos(lista) {
    for (let i = 0; i < lista.length; i++) {
      console.log(lista[i].nombre);
    }
  }