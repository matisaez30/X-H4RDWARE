const { createApp } = Vue;

createApp({
    data(){
        return {
            datos: [],
            elementosPorPagina: 10,
            datosPaginados:[],
            url: '../../data/data.json'
        }
    },
    methods: {
        fetchData(url){
            fetch(url)
            .then(res => res.json()
            .then(data => {
                this.datos = data.products;
                this.datosPaginados = this.datos.slice(0, this.elementosPorPagina);
            })
            .catch(err => console.log(err))
            );
        },
        totalPaginas(){
            return Math.ceil(this.datos.length / this.elementosPorPagina);
        },
        getDataPagina(numPag){
            let inicio = (numPag * this.elementosPorPagina) - this.elementosPorPagina;
            let fin = (numPag * this.elementosPorPagina);
            
           this.datosPaginados = this.datos.slice(inicio, fin);
        }
    },
    created(){
        this.fetchData(this.url);
    }
}).mount('#app')
