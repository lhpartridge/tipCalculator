// Build a calculator that will take the subtotal of the tab.
// The tip can be 15%, 10%, 20%
// Have cards with food items, total items chosen, place in subtotal, then return subtotal, ask for tip, calcuate total, return total
// Have images for menu items, select quantity, total, calculate tip, calculate total

// Build HTML first
// Add styling in CSS
// Apply the JS


const confirmBtn = document.getElementById('confirmBtn');
const yourTotal = document.getElementById('yourTotal');
const cartSubtotal = document.getElementById('cartSubtotal');
const receipt = document.getElementById('receipt');

const taxRate = 0.08;

let subtotal = 0;
// let billTotal = 0;

let receiptArray = [];

const type = ['appetizers', 'entrees', 'drinks', 'desserts'];

const menuItems = [
    { 
        id: 1,
        type: 'appetizers',
        name: 'spinach artichoke dip',
        desc: 'creamy spinach and artichokes in a parmesan dip',
        imgUrl: '/media/dip.jpg',
        price: 12.00,
        qty: 0
    },
        { 
        id: 2,
        type: 'appetizers',
        name: 'onion rings',
        desc: 'crispy thin battered onion rings',
        imgUrl: 'media/rings.webp',
        price: 8.00,
        qty: 0
    },
    { 
        id: 3,
        type: 'appetizers',
        name: 'side salad',
        desc: 'mixed greens, tomato and cucumber with your choice of dressing',
        imgUrl: 'media/salad.jpg',
        price: 4.00,
        qty: 0
    },
    {
        id: 4,
        type: 'appetizers',
        name: 'duck wings',
        desc: 'maple, soy, ginger duck wings',
        imgUrl: 'media/wings.jpg',
        price: 14.00,
        qty: 0
    },
    { 
        id: 5,
        type: 'entrees',
        name: 'hamburger',
        desc: '100% Angus beef on a sourdough bun with your choice of toppings',
        imgUrl: 'media/burger.jpg',
        price: 14.00,
        qty: 0
    },
    { 
        id: 6,
        type: 'entrees',
        name: 'ribeye steak',
        desc: 'thick or thin ribeye with a baked potato or fries',
        imgUrl: 'media/steak.jpg',
        price: 28.00,
        qty: 0
    },
    { 
        id: 7,
        type: 'entrees',
        name: 'fried catfish filets',
        desc: 'three catfish filets deep-fried or grilled, served with french fries',
        imgUrl: 'media/catfish.jpg',
        price: 14.00,
        qty: 0
    },
    { 
        id: 8,
        type: 'entrees',
        name: 'gumbo',
        desc: 'our secret recipe for a rich gumbo',
        imgUrl: 'media/gumbo2.jpg',
        price: 12.00,
        qty: 0
    },
    { 
        id: 9,
        type: 'drinks',
        name: 'iced tea',
        desc: 'freshly brewed tea, sweet or not, with or without lemon',
        imgUrl: 'media/tea.jpg',
        price: 1.00,
        qty: 0
    },
    { 
        id: 10,
        type: 'drinks',
        name: 'soft drink',
        desc: 'a selection of favorite cold drinks',
        imgUrl: 'media/drinks.jpg',
        price: 2.00,
        qty: 0
    },
    { 
        id: 11,
        type: 'drinks',
        name: 'domestic beer',
        desc: 'your choice of our domestic beers',
        imgUrl: 'media/domBeer.jpg',
        price: 5.00,
        qty: 0
    },
    { 
        id: 12,
        type: 'drinks',
        name: 'imported beer',
        desc: 'your choice of our imported beers',
        imgUrl: 'media/impBeer.jpg',
        price: 8.00,
        qty: 0
    },
    { 
        id: 13,
        type: 'desserts',
        name: 'chocolate mousse',
        desc: 'luscious creamy chocolate mousse',
        imgUrl: 'media/mousse.jpg',
        price: 6.00,
        qty: 0
    },
    { 
        id: 14,
        type: 'desserts',
        name: 'creme caramel',
        desc: 'baked custard',
        imgUrl: 'media/creme.jpg',
        price: 9.00,
        qty: 0
    },
    { 
        id: 15,
        type: 'desserts',
        name: 'slice of pie',
        desc: 'your choice of apple, lemon meringue or coconut cream pie',
        imgUrl: 'media/pie.jpg',
        price: 7.00,
        qty: 0
    },
    { 
        id: 16,
        type: 'desserts',
        name: 'knickerbocker glory',
        desc: 'ice cream parfait with strawberries and chocolate sauce',
        imgUrl: 'media/glory.jpg',
        price: 8.00,
        qty: 5
    },
    {
        id: 17,
        type: 'appetizers',
        name: 'baked brie',
        desc: 'French brie baked until gooey with apple chutney and toasts ',
        imgUrl: 'media/brie.jpg',
        price: 9.00,
        qty: 0
    }
    // {
    //     id: 18,
    //     type: 'sides',
    //     name: 'French fries',
    //     desc: 'fresh cut and fried in peanut oil',
    //     imgUrl: '',
    //     price: 4.99,
    //     qty: 0
    // }
]

