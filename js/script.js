var modal = document.getElementById('pop-modal');
var btn = document.getElementById('btn-modal');
var span = document.getElementsByClassName('close')[0];

function toggleModal() {
  modal.style.display = 'block';
}

function toggleModal2() {
  var modal2 = document.getElementById('pop-modal2');

  modal.style.display = 'none';
  modal2.style.display = 'block';

  setTimeout(function () {
    modal2.style.display = 'none';
  }, 1000);
}

function closeModal() {
  modal.style.display = 'none';
}

function continueShop() {
  location.replace('index.html');
}

function cartRemove() {
  const cart_item = document.getElementById('cart_items');
  cart_item.style.display = 'none';
}
