const losProductos = [
  /*
  {
    "id": "1",
    "nombre": "Coca-Cola",
    "precio": 500,
    "imagen":
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe8%2F15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%2528Germany%2529.jpg%2F1200px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%2528Germany%2529.jpg&tbnid=-_CiZGnf45rS0M&vet=12ahUKEwiIubyD1rKBAxUSgpUCHa9oAUMQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FCoca-Cola&docid=YSrKn7i9ty-lJM&w=1200&h=2128&q=coca%20cola&ved=2ahUKEwiIubyD1rKBAxUSgpUCHa9oAUMQMygAegQIARB0",
  },
  {
    "id": "2",
    "nombre": "Dulces",
    "precio": 100,
    "imagen":
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D396135532515143&tbnid=Kl7ypC1_myBvpM&vet=12ahUKEwjIoIrm1rKBAxUavJUCHWiCBZAQMygKegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fm.facebook.com%2FCandyPopsTiendaDeGolosinas%2F&docid=rIQWGRniw9VhqM&w=960&h=960&q=golosinas&ved=2ahUKEwjIoIrm1rKBAxUavJUCHWiCBZAQMygKegUIARCKAQ",
  },
  {
    "id": "3",
    "nombre": "Galletitas",
    "precio": 300,
    "imagen":
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.minutouno.com%2Fp%2F26bc9cf77212dba4111b163374ab4611%2Fadjuntos%2F150%2Fimagenes%2F039%2F611%2F0039611456%2Fgalletitas-chip-chocolate.jpg&tbnid=6Do7mTRCAinkyM&vet=12ahUKEwiqg9iT17KBAxXuVrgEHSaRBeAQMygJegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.minutouno.com%2Fsociedad%2Fchocolate%2Flas-mejores-galletitas-chips-son-veganas-n5359112&docid=BnQxCh-_Syli6M&w=613&h=460&q=galletitas&ved=2ahUKEwiqg9iT17KBAxXuVrgEHSaRBeAQMygJegUIARCKAQ",
  },
  {
    "id": "4",
    "nombre": "Cafe",
    "precio": 50,
    "imagen":
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F45%2FA_small_cup_of_coffee.JPG%2F1200px-A_small_cup_of_coffee.JPG&tbnid=tbhiUm3Se6fAnM&vet=12ahUKEwi8vLu517KBAxUbkZUCHVM9DAIQMygAegQIARBz..i&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FCaf%25C3%25A9&docid=sySi7QJMCtQYUM&w=1200&h=900&q=cafe&ved=2ahUKEwi8vLu517KBAxUbkZUCHVM9DAIQMygAegQIARBz",
  },
  {
    "id": "5",
    "nombre": "Medialunas",
    "precio": 200,
    "imagen":
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.soyceliaconoextraterrestre.com%2Fwp-content%2Fuploads%2F2022%2F10%2Fmedialunas-sin-tacc.jpg&tbnid=33Ebevvh4lPcuM&vet=12ahUKEwiC1dXN17KBAxVLr5UCHbe5ARQQMygVegUIARCxAQ..i&imgrefurl=https%3A%2F%2Fwww.soyceliaconoextraterrestre.com%2Fmedialunas-sin-tacc%2F&docid=IdLrJ-WOqViHIM&w=1200&h=800&q=medialunas&ved=2ahUKEwiC1dXN17KBAxVLr5UCHbe5ARQQMygVegUIARCxAQ",
  },*/
];
const baseUrl = "https://651e240844e393af2d5a8b45.mockapi.io";
//PRODUCTOS
const productos = document.querySelector(".productos");
//CARRITO
const carritoSelector = document.querySelector(".lista-carrito");
//PAGAR CARRITO
const carrito = [];
const btnPagarCarrito = document.querySelector("#btnPagar");
const formPagar = document.querySelector("#formmularioPagar");

function tarjetas() {
  productos.innerHTML = "";

  losProductos.forEach((producto) => {
    productos.innerHTML += `
        <h2>Productos disponibles</h2>
        <div class="producto">
            <img src="${producto.imagen}" alt="Producto 1">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button id="${producto.id}" class="agregar">Al Carrito</button>
        </div>
        `;
  });
}

tarjetas();
rederizarCarrito();