type.forEach(type => {
    const menu = document.getElementById('menu');
    const row = document.createElement('div');
    row.classList.add('row', 'menu-row', `${type}`);
    row.setAttribute('id', `${type}`);
    const menuSub = document.createElement('h3');
    menuSub.classList.add('menuSub')

    menuSub.innerText = `${type}`;
    row.appendChild(menuSub);
    menu.appendChild(row);
})

menuItems.forEach(item => {
    const column = document.createElement('div');
    column.classList.add('col-md-3');
    const card = document.createElement('div');
    let thisType = item.type;
    card.classList.add('card', 'h-100', `${thisType}`);
    card.innerHTML = `
            <div class="img-div d-flex align-items-start">
                <img src="${item.imgUrl}" alt="${item.desc}" class="img-fluid card-img" />
            </div>
            <div class="card-body">
                <h4 class="${item.name}">${item.name}</h4>
                <p class="${item.desc}">${item.desc}</p>
            </div>
            <footer class="card-footer">
                <p class="card-text">$${item.price.toFixed(2)}</p> 
                <div class="buttons-div d-flex justify-content-around">
                    <div class="qty-div">
                        <button
                            class="btn btn-primary btn-subtract" 
                            id="btnSubtract${item.id}"
                            data-id="${item.id}"
                            data-qty="${item.qty}"
                            > - 
                        </button>
                        <span class="quantity" id="quantity${item.id}">${item.qty}</span>
                        <button class="btn btn-primary btn-add" 
                            id="btnAdd${item.id}"
                            data-id="${item.id}"
                            data-qty="${item.qty}"
                            > + 
                        </button>
                    </div>
                    <button class="btn btn-danger cart-btn" 
                        id="Btn${item.id}" 
                        data-id="${item.id}"
                        data-price="${item.price}"  
                        data-qty="${item.qty}"
                        data-name="${item.name}"
                        >add to cart
                    </button>
                </div>
            </footer>
        `
    column.appendChild(card);
    let row = document.getElementById(item.type);
    row.appendChild(column);
})



confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    getTotal();
})

const getTotal=()=> {
    // subtotal = parseFloat(cartSubtotal.innerText);
    const tipAmt = parseFloat(document.getElementById('tipAmt').value);
    const otherAmt = parseFloat(document.getElementById('otherAmt').value);
    const yourTip = document.getElementById('yourTip');
    const billSubtotal = document.getElementById('billSubtotal');
    let taxAmt = 0;
    const yourTax = document.getElementById('yourTax');
    taxAmt = subtotal * taxRate;
    yourTax.innerText = taxAmt.toFixed(2);
    let billTotal = subtotal;
    console.log(subtotal, billTotal)
    billSubtotal.innerText = (billTotal).toFixed(2);
    
    // A ternary will allow a value to be assigned; if/else can't store values
    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt);
    
    isNaN(tipAmt) ? total = subtotal + otherAmt : total = subtotal + (subtotal * tipAmt);
    yourTotal.innerText = total.toFixed(2);

    yourTip.innerText = receiptTip.toFixed(2);
    yourTotal.innerText = (subtotal + receiptTip + taxAmt).toFixed(2);
}

