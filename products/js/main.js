const { createApp } = Vue;

createApp({
    data(){
        return {
            message: 'Hello Vue.js!',
            code: '1334',
        
        }
    },
    methods: {
        fetchData(url){
            fetch(this.url)
            .then(res => res.json()
            .then(data => console.log(data))
            .catch(err => console.log(err))
            );

        },
        

    }
}).mount('#app')
