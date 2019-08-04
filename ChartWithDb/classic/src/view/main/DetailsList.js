Ext.define('ChartApp.view.main.DetailsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'detailsList',

    requires: [
        'ChartApp.store.Details',
        'ChartApp.view.main.ControllerOne',
    ],
    controller: 'controllerone',
    viewModel:'detailsviewmodel',
    title: 'Details', 
    bind : {
        store: '{DetailsListStore}', selection:'{selectedJob}',
        },
    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Age', dataIndex: 'age', flex: 1 },
        { text: 'Salary', dataIndex: 'salary', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected',
        itemdblclick : 'itemdblclick'
    }
});

   