const categories = document.querySelectorAll('.categories-item')
const goodsSection = document.querySelector('.goods')
const goodSection = document.querySelector('.good');

const categoriesH2 = document.createElement('h2');

categories.forEach(category => 
    category.addEventListener('click', () => {
    goodsSection.innerHTML = ''
    goodSection.innerHTML = ''

    categoriesH2.classList.add('categories-h2')
    categoriesH2.textContent = category.textContent

    const goods = document.createElement('ul')
    goods.classList.add('categories-list')
    goods.innerHTML = '<li class="categories-list-element">item 1</li>' + 
    '<li class="categories-list-element">item 2</li>' + 
    '<li class="categories-list-element">item 3</li>' +
    '<li class="categories-list-element">item 4</li>' + 
    '</ul>';

    goodsSection.append(categoriesH2)
    goodsSection.append(goods)

    const goodsElements = document.querySelectorAll('.categories-list-element')
    forGoodsElements(goodsElements)

}))

function forGoodsElements(goodsElements) {
    goodsElements.forEach(goodsElement =>
        goodsElement.addEventListener('click', () => {
            goodSection.innerHTML = ''

            const goodsElementH2 = document.createElement('h2')
            goodsElementH2.classList.add('goods-element-h2')
            goodsElementH2.textContent = categoriesH2.textContent

            const goodsElementH3 = document.createElement('h3')
            goodsElementH3.classList.add('goods-element-h3')
            goodsElementH3.textContent = goodsElement.textContent

            const price = document.createElement('p')
            price.classList.add('price')
            price.textContent = 'Price: 3 flipflops'

            const buyBtn = document.createElement('button')
            buyBtn.classList.add('buy-btn')
            buyBtn.textContent = 'Buy this'
            buyBtn.addEventListener('click', buyButton)
    
            goodSection.append(goodsElementH2)
            goodSection.append(goodsElementH3)
            goodSection.append(price)
            goodSection.append(buyBtn)
    
        }))
}

function buyButton() {
    goodSection.innerHTML = ''
    const sold = document.createElement('h2')
    sold.classList.add('sold')
    sold.textContent = 'Sold!'
    goodSection.append(sold)
    setTimeout(() => {
    goodSection.innerHTML = ''
    goodsSection.innerHTML = ''
    }, 1500);
}


// categories.forEach(category => 
//     category.addEventListener('click', () => {
//     goodsSection.innerHTML = ''
//     goodSection.innerHTML = ''


//     const categoriesH2 = document.createElement('h2');
//     categoriesH2.classList.add('categories-h2')
//     categoriesH2.textContent = category.textContent


//     const goods = document.createElement('ul')
//     goods.classList.add('categories-list')
//     goods.innerHTML = '<li class="categories-list-element">item 1</li>' + 
//     '<li class="categories-list-element">item 2</li>' + 
//     '<li class="categories-list-element">item 3</li>' +
//     '<li class="categories-list-element">item 4</li>' + 
//     '</ul>';

//     goodsSection.append(categoriesH2)
//     goodsSection.append(goods)
//     // console.log(goodsElements)

//     const goodsElements = document.querySelectorAll('.categories-list-element')
//     goodsElements.forEach(goodsElement =>
//                 goodsElement.addEventListener('click', () => {
//                     goodSection.innerHTML = ''

//                     const goodsElementH2 = document.createElement('h2')
//                     goodsElementH2.classList.add('goods-element-h2')
//                     goodsElementH2.textContent = categoriesH2.textContent

//                     const goodsElementH3 = document.createElement('h3')
//                     goodsElementH3.classList.add('goods-element-h3')
//                     goodsElementH3.textContent = goodsElement.textContent

//                     const price = document.createElement('p')
//                     price.classList.add('price')
//                     price.textContent = 'Price: 3 flipflops'

//                     const buyBtn = document.createElement('button')
//                     buyBtn.classList.add('buy-btn')
//                     buyBtn.textContent = 'Buy this'
//                     buyBtn.addEventListener('click', () => {
//                         goodSection.innerHTML = ''
//                         const sold = document.createElement('h2')
//                         sold.classList.add('sold')
//                         sold.textContent = 'Sold!'
//                         goodSection.append(sold)
//                         setTimeout(() => {
//                         goodSection.innerHTML = ''
//                         goodsSection.innerHTML = ''
//                         }, 1500);
//                     })
            
//                     goodSection.append(goodsElementH2)
//                     goodSection.append(goodsElementH3)
//                     goodSection.append(price)
//                     goodSection.append(buyBtn)
            
//                 }))

// }))
