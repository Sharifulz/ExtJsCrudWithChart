/**
 * This view is an example list of people.
 */
Ext.define('ChartApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'ChartApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phone', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
