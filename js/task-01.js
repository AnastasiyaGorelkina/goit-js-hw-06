const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesRef.length}`);
categoriesRef.forEach(el => {
    const categories = el.firstElementChild.textContent;
    const quantity = el.lastElementChild.children.length;
    console.log(`Category: ${categories} Elements: ${quantity}`)
})