// Make receipt
// arguments: array, element to which the li will be appended
// run function as each item is added to the cart
// Change the display to a table
const makeReceipt =(obj, element)=> {
    const tableRow = document.createElement('tr');
    tableRow.classList.add('receipt-item');

    const receiptChoice = document.createElement('td');
    receiptChoice.classList.add('receipt-choice');
    receiptChoice.innerText = obj.name;

    const receiptQty = document.createElement('td');
    receiptQty.classList.add('receipt-qty');
    receiptQty.setAttribute('id', `qty${obj.id}`);
    receiptQty.innerText = obj.qty;

    const receiptPrice = document.createElement('td');
    receiptPrice.classList.add('receipt-price');
    receiptPrice.innerText = (obj.price).toFixed(2);   
    
    const receiptSubTotal = document.createElement('td');
    receiptSubTotal.classList.add('receipt-total', 'text-center', 'text-capitalize');
    receiptSubTotal.setAttribute('id', `subTotal${obj.id}`);
    receiptSubTotal.innerText = (obj.itemTotal).toFixed(2);

    tableRow.appendChild(receiptChoice);
    tableRow.appendChild(receiptQty);
    tableRow.appendChild(receiptPrice);
    tableRow.appendChild(receiptSubTotal);

    element.appendChild(tableRow);
}

const updateReceipt =(obj, qty, itemTotal)=> { 
    const receiptQty = document.getElementById(`qty${obj.id}`);
    receiptQty.classList.add('receipt-qty');
    receiptQty.innerText = qty;

    const receiptSubTotal = document.getElementById(`subTotal${obj.id}`);
    receiptSubTotal.innerText = itemTotal.toFixed(2);
}

const cartButtons = document.querySelectorAll('.cart-btn');

// add items to cart
cartButtons.forEach(button => {
    const price = parseFloat(button.getAttribute('data-price'));
    let qty = parseFloat(button.getAttribute('data-qty'));
    const name = button.getAttribute('data-name');
    const id = parseFloat(button.getAttribute('data-id'));
    // When the property and value are the same, use the shortcut of just listing the property/value name

    // Try putting the btnAdd here
    // Not a good idea--put it in addItems
    // const btnAdd = document.querySelectorAll('.btn-add');
    // btnAdd.forEach(button => {
    //     const btnId = parseFloat(button.getAttribute('data-id'))
    //     let btnQty = parseFloat(button.getAttribute('data-qty'))
    //     const spanQty = document.getElementById(`quantity${btnId}`)
    //     button.addEventListener('click', ()=> {
    //         console.log(qty, btnQty);
    //         if (btnId == id) {
    //             btnQty+=1;
    //             qty = btnQty;
    //             console.log(id, btnId, qty, btnQty);
    //             spanQty.innerText = btnQty;
    //         }
            
    // //         for (let i = 0; i < menuItems.length; i++) {
    // //             // console.log(i);
    
    // //             if (menuItems[i].id == btnId && menuItems[i].qty < 20) {
    // //                 // if (menuItems[i].id == btnId) {
    // //                 // menuItems[i].qty+=1;
    // //                 // menuItems[i].qty = btnQty;
    // //                 console.log(menuItems[i].id, menuItems[i].qty, btnQty);
    // //                 spanQty.innerText = menuItems[i].qty;
    // //             }
    // //         }
    //     })
    // })

    
    button.addEventListener('click', ()=> {
        qty+=1;
        addItems(price, qty, name, id);
    })
})

