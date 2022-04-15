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