const { createApp } = Vue;

createApp({
    data(){
        return {
          productos:[],
          elementosPorPagina: 10,
          datosPaginados:[],
          url: 'https://matisaez.pythonanywhere.com/productos',
          error:false,
          cargando:true,
          nombre:"", 
          precio:0,
          stock:0,
          imagen:"",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando=false
                    this.datosPaginados = this.productos.slice(0, this.elementosPorPagina);
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        
        },
        totalPaginas(){
            return Math.ceil(this.productos.length / this.elementosPorPagina);
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