const addItems=(price, qty, name, id)=> {
    let btnQty = parseFloat(button.getAttribute('data-qty'))

    let itemObj = {
        id,
        name,
        qty,
        price,
        itemTotal: qty * price
    }

    // Try putting the add/subtract buttons here
    const btnAdd = document.querySelectorAll('.btn-add');
    btnAdd.forEach(button => {
        const btnId = parseFloat(button.getAttribute('data-id'))
        // let btnQty = parseFloat(button.getAttribute('data-qty'))
        const spanQty = document.getElementById(`quantity${btnId}`)
        button.addEventListener('click', ()=> {
            console.log(qty, btnQty);
            if (btnId == id) {
                btnQty+=1;
                qty = btnQty;
                console.log(id, btnId, qty, btnQty);
                spanQty.innerText = btnQty;
            }
            
        })
    })

    // put btnSubtract here
    const btnSubtract = document.querySelectorAll('.btn-subtract');
    btnSubtract.forEach(button => {
        button.addEventListener('click', ()=> {
            console.log(receiptArray);
            const btnId = parseFloat(button.getAttribute('data-id'))
            // let btnQty = parseFloat(button.getAttribute('data-qty'))
            const spanQty = document.getElementById(`quantity${btnId}`)
            
            console.log(qty, btnQty);
            if (btnId == id) {
                btnQty-=1;
                qty = btnQty;
                console.log(id, btnId, qty, btnQty);
                spanQty.innerText = btnQty;
            }
            // console.log(btnId, btnQty, spanQty, menuItems);
            // for (let i = 0; i < menuItems.length; i++) {
            //     // console.log(i);
    
            //     if (menuItems[i].id == btnId && menuItems[i].qty > 0) {
            //         menuItems[i].qty-=1;
            //         spanQty.innerText = menuItems[i].qty;
            //     }
            // }
        })
    })


            if (itemObj.qty == 1) {
            receiptArray = [...receiptArray, itemObj];
            makeReceipt(itemObj, receipt);
        } else {
            for (let i = 0; i < receiptArray.length; i++) {
                if (receiptArray[i].id == id) {
                    receiptArray[i].qty = itemObj.qty++;
                    receiptArray[i].itemTotal = receiptArray[i].qty * price;
                    updateReceipt(receiptArray[i], receiptArray[i].qty, receiptArray[i].itemTotal);
                }
            }
        }
        subtotal+=price;
        cartSubtotal.innerText = subtotal.toFixed(2);
}

// const btnSubtract = document.querySelectorAll('.btn-subtract');
// const btnAdd = document.querySelectorAll('.btn-add');


// btnSubtract.forEach(button => {
//     button.addEventListener('click', ()=> {
//         console.log(receiptArray);
//         const btnId = parseFloat(button.getAttribute('data-id'))
//         const btnQty = parseFloat(button.getAttribute('data-qty'))
//         const spanQty = document.getElementById(`quantity${btnId}`)

//         // console.log(btnId, btnQty, spanQty, menuItems);
//         for (let i = 0; i < menuItems.length; i++) {
//             // console.log(i);

//             if (menuItems[i].id == btnId && menuItems[i].qty > 0) {
//                 menuItems[i].qty-=1;
//                 spanQty.innerText = menuItems[i].qty;
//             }
//         }
//     })
// })

// btnAdd.forEach(button => {
//     button.addEventListener('click', ()=> {
//         const btnId = parseFloat(button.getAttribute('data-id'))
//         const btnQty = parseFloat(button.getAttribute('data-qty'))
//         const spanQty = document.getElementById(`quantity${btnId}`)

//         for (let i = 0; i < menuItems.length; i++) {
//             // console.log(i);

//             if (menuItems[i].id == btnId && menuItems[i].qty < 20) {
//                 menuItems[i].qty+=1;
//                 spanQty.innerText = menuItems[i].qty;
//             }
//         }
//     })
// })



