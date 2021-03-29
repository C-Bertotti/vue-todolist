var app = new Vue (
    {
        el: '#root',
        data: {
            newItem: '',
            lista: [  'frutta', 'verdura', 'noci', 'farina' ],

        },
        methods: {
            deleteItem: function(itemIndex) {
                this.lista.splice(itemIndex, 1);
            },
            addItem: function() {
                if ( this.newItem !== '' ) {
                    this.lista.push(this.newItem);
                    this.newItem = '';
                }
            },
        }
    }
);