#align(center)[
  #v(4cm)
  #text(size: 28pt, weight: "bold")[Workshop 8]
  #v(0.2cm)
  #text(size: 20pt, weight: "bold")[ELK Stack]
  #v(10cm)
]
  #align(left)[#text(size: 14pt)[*Name:* Rohit Jung Kathet]]
  #align(left)[#text(size: 14pt)[*Group:* L6CG15]]
  #align(left)[#text(size: 14pt)[*Module:* Big data]]
  #align(left)[#text(size: 14pt)[*Submission:* April 24, 2026]]

#pagebreak()

#outline(title: "Table of Contents")

#pagebreak()

#line(length: 100%, stroke: 0.4pt + luma(160))

#show raw.where(block: true): it => block(
  fill: rgb("#121212"),
  width: 100%,
  stroke: 0.2pt + rgb("#3c3836"),
  radius: 0pt,
  inset: 10pt,
)[
  #set text(
    font: ("JetBrainsMono NF"),
    size: 8pt,
    fill: rgb("#ebdbb2"),
  )
  #set par(leading: 0.7em)
  #it
]


== Section 1: Question Answer
\

1. What is ELK stack? Explain it using its architecture.

  *Ans:* ELK stack is a collection of software used for centralized logging, searching, analyzing and visualzing of large dataset. It contains three tools Elasticsearch, Logstash and Kibana, each performing a respective function in the ELK stack architecture. Following is the architecture for the ELK stack:

  ```txt
  Data Sources → Logstash → Elasticsearch → Kibana
  ```
  - We can have different datasources to feed data related like applications, servers, IoT devices, etc 
  - These data sources are then used by *Logstash* transformed and filtere to send it to Elasticsearch
  - Elasticsearch then indexes this data and store them and finally provides fast full-text search and analytics
  - Kibana is then used to make dashboards including graphs and charts to visualize the data. It also allows users to query and expolore data

2. What is Shard in ElasticSearch?

  *Ans:* Shard in general refers to the horizontal partition of data in CS. In Elasticsearch it's the horizontal partition of an index.
  - Shards are made to distribute the data across multiple node 
  - Types: Primary Shard and Replica Shard (for fault tolerance)
  - It's allows us to horizontally scale the system, make parallel search and make system fault tolerant


3. What are the three major components of Logstash?
  
  *Ans:* The three major components of Logstash includes
  ```
  Input → Filter → Output
  ```
  + *Input* - Collects Data from different sources like files, databases, etc
  + *Filter* - Processes and transforms data like parsing logs, formatting, removing unwanted fields
  + *Output* - Sends processed data to destination usually _Elasticsearch_

4. Perform a case study on the possible usage of ELK stack by any one of the following companies leveraging big data.

  *Ans:* *Netflix* operates on a massive scale globally generating massive logs of user activity, streaming, quality errors, millions of events per second, real-time monitoring needs, etc. 
  
  *_How ELK fits problem here ?_*

  - Since Logstash in ELK has the ability to collect data from multiple sources, it can collect this data from different microservices that Netflix has on to one place and then process/transform them accordingly. 
  - These processed data are then send to the _Elasticsearch_, and since this is massive amount of data we can utilize the _shards_ and _distributed clusters_ in Elasticsearch. Also since Elasticsearch is a datastorage along, we can perform search operations on these data too. All of this constitues to making Elasticsearch an appropriate choice for data storage and searching
  - All of these stored data can be easily queried along with proper visualization charts according to business needs of netflix using Kibana, another component in ELK stack

  - We can build different monitoring and analytics system for Netflix using the *ELK stack*



5. Explore Fuzzy Search in ELK.
*Ans:* Fuzzy Search refers to the finding results on a searched data even with typos or with approximate matches.
It is based on the edit distance (number of character changes needed). A result will match only if the edit distance is within an allowed limit (usually up to 2 in Elasticsearch).

```
Query term → what the user types (buuurger)
Candidate terms → words already stored in the index (burger, butter, etc.)
```

- In Elasticsearch `Levenshtein Distance` is used as a distance metric
  

#pagebreak()

== Section 2: Implementation

=== Starting ELK using `docker-compose`

```yml
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.17.0
    container_name: elasticsearch
    environment:
      - node.name=elasticsearch  
      - discovery.type=single-node # Run as a standalone node (no cluster)
      - xpack.security.enabled=false # No auth (fine for local dev, not production)
      - bootstrap.memory_lock=true  # Lock RAM to prevent swapping (better perf)
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"  # JVM heap: min and max both 512MB
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - elasticsearch-data:/usr/share/elasticsearch/data
    ports:
      - "9200:9200"
    networks:
      - elk

  logstash:
    image: docker.elastic.co/logstash/logstash:8.17.0
    container_name: logstash
    volumes:
      - ./logstash/pipeline:/usr/share/logstash/pipeline
    ports:
      - "5044:5044"
      - "5000:5000"
    depends_on:
      - elasticsearch
    networks:
      - elk

  kibana:
    image: docker.elastic.co/kibana/kibana:8.17.0
    container_name: kibana
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch
    networks:
      - elk

volumes:
  elasticsearch-data:
    driver: local

networks:
  elk:
    driver: bridge
```

=== Kibana Console

#figure(
  image("assets/kibana-dashboard.png", width: 100%),
  caption: [Basic Operation on Kibana Console],
) <fig-kibana-dashboard>



