// Lista de contactos inicial
const contactos = [
    "Andrea Perez", 
    "Rosa Godoy",
    "Paula Peña"
  ];
  
  //añadir un nuevo contacto
  function agregarContacto(nombre) {
    contactos.push(nombre);
  }
  
  // eliminar un contacto
  function eliminarContacto(nombre) {
    contactos = contactos.filter(contacto => contacto !== nombre);
  }
  
  // mostrar los contactos
  function mostrarContactos() {
    console.log(contactos); 
  }
  
  // almacenar contactos
  
  const contactosObj = [
    {id: 1044965346, nombre: "Andrea", apellido: "Perez", telefono: "(+57) 32176453678", ciudad: "Cartagena"},
    {id: 44426479, nombre: "Rosa", apellido: "Godoy", telefono: "(+57) 3016345987", ciudad: "Cartagena"},
    {id: 73765398, nombre: "Paula", apellido: "Pena", telefono: "(+57) 3117356097", ciudad: "Cartagena"},
  ];
  
  function agregarContactoObj(contacto) {
    contactosObj.push(contacto);  
  }
  
  function eliminarContactoObj(id) {
    contactosObj = contactosObj.filter(c => c.id !== id);  
  }
  
  mostrarContactosObj(); {
    console.log(contactosObj);  
  }