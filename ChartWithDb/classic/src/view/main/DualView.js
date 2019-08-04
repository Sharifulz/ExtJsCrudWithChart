Ext.define('ChartApp.view.DualView', {
    extend: 'Ext.panel.Panel',
    //renderTo: Ext.getBody(),
    requires: [
        'ChartApp.view.main.ControllerOne',
        ],
        controller: 'controllerone',
    scrollable:true,
    xtype:'dualview',
    width: 1200,
    height: 1000,
    title: 'Container Panel',
    layout: 'column',

    
        buttons:[{
        xtype:'button',
        text: 'Add New',
        formBind:true,
        margin: {top:0, left:0, right: 20, bottom:0},
        iconCls: 'x-fa fa-plus',
        listeners: {
        click: 'onAddClick'
        }
        },
        {
            xtype:'button',
            text: 'DELETE',
            formBind:true,
            margin: {top:0, left:0, right: 60, bottom:0},
            iconCls: 'x-fa fa-trash',
            listeners: {
            click: 'onDelClick'
            }
            }],
       
    items: [
        {
            xtype: 'detailsList',
            title: 'Details Data',
            height: 600,
            width: 500
        },
        {
            xtype: 'mychart',
            title: 'Chart',
            height: 500,
            width: 600,
           //columnWidth: 0.3
        }, {
           
        },
       
    ]
});