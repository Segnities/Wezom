console.log('HI FROM VENDOR!');
import 'bootstrap';
import {Popover} from 'bootstrap'
let popover = new Popover(document.querySelector('.product-order'), {
    container: 'body',
    content:`
    <div class="d-block">
    У кошику: <b>1 товар</b>
    <br>
    На суму: <b>30 000 ₴</b>
    <a class="btn get-order my-3 fw-bolder" type="button"><span>Оформити заяву</span><img src="./assets/img/icons/basket-white-icon.svg"></a>

    <a href="#" class="redact-order">Редагувати замовлення</a>
    </div>`,
    html:true,
  })

