# Latency Comparison Numbers

<iframe src="https://baidu.com" width="700px" height="500px" frameborder="0" scrolling="no"> </iframe>

| operation name                     | ns          | us      | ms   | notes                       |
| ---------------------------------- | ----------- | ------- | ---- | --------------------------- |
| L1 cache reference                 | 0.5         |         |      |                             |
| Branch mispredict                  | 5           |         |      |                             |
| L2 cache reference                 | 7           |         |      | 14x L1 cache                |
| Mutex lock/unlock                  | 25          |         |      |                             |
| Main memory reference              | 100         |         |      | 20x L2 cache, 200x L1 cache |
| Compress 1K bytes with Zippy       | 3,000       | 3       |      |                             |
| Send 1K bytes over 1 Gbps network  | 10,000      | 10      |      |                             |
| Read 4K randomly from SSD*         | 150,000     | 150     |      | ~1GB/sec SSD                |
| Read 1 MB sequentially from memory | 250,000     | 250     |      |                             |
| Round trip within same datacenter  | 500,000     | 500     |      |                             |
| Read 1 MB sequentially from SSD*   | 1,000,000   | 1,000   | 1    | ~1GB/sec SSD, 4X memory     |
| Disk seek                          | 10,000,000  | 10,000  | 10   | 20x datacenter roundtrip    |
|                                    |             |         |      |                             |
| Read 1 MB sequentially from disk   | 20,000,000  | 20,000  | 20   | 80x memory, 20X SSD         |
| Send packet CA->Netherlands->CA    | 150,000,000 | 150,000 | 150  |                             |




``` text
Notes
-----
1 ns = 10^-9 seconds
1 us = 10^-6 seconds = 1,000 ns
1 ms = 10^-3 seconds = 1,000 us = 1,000,000 ns

Credit
------
By Jeff Dean:               http://research.google.com/people/jeff/
Originally by Peter Norvig: http://norvig.com/21-days.html#answers

```

<html>
<head>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/searchbuilder/1.3.2/css/searchBuilder.dataTables.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/datetime/1.1.2/css/dataTables.dateTime.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/searchbuilder/1.3.2/js/dataTables.searchBuilder.min.js"> </script>
    <script type="text/javascript" src="https://cdn.datatables.net/datetime/1.1.2/js/dataTables.dateTime.min.js"> </script>
    <script type="text/javascript" src="data.js"> </script>
</head>

<body>

<table id="time-use" class="display" width="100%"></table>

<script type="text/javascript">


$(document).ready(function() {
    var table = $('#time-use').DataTable({
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ],
        searchBuilder:{
            preDefined: {
                criteria: [
                    {
                        condition: '>',
                        data: 'Start date',
                        value: ['2000-1-1']
                    },
                    {
                        criteria: [
                            {
                                condition: 'contains',
                                data: 'Office',
                                value: ['London']

                            },
                            {
                                condition: 'contains',
                                data: 'Office',
                                value: ['New York']
                            }

                        ],
                        logic: 'OR'
                    }

                ],
                logic: 'AND'
            }
        },
        dom: 'Qlfrtip',
        lengthMenu : [[-1, 10, 25, 50, 100], ["All", 10, 25, 50, 100]],
    });
    

     table.rows().every( function () {
         this.hasChild = false;
     } );
     
     $('#time-use tbody').on( 'click', 'tr', function () {
         var this_row = table.row(this);
         if (!this_row.hasChild) {
             this_row.child(this_row.index());
             this_row.hasChild = true;
         }
         var child = table.row( this ).child;
     
         if ( child.isShown() ) {
             child.hide();
         }
         else {
             child.show();
         }
     } );

} );
</script>

</body>
</html>
