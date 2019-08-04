Ext.define('ChartApp.view.main.ControllerOne', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.controllerone',
    viewModel: 'detailsviewmodel',
    controller: 'controllerone',

    //This script has following method
    // onItemSelected, itemdblclick, onDelClick, onAddClick
    onItemSelected: function (sender, record) {
        //alert("A item is selected");
        var id = record.data.id;
        var name = record.data.name;
        var age = record.data.age;
        var salary = record.data.salary;
        //  onDelClick(name);
        console.log("Selected item " + id + " " + name + " " + age + " " + salary);
    },

    itemdblclick: function (sender, record) {
        var id = record.data.id;
        var name = record.data.name;
        var age = record.data.age;
        var salary = record.data.salary;
        console.log("You have selected for update " + id + " " + name + " " + age + " " + salary);

        var win = Ext.create('Ext.Window', {
            extend: 'Ext.window.Window',
            title: 'UPDATING STUDENT',
            iconCls: 'x-fa fa-users',
            layout: 'form',
            xtype: 'form',
            width: 400,
            height: 280,
            plain: true,

            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Name',
                    name: 'name',
                    value: record.data['name']
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Age',
                    name: 'age',
                    value: record.data['age']
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Salary',
                    name: 'salary',
                    value: record.data['salary']
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Cancel',
                            handler: function () {
                                win.close();
                            }
                        }, '->', {
                            xtype: 'button',
                            text: 'Save',
                            //Saving an issue starts from here
                            listeners: {
                                click: function () {
                                    var id = record.data.id;
                                    var name = this.up('window').down('textfield[name=name]').getValue();
                                    var age = this.up('window').down('textfield[name=age]').getValue();
                                    var salary = this.up('window').down('textfield[name=salary]').getValue();

                                    var tempJob = {
                                        id: id,
                                        name: name,
                                        age: age,
                                        salary: salary,
                                    };
                                    //alert(tempJob);
                                    // Ext.toast("Name : "+tempJob.sname+"<br>Email: "+tempJob.semail+"<br>Location: "+tempJob.slocks);
                                    Ext.Ajax.request({
                                        url: 'http://localhost:8080/api/updateDetails',
                                        method: "PUT",
                                        headers: { 'Content-Type': 'application/json' },
                                        jsonData: tempJob,
                                        success: function (response) {
                                            // Ext.Msg.alert('success');
                                            window.location.reload();

                                        },
                                        failure: function (response) {
                                            Ext.Msg.alert('fail');
                                        }
                                    });
                                    win.close();
                                }
                            }
                        }
                    ]
                }
            ]
        }).show();
    },
    onDelClick: function () {
        var selecteditem = this.getViewModel().get('selectedJob');
        var id = selecteditem.data.id;
        var name = selecteditem.data.name;
        var age = selecteditem.data.age;
        var salary = selecteditem.data.salary;
        // var rec = grid.getStore();
        var deletingItem = {
            id: id,
            name: name,
            age: age,
            salary: salary
        }
        console.log("Deleted item " + deletingItem.name);
        Ext.Ajax.request({
            url: 'http://localhost:8080/api/deleteDetails',
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            jsonData: deletingItem,
            success: function (response) {
                //Ext.Msg.alert('success');
                window.location.reload();
            },
            failure: function (response) {
                Ext.Msg.alert('fail');
            }
        });
    },

    onAddClick: function () {
        //alert("Add button clicked");
        var win = Ext.create('Ext.Window', {
            extend: 'Ext.window.Window',
            title: 'Student Information',
            // bodyStyle:{"background-color":"black"}, 
            iconCls: 'x-fa fa-users',
            layout: 'form',
            xtype: 'form',
            width: 400,
            height: 350,
            plain: true,

            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Name'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'AGE',
                name: 'age',
            }, {
                xtype: 'combo',
                fieldLabel: 'SALARY',
                name: 'salary',
                queryMode: 'local',
                valueField: 'salaryAbbr',
                displayField: 'salaryName',
                store: {
                    fields: ['salaryAbbr', 'salaryName'],
                    data: [{
                        salaryAbbr: 'A',
                        salaryName: '20000'
                    }, {
                        salaryAbbr: 'B',
                        salaryName: '45000'
                    }, {
                        salaryAbbr: 'C',
                        salaryName: '10000'
                    }]
                },
            }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Cancel',
                            handler: function () {
                                win.close();
                            }
                        }, '->', {
                            xtype: 'button',
                            text: 'Save',
                            listeners: {
                                click: function () {
                                    var name = this.up('window').down('textfield[name=name]').getValue();
                                    var age = this.up('window').down('textfield[name=age]').getValue();
                                    var salary = this.up('window').down('combo[name=salary]').getDisplayValue();

                                    var tempJob = {
                                        name: name,
                                        age: age,
                                        salary: salary
                                    };
                                    Ext.toast("Name : " + tempJob.name + "<br>Age: " + tempJob.age + "<br>Salary: " + tempJob.salary);
                                    Ext.Ajax.request({
                                        url: 'http://localhost:8080/api/saveDetails',
                                        method: "POST",
                                        headers: { 'Content-Type': 'application/json' },
                                        jsonData: tempJob,
                                        success: function (response) {
                                            //Ext.Msg.alert('success');
                                            window.location.reload();
                                        },
                                        failure: function (response) {
                                            Ext.Msg.alert('fail');
                                        }
                                    });
                                    win.close();
                                }
                            }
                        }
                    ]
                }
            ]
        }).show();
    },
    onInsertClick: function (choice) {
        // alert("Save Button Clicked");
        var win = Ext.create('Ext.Window', {
            extend: 'Ext.window.Window',
            title: 'Student Information',
            iconCls: 'x-fa fa-users',
            layout: 'form',
            xtype: 'form',
            width: 400,
            height: 450,
            plain: true,

            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Name'
            },
            {
                xtype: 'checkboxgroup',
                id:'txtCategory',
                fieldLabel: 'Location',
                // defaultType: 'checkboxfield', 
                items: [
                    {
                        boxLabel: 'Dhaka',
                        name: 'location',
                        inputValue: 'Dhaka',
                        id: 'checkbox1'
                    }, {
                        boxLabel: 'Chittagong',
                        name: 'location',
                        inputValue: 'Chittagong',
                        id: 'checkbox2'
                    }, {
                        boxLabel: 'Khulna',
                        name: 'location',
                        inputValue: 'Chittagong',
                        id: 'checkbox3'
                    }
                ],
            },
            {
                xtype: 'textfield',
                fieldLabel: 'AGE',
                name: 'age',
                //labelStyle: 'color: #ffffff ; ',
                inputType: 'number'
            }, {
                xtype: 'combo',
                fieldLabel: 'SALARY',
                name: 'salary',
                queryMode: 'local',
                valueField: 'salaryAbbr',
                displayField: 'salaryName',
                store: {
                    fields: ['salaryAbbr', 'salaryName'],
                    data: [{
                        salaryAbbr: 'A',
                        salaryName: '20000'
                    }, {
                        salaryAbbr: 'B',
                        salaryName: '45000'
                    }, {
                        salaryAbbr: 'C',
                        salaryName: '10000'
                    }]
                },
            }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Cancel',
                            handler: function () {
                                win.close();
                            }
                        }, '->', {
                            xtype: 'button',
                            text: 'Save',
                            listeners: {
                                click: function () {
                                    //var location = this.up('window').down('checkboxgroup').getChecked().get('boxlabel');
                                    var name = this.up('window').down('textfield[name=name]').getValue();
                                    //var skill = this.up('window').down('checkboxgroup').getValue('boxlabel');
                                    var skill = Ext.getCmp('txtCategory').getValue();
                                    var age = this.up('window').down('textfield[name=age]').getValue();
                                    var salary = this.up('window').down('combo[name=salary]').getDisplayValue();
                                    //getCmp('checkbox1').setValue(true);
                                    var skillarr=[];
                                    skillarr = skill.location;
                                    console.log("length "+skillarr.length);
                                    
                                   // for(var i=0;i<skill.length;i++)

                                    // Ext.toast("Name : " + name + "<br>Age: " + age + "<br>Salary: " + salary + "<br>Salary: " + salary);
                                    console.log("  Names " + name + "  Skill " + skillarr + "  Age " + age + "Salary " + salary);
                                    win.close();
                                }
                            }
                        }
                    ]
                }
            ]
        }).show();
    }
});


