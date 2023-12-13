// Build a calculator that will take the subtotal of the tab.
// The tip can be 15%, 10%, 20%
// Have cards with food items, total items chosen, place in subtotal, then return subtotal, ask for tip, calcuate total, return total
// Have images for menu items, select quantity, total, calculate tip, calculate total

// Build HTML first
// Add styling in CSS
// Apply the JS

const menuItems = [
    { 
        id: 1,
        type: 'appetizer',
        item: 'spinach artichoke dip',
        desc: 'creamy spinach and artichokes in a parmesan dip',
        imgUrl: '',
        price: 12.99,
        qty: 0
    },
        { 
        id: 2,
        type: 'appetizer',
        item: 'onion rings',
        desc: 'crispy thin battered onion rings',
        imgUrl: '',
        price: 12.99,
        qty: 0
    },
    { 
        id: 3,
        type: 'appetizer',
        item: 'side salad',
        desc: 'mixed greens, tomato and cucumber with your choice of dressing',
        imgUrl: '',
        price: 4.99,
        qty: 0
    },
    { 
        id: 4,
        type: 'appetizer',
        item: 'duck wings',
        desc: 'maple, soy, ginger duck wings',
        imgUrl: '',
        price: 14.99,
        qty: 0
    },
    { 
        id: 5,
        type: 'entree',
        item: 'hamburger',
        desc: '100% Angus beef on a sourdough bun with your choice of toppings',
        imgUrl: '',
        price: 14.99,
        qty: 0
    },
    { 
        id: 6,
        type: 'entree',
        item: 'ribeye steak',
        desc: 'thick or thin ribeye with a baked potato or fries',
        imgUrl: '',
        price: 28.99,
        qty: 0
    },
    { 
        id: 7,
        type: 'entree',
        item: 'fried catfish filets',
        desc: 'three catfish filets deep-fried or grilled, served with french fries',
        imgUrl: '',
        price: 14.99,
        qty: 0
    },
    { 
        id: 8,
        type: 'entree',
        item: 'gumbo',
        desc: 'our secret recipe for a rich gumbo',
        imgUrl: '',
        price: 12.99,
        qty: 0
    },
    { 
        id: 9,
        type: 'drink',
        item: 'iced tea',
        desc: '',
        imgUrl: '',
        price: 1.99,
        qty: 0
    },
    { 
        id: 10,
        type: 'drink',
        item: 'soft drink',
        desc: '',
        imgUrl: '',
        price: 2.99,
        qty: 0
    },
    { 
        id: 11,
        type: 'drink',
        item: 'domestic beer',
        desc: 'your choice of our domestic beers',
        imgUrl: '',
        price: 5.99,
        qty: 0
    },
    { 
        id: 12,
        type: 'drink',
        item: 'imported beer',
        desc: 'your choice of our imported beers',
        imgUrl: '',
        price: 8.99,
        qty: 0
    },
    { 
        id: 13,
        type: 'dessert',
        item: 'chocolate mousse',
        desc: 'luscious creamy chocolate mousse',
        imgUrl: '',
        price: 6.99,
        qty: 0
    },
    { 
        id: 14,
        type: 'dessert',
        item: 'creme caramel',
        desc: 'baked custard',
        imgUrl: '',
        price: 9.99,
        qty: 0
    },
    { 
        id: 15,
        type: 'dessert',
        item: 'slice of pie',
        desc: 'your choice of apple, lemon meringue or coconut cream pie',
        imgUrl: '',
        price: 7.99,
        qty: 0
    },
    { 
        id: 16,
        type: 'dessert',
        item: 'knickerbocker glory',
        desc: 'ice cream parfait with strawberries and chocolate sauce',
        imgUrl: '',
        price: 8.99,
        qty: 0
    }
]


const appRow = document.getElementById('appRow');
const entreesRow = document.getElementById('entreesRow');
const drinksRow = document.getElementById('drinksRow');
const dessertsRow = document.getElementById('dessertsRow');

const menuType = ['appetizers', 'entrees', 'drinks', 'desserts'];

// let newType = 'sides';
// if (menuItems.includes(newType)) {
//     console.log('item is listed');
// } else {
//     menuItems.push(newType);
// }

const menuDivs = document.querySelectorAll('menu-div');

menuItems.forEach(item => {
    const column = document.createElement('div');
    column.classList.add('col-md-3');
    const card = document.createElement('div');

    card.classList.add('card', 'h-100');
    card.innerHTML = `
            <div class="card">
            <img src="media/${item.imgUrl}" alt="${item.desc}" class="img-fluid card-image" />
            <div class="card-body">
                <h4 class="${item.name}">${item.name}</h4>
                <p class="${item.desc}">${item.desc}</p>
            </div>
            <footer class="card-footer">
                <p class="card-text item-price">${item.price}</p>
                <button class="btn btn-danger"></button>
            </footer>
        `
    column.appendChild(card);
    // appRow.appendChild(column);


    switch (item.type) {
        case 'appetizers': appRow.appendChild(column);
            break;
        case 'entrees': entreesRow.appendChild(column);
            break;
        case 'drinks': drinksRow.appendChild(column);
            break;
        case 'desserts': dessertsRow.appendChild(column);
            break;
        default :
            console.log('Error:  menu type not listed');
            break;
    }
})



const confirmBtn = document.getElementById('confirmBtn');
const totalDisplay = document.getElementById('total');

confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const subtotal = parseFloat(document.getElementById('subtotalInput').value);
    const tipAmt = parseFloat(document.getElementById('tipAmt').value);
    const otherAmt = parseFloat(document.getElementById('otherAmt').value);

    let total;

    isNaN(tipAmt) ? total = subtotal + otherAmt : total = subtotal + (subtotal * tipAmt);
    totalDisplay.innerText = total.toFixed(2);
})