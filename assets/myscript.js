const app = Vue.createApp({
    data: function(){
        return{
            message: 'Ciao a tutti, mi chiamo Domenico Ferrari',
            image: "img/1500x500.jpeg"
        }
    }
});

app.mount('#app');