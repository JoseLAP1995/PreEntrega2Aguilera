function generarExpresionValidacion(opcion, numeroMinimo, numeroMaximo) {
  return (
    isNaN(opcion) ||
    opcion === "" ||
    parseInt(opcion) < numeroMinimo ||
    parseInt(opcion) > numeroMaximo
  );
}

function listarCatalogo(catalogo) {
  let listado = "\n";
  catalogo.map((producto, i) => {
    if (i + 1 === catalogo.length) {
      listado += `${producto.codigo}. ${producto.nombre}: $${producto.precio}\n0. Salir`;
    } else {
      listado += `${producto.codigo}. ${producto.nombre}: $${producto.precio}\n`;
    }
  });
  return listado;
}

function escogerProducto(mensaje, catalogo) {
  let productoEscogido;

  do {
    productoEscogido = prompt(mensaje);

    if (parseInt(productoEscogido) === 0) {
      return [];
    } else if (
      generarExpresionValidacion(productoEscogido, 1, catalogo.length)
    ) {
      alert(`Debes introducir un valor numérico entre 1 y ${catalogo.length}.`);
    }
  } while (generarExpresionValidacion(productoEscogido, 1, catalogo.length));

  return catalogo.find(
    (producto) => producto.codigo === parseInt(productoEscogido)
  );
}

function mensajeCompra(nombreProducto, valorProducto, producto) {
  return `${producto}: ${nombreProducto}. Valor: $${valorProducto}\n`;
}

function ingresarCodigoDescuento(codigoDescuento) {
  let codigoUsuario;
  let formatoInvalido = true;
  do {
    codigoUsuario = prompt(
      `¿Tienes el código de descuento? Sí es así por favor ingresa y tendrá un 15% de descuento en su compra total (El código solo es de formato numérico)`
    );

    formatoInvalido = isNaN(codigoUsuario) || codigoUsuario === "";

    if (formatoInvalido) {
      alert("Debes introducir un valor numérico para el código");
    }
  } while (formatoInvalido);

  if (codigoDescuento === parseInt(codigoUsuario)) {
    alert("¡Felicidades! Tendrá un 15% de descuento al final de su compra");
    return true;
  } else {
    alert("Código incorrecto.");
    return false;
  }
}

function darTotal(pelicula, bebida, golosina, tieneCodigo) {
  let valorTotal = 0;
  let stringCompra = "";

  if (tieneCodigo) {
    stringCompra += `¡Tiene código de 15% de descuento!\n`;
  }

  if (pelicula.nombre !== undefined) {
    let precioPelicula = pelicula.checarDescuento(0.85, tieneCodigo);
    stringCompra += mensajeCompra(pelicula.nombre, precioPelicula, "Película");
    valorTotal += precioPelicula;
  }

  if (bebida.nombre !== undefined) {
    let precioBebida = bebida.checarDescuento(0.85, tieneCodigo);
    stringCompra += mensajeCompra(bebida.nombre, precioBebida, "Bebida");
    valorTotal += precioBebida;
  }

  if (golosina.nombre !== undefined) {
    let precioGolosina = golosina.checarDescuento(0.85, tieneCodigo);
    stringCompra += mensajeCompra(golosina.nombre, precioGolosina, "Golosina");
    valorTotal += precioGolosina;
  }
  stringCompra += `Valor total de la compra: $${valorTotal}\n¡Muchas gracias por comprar en Cines Unidos!`;

  alert(stringCompra);
}

////////////////////////////////////////// ************************************ ///////////////////////////////////////////

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  checarDescuento(descuento, aplicaDescuento = false) {
    return aplicaDescuento ? this.precio * descuento : this.precio;
  }
}

class Pelicula extends Producto {
  constructor(codigo, nombre, precio, estreno, director) {
    super(codigo, nombre, precio);
    this.estreno = estreno;
    this.director = director;
  }
}

