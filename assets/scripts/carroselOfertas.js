const products = [
    {
        image: "./assets/imgs/blend-spray.png",
        nameProduct: "Blend Spray",
        oldPrice: "R$89.99",
        newPrice: "R$49.99"
    },
    {
        image: "./assets/imgs/luva.png",
        nameProduct: "Luva de Microfibra",
        oldPrice: "R$81.90",
        newPrice: "R$49.90"
    },{
        image: "./assets/imgs/soult-fast.png",
        nameProduct: "Soult Fast",
        oldPrice: "R$46.90",
        newPrice: "R$26.90"
    },{
        image: "./assets/imgs/moto-v.png",
        nameProduct: "Moto V",
        oldPrice: "R$69.90",
        newPrice: "R$29.90"
    },
    {
        image: "./assets/imgs/sinergy-paint.png",
        nameProduct: "Sinergy Paint",
        oldPrice: "R$200.99",
        newPrice: "R$102.99"
    },
    {
        image: "./assets/imgs/sio2-pro.png",
        nameProduct: "SIO2 Pro",
        oldPrice: "R$100.99",
        newPrice: "R$48.99"
    },
    {
        image: "./assets/imgs/v-paint-pro.png",
        nameProduct: "V Paint Pro",
        oldPrice: "R$350.90",
        newPrice: "R$199.90"
    },
    {
        image: "./assets/imgs/v-plastic-pro.png",
        nameProduct: "V Plastic Pro",
        oldPrice: "R$189.99",
        newPrice: "R$139.99"
    },
    {
        image: "./assets/imgs/v-light-pro.png",
        nameProduct: "V Light Pro",
        oldPrice: "R$179.99",
        newPrice: "R$109.99"
    },
    {
        image: "./assets/imgs/v-energy.png",
        nameProduct: "V Energy",
        oldPrice: "R$209.99",
        newPrice: "R$141.99"
    }
];

function createProducts(array){

    
    array.forEach(element => {

        const divPai = document.getElementById('productsGrid')
        
        const productCard = document.createElement('div');
        productCard.classList.add('productCard');

        // Criação do elemento div para a imagem do produto
        const productImageConteiner = document.createElement('div');
        productImageConteiner.classList.add('productImageConteiner');

        // Criação da tag img e atribuição de atributos
        const productImage = document.createElement('img');
        productImage.src = element.image;
        productImage.classList.add('productImage');

        // Adiciona a imagem ao container de imagem do produto
        productImageConteiner.appendChild(productImage);

        // Criação do elemento div para o nome do produto
        const productNameConteiner = document.createElement('div');
        productNameConteiner.classList.add('productNameConteiner');

        // Criação da tag h2 para o nome do produto
        const productName = document.createElement('h2');
        productName.textContent = element.nameProduct;
        productName.classList.add('productName');

        // Adiciona o nome do produto ao container do nome do produto
        productNameConteiner.appendChild(productName);

        // Criação do elemento div para o preço do produto
        const productPriceConteiner = document.createElement('div');
        productPriceConteiner.classList.add('productPriceConteiner');

        // Criação das tags h4 e h3 para o preço do produto
        const productOldPrice = document.createElement('h4');
        productOldPrice.textContent = element.oldPrice;
        productOldPrice.classList.add('productOldPrice');

        const productNewPrice = document.createElement('h3');
        productNewPrice.textContent = element.newPrice;
        productNewPrice.classList.add('productNewPrice');

        const productText = document.createElement('h4');
        productText.textContent = 'À vista';
        productText.classList.add('productText');

        // Adiciona os preços ao container de preço do produto
        productPriceConteiner.appendChild(productOldPrice);
        productPriceConteiner.appendChild(productNewPrice);
        productPriceConteiner.appendChild(productText);

        // Adiciona os elementos ao elemento div .productCard
        productCard.appendChild(productImageConteiner);
        productCard.appendChild(productNameConteiner);
        productCard.appendChild(productPriceConteiner);

        divPai.appendChild(productCard);



    });
    
}

createProducts(products);

let ind = 4;

document.addEventListener("DOMContentLoaded", function() {
    
    const carousel = document.getElementById("productsGrid");
  
    document.querySelector(".button-left").addEventListener("click", function() {

        if(ind > 4){
            carousel.style.transform += 'translateX(+358px)';
            ind--;
        }
      
    });
  
    document.querySelector(".button-right").addEventListener("click", function() {

        if(ind < products.length){
            carousel.style.transform += 'translateX(-358px)';
            ind++;
        }
        
    });
  });