document.addEventListener("click", (e) => {
  const btnAgregar = document.querySelectorAll(".agregar");
  const btnEliminar = document.querySelectorAll(".btnEliminar");
  console.log(btnAgregar);
  btnAgregar.forEach((btn) => {
    if (e.target == btn) {
      const id = parseInt(e.target.id);
      const producto = losProductos.find((producto) => producto.id === id);
      agregarAlCarrito(producto);
    }
  });

  btnEliminar.forEach((btnBorrar) => {
    if (e.target == btnBorrar) {
      const id = e.target.id;
      const idSinEliminar = id.replace("Eliminar", "");
      const productoBusqueda = carrito
        .map((producto) => producto.id)
        .indexOf(parseInt(idSinEliminar));
      eliminarDelCarrito(productoBusqueda);
    }
  });
});

function buscarProducto(id, array) {
  const producto = array.find((producto) => producto.id == id);
  return producto;
}

function agregarAlCarrito(producto) {
  if (producto) {
    const productoEncontrado = buscarProducto(producto.id, carr);
    if (productoEncontrado) {
      productoEncontrado.cantidad++;
    }
  } else {
    carrito.push({
      ...producto,
      cantidad: 1,
    });
  }
  rederizarCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarDelCarrito(id) {
  const producto = carrito;
  if (producto.cantidad > 1) producto.cantidad--;
  else {
    const index = carrito.indexOf(producto);
    carrito.splice(index, 1);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  rederizarCarrito();
}

function rederizarCarrito() {
  carritoSelector.innerHTML = "";
  carrito.forEach((producto) => {
    carritoSelector.innerHTML += `
        <li class="producto-carrito">${producto.nombre} - ${producto.precio} - Cantidad= ${producto.cantidad} <button id="${producto.id}Eliminar" class="btnEliminar" ">X</button></li>
    `;
  });

  formPagar.innerHTML = `<form id="formDatos" >
  <input name="nombre" id="nombre type="text" placeholder="Nombre Completo">
  <input name="mail" id="mail type="email" placeholder="E-mail">
  <input name="direccion" id="direccion type="text" placeholder="Direccion">
  <input name="telefono" id="telefono type="text" placeholder="Telefono">
  <input type="text" class="inputProductos" name="productos" id="productos">
  <input id="btnFormulario" type="submit" value="Pagar">
  </form>
  `;
  const inputProductos = document.querySelector(".inputProductos");
  document.querySelector("#formDatos").addEventListener("submit", (e) => {
    e.preventDefault();

    const serviceID = "default_service";
    const templateID = "template_sz3bueb";

    carrito.forEach((producto) => {
      inputProductos.value += `${producto.nombre} - ${producto.cantidad} \n`;
    });

    Swal.fire({
      title: "¿Quieres confirmar la compra?",
      text: "Si cancelas, deberas empezar de nuevo!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, lo quiero!",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      procesandoPago()
        .then((mensaje) => {
          Swal.fire("Finalizado!", mensaje.mensaje, "success");
          emailjs
            .sendForm(
              serviceID,
              templateID,
              document.querySelector("#formDatos")
            )
            .then(
              () => {
                Toastify({
                  text: "E-mail enviado correctamente",
                  duration: 3000,
                  close: true,
                  gravity: "top", // `top` or `bottom`
                  position: "right", // `left`, `center` or `right`
                  stopOnFocus: true, // Prevents dismissing of toast on hover
                  style: {
                    background: "linear-gradient(to right, #c2c2c2,#1c8bbf)",
                  },
                  onClick: function () {}, // Callback after click
                }).showToast();
              },
              (err) => {
                alert(JSON.stringify(err));
              }
            );
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.mensaje,
            footer: '<a href="">Ayuda con este error</a>',
          });
        });
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await fetchAsync();
  tarjetas();
  const carritoSinparse = localStorage.getItem("carrito") || [];
  const carritoParse = JSON.parse(carritoSinparse);
  carritoParse.length > 0
    ? carrito.push(...carritoParse)
    : Toastify({
        text: "No hay productos en el carrito",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #c2c2c2,#1c8bbf)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();

  rederizarCarrito();
});

function procesandoPago() {
  const validarPago = Math.random() < 0.5;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validarPago) {
        resolve({
          mensaje: "Pago realizado correctamente",
        });
      } else {
        reject({
          mensaje: "No se pudo realizar el pago",
        });
      }
    }, 5000);
  });
}

/*function fectchAndThen(){
  fetch(`${baseUrl}/losProductos`).then((res)=> res.json() ).then((res) => res.forEach(producto => losProductos.push(producto)))
  
}*/

async function fetchAsync() {
  const resp = await fetch(
    "https://651e240844e393af2d5a8b45.mockapi.io/losProductos"
  );
  const data = await resp.json();
  data.forEach((producto) => {
    losProductos.push(producto);
  });
}
