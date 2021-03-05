const imageURL = document.querySelector('#image-url');
const textTop = document.querySelector('#top');
const textBottom = document.querySelector('#bottom');
const submitButton = document.querySelector('#submit-button');
const memeBoard = document.querySelector('#board');


submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (imageURL.value === '') {
        alert('OMG you need an image you noob!');
        return;
    }
    let holder = document.createElement('div');
    let frame = document.createElement('div');
    let top = document.createElement('div');
    let bottom = document.createElement('div');
    let button = document.createElement('button');

    button.innerHTML = '<span>&#128465;</span>'
    button.className = 'remove-button';
    button.addEventListener('click', removeMeme);

    top.innerText = textTop.value;
    bottom.innerText = textBottom.value;

    frame.style.backgroundImage = `url('${imageURL.value}')`;
    frame.className = 'meme';
    top.className = 'header';
    bottom.className = 'footer';
    holder.className = 'holder';

    frame.append(top);
    frame.append(bottom);
    frame.append(button);
    holder.append(frame)
    memeBoard.append(holder);

    textBottom.value = '';
    textTop.value = '';
    imageURL.value = '';
})

function removeMeme(e) {
    e.target.parentElement.parentElement.remove();
}

