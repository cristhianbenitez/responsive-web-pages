const main = document.getElementById('main');
const item_1 = document.getElementById('item-quantity-1');
const item_2 = document.getElementById('item-quantity-2');
const removeItem_1 = document.getElementById('remove-1');
const addItem_1 = document.getElementById('add-1');
const removeItem_2 = document.getElementById('remove-2');
const addItem_2 = document.getElementById('add-2');
const total = document.getElementById('total');
const dollar = (amount) =>
  amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
// Success Message
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  main.innerHTML = `<div class="success-submit">
      <h2>Thank you, your order has been placed.</h2>
    </div>`;
});

// Item Quantity
let defaultQuantity_1 = 1;
let defaultQuantity_2 = 1;
item_1.value = defaultQuantity_1;
item_2.value = defaultQuantity_2;

addItem_1.addEventListener('click', () => {
  defaultQuantity_1++;
  item_1.value = defaultQuantity_1;
});
removeItem_1.addEventListener('click', () => {
  if (defaultQuantity_1 > 0) {
    defaultQuantity_1--;
    item_1.value = defaultQuantity_1;
  }
});
addItem_2.addEventListener('click', () => {
  defaultQuantity_2++;
  item_2.value = defaultQuantity_2;
});
removeItem_2.addEventListener('click', () => {
  if (defaultQuantity_2 > 0) {
    defaultQuantity_2--;
    item_2.value = defaultQuantity_2;
  }
});
