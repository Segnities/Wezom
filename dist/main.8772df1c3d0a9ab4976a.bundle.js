(()=>{"use strict";(()=>{const e=JSON.parse('{"user1":{"name":"Тетяна Белуг","date":"/ 21 травня 2021","comment":"Протягом години прочитала відгуки та зупинилася на цій модельці. Спочатку знала, що пластини не знімні, але плюсів було більше. Дякуємо за блискавичну відправку! 2 дні з моменту замовлення та єдиний нюанс-все-таки знімні пластини зручніше, напевно. Але за порадами більш досвідчених я ставила пергамент, але мити все одно складно."},"user2":{"name":"Рогозін Тимур ","date":"/ 17 травня 2021","comment":"Купівля цього товару була спонтанною та незапланованою.Протягом години прочитав відгуки та зупинився на цій модельці.Дякуємо за блискавичну відправку!"},"user3":{"name":"Січов Лев","date":"/ 17 травня 2021","comment":"Купівля цього товару була спонтанною та незапланованою.Протягом години прочитав відгуки та зупинився на цій модельці.Дякуємо за блискавичну відправку!"},"user4":{"name":"Розмихач Олег","date":"/ 16 травня 2021","comment":"Купівля цього товару була спонтанною та незапланованою.Протягом години прочитав відгуки та зупинився на цій модельці.Дякуємо за блискавичну відправку!"},"user5":{"name":"Серечкін Олександр ","date":"/ 15 травня 2021","comment":"Протягом години прочитала відгуки та зупинилася на цій модельці. Спочатку знала, що пластини не знімні, але плюсів було більше. Дякуємо за блискавичну відправку! 2 дні з моменту замовлення та єдиний нюанс-все-таки знімні пластини зручніше, напевно. Але за порадами більш досвідчених я ставила пергамент, але мити все одно складно."},"user6":{"name":"Лертруп Артур","date":"/ 15 травня 2021","comment":"Мені продали неякісний товар"}}');(new class{parseCommentsFromJson(){let m=0;for(const[n,t]of Object.entries(e))document.getElementsByClassName("user-login")[m].innerHTML=t.name,document.getElementsByClassName("date-of-comment")[m].innerHTML=t.date,document.getElementsByClassName("comment-body")[m].innerHTML=t.comment,m++}}).parseCommentsFromJson()})()})();