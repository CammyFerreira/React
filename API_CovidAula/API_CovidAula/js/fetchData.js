//variavel que armazena o gráfico
let meuGrafico;

const criarGrafico = respotaDaApi => {
    //variavel para armazenar dados da api
    const dadosDaApi = respotaDaApi.data.data;

    const contexto = document.getElementById('chart-container').getContext('2d');

    if (meuGrafico) {
        meuGrafico.destroy();
    }

    meuGrafico = new Chart(contexto, {
        type: 'pie',
        data: {
            labels: ['Mortes', 'Confirmados', 'Confirmados Descartados'],
            datasets: [{
                data: [dadosDaApi.deaths, dadosDaApi.confirmed, dadosDaApi.confirmed_diff],
                borderWidth: 1,
                backgorundColor: ['red', 'blue', 'green']
            }]
        }
    });

}
 export const buscaDados = (paisDaBusca, dataDaBusca) => {
    axios.get(`https://covid-api.com/api/reports/total?data=${dataDaBusca}&iso=${paisDaBusca}`).then(criarGrafico).catch((error) => console.error(error))
}

