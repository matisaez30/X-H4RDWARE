const { createApp } = Vue;

createApp({
    data(){
        return {
            error: false,
            datos: [],
            url: '../../data/data.json'
        
        }
    },
    methods: {
        fetchData(url){
            fetch(url)
            .then(res => res.json()
            .then(data => {
                this.datos = data.products;
            })
            .catch(err => console.log(err))
            );

        },
    },
    created(){
        this.fetchData(this.url);
    }
}).mount('#app')
