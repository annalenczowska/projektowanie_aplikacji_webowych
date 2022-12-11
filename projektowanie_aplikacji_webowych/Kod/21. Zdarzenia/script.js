window.onload = function () {

    let clickCounter = 0;
    let DoubleClickCounter = 0;
    let keyDownCounter = 0;

    document.addEventListener('click', function () {
        document.getElementById('click-counter').textContent = ++clickCounter;
    });

    document.addEventListener('dbclick', function () {
        document.getElementById('double-click-counter').textContent = ++DoubleClickCounter;
    });

    document.addEventListener('keydown', function () {
        document.getElementById('key-down-counter').textContent = ++keyDownCounter;
    });

    document.getElementById('add-element').addEventListener('click', function);{
    let newElement = document.createElement('div');
    newElement.classList.add('box');

    boxContainer.appendChild(newElement);

});

boxContainer.addEventListener('click', function (e)){
    if (e.target.className).includes('box')) {
    this.removeChild(e.target);
        }

}


};