const sendButton = document.querySelector('.input__button');
const inputText = document.querySelector('.input__text');
const messeges = document.querySelector('.messeges');

let amountOfMesseges = (document.querySelectorAll('.messege__item')).length;

// For click (adding and removing messeges)
document.addEventListener('click', function(e){
    console.log(e.target.classList[0])
    if(e.target.classList[0] == 'delete__button'){
        let tar = document.querySelector(`.${e.target.classList[1]}`);
        messeges.removeChild(tar.parentElement.parentElement)
    } else if (e.target.classList[0] == 'input__button'){
        if(inputText.value.length > 0) {
            let div = document.createElement('div');
            div.classList = `messege__item mes__item${amountOfMesseges + 1}`;
            let p = document.createElement('p');
            p.classList = 'messege__text';
            p.innerText = inputText.value;
            let a = document.createElement('a');
            a.classList = `delete__button delete__button${amountOfMesseges + 1}`;
            a.innerText = "del";
            p.appendChild(a);
            div.appendChild(p);
            messeges.appendChild(div);
            inputText.value = '';
            amountOfMesseges++;
        }
    }
    
})
// For Enter key
document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        if(inputText.value.length > 0) {
            let div = document.createElement('div');
            div.classList = `messege__item mes__item${amountOfMesseges + 1}`;
            let p = document.createElement('p');
            p.classList = 'messege__text';
            p.innerText = inputText.value;
            let a = document.createElement('a');
            a.classList = `delete__button delete__button${amountOfMesseges + 1}`;
            a.innerText = "del";
            p.appendChild(a);
            div.appendChild(p);
            messeges.appendChild(div);
            inputText.value = '';
            amountOfMesseges++;
        }
    }
})