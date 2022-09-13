import MainService from './mainService.js';
import exampleImage from './exampleImage.js';
import '../style//style.scss';
import '../style/style.css';

window.addEventListener("DOMContentLoaded", () => {
    const targetEl = document.querySelector('#log');

    const service = new MainService({targetEl});
    const datalist = ['Th', 'is', [' is', ' boiler', ['plate']]];
    const subHtml = service.init(datalist);

    targetEl.innerHTML += `<h3>${subHtml}</h3>`;

    document.querySelector('body').innerHTML += exampleImage();
});