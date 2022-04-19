# Time Use of ...

website: [https://wjfjfm.github.io/time-use]

Original chart by Jeff Dean:

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

## TODO

### more data

light goes 10cm 1m 1km
mysql insert/select...
redis ...
etcd ...
polarDB ...
CPU numa node
CPU cache一致性
X86 instruction / SIMD instruction / register transfer 


## Credit

```
------
By Jeff Dean:               http://research.google.com/people/jeff/
Originally by Peter Norvig: http://norvig.com/21-days.html#answers

```