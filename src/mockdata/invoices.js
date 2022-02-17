const invoicesData = [{"Invoice Number":1,"Status":"Transfer Initiated","Amount":48051.17,"Remitter":"Credable","Paid Amount":23917.87,"Invoice Date":"20-Dec-2021","Payment Date":"04-Nov-2021"},
{"Invoice Number":2,"Status":"New","Amount":74595.71,"Remitter":"Credable","Paid Amount":61060.49,"Invoice Date":"29-Aug-2021","Payment Date":"23-Jun-2021"},
{"Invoice Number":3,"Status":"On Hold","Amount":81538.64,"Remitter":"Bizongo","Paid Amount":44518.52,"Invoice Date":"11-Mar-2021","Payment Date":"09-Jun-2021"},
{"Invoice Number":4,"Status":"Transfer Initiated","Amount":28005.74,"Remitter":"Credable","Paid Amount":75203.48,"Invoice Date":"07-Aug-2021","Payment Date":"27-Jan-2022"},
{"Invoice Number":5,"Status":"Settled","Amount":69344.15,"Remitter":"Credable","Paid Amount":72914.96,"Invoice Date":"16-Nov-2021","Payment Date":"13-May-2021"},
{"Invoice Number":6,"Status":"New","Amount":53909.06,"Remitter":"Capsave","Paid Amount":62966.42,"Invoice Date":"09-Nov-2021","Payment Date":"22-Sep-2021"},
{"Invoice Number":7,"Status":"On Hold","Amount":83373.28,"Remitter":"Credable","Paid Amount":73970.77,"Invoice Date":"15-Jun-2021","Payment Date":"10-Jan-2022"},
{"Invoice Number":8,"Status":"New","Amount":85853.53,"Remitter":"Capsave","Paid Amount":13775.46,"Invoice Date":"31-Jul-2021","Payment Date":"05-Jun-2021"},
{"Invoice Number":9,"Status":"On Hold","Amount":62601.84,"Remitter":"Credable","Paid Amount":79276.38,"Invoice Date":"26-Aug-2021","Payment Date":"03-Feb-2022"},
{"Invoice Number":10,"Status":"Transfer Initiated","Amount":63537.01,"Remitter":"Capsave","Paid Amount":82873.58,"Invoice Date":"21-Jan-2022","Payment Date":"03-May-2021"},
{"Invoice Number":11,"Status":"Review","Amount":86718.48,"Remitter":"Bizongo","Paid Amount":41426.53,"Invoice Date":"24-May-2021","Payment Date":"07-Jun-2021"},
{"Invoice Number":12,"Status":"On Hold","Amount":46665.43,"Remitter":"Credable","Paid Amount":12751.48,"Invoice Date":"12-Jan-2022","Payment Date":"05-May-2021"},
{"Invoice Number":13,"Status":"On Hold","Amount":7225.94,"Remitter":"Bizongo","Paid Amount":55736.18,"Invoice Date":"14-Aug-2021","Payment Date":"06-Dec-2021"},
{"Invoice Number":14,"Status":"On Hold","Amount":67411.12,"Remitter":"Bizongo","Paid Amount":95598.51,"Invoice Date":"25-Nov-2021","Payment Date":"02-Dec-2021"},
{"Invoice Number":15,"Status":"Review","Amount":34553.68,"Remitter":"Capsave","Paid Amount":72514.79,"Invoice Date":"11-Mar-2021","Payment Date":"18-Nov-2021"},
{"Invoice Number":16,"Status":"Transfer Initiated","Amount":32013.53,"Remitter":"Credable","Paid Amount":45873.77,"Invoice Date":"25-Feb-2021","Payment Date":"07-May-2021"},
{"Invoice Number":17,"Status":"New","Amount":42520.67,"Remitter":"Credable","Paid Amount":47262.98,"Invoice Date":"03-May-2021","Payment Date":"14-May-2021"},
{"Invoice Number":18,"Status":"New","Amount":40131.23,"Remitter":"Capsave","Paid Amount":7665.06,"Invoice Date":"01-Dec-2021","Payment Date":"30-Aug-2021"},
{"Invoice Number":19,"Status":"Settled","Amount":8160.25,"Remitter":"Capsave","Paid Amount":57359.3,"Invoice Date":"26-Jun-2021","Payment Date":"20-Aug-2021"},
{"Invoice Number":20,"Status":"Review","Amount":64077.63,"Remitter":"Bizongo","Paid Amount":41310.25,"Invoice Date":"21-Feb-2021","Payment Date":"01-Oct-2021"},
{"Invoice Number":21,"Status":"Review","Amount":35020.99,"Remitter":"Capsave","Paid Amount":57398.08,"Invoice Date":"11-Aug-2021","Payment Date":"22-Oct-2021"},
{"Invoice Number":22,"Status":"On Hold","Amount":75468.89,"Remitter":"Bizongo","Paid Amount":28239.0,"Invoice Date":"05-Jun-2021","Payment Date":"14-Sep-2021"},
{"Invoice Number":23,"Status":"Transfer Initiated","Amount":47476.17,"Remitter":"Capsave","Paid Amount":79671.37,"Invoice Date":"25-Jun-2021","Payment Date":"05-Apr-2021"},
{"Invoice Number":24,"Status":"Review","Amount":53207.8,"Remitter":"Credable","Paid Amount":75990.06,"Invoice Date":"03-Sep-2021","Payment Date":"23-Dec-2021"},
{"Invoice Number":25,"Status":"Settled","Amount":29145.25,"Remitter":"Credable","Paid Amount":63444.24,"Invoice Date":"22-Jul-2021","Payment Date":"25-Sep-2021"},
{"Invoice Number":26,"Status":"New","Amount":40026.62,"Remitter":"Credable","Paid Amount":5563.23,"Invoice Date":"09-Oct-2021","Payment Date":"15-Jul-2021"},
{"Invoice Number":27,"Status":"On Hold","Amount":94611.09,"Remitter":"Capsave","Paid Amount":85388.47,"Invoice Date":"10-Jul-2021","Payment Date":"14-Aug-2021"},
{"Invoice Number":28,"Status":"Transfer Initiated","Amount":68455.37,"Remitter":"Credable","Paid Amount":81466.24,"Invoice Date":"07-Jun-2021","Payment Date":"16-Jan-2022"},
{"Invoice Number":29,"Status":"On Hold","Amount":41134.75,"Remitter":"Credable","Paid Amount":78578.79,"Invoice Date":"14-May-2021","Payment Date":"10-Dec-2021"},
{"Invoice Number":30,"Status":"Settled","Amount":62641.63,"Remitter":"Credable","Paid Amount":40449.47,"Invoice Date":"04-Sep-2021","Payment Date":"14-Dec-2021"},
{"Invoice Number":31,"Status":"Settled","Amount":45373.56,"Remitter":"Bizongo","Paid Amount":35423.19,"Invoice Date":"15-Jun-2021","Payment Date":"20-Aug-2021"},
{"Invoice Number":32,"Status":"On Hold","Amount":29216.27,"Remitter":"Bizongo","Paid Amount":38460.61,"Invoice Date":"25-May-2021","Payment Date":"22-Jul-2021"},
{"Invoice Number":33,"Status":"Review","Amount":38973.87,"Remitter":"Capsave","Paid Amount":29525.66,"Invoice Date":"15-Jan-2022","Payment Date":"16-Oct-2021"},
{"Invoice Number":34,"Status":"New","Amount":57618.29,"Remitter":"Bizongo","Paid Amount":19455.64,"Invoice Date":"20-Jun-2021","Payment Date":"29-May-2021"},
{"Invoice Number":35,"Status":"Review","Amount":45504.53,"Remitter":"Credable","Paid Amount":16030.49,"Invoice Date":"10-May-2021","Payment Date":"17-Jan-2022"},
{"Invoice Number":36,"Status":"Review","Amount":80003.27,"Remitter":"Credable","Paid Amount":83060.31,"Invoice Date":"10-Dec-2021","Payment Date":"06-Dec-2021"},
{"Invoice Number":37,"Status":"Review","Amount":8195.88,"Remitter":"Bizongo","Paid Amount":60108.04,"Invoice Date":"17-Jan-2022","Payment Date":"11-Sep-2021"},
{"Invoice Number":38,"Status":"New","Amount":83849.65,"Remitter":"Credable","Paid Amount":27509.26,"Invoice Date":"18-Jun-2021","Payment Date":"13-Dec-2021"},
{"Invoice Number":39,"Status":"Transfer Initiated","Amount":83581.92,"Remitter":"Credable","Paid Amount":74953.8,"Invoice Date":"19-Sep-2021","Payment Date":"25-Nov-2021"},
{"Invoice Number":40,"Status":"New","Amount":4409.39,"Remitter":"Credable","Paid Amount":94512.47,"Invoice Date":"30-Nov-2021","Payment Date":"28-Dec-2021"},
{"Invoice Number":41,"Status":"Review","Amount":54497.1,"Remitter":"Capsave","Paid Amount":76218.6,"Invoice Date":"04-Apr-2021","Payment Date":"09-Sep-2021"},
{"Invoice Number":42,"Status":"On Hold","Amount":74871.13,"Remitter":"Credable","Paid Amount":93586.8,"Invoice Date":"22-Sep-2021","Payment Date":"15-Aug-2021"},
{"Invoice Number":43,"Status":"New","Amount":80317.72,"Remitter":"Bizongo","Paid Amount":21403.97,"Invoice Date":"01-Apr-2021","Payment Date":"14-Sep-2021"},
{"Invoice Number":44,"Status":"Settled","Amount":88864.79,"Remitter":"Capsave","Paid Amount":29576.06,"Invoice Date":"10-Nov-2021","Payment Date":"05-Nov-2021"},
{"Invoice Number":45,"Status":"Transfer Initiated","Amount":62623.96,"Remitter":"Capsave","Paid Amount":30968.17,"Invoice Date":"15-Nov-2021","Payment Date":"22-Mar-2021"},
{"Invoice Number":46,"Status":"Settled","Amount":97571.78,"Remitter":"Bizongo","Paid Amount":9159.7,"Invoice Date":"23-Jan-2022","Payment Date":"17-Jan-2022"},
{"Invoice Number":47,"Status":"On Hold","Amount":66092.37,"Remitter":"Bizongo","Paid Amount":76383.63,"Invoice Date":"09-Aug-2021","Payment Date":"04-Jun-2021"},
{"Invoice Number":48,"Status":"Transfer Initiated","Amount":93269.61,"Remitter":"Capsave","Paid Amount":16408.97,"Invoice Date":"05-Jan-2022","Payment Date":"16-Sep-2021"},
{"Invoice Number":49,"Status":"Review","Amount":51195.97,"Remitter":"Credable","Paid Amount":49795.25,"Invoice Date":"16-Jul-2021","Payment Date":"13-Feb-2022"},
{"Invoice Number":50,"Status":"Review","Amount":88454.26,"Remitter":"Capsave","Paid Amount":74132.16,"Invoice Date":"15-Jan-2022","Payment Date":"05-Jan-2022"}];

export default invoicesData;