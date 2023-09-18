const losProductos= [
    {
        cantidad:1,
        id:1,
        nombre: "Coca-Cola",
        precio: 500,
        imagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe8%2F15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%2528Germany%2529.jpg%2F1200px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%2528Germany%2529.jpg&tbnid=-_CiZGnf45rS0M&vet=12ahUKEwiIubyD1rKBAxUSgpUCHa9oAUMQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FCoca-Cola&docid=YSrKn7i9ty-lJM&w=1200&h=2128&q=coca%20cola&ved=2ahUKEwiIubyD1rKBAxUSgpUCHa9oAUMQMygAegQIARB0"
    },
    {
        cantidad:1,
        id:2,
        nombre: "Dulces",
        precio: 100,
        imagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D396135532515143&tbnid=Kl7ypC1_myBvpM&vet=12ahUKEwjIoIrm1rKBAxUavJUCHWiCBZAQMygKegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fm.facebook.com%2FCandyPopsTiendaDeGolosinas%2F&docid=rIQWGRniw9VhqM&w=960&h=960&q=golosinas&ved=2ahUKEwjIoIrm1rKBAxUavJUCHWiCBZAQMygKegUIARCKAQ",
    },
    {
        cantidad:1,
        id:3,
        nombre: "Galletitas",
        precio: 300,
        imagen:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.minutouno.com%2Fp%2F26bc9cf77212dba4111b163374ab4611%2Fadjuntos%2F150%2Fimagenes%2F039%2F611%2F0039611456%2Fgalletitas-chip-chocolate.jpg&tbnid=6Do7mTRCAinkyM&vet=12ahUKEwiqg9iT17KBAxXuVrgEHSaRBeAQMygJegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.minutouno.com%2Fsociedad%2Fchocolate%2Flas-mejores-galletitas-chips-son-veganas-n5359112&docid=BnQxCh-_Syli6M&w=613&h=460&q=galletitas&ved=2ahUKEwiqg9iT17KBAxXuVrgEHSaRBeAQMygJegUIARCKAQ"
    },
    {
        cantidad:1,
        id:4,
        nombre: "Cafe",
        precio: 50,
        imagen:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F45%2FA_small_cup_of_coffee.JPG%2F1200px-A_small_cup_of_coffee.JPG&tbnid=tbhiUm3Se6fAnM&vet=12ahUKEwi8vLu517KBAxUbkZUCHVM9DAIQMygAegQIARBz..i&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FCaf%25C3%25A9&docid=sySi7QJMCtQYUM&w=1200&h=900&q=cafe&ved=2ahUKEwi8vLu517KBAxUbkZUCHVM9DAIQMygAegQIARBz"
    },
    {
        cantidad:1,
        id:5,
        nombre: "Medialunas",
        precio: 200,
        imagen:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.soyceliaconoextraterrestre.com%2Fwp-content%2Fuploads%2F2022%2F10%2Fmedialunas-sin-tacc.jpg&tbnid=33Ebevvh4lPcuM&vet=12ahUKEwiC1dXN17KBAxVLr5UCHbe5ARQQMygVegUIARCxAQ..i&imgrefurl=https%3A%2F%2Fwww.soyceliaconoextraterrestre.com%2Fmedialunas-sin-tacc%2F&docid=IdLrJ-WOqViHIM&w=1200&h=800&q=medialunas&ved=2ahUKEwiC1dXN17KBAxVLr5UCHbe5ARQQMygVegUIARCxAQ"
    }
   
]
const carrito=[]

const productos= document.querySelector(".productos")
const carritoSelector= document.querySelector(".lista-carrito")

function tarjetas(){
    productos.innerHTM = ""
    losProductos.forEach((producto) => {
        const {id,nombre,precio,imagen}= producto
        productos.innerHTML +=`
        <h2>Productos disponibles</h2>
        <div class="producto">
            <img src="${imagen}" alt="Producto 1">
            <h3>${nombre}</h3>
            <p>Precio: $${precio}</p>
            <button id="${id}" class="agregar">Al Carrito</button>
        </div>
        `
    })
}

tarjetas()
rederizarCarrito()

document.addEventListener("click", (e) => {
    const btnAgregar = document.querySelectorAll(".agregar")
    const btnEliminar = document.querySelectorAll("btnEliminar")
    btnAgregar.forEach((btn) => {
        if(e.target == btn){
            const id=parseInt(e.target.id) 
            const producto = losProductos.find((producto) => producto.id === id)
            agregarAlCarrito(producto)
        }
    }) 

    btnEliminar.forEach((btnBorrar) =>{
        if(e.target == btnBorrar){
        const id = e.target.id
        console.log(btnBorrar)
        const idSinEliminar = id.replace("Eliminar","") 
        const productoBusqueda = carrito.map((producto) => producto.id).indexOf(parseInt(idSinEliminar))

        }
        eliminarDelCarrito(producto)
    })
}
)


function agregarAlCarrito(producto){
    const productoBusqueda = carrito.find((productoCarrito) => productoCarrito.id === producto.id)
    if(productoBusqueda){
        productoBusqueda.cantidad++
    }else{
        carrito.push({
            ...producto
        })
    }
    rederizarCarrito()
}

function eliminarDelCarrito(id){
    console.log(carrito[id])
if(carrito[id].cantidad >1)
carrito[id].cantidad--
else{
    carrito.splice(id,1)
}
rederizarCarrito()
}




function rederizarCarrito(){
    carritoSelector.innerHTML= ""
    carrito.forEach((producto) => {
        const {id,nombre,precio,cantidad} = producto
        carritoSelector.innerHTML += `
        <li class="producto-carrito">${nombre} - ${precio} - Cantidad= ${cantidad} <button class="btnEliminar" id="${id}Eliminar">X</button></li>
    `
})
}