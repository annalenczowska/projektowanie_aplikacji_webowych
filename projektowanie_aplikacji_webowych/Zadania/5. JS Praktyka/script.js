window onload = function () {

    let liczbaWierszy = 0;
    let liczbaKolumn = 0;

    document.addEventListener('click', function () {
        document.getElementById('liczbaWierszy').textContent = ++liczbaWierszy;
    });

    document.addEventListener('click', function () {
        document.getElementById('liczbaKolumn').textContent = ++liczbaKolumn;
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