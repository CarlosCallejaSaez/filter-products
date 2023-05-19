const products = [
  {
    name: "Pantalón Ajax OG",
    price: 80,
    stars: 4,
    reviews: 250,
    seller: "Adidas",
    image:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e05b19253ae4fe6a8a9afb100e96649_9366/pantalon-ajax-og.jpg",
  },
  {
    name: "Pantalón corto loungue",
    price: 50,
    stars: 5,
    reviews: 150,
    seller: "Amazon",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3b95c69761a4e6dbe4caefc00f6ec8d_9366/Pantalon_corto_Lounge_Fleece_Marron_IA9361_21_model.jpg",
  },
  {
    name: "Camiseta MESSI GOAT GRAPHIC",
    price: 40,
    stars: 5,
    reviews: 50,
    seller: "Adidas",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/841801ad2f544d5cbe92afc500f605f8_9366/Camiseta_Messi_Football_Goat_Graphic_Negro_IM7656_01_laydown.jpg",
  },
  {
    name: "Cortavientos Adventure ",
    price: 189,
    stars: 3,
    reviews: 300,
    seller: "Adidas",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/33287f321d204b99885aaf9e0126c0b6_9366/Cortavientos_adidas_Adventure_Premium_Beige_HR4219_21_model.jpg",
  },
  {
    name: "Contavientos MANCHESTER UNITED",
    price: 150,
    stars: 4.5,
    reviews: 275,
    seller: "Amazon",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a61794c228ae49b8b0cbaf2000da2c4b_9366/Cortavientos_Manchester_United_Negro_HT1999_21_model.jpg",
  },
  {
    name: "Jordan Flight MVP",
    price: 56,
    stars: 3.5,
    reviews: 521,
    seller: "Nike",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7bdc4477-0091-4c4b-9962-61f69c42f8bc/jordan-flight-mvp-sudadera-de-tejido-fleece-con-estampado-6BdNkf.png",
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: 36,
    stars: 4,
    reviews: 220,
    seller: "Nike",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9e96fe4f-6c96-4a1a-be38-355c23aa4128/sportswear-club-fleece-sudadera-con-estampado-BxSgbT.png",
  },
  {
    name: "Nike Sportswear Club Fleece",
    price: 40,
    stars: 4.25,
    reviews: 100,
    seller: "Nike",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eb737c82-c39e-4746-b397-54d44b35a9c8/sportswear-club-fleece-pantalon-de-invierno-pb2qfr.png",
  },
  {
    name: "Air Jordan Wordmark",
    price: 30,
    stars: 4,
    reviews: 75,
    seller: "Zalando",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/daf8e951-e1d6-47db-a357-50751a16f4bd/air-jordan-wordmark-camiseta-Fd7kB0.png",
  },
  {
    name: "NFL New England Patriots",
    price: 48,
    stars: 2,
    reviews: 40,
    seller: "Zalando",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b8ae94fd-117a-422a-8c19-0861cb6fee41/new-england-patriots-camiseta-de-futbol-americano-5vt48m.png",
  },
];

// select

const selectHTML = document.createElement("select");
selectHTML.innerHTML = `
      <option value="none" selected>--Filtra por vendedor--</option>
      <option value="Adidas">Adidas</option>
      <option value="Amazon">Amazon</option>
      <option value="Nike">Nike</option>
      <option value="Zalando">Zalando</option>`;
document.querySelector("aside").append(selectHTML);

// input number

const inputHTML = document.createElement("input");
inputHTML.type = "number";
inputHTML.id = "precio";
inputHTML.placeholder = "filtar por precio máximo";
document.querySelector("aside").append(inputHTML);

//button

const buttonHTML = document.createElement("button");
buttonHTML.innerText = "Buscar";
document.querySelector("aside").append(buttonHTML);

//clean button

const cleanButtonHTML = document.createElement("button");
cleanButtonHTML.innerText = "Limpiar";
document.querySelector("aside").append(cleanButtonHTML);

//Render function

const render = (collection, product) => {
  collection.innerHTML += `<div class="container page-wrapper">
  <div class="page-inner">
    <div class="row">
      <div class="el-wrapper">
        <div class="box-up">
          <img class="img" src="${product.image}" alt="">
          <div class="img-info">
            <div class="info-inner">
              <span class="p-name">${product.name}</span>
              <span class="p-company">${product.seller}</span>
            </div>
            <div class="a-size">Tallas Disponibles : <span class="size">S , M , L , XL</span></div>
          </div>
        </div>

        <div class="box-down">
          <div class="h-bg">
            <div class="h-bg-inner"></div>
          </div>

          <a class="cart" href="#">
            <span class="price">${product.price}€</span>
            <span class="add-to-cart">
              <span class="txt">Añadir a la cesta</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;
};

products.forEach((product) => {
  const collection = document.querySelector(".products");
  render(collection, product);
});

// FILTRADO POR VENDEDOR
let filteredProductBySeller = [];
selectHTML.addEventListener("change", (event) => {
  document.querySelector(".products").classList.add("disabled");
  document.querySelector(".filter").innerHTML = "";
  document.querySelector(".products").innerHTML = "";

  filteredProductBySeller = products.filter(
    (product) => product.seller === event.target.value
  );

  filteredProductBySeller.forEach((product) => {
    const collection = document.querySelector(".filter");
    render(collection, product);
  });
});

// FILTRADO POR PRECIO
buttonHTML.addEventListener("click", filtrarArticulos);

function filtrarArticulos() {
  document.querySelector(".products").innerHTML = "";
  document.querySelector(".products").classList.add("disabled");
  const precio = document.getElementById("precio").value;
  console.log(precio);
  const articulosFiltrados = products.filter(
    (articulo) => articulo.price < precio
  );

  const listaArticulos = document.querySelector(".filter");
  listaArticulos.innerHTML = "";

  articulosFiltrados.forEach((product) => {
    const collection = document.querySelector(".filter");
    render(collection, product);
  });
}

cleanButtonHTML.addEventListener("click", (event) => {
  document.querySelector(".filter").innerHTML = "";
  document.querySelector(".products").innerHTML = "";
  products.forEach((product) => {
    const collection = document.querySelector(".products");

    render(collection, product);
  });
});
