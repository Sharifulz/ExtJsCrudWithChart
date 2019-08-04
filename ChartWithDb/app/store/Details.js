Ext.define('ChartApp.store.Details', {
    extend: 'Ext.data.Store',

    alias: 'store.details',

    fields: [
        { name: 'id', type: 'number' },
        { name: 'name', type: 'string' },
        { name: 'age', type: 'number' },
        { name: 'salary', type: 'number' },
    ],

    // data: { items: [
    //     {
    //         "id": 1,
    //         "name": "shaariful",
    //         "age": 25,
    //         "salary": 25000
    //     },
    //     {
    //         "id": 2,
    //         "name": "Monirul",
    //         "age": 26,
    //         "salary": 26000
    //     },
    //     {
    //         "id": 3,
    //         "name": "Aminul",
    //         "age": 27,
    //         "salary": 27000
    //     }
    // ]},

    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'items'
    //     }
    // }

   
});
