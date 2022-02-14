import "./main.scss";

import data from './comments.json';


/*document.getElementsByClassName('user-login')[0].innerHTML =  data.user1.name;
document.getElementsByClassName('date-of-comment')[0].innerHTML = data.user1.date;
document.getElementsByClassName('comment-body')[0].innerHTML = data.user1.comment;*/

class Comments{
    parseCommentsFromJson(){
        let i = 0;
    for(const [key,value] of Object.entries(data)){
        document.getElementsByClassName('user-login')[i].innerHTML = value.name;
        document.getElementsByClassName('date-of-comment')[i].innerHTML = value.date;
        document.getElementsByClassName('comment-body')[i].innerHTML = value.comment;
        //console.log(`${key}: ${value.name}`);
        i++;
        }
    }
}
let parseComments = new Comments();
parseComments.parseCommentsFromJson();