const catalogoPeliculas = [
  new Pelicula(1, "Harry Potter y la Piedra Filosofal", 1500, 2001, [
    "Chris Columbus",
  ]),
  new Pelicula(2, "Harry Potter y la Cámara Secreta", 1500, 2002, [
    "Chris Columbus",
  ]),
  new Pelicula(3, "Harry Potter y el prisionero de Azkaban", 1500, 2004, [
    "Alfonso Cuarón",
  ]),
  new Pelicula(4, "Harry Potter y el Cáliz de Fuego", 1500, 2005, [
    "Mike Newell",
  ]),
  new Pelicula(5, "Harry Potter y la Orden del Fénix", 1500, 2007, [
    "David Yates",
  ]),
  new Pelicula(6, "Harry Potter y el Misterio del Príncipe", 1500, 2009, [
    "David Yates",
  ]),
  new Pelicula(
    7,
    "Harry Potter y las Reliquias de la Muerte - Parte 1",
    1500,
    2010,
    ["David Yates"]
  ),
  new Pelicula(
    8,
    "Harry Potter y las Reliquias de la Muerte - Parte 2",
    1500,
    2011,
    ["David Yates"]
  ),
  new Pelicula(9, "Toy Story", 1500, 1995, ["John Lasseter"]),
  new Pelicula(10, "Buscando a Nemo", 1500, 2003, ["Andrew Stanton"]),
  new Pelicula(11, "Shrek", 1500, 2001, ["Andrew Adamson", "Vicky Jenson"]),
  new Pelicula(12, "El Rey León", 1500, 1994, ["Roger Allers", "Rob Minkoff"]),
  new Pelicula(13, "Moana", 1500, 2016, ["Ron Clements", "John Musker"]),
  new Pelicula(14, "Coco", 1500, 2017, ["Lee Unkrich", "Adrián Molina"]),
  new Pelicula(15, "Frozen", 1500, 2013, ["Chris Buck", "Jennifer Lee"]),
  new Pelicula(16, "Toy Story 3", 1500, 2010, "Lee Unkrich"),
  new Pelicula(17, "Zootopia", 1500, 2016, [
    "Byron Howard",
    "Rich Moore",
    "Jared Bush",
  ]),
  new Pelicula(18, "El libro de la vida", 1500, 2014, ["Jorge R. Gutiérrez"]),
  new Pelicula(19, "Ratatouille", 1500, 2007, ["Brad Bird"]),
  new Pelicula(20, "Tangled", 1500, 2010, ["Nathan Greno", "Byron Howard"]),
  new Pelicula(21, "Monsters, Inc.", 1500, 2001, [
    "Pete Docter",
    "David Silverman",
    "Lee Unkrich",
  ]),
];

const golosinasDeCine = [
  new Producto(1, "Palomitas de Maíz", 850),
  new Producto(2, "Rocklets", 550),
  new Producto(3, "Nachos con Queso", 750),
  new Producto(4, "Hot Dog", 850),
  new Producto(5, "Chocolate", 450),
];

const bebidasDeCine = [
  new Producto(1, "Coca Cola", 350),
  new Producto(2, "Agua embotellada", 250),
  new Producto(3, "Jugo de frutas", 400),
  new Producto(4, "Smoothie", 500),
  new Producto(5, "Café helado", 350),
];

///////////////////////////////////////// ************************************* //////////////////////////////////////////

let peliculaAVer = [];
let bebida = [];
let golosina = [];
let codigoDescuento = 220995;
let tieneCodigo = false;
let opcion;
let seleccionInvalida;
let permanecerEnMenu;
let peliculasListadas = listarCatalogo(catalogoPeliculas);
let golosinasListadas = listarCatalogo(golosinasDeCine);
let bebidasListadas = listarCatalogo(bebidasDeCine);
let mensajePelicula = `Bienvenido a Cines Unidos. Las entradas tienen un valor de $1500. Por favor coloque según el número la película que desee ver:${peliculasListadas}`;
let mensajeBebidas = `¿Cuál de las siguientes bebidas quiere comprar?${bebidasListadas}`;
let mensajeGolosinas = `¿Desea añadir una golosina a su pedido?${golosinasListadas}`;

do {
  opcion = prompt(`Bienvenido a Cines Unidos. ¿Qué desea hacer?
      1. Escoger película
      2. Añadir Bebida
      3. Añadir golosina
      4. Ingresar código de descuento
      5. Salir (Ver valor total de todo)`);

  seleccionInvalida = generarExpresionValidacion(opcion, 1, 5);

  permanecerEnMenu = generarExpresionValidacion(opcion, 5, 5);

  if (seleccionInvalida) {
    alert("Debes introducir un valor numérico entre 1 y 5.");
  } else if (parseInt(opcion) === 1) {
    peliculaAVer = escogerProducto(mensajePelicula, catalogoPeliculas);
  } else if (parseInt(opcion) === 2) {
    bebida = escogerProducto(mensajeBebidas, bebidasDeCine);
  } else if (parseInt(opcion) === 3) {
    golosina = escogerProducto(mensajeGolosinas, golosinasDeCine);
  } else if (parseInt(opcion) === 4) {
    tieneCodigo = ingresarCodigoDescuento(codigoDescuento);
  } else if (parseInt(opcion) === 5) {
    darTotal(peliculaAVer, bebida, golosina, tieneCodigo);
  }
} while (permanecerEnMenu);
