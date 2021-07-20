const popularData = [
    {
        id: '1',
        image: require('../images/pizza1.png'),
        title: 'Prinavera Pizza',
        weight:'540 gr',
        rating:'5.0',
        price: 3.99,
        sizeName: 'Medium',
        sizeNumber: 4,
        crust:'Thin Crust',
        deliveryTime: 30,
        ingredients: [ 
        {
         id:'10',
        name:'ham',
         image: require('../images/ham.png'),
        },

        { 
        id:'1',
         name:'tomato',
        image: require('../images/tomato.png'),
        },

        {
        id:'30',
         name:'cheese',
        image: require('../images/cheese.png'),
        },

        { 
        id:'49',
        name:'garlic',
        image: require('../images/garlic.png'),
    },
                ]
           
           
        
    },
    {
        id: '2',
        image: require('../images/pizza2.png'),
        title: 'Vegetarian Pizza',
        weight:'230 gr',
        rating:'4.0',
        price: 5.99,
        sizeName: 'Small',
        sizeNumber: 10,
        crust:'Thick Crust',
        deliveryTime: 40,
        ingredients: [ 
            {
                id:'1',
                name:'cheese',
                image: require('../images/cheese.png'),

             },
             {
                id:'277',
                name:'garlic',
                image: require('../images/garlic.png'),

             },
            ]
        },
    {
        id: '3',
        image: require('../images/pizza3.png'),
        title: 'Pepperoni Pizza',
        weight:'700 gr',
        rating:'3.0',
        price: 9.99,
        sizeName: 'Large',
        sizeNumber: 18,
        crust:'Thin Crust',
        deliveryTime: 20,
        ingredients: [ 
        {
         id:'1',
        name:'tomato',
         image: require('../images/tomato.png'),
        },

        { 
        id:'24',
         name:'cheese',
        image: require('../images/cheese.png'),
        },
    ]
    },
]
export default popularData;