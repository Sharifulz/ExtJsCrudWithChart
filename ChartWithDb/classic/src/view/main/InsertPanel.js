Ext.define('ChartApp.view.main.InsertPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'insertpanel',
    title:'MY PANEL',
    requires: [
    'ChartApp.view.main.ControllerOne',
    ],
    controller: 'controllerone',
    items: [{
    buttons:[{
    xtype:'button',
    text: 'INSERT',
    formBind:true,
    margin: {top:0, left:0, right: 20, bottom:0},
    listeners: {
    click: 'onInsertClick'
// onSaveClick method is created on ControllerOne
// which has the alias: 'controller.controllerone'

    }
    }]
    }]
    });