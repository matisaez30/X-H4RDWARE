const { createApp } = Vue;

createApp({
    data(){
        return {
            error: false,
            datos: [],
            itemsPorPaginas: 6,
            url: '../data/pc_armadas.json',
            datosPaginados: [],
        }
    },
    methods: {
        fetchData(url){
            fetch(url)
            .then(res => res.json()
            .then(data => {
                this.datos = data.pc_armadas;
                this.datosPaginados = this.datos.slice(0, this.itemsPorPaginas);
            })
            .catch(err => console.log(err))
            );
        },
        totalPaginas(){
            return Math.ceil(this.datos.length / this.itemsPorPaginas);
        },
        getDataPagina(numPag){
            let inicio = (numPag * this.itemsPorPaginas) - this.itemsPorPaginas;
            let fin = (numPag * this.itemsPorPaginas);
            
            this.datosPaginados = this.datos.slice(inicio, fin);
        }

    },
    created(){
        this.fetchData(this.url);
    }
}).mount('#app')
