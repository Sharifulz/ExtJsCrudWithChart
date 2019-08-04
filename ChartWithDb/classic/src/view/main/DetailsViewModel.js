Ext.define('ChartApp.view.DetailsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.detailsviewmodel',
    data:{
        //selectedJob:null,
    },
    stores: {
        DetailsListStore: {
            model:'ChartApp.model.Details',
            autoLoad: true,
            autoSync: true,
            proxy:
            {
                type: 'rest',
                reader:
                {
                    rootProperty: 'data',
                    type: 'json'
                },
                url: 'http://localhost:8080/api/details',
            }
        }
    }
});