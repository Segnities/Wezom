import "./main.scss";


import data from './comments.json';


document.getElementsByClassName('user-login')[0].innerHTML =  data.user1.name;
document.getElementsByClassName('date-of-comment')[0].innerHTML = data.user1.date;
document.getElementsByClassName('comment-body')[0].innerHTML = data.user1.comment;

document.getElementsByClassName('user-login')[1].innerHTML =  data.user2.name;
document.getElementsByClassName('date-of-comment')[1].innerHTML = data.user2.date;
document.getElementsByClassName('comment-body')[1].innerHTML = data.user2.comment;


