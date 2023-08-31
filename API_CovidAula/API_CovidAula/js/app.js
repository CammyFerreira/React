import { buscaDados } from "./fetchData.js";


//função que será chamada quando o formulário for enviado
const enviarDadosDoFormulario = event => {
    event.preventDefault();

    var country = document.getElementById('country').value;
    var data = document.getElementById('date').value;

    buscaDados(country, data);
}

document.getElementById('search-form').addEventListener('submit', enviarDadosDoFormulario);

function funcaoInicial(){
    buscaDados('usa', '2022-01-10')
}
funcaoInicial()