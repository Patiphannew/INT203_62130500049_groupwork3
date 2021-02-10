const app = {
    data() {
        return {
            Pic:[{Pname:"Mercedes-AMG Petronas F1"},
            {Pname:"Red Bull Racing"},
            {Pname:"Sauber Ferrari"}],
            Dname1:"Lewis Hamilton",
            Dname2:"Daniel Ricardo",
            Dname3:"Sebastian Vettel",
            imgs:[{img:'https://images.unsplash.com/photo-1532906619279-a4b7267faa66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',done:false},
            {img:'https://images.unsplash.com/photo-1503945839639-aea48daa250f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',done:false},
            {img:'https://images.unsplash.com/photo-1590214074323-fd5649874bee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',done:false}]

            // tasks: [{title: 'Learing INT203 Client-side Web Programming 2',done: false},
            //         {title: 'Building modern websites with tailwindcss', done: false},
            //         {title: 'Developer web applications fast and hassle free with Spring', done: false}
            //     ]
        }
    },
    methods: {
        toggleDone(index){
            this.imgs[index].done = !this.imgs[index].done
        }
    },
    computed: {
        count(){
            return this.Pic.length
        }
    }
}
Vue.createApp(app).mount('#app')