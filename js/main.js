function generarExpresionValidacion(opcion, numeroMinimo, numeroMaximo) {
  return (
    isNaN(opcion) ||
    opcion === "" ||
    parseInt(opcion) < numeroMinimo ||
    parseInt(opcion) > numeroMaximo
  );
}

function escogerPelicula(catalogo) {
  let peliculaEscogida;
  let listadoPeliculas = "\n";

  catalogo.map((pelicula, i) => {
    if (i + 1 === catalogo.length) {
      listadoPeliculas += `${pelicula.codigo}. ${pelicula.nombre}\n0. Salir`;
    } else {
      listadoPeliculas += `${pelicula.codigo}. ${pelicula.nombre}\n`;
    }
  });

  do {
    peliculaEscogida = prompt(
      `Bienvenido a Cines Unidos. Las entradas tienen un valor de $1500. Por favor coloque según el número la película que desee ver:${listadoPeliculas}`
    );

    if (parseInt(peliculaEscogida) === 0) {
      return [];
    } else if (
      generarExpresionValidacion(peliculaEscogida, 1, catalogo.length)
    ) {
      alert(`Debes introducir un valor numérico entre 1 y ${catalogo.length}.`);
    }
  } while (generarExpresionValidacion(peliculaEscogida, 1, catalogo.length));

  return catalogo.find(
    (pelicula) => pelicula.codigo === parseInt(peliculaEscogida)
  );
}

function desearBebida(bebidas) {
  let quererBebida;
  let listadoBebidas = "\n";

  bebidas.map((bebida, i) => {
    if (i + 1 === bebidas.length) {
      listadoBebidas += `${bebida.codigo}. ${bebida.nombre}: $${bebida.precio}\n0. Salir`;
    } else {
      listadoBebidas += `${bebida.codigo}. ${bebida.nombre}: $${bebida.precio}\n`;
    }
  });

  do {
    quererBebida = prompt(
      `¿Cuál de las siguientes bebidas quiere comprar?${listadoBebidas}`
    );

    if (parseInt(quererBebida) === 0) {
      return [];
    } else if (generarExpresionValidacion(quererBebida, 1, bebidas.length)) {
      alert(`Debes introducir un valor numérico entre 1 y ${bebidas.length}.`);
    }
  } while (generarExpresionValidacion(quererBebida, 1, bebidas.length));

  return bebidas.find((bebida) => bebida.codigo === parseInt(quererBebida));
}

function desearGolosina(golosinas) {
  let quererGolosina;
  let listadoGolosinas = "\n";

  golosinas.map((golosina, i) => {
    if (i + 1 === golosinas.length) {
      listadoGolosinas += `${golosina.codigo}. ${golosina.nombre}: $${golosina.precio}\n0. Salir`;
    } else {
      listadoGolosinas += `${golosina.codigo}. ${golosina.nombre}: $${golosina.precio}\n`;
    }
  });

  do {
    quererGolosina = prompt(
      `¿Desea añadir una golosina a su pedido?${listadoGolosinas}`
    );

    if (parseInt(quererGolosina) === 0) {
      return [];
    } else if (
      generarExpresionValidacion(quererGolosina, 1, golosinas.length)
    ) {
      alert(
        `Debes introducir un valor numérico entre 1 y ${golosinas.length}.`
      );
    }
  } while (generarExpresionValidacion(quererGolosina, 1, golosinas.length));

  return golosinas.find(
    (golosina) => golosina.codigo === parseInt(quererGolosina)
  );
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
  let descuento = 1;
  let valorTotal = 0;
  let stringCompra = "";

  if (tieneCodigo) {
    descuento = 0.85;
  }

  if (pelicula.nombre !== undefined) {
    stringCompra += `Película que va a ver: ${pelicula.nombre}. Valor: $${pelicula.precio}\n`;
    valorTotal += pelicula.precio;
  }
  if (bebida.nombre !== undefined) {
    stringCompra += `Bebida que va a comprar: ${bebida.nombre}. Valor: $${bebida.precio}\n`;
    valorTotal += bebida.precio;
  }
  if (golosina.nombre !== undefined) {
    stringCompra += `Golosina que va a comprar: ${golosina.nombre}. Valor: $${golosina.precio}\n`;
    valorTotal += golosina.precio;
  }
  if (tieneCodigo) {
    stringCompra += `¡Tiene código de 15% de descuento!\n`;
  }
  stringCompra += `Valor total de la compra: $${
    valorTotal * descuento
  }\n¡Muchas gracias por comprar en Cines Unidos!`;

  alert(stringCompra);
}

////////////////////////////////////////// ************************************ ///////////////////////////////////////////

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
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
    peliculaAVer = escogerPelicula(catalogoPeliculas);
  } else if (parseInt(opcion) === 2) {
    bebida = desearBebida(bebidasDeCine);
  } else if (parseInt(opcion) === 3) {
    golosina = desearGolosina(golosinasDeCine);
  } else if (parseInt(opcion) === 4) {
    tieneCodigo = ingresarCodigoDescuento(codigoDescuento);
  } else if (parseInt(opcion) === 5) {
    darTotal(peliculaAVer, bebida, golosina, tieneCodigo);
  }
} while (permanecerEnMenu);
