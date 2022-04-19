var dataSet = [
    [ ["L1 cache reference"], [0.5], [] ],
    [ ["Branch mispredict"], [5], [] ],
    [ ["L2 cache reference"], [7], ["14x L1 cache"] ],
    [ ["Mutex lock/unlock"], [25], [] ],
    [ ["Main memory reference"], [100], ["20x L2 cache, 200x L1 cache"] ],
    [ ["Compress 1K bytes with Zippy"], [3000], [] ],
    [ ["Send 1K bytes over 1 Gbps network"], [10000], [] ],
    [ ["Read 4K randomly from SSD*"], [150000], ["~1GB/sec SSD"] ],
    [ ["Read 1 MB sequentially from memory"], [250000], [] ],
    [ ["Round trip within same datacenter"], [500000], [] ],
    [ ["Read 1 MB sequentially from SSD*"], [1000000], ["~1GB/sec SSD, 4X memory"] ],
    [ ["Disk seek"], [10000000], ["20x datacenter roundtrip"] ],
    [ ["Read 1 MB sequentially from disk"], [20000000], ["80x memory, 20X SSD"] ],
    [ ["Send packet CA->Netherlands->CA"], [150000000], [] ],
];

// for (var i=0; i<dataSet.length; i++) {
//     console.log("{");
//     console.log("     \"operation\" : \""+dataSet[i][0][0]+"\",");
//     console.log("     \"time\" : \""+dataSet[i][1][0]+"\",");
//     console.log("     \"tags\" : \""+"default"+"\",");
//     console.log("     \"date\" : \""+"2012-01-01"+"\",");
//     console.log("     \"note\" : \""+dataSet[i][2][0]+"\",");
//     console.log("     \"expand\" : \""+ "Numbers Everyone Should Know from Jeff Dean"+"\"");
//     console.log("},");
// }
