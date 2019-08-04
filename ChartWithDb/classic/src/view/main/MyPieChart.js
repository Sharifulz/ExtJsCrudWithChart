Ext.define('ChartApp.view.main.MyPieChart', {
    extend: 'Ext.chart.PolarChart',
    requires: ['Ext.chart.series.Pie'],
    xtype: 'mychart',
    width: 320,
    height: 300,
    title: 'CHART VIEW',
    viewModel: { type: 'detailsviewmodel' },
    bind: {
        store: '{DetailsListStore}'
    },

    legend: {
        docked: 'right'
    },

    series: [{
        type: 'pie',
        xField: 'salary',
        label: {
            field: 'name'
        },
        donut: 30
    }]
});