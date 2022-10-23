const productImg = document.querySelector('.product-img__img'),
    productTitle = document.querySelector('.product-content__title'),
    productPrice = document.querySelector('.product-content__price'),
    buttonsColor = document.querySelectorAll('.product-color__span');
const getData = (colorProduct)=>{
    fetch('https://62f40474a84d8c9681314082.mockapi.io/cards?sortBy=createdAt&color=' + colorProduct).then((response) => {
        return response.json();
      })
      .then((data) => {
        productTitle.textContent = data[0].name;
        productPrice.textContent = data[0].price;
        productImg.src = data[0].img;
      }).catch((error) => {
        console.log(error);
    });
};
buttonsColor.forEach((btn)=>{
    btn.addEventListener("click", ()=> {
        const btnActive = document.querySelector('.btn-active');
        btnActive.classList.remove('btn-active');
        getData(btn.id);
        btn.classList.add('btn-active');
    });
});
