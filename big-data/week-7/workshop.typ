#align(center)[
  #v(4cm)
  #text(size: 28pt, weight: "bold")[Week 7 Workshop]
  #v(0.2cm)
  #text(size: 20pt, weight: "bold")[CSV data, Hadoop and ApacheSpark]
  #v(10cm)
]
  #align(left)[#text(size: 14pt)[*Name:* Rohit Jung Kathet]]
  #align(left)[#text(size: 14pt)[*Group:* L6CG15]]
  #align(left)[#text(size: 14pt)[*Module:* Big data]]
  #align(left)[#text(size: 14pt)[*Submission:* April 23, 2026]]

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
  #set par(leading: 0.5em)
  #it
]


= Hadoop and CSV Files

== Population data: Population.java

#figure(
  image("assets/2026-04-17-082252_hyprshot.png", width: 100%),
  caption: [Java Compile],
) <fig-2026-04-17-082252_hyprshot>

== Running the program

```sh
archbtw:csv (main ?↑) | hdfs dfs -ls output_csv                                                                                                                   [08:25]
Found 2 items
-rw-r--r--   1 rokshh supergroup          0 2026-04-17 08:14 output_csv/_SUCCESS
-rw-r--r--   1 rokshh supergroup       7316 2026-04-17 08:14 output_csv/part-r-00000
archbtw:csv (main ?↑) | hdfs dfs -head output_csv/part-r-00000                                                                                                    [08:25]
Adur,14,519500
Allerdale,14,831700
Amber Valley,14,1082400
Arun,14,1210700
Ashfield,14,1065700
Ashford,14,1018000
Aylesbury Vale,14,1594400
Babergh,14,739400
Barking and Dagenham,14,1641000
Barnet,14,3253500
Barnsley,14,2068800
Barrow-in-Furness,14,605100
Basildon,14,1557400
Basingstoke and Deane,14,1517400
Bassetlaw,14,995900
Bath and North East Somerset,14,1606900
Bedford,14,1413800
Bexley,14,2056900
Birmingham,14,9573800
Blaby,14,831900
Blackburn with Darwen,14,1291900
Blackpool,14,1241600
Bolsover,14,674500
Bolton,14,2441800
Boston,14,553200
Bournemouth,14,1657100
Bracknell Forest,14,1063800
Bradford,14,4522400
Braintree,14,1292200
Breckland,14,1105900
Brent,14,2899000
```

=  Apache Spark

== `students.json`

=== Using Data Frames

```
Python 3.11.9 (main, Apr 17 2026, 09:27:53) [GCC 15.2.1 20260209] on linux
Type "help", "copyright", "credits" or "license" for more information.
Setting default log level to "WARN".
To adjust logging level use sc.setLogLevel(newLevel). For SparkR, use setLogLevel(newLevel).
Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\ \/ _ \/ _ `/ __/  '_/
   /__ / .__/\_,_/_/ /_/\_\   version 3.5.8
      /_/

Using Python version 3.11.9 (main, Apr 17 2026 09:27:53)
Spark context Web UI available at http:
Spark context available as 'sc' (master = local[*], app id = local-1776398067453).
SparkSession available as 'spark'.

>>> df = spark.read.json("student.json")
>>> df.show()
+----+----------------+--------------------+-------------------+------+
| age|          course|               email|              lives|  name|
+----+----------------+--------------------+-------------------+------+
|NULL|BSc Horticulture|                NULL|        Bridge Farm|   Tom|
|  45| MSc Agriculture|                NULL|               NULL| Helen|
|  30|            NULL|S.Carter@borchest...|    Borchester Farm| Alice|
|  21|BSc Horticulture|                NULL|        Bridge Farm|Johnny|
|NULL| MSc Agriculture|                NULL|    Brookfield Farm|  Ruth|
|  17|            NULL|                NULL|    Brookfield Farm|   Ben|
|  40|            NULL|A.Macy@borchester...|Honeysuckle Cottage|  Adam|
|  21|         BSc PPE|P.Aldridge@oxford...|             Oxford|Phoebe|
|  25|            NULL|P.Archer@borchest...|   Rickyard Cottage|   Pip|
|  35|HND Food Science|                NULL|Honeysuckle Cottage|   Ian|
+----+----------------+--------------------+-------------------+------+
```

```
>>> df.printSchema()
root
 |-- age: long (nullable = true)
 |-- course: string (nullable = true)
 |-- email: string (nullable = true)
 |-- lives: string (nullable = true)
 |-- name: string (nullable = true)

```

```
>>> df.select("name").show()
+------+
|  name|
+------+
|   Tom|
| Helen|
| Alice|
|Johnny|
|  Ruth|
|   Ben|
|  Adam|
|Phoebe|
|   Pip|
|   Ian|
+------+
```

```

>>> df.select(df['name'], df['age'] + 1).show()
+------+---------+
|  name|(age + 1)|
+------+---------+
|   Tom|     NULL|
| Helen|       46|
| Alice|       31|
|Johnny|       22|
|  Ruth|     NULL|
|   Ben|       18|
|  Adam|       41|
|Phoebe|       22|
|   Pip|       26|
|   Ian|       36|
+------+---------+

```

```
>>> df.filter(df['age'] > 21).show()
+---+----------------+--------------------+-------------------+-----+
|age|          course|               email|              lives| name|
+---+----------------+--------------------+-------------------+-----+
| 45| MSc Agriculture|                NULL|               NULL|Helen|
| 30|            NULL|S.Carter@borchest...|    Borchester Farm|Alice|
| 40|            NULL|A.Macy@borchester...|Honeysuckle Cottage| Adam|
| 25|            NULL|P.Archer@borchest...|   Rickyard Cottage|  Pip|
| 35|HND Food Science|                NULL|Honeysuckle Cottage|  Ian|
+---+----------------+--------------------+-------------------+-----+
```
```
>>> df.groupBy("course").count().show()
+----------------+-----+
|          course|count|
+----------------+-----+
|         BSc PPE|    1|
| MSc Agriculture|    2|
|            NULL|    4|
|BSc Horticulture|    2|
|HND Food Science|    1|
+----------------+-----+

```

=== Using SQL Queries

```
>>> df.createOrReplaceTempView("student")
>>> sqlDF = spark.sql("SELECT name, age, course FROM student WHERE age > 21")
>>> sqlDF.show()
+-----+---+----------------+
| name|age|          course|
+-----+---+----------------+
|Helen| 45| MSc Agriculture|
|Alice| 30|            NULL|
| Adam| 40|            NULL|
|  Pip| 25|            NULL|
|  Ian| 35|HND Food Science|
+-----+---+----------------+

```

```
>>> df.select(df["name"], df["lives"]).show()
+------+-------------------+
|  name|              lives|
+------+-------------------+
|   Tom|        Bridge Farm|
| Helen|               NULL|
| Alice|    Borchester Farm|
|Johnny|        Bridge Farm|
|  Ruth|    Brookfield Farm|
|   Ben|    Brookfield Farm|
|  Adam|Honeysuckle Cottage|
|Phoebe|             Oxford|
|   Pip|   Rickyard Cottage|
|   Ian|Honeysuckle Cottage|
+------+-------------------+
```

```
>>> df.groupBy("lives").count().show()
+-------------------+-----+
|              lives|count|
+-------------------+-----+
|             Oxford|    1|
|   Rickyard Cottage|    1|
|               NULL|    1|
|Honeysuckle Cottage|    2|
|        Bridge Farm|    2|
|    Brookfield Farm|    2|
|    Borchester Farm|    1|
+-------------------+-----+

```

```
>>> spark.sql("SELECT name, lives FROM student").show()
+------+-------------------+
|  name|              lives|
+------+-------------------+
|   Tom|        Bridge Farm|
| Helen|               NULL|
| Alice|    Borchester Farm|
|Johnny|        Bridge Farm|
|  Ruth|    Brookfield Farm|
|   Ben|    Brookfield Farm|
|  Adam|Honeysuckle Cottage|
|Phoebe|             Oxford|
|   Pip|   Rickyard Cottage|
|   Ian|Honeysuckle Cottage|
+------+-------------------+

```

```
>>> spark.sql("SELECT lives, COUNT (*) as count FROM student GROUP BY lives ").show()
+-------------------+-----+
|              lives|count|
+-------------------+-----+
|             Oxford|    1|
|   Rickyard Cottage|    1|
|               NULL|    1|
|Honeysuckle Cottage|    2|
|        Bridge Farm|    2|
|    Brookfield Farm|    2|
|    Borchester Farm|    1|
+-------------------+-----+

```

#pagebreak()

== `weather.json`

=== Using data frames
```
>>> df = spark.read.json("weather.json")
26/04/17 08:32:57 WARN SparkStringUtils: Truncated the string representation of a plan since it was too large. This behavior can be adjusted by setting 'spark.sql.debug.maxToStringFields'.
>>> df.show(40)
+------------+-----------+--------------------+--------------------+--------------------+--------------+---------+----+-------------------+-------------------+-----------------------+---------------------+-------------------------+-------------------+-----------------------+---------------+----+-------------+--------------------+------------------+--------------------+-------------------+--------------------+-------------+---------+--------------------+--------------------+--------------------+---------+--------------------+
|contributors|coordinates|          created_at|            entities|   extended_entities|favorite_count|favorited| geo|                 id|             id_str|in_reply_to_screen_name|in_reply_to_status_id|in_reply_to_status_id_str|in_reply_to_user_id|in_reply_to_user_id_str|is_quote_status|lang|     metadata|               place|possibly_sensitive|       quoted_status|   quoted_status_id|quoted_status_id_str|retweet_count|retweeted|    retweeted_status|              source|                text|truncated|                user|
+------------+-----------+--------------------+--------------------+--------------------+--------------+---------+----+-------------------+-------------------+-----------------------+---------------------+-------------------------+-------------------+-----------------------+---------------+----+-------------+--------------------+------------------+--------------------+-------------------+--------------------+-------------+---------+--------------------+--------------------+--------------------+---------+--------------------+
|        NULL|       NULL|Mon Feb 03 20:02:...|{[], NULL, [], [{...|                NULL|             0|    false|NULL|1224423049782603783|1224423049782603783|            Lillybetmax|  1224417619173834752|      1224417619173834752|1139793943032414208|    1139793943032414208|          false|  en| {en, recent}|                NULL|              NULL|                NULL|               NULL|                NULL|            0|    false|                NULL|<a href="http:
...
only showing top 40 rows

```

```
>>> df.printSchema()
root
 |-- contributors: string (nullable = true)
 |-- coordinates: string (nullable = true)
 |-- created_at: string (nullable = true)
 |-- entities: struct (nullable = true)
 |    |-- hashtags: array (nullable = true)
 |    |    |-- element: struct (containsNull = true)
 |    |    |    |-- indices: array (nullable = true)
 |    |    |    |    |-- element: long (containsNull = true)
 |    |    |    |-- text: string (nullable = true)
 |    |-- media: array (nullable = true)
 |    |    |-- element: struct (containsNull = true)
 |    |    |    |-- display_url: string (nullable = true)
 |    |    |    |-- expanded_url: string (nullable = true)
 |    |    |    |-- id: long (nullable = true)
 |    |    |    |-- id_str: string (nullable = true)
 |    |    |    |-- indices: array (nullable = true)
 |    |    |    |    |-- element: long (containsNull = true)
 |    |    |    |-- media_url: string (nullable = true)
 |    |    |    |-- media_url_https: string (nullable = true)
 |    |    |    |-- sizes: struct (nullable = true)
 |    |    |    |    |-- large: struct (nullable = true)
 |    |    |    |    |    |-- h: long (nullable = true)
 |    |    |    |    |    |-- resize: string (nullable = true)
 |    |    |    |    |    |-- w: long (nullable = true)
 |    |    |    |    |-- medium: struct (nullable = true)
 |    |    |    |    |    |-- h: long (nullable = true)
 |    |    |    |    |    |-- resize: string (nullable = true)
 |    |    |    |    |    |-- w: long (nullable = true)
 |    |    |    |    |-- small: struct (nullable = true)
 |    |    |    |    |    |-- h: long (nullable = true)
 |    |    |    |    |    |-- resize: string (nullable = true)
 |    |    |    |    |    |-- w: long (nullable = true)
 |    |    |    |    |-- thumb: struct (nullable = true)
 |    |    |    |    |    |-- h: long (nullable = true)
 |    |    |    |    |    |-- resize: string (nullable = true)
 |    |    |    |    |    |-- w: long (nullable = true)
 |    |    |    |-- type: string (nullable = true)
 |    |    |    |-- url: string (nullable = true)
 |    |-- symbols: array (nullable = true)
 |    |    |-- element: string (containsNull = true)
 |    |-- urls: array (nullable = true)
 |    |    |-- element: struct (containsNull = true)
 |    |    |    |-- display_url: string (nullable = true)
 |    |    |    |-- expanded_url: string (nullable = true)
 |    |    |    |-- indices: array (nullable = true)
 |    |    |    |    |-- element: long (containsNull = true)
 |    |    |    |-- url: string (nullable = true)
 |    |-- utc_offset: string (nullable = true)
...

```

```
>>> df.count()
250
>>> df.first()
Row(contributors=None, coordinates=None, created_at='Mon Feb 03 20:02:58 +0000 2020', entities=Row(hashtags=[], media=None, symbols=[], urls=[Row(display_url='twitter.com/i/web/status/1…', expanded_url='https:
>>> df.take(2)
[Row(contributors=None, coordinates=None, created_at='Mon Feb 03 20:02:58 +0000 2020', entities=Row(hashtags=[], media=None, symbols=[], urls=[Row(display_url='twitter.com/i/web/status/1…', expanded_url='https:
>>> df.describe().show()
+-------+------------+-----------+--------------------+-----------------+----+--------------------+--------------------+-----------------------+---------------------+-------------------------+--------------------+-----------------------+----+--------------------+--------------------+-----------------+--------------------+--------------------+
|summary|contributors|coordinates|          created_at|   favorite_count| geo|                  id|              id_str|in_reply_to_screen_name|in_reply_to_status_id|in_reply_to_status_id_str| in_reply_to_user_id|in_reply_to_user_id_str|lang|    quoted_status_id|quoted_status_id_str|    retweet_count|              source|                text|
+-------+------------+-----------+--------------------+-----------------+----+--------------------+--------------------+-----------------------+---------------------+-------------------------+--------------------+-----------------------+----+--------------------+--------------------+-----------------+--------------------+--------------------+
```

```
>>> df.describe().first()
Row(summary='count', contributors='0', coordinates='0', created_at='250', favorite_count='250', geo='0', id='250', id_str='250', in_reply_to_screen_name='79', in_reply_to_status_id='71', in_reply_to_status_id_str='71', in_reply_to_user_id='79', in_reply_to_user_id_str='79', lang='250', quoted_status_id='28', quoted_status_id_str='28', retweet_count='250', source='250', text='250')
```

```
>>> df.select("user.screen_name").show(40)
+---------------+
|    screen_name|
+---------------+
|  highland_andy|
|  highland_andy|
|   WAWilliams15|
|      AKinniyos|
|       pararu25|
| WalesCoastPath|
|       MadFitba|
|    Lillybetmax|
|         Duo935|
|          owz09|
|      CairnToby|
|        SGIRE82|
|   BaitTheLines|
|townsendoutdoor|
|  jaewestside12|
|  highland_andy|
|     KateVause1|
|   stoneartgall|
|svencjohn_steve|
|          PGWCC|
|     Nightfly28|
|      gcmallers|
|   MCThomas1965|
|CarolPoyerPeett|
|        gez1087|
|serimalbpickles|
|     Samwill444|
| EmmamorrisxELM|
|   WAWilliams15|
|        Mairebc|
| Weather_Nathan|
|   wenglishpaul|
|    RuthHolmes2|
|      leanjeanp|
|DerekTheWeather|
|   MCThomas1965|
|  ruths_gallery|
|       TimTar96|
|  ruths_gallery|
|  goldfinches12|
+---------------+
only showing top 40 rows
```
```
>>> df.filter(df['lang'] == 'en
  File "<python-input-24>", line 1
    df.filter(df['lang'] == 'en
                            ^
SyntaxError: unterminated string literal (detected at line 1)
>>> df.filter(df['lang'] == 'en').show()
+------------+-----------+--------------------+--------------------+-----------------+--------------+---------+----+-------------------+-------------------+-----------------------+---------------------+-------------------------+-------------------+-----------------------+---------------+----+------------+--------------------+------------------+-------------+----------------+--------------------+-------------+---------+--------------------+--------------------+--------------------+---------+--------------------+
|contributors|coordinates|          created_at|            entities|extended_entities|favorite_count|favorited| geo|                 id|             id_str|in_reply_to_screen_name|in_reply_to_status_id|in_reply_to_status_id_str|in_reply_to_user_id|in_reply_to_user_id_str|is_quote_status|lang|    metadata|               place|possibly_sensitive|quoted_status|quoted_status_id|quoted_status_id_str|retweet_count|retweeted|    retweeted_status|              source|                text|truncated|                user|
+------------+-----------+--------------------+--------------------+-----------------+--------------+---------+----+-------------------+-------------------+-----------------------+---------------------+-------------------------+-------------------+-----------------------+---------------+----+------------+--------------------+------------------+-------------+----------------+--------------------+-------------+---------+--------------------+--------------------+--------------------+---------+--------------------+
|        NULL|       NULL|Mon Feb 03 20:02:...|{[], NULL, [], [{...|             NULL|             0|    false|NULL|1224423049782603783|1224423049782603783|            Lillybetmax|  1224417619173834752|      1224417619173834752|1139793943032414208|    1139793943032414208|          false|  en|{en, recent}|                NULL|              NULL|         NULL|            NULL|                NULL|            0|    false|                NULL|<a href="http:
+------------+-----------+--------------------+--------------------+-----------------+--------------+---------+----+-------------------+-------------------+-----------------------+---------------------+-------------------------+-------------------+-----------------------+---------------+----+------------+--------------------+------------------+-------------+----------------+--------------------+-------------+---------+--------------------+--------------------+--------------------+---------+--------------------+
only showing top 20 rows
```

```
>>> df.filter(df['lang'] == "en").select('user.screen_name',
... 'user.location').show(40)
+---------------+--------------------+
|    screen_name|            location|
+---------------+--------------------+
|  highland_andy|Highlands of Scot...|
|      AKinniyos|                Utah|
| WalesCoastPath|               Wales|
|       MadFitba|                    |
|    Lillybetmax|   God's Own County |
|         Duo935|      United Kingdom|
|          owz09|     Ammanford,wales|
|      CairnToby|                    |
|        SGIRE82|             Ireland|
|   BaitTheLines|      Swansea, Wales|
|townsendoutdoor|          Cairngorms|
|  highland_andy|Highlands of Scot...|
|     KateVause1|Weston-super-Mare...|
|   stoneartgall|                    |
|svencjohn_steve|       Pembrokeshire|
|          PGWCC|Port Glasgow Inve...|
|     Nightfly28|   Coleford, England|
|      gcmallers|     Hawarden, Wales|
|   MCThomas1965|    Wicklow, Ireland|
|CarolPoyerPeett|          West Wales|
|        gez1087|            Wales UK|
|serimalbpickles|               Wales|
|     Samwill444|           Llanmadoc|
| EmmamorrisxELM|Wales, United Kin...|
|   WAWilliams15|               Wales|
|        Mairebc|      🏴󠁧󠁢󠁷󠁬󠁳󠁿|
| Weather_Nathan|Uk, Doncaster, So...|
|   wenglishpaul|      Cardiff, Wales|
|    RuthHolmes2|            Scotland|
|      leanjeanp|    Central Scotland|
|DerekTheWeather|Barrybados-Cardif...|
|   MCThomas1965|    Wicklow, Ireland|
|  ruths_gallery|Twickenham, Great...|
|       TimTar96|         Buckingham |
|  goldfinches12| Eastbourne, England|
|PaoloSaracino10|                    |
|    MyLunaRose1|          Surrey UK |
|        GRMcKen|          NW England|
|        JFr4ser|             Glasgow|
|    SBillcliffe|                    |
+---------------+--------------------+
only showing top 40 rows
```

```
>>> df.select('text').filter(df['text'].contains("sun")).show(10, False)
+--------------------------------------------------------------------------------------------------------------------------------------------+
|text                                                                                                                                        |
+--------------------------------------------------------------------------------------------------------------------------------------------+
|RT @frasergj: A sunny day at @StirUni this afternoon....until the wind picked up, blowing rain clouds over #Stirling (3/2) #WeatherWatcherG…|
|RT @frasergj: After a sunny start around #Stirling winds blowing rain clouds across (3/2) #WeatherWatcherGraham @BBCScotWeather @BBCAimsir… |
|RT @frasergj: A sunny day at @StirUni this afternoon....until the wind picked up, blowing rain clouds over #Stirling (3/2) #WeatherWatcherG…|
|RT @frasergj: A sunny day at @StirUni this afternoon....until the wind picked up, blowing rain clouds over #Stirling (3/2) #WeatherWatcherG…|
|RT @frasergj: After a sunny start around #Stirling winds blowing rain clouds across (3/2) #WeatherWatcherGraham @BBCScotWeather @BBCAimsir… |
|#sunset over #m6n #rushhour @bbcmtd @bbcweather Birmingham https:
|A chilly sunset in ryhill park @JonMitchellITV @kerriegosneyTV @itvweather @metoffice @BBCWthrWatchers @bbcweather… https:
|A sunny day at @StirUni this afternoon....until the wind picked up, blowing rain clouds over #Stirling (3/2)… https:
|RT @frasergj: After a sunny start around #Stirling winds blowing rain clouds across (3/2) #WeatherWatcherGraham @BBCScotWeather @BBCAimsir… |
|RT @frasergj: After a sunny start around #Stirling winds blowing rain clouds across (3/2) #WeatherWatcherGraham @BBCScotWeather @BBCAimsir… |
+--------------------------------------------------------------------------------------------------------------------------------------------+
only showing top 10 rows

```

=== using SQL Queries

```
>>> sqlDF = spark.sql("SELECT user.screen_name, user.location FROM weather WHERE lang = 'en'")
>>> sqlDF
DataFrame[screen_name: string, location: string]
>>> sqlDF.show()
+---------------+--------------------+
|    screen_name|            location|
+---------------+--------------------+
|  highland_andy|Highlands of Scot...|
|      AKinniyos|                Utah|
| WalesCoastPath|               Wales|
|       MadFitba|                    |
|    Lillybetmax|   God's Own County |
|         Duo935|      United Kingdom|
|          owz09|     Ammanford,wales|
|      CairnToby|                    |
|        SGIRE82|             Ireland|
|   BaitTheLines|      Swansea, Wales|
|townsendoutdoor|          Cairngorms|
|  highland_andy|Highlands of Scot...|
|     KateVause1|Weston-super-Mare...|
|   stoneartgall|                    |
|svencjohn_steve|       Pembrokeshire|
|          PGWCC|Port Glasgow Inve...|
|     Nightfly28|   Coleford, England|
|      gcmallers|     Hawarden, Wales|
|   MCThomas1965|    Wicklow, Ireland|
|CarolPoyerPeett|          West Wales|
+---------------+--------------------+
only showing top 20 rows

```

```
>>> spark.sql("SELECT count(*) AS weather_count FROM weather").show()
+-------------+
|weather_count|
+-------------+
|          250|
+-------------+

```
```
>>> spark.sql("SELECT lang, count(*) AS language_count FROM weather GROUP BY lang").show()
+----+--------------+
|lang|language_count|
+----+--------------+
|  en|           236|
| und|            13|
|  es|             1|
+----+--------------+
```
```

>>> spark.sql("SELECT text FROM weather WHERE text LIKE '%sun%' ").show()
+--------------------+
|                text|
+--------------------+
|RT @frasergj: A s...|
|RT @frasergj: Aft...|
|RT @frasergj: A s...|
|RT @frasergj: A s...|
|RT @frasergj: Aft...|
|#sunset over #m6n...|
|A chilly sunset i...|
|A sunny day at @S...|
|RT @frasergj: Aft...|
|RT @frasergj: Aft...|
|RT @frasergj: Aft...|
|RT @frasergj: Aft...|
|After a sunny sta...|
|RT @Iceman26061: ...|
|Porthleven 2014 t...|
|Monday morning se...|
+--------------------+

```
```
>>> spark.sql("SELECT text FROM weather WHERE UPPER(text) LIKE '%SUN%' ").show(20, False)
+---------------------------------------------------------------------------------------------------------------------------------------------+
|text                                                                                                                                         |
+---------------------------------------------------------------------------------------------------------------------------------------------+
|RT @frasergj: A sunny day at @StirUni this afternoon....until the wind picked up, blowing rain clouds over #Stirling (3/2) #WeatherWatcherG… |
|RT @frasergj: After a sunny start around #Stirling winds blowing rain clouds across (3/2) #WeatherWatcherGraham @BBCScotWeather @BBCAimsir…  |
|RT @frasergj: A sunny day at @StirUni this afternoon....until the wind picked up, blowing rain clouds over #Stirling (3/2) #WeatherWatcherG… |
|RT @frasergj: A sunny day at @StirUni this afternoon....until the wind picked up, blowing rain clouds over #Stirling (3/2) #WeatherWatcherG… |
|RT @simon_weather: Sunrise in Great Yarmouth @StormchaserUKEU @carlharlott @danholley @stormbell @Lowweather @TheSnowDreamer @iainG81 @MetR… |
|RT @frasergj: After a sunny start around #Stirling winds blowing rain clouds across (3/2) #WeatherWatcherGraham @BBCScotWeather @BBCAimsir…  |
|#sunset over #m6n #rushhour @bbcmtd @bbcweather Birmingham https:
|A chilly sunset in ryhill park @JonMitchellITV @kerriegosneyTV @itvweather @metoffice @BBCWthrWatchers @bbcweather… https:
|A sunny day at @StirUni this afternoon....until the wind picked up, blowing rain clouds over #Stirling (3/2)… https:
|RT @frasergj: After a sunny start around #Stirling winds blowing rain clouds across (3/2) #WeatherWatcherGraham @BBCScotWeather @BBCAimsir…  |
|RT @frasergj: After a sunny start around #Stirling winds blowing rain clouds across (3/2) #WeatherWatcherGraham @BBCScotWeather @BBCAimsir…  |
|Sunshine, rain or snow. For me all of the enjoyment of the weather comes from how it feels. ☀️ 🌧 ❄️ https:
|RT @simon_weather: Sunrise in Great Yarmouth @StormchaserUKEU @carlharlott @danholley @stormbell @Lowweather @TheSnowDreamer @iainG81 @MetR… |
|RT @simon_weather: Sunrise in Great Yarmouth @StormchaserUKEU @carlharlott @danholley @stormbell @Lowweather @TheSnowDreamer @iainG81 @MetR… |
|RT @simon_weather: Sunrise in Great Yarmouth @StormchaserUKEU @carlharlott @danholley @stormbell @Lowweather @TheSnowDreamer @iainG81 @MetR… |
|RT @frasergj: After a sunny start around #Stirling winds blowing rain clouds across (3/2) #WeatherWatcherGraham @BBCScotWeather @BBCAimsir…  |
|RT @frasergj: After a sunny start around #Stirling winds blowing rain clouds across (3/2) #WeatherWatcherGraham @BBCScotWeather @BBCAimsir…  |
|After a sunny start around #Stirling winds blowing rain clouds across (3/2) #WeatherWatcherGraham @BBCScotWeather… https:
|RT @ruths_gallery: It looks as if that jackdaw is making a contrail 😳🤣 Sunny spells are forecast for #Twickenham before a cloudy afternoon…|
|RT @ruths_gallery: It looks as if that jackdaw is making a contrail 😳🤣 Sunny spells are forecast for #Twickenham before a cloudy afternoon…|
+---------------------------------------------------------------------------------------------------------------------------------------------+
only showing top 20 rows
```

= Spark and CSV files

== Spark Queries

```
>>> dfPay = spark.read.format("csv").option("header", "true").load("./csv/pay-header.csv")
>>> dfPop = spark.read.format("csv").option("header", "true").load("./csv/pop-header.csv")
>>> dfPay.show()
+--------+----+----------+
|  county|year|annual_pay|
+--------+----+----------+
| Babergh|2004|  21782.00|
| Babergh|2005|  21214.00|
| Babergh|2006|  23140.00|
| Babergh|2007|  22399.00|
| Babergh|2008|  25886.58|
| Babergh|2009|  25659.00|
| Babergh|2010|  25886.58|
| Babergh|2011|  28547.00|
| Babergh|2012|  25870.00|
| Babergh|2013|  25186.00|
| Babergh|2014|  28086.00|
| Babergh|2015|  27757.00|
| Babergh|2016|  25886.58|
| Babergh|2017|  31086.00|
| Babergh|2018|  29913.00|
|Basildon|2004|  24908.00|
|Basildon|2005|  24037.00|
|Basildon|2006|  25568.00|
|Basildon|2007|  26030.00|
|Basildon|2008|  26632.00|
+--------+----+----------+
only showing top 20 rows

```
```
>>> dfPop.show()
+--------+----+----------+
|  county|year|population|
+--------+----+----------+
| Babergh|2004|     52900|
| Babergh|2005|     53200|
| Babergh|2006|     53800|
| Babergh|2007|     53800|
| Babergh|2008|     53800|
| Babergh|2009|     53400|
| Babergh|2010|     53200|
| Babergh|2011|     53000|
| Babergh|2012|     52300|
| Babergh|2013|     52100|
| Babergh|2014|     52100|
| Babergh|2015|     51900|
| Babergh|2016|     51900|
| Babergh|2017|     52000|
|Basildon|2004|    107200|
|Basildon|2005|    108100|
|Basildon|2006|    109000|
|Basildon|2007|    109700|
|Basildon|2008|    110500|
|Basildon|2009|    110700|
+--------+----+----------+
only showing top 20 rows

```
```

>>> dfPop.select("county").show()
+--------+
|  county|
+--------+
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
|Basildon|
|Basildon|
|Basildon|
|Basildon|
|Basildon|
|Basildon|
+--------+
only showing top 20 rows

```
```
>>> dfPop.filter(dfPop['county'] == 'Wolverhampton').show()
+-------------+----+----------+
|       county|year|population|
+-------------+----+----------+
|Wolverhampton|2004|    151800|
|Wolverhampton|2005|    152900|
|Wolverhampton|2006|    154300|
|Wolverhampton|2007|    155400|
|Wolverhampton|2008|    156400|
|Wolverhampton|2009|    156800|
|Wolverhampton|2010|    158000|
|Wolverhampton|2011|    159500|
|Wolverhampton|2012|    159600|
|Wolverhampton|2013|    159300|
|Wolverhampton|2014|    159500|
|Wolverhampton|2015|    160300|
|Wolverhampton|2016|    161700|
|Wolverhampton|2017|    162400|
+-------------+----+----------+

```

== Using sql

```
>>> dfPop.createOrReplaceTempView("pop")
>>> dfPay.createOrReplaceTempView("pay")
>>> sqlDF = spark.sql("SELECT pop.county, population, annual_pay FROM pay, pop WHERE pop.county = pay.county and pop.year = pay.year").show(20, False)
+--------+----------+----------+
|county  |population|annual_pay|
+--------+----------+----------+
|Babergh |52900     |21782.00  |
|Babergh |53200     |21214.00  |
|Babergh |53800     |23140.00  |
|Babergh |53800     |22399.00  |
|Babergh |53800     |25886.58  |
|Babergh |53400     |25659.00  |
|Babergh |53200     |25886.58  |
|Babergh |53000     |28547.00  |
|Babergh |52300     |25870.00  |
|Babergh |52100     |25186.00  |
|Babergh |52100     |28086.00  |
|Babergh |51900     |27757.00  |
|Babergh |51900     |25886.58  |
|Babergh |52000     |31086.00  |
|Basildon|107200    |24908.00  |
|Basildon|108100    |24037.00  |
|Basildon|109000    |25568.00  |
|Basildon|109700    |26030.00  |
|Basildon|110500    |26632.00  |
|Basildon|110700    |27976.00  |
+--------+----------+----------+
only showing top 20 rows

>>> spark.sql("SELECT p.county, p.year, p.population, pa.annual_pay FROm pay pa, pop p WHERE p.county = pa.county AND p.year = pa.year AND p.county='Wolverhampton'").show(20, False)
+-------------+----+----------+----------+
|county       |year|population|annual_pay|
+-------------+----+----------+----------+
|Wolverhampton|2004|151800    |18565.00  |
|Wolverhampton|2005|152900    |19800.00  |
|Wolverhampton|2006|154300    |20010.00  |
|Wolverhampton|2007|155400    |21216.00  |
|Wolverhampton|2008|156400    |22574.00  |
|Wolverhampton|2009|156800    |21598.00  |
|Wolverhampton|2010|158000    |21409.00  |
|Wolverhampton|2011|159500    |21553.00  |
|Wolverhampton|2012|159600    |23192.00  |
|Wolverhampton|2013|159300    |23777.00  |
|Wolverhampton|2014|159500    |22796.00  |
|Wolverhampton|2015|160300    |23096.00  |
|Wolverhampton|2016|161700    |23085.00  |
|Wolverhampton|2017|162400    |24047.00  |
+-------------+----+----------+----------+
```

```
>>> spark.sql("SELECT county, COUNT(*) AS pop_count, SUM(population) as pop_sum FROM pop GROUP BY county ORDER BY county").show(20, False)
+----------------------------+---------+---------+
|county                      |pop_count|pop_sum  |
+----------------------------+---------+---------+
|Adur                        |14       |519500.0 |
|Allerdale                   |14       |831700.0 |
|Amber Valley                |14       |1082400.0|
|Arun                        |14       |1210700.0|
|Ashfield                    |14       |1065700.0|
|Ashford                     |14       |1018000.0|
|Aylesbury Vale              |14       |1594400.0|
|Babergh                     |14       |739400.0 |
|Barking and Dagenham        |14       |1641000.0|
|Barnet                      |14       |3253500.0|
|Barnsley                    |14       |2068800.0|
|Barrow-in-Furness           |14       |605100.0 |
|Basildon                    |14       |1557400.0|
|Basingstoke and Deane       |14       |1517400.0|
|Bassetlaw                   |14       |995900.0 |
|Bath and North East Somerset|14       |1606900.0|
|Bedford                     |14       |1413800.0|
|Bexley                      |14       |2056900.0|
|Birmingham                  |14       |9573800.0|
|Blaby                       |14       |831900.0 |
+----------------------------+---------+---------+
only showing top 20 rows
```

=== Exercises to do

```
>>> spark.sql("""
... SELECT pa.year, po.population, pa.annual_pay
... FROM pay pa
... JOIN pop po
... ON pa.county = po.county
... WHERE po.county = 'Walsall'
... """).show(20, False)
+----+----------+----------+
|year|population|annual_pay|
+----+----------+----------+
|2004|171200    |18678.00  |
|2004|170100    |18678.00  |
|2004|168700    |18678.00  |
|2004|167800    |18678.00  |
|2004|167200    |18678.00  |
|2004|167200    |18678.00  |
|2004|167300    |18678.00  |
|2004|165900    |18678.00  |
|2004|164800    |18678.00  |
|2004|163900    |18678.00  |
|2004|162700    |18678.00  |
|2004|161600    |18678.00  |
|2004|160400    |18678.00  |
|2004|159400    |18678.00  |
|2005|171200    |19634.00  |
|2005|170100    |19634.00  |
|2005|168700    |19634.00  |
|2005|167800    |19634.00  |
|2005|167200    |19634.00  |
|2005|167200    |19634.00  |
+----+----------+----------+
only showing top 20 rows
```

```
>>> spark.sql("""
... SELECT year, SUM(population) as sum_pop
... FROM pop
... GROUP BY
... year
... """).show(20, False)
+----+---------+
|year|sum_pop  |
+----+---------+
|2016|3.4856E7 |
|2012|3.43068E7|
|2017|3.49502E7|
|2014|3.44762E7|
|2013|3.43518E7|
|2005|3.27697E7|
|2009|3.38932E7|
|2006|3.31083E7|
|2004|3.24004E7|
|2011|3.43475E7|
|2008|3.37133E7|
|2007|3.34404E7|
|2015|3.46701E7|
|2010|3.41185E7|
+----+---------+
```

```
>>> spark.sql("""
... SELECT county,
... SUM(annual_pay) as sum_annual_pay
... FROM pay
... GROUP BY county
... """).show(10, False)
+--------------+--------------+
|county        |sum_annual_pay|
+--------------+--------------+
|Worcester     |381693.0      |
|Charnwood     |384813.0      |
|North Kesteven|328064.0      |
|Epping Forest |477111.0      |
|Waveney       |342536.0      |
|Arun          |358601.0      |
|Stroud        |392331.0      |
|Maldon        |404408.0      |
|New Forest    |401515.0      |
|Sedgemoor     |334475.0      |
+--------------+--------------+
only showing top 10 rows
```

```
>>> spark.sql("""
... SELECT county,
...     SUM(pa.annual_pay) as sum_annual_pay,
...     SUM(po.population) as sum_pop
... FROM pay pa
... JOIN pop po
... USING(county)
... GROUP BY county
... """).show(10, False)
+--------------+--------------+---------+
|county        |sum_annual_pay|sum_pop  |
+--------------+--------------+---------+
|Worcester     |5343702.0     |1.35795E7|
|Charnwood     |5387382.0     |2.30625E7|
|North Kesteven|4592896.0     |1.38045E7|
|Epping Forest |6679554.0     |1.6584E7 |
|Waveney       |4795504.0     |1.42725E7|
|Arun          |5020414.0     |1.81605E7|
|Stroud        |5492634.0     |1.46775E7|
|Maldon        |5661712.0     |8058000.0|
|New Forest    |5621210.0     |2.1498E7 |
|Sedgemoor     |4682650.0     |1.47255E7|
+--------------+--------------+---------+
only showing top 10 rows

```

#pagebreak()

== HDFS and Apache Spark

```
>>> dfPay2 = spark.read.format("csv").load("hdfs:
>>> dfPay2.show()
+--------+----+--------+
|     _c0| _c1|     _c2|
+--------+----+--------+
| Babergh|2004|21782.00|
| Babergh|2005|21214.00|
| Babergh|2006|23140.00|
| Babergh|2007|22399.00|
| Babergh|2008|25886.58|
| Babergh|2009|25659.00|
| Babergh|2010|25886.58|
| Babergh|2011|28547.00|
| Babergh|2012|25870.00|
| Babergh|2013|25186.00|
| Babergh|2014|28086.00|
| Babergh|2015|27757.00|
| Babergh|2016|25886.58|
| Babergh|2017|31086.00|
| Babergh|2018|29913.00|
|Basildon|2004|24908.00|
|Basildon|2005|24037.00|
|Basildon|2006|25568.00|
|Basildon|2007|26030.00|
|Basildon|2008|26632.00|
+--------+----+--------+
only showing top 20 rows
```

```
>>> dfPay2.select("_c0").show()
+--------+
|     _c0|
+--------+
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
| Babergh|
|Basildon|
|Basildon|
|Basildon|
|Basildon|
|Basildon|
+--------+
only showing top 20 rows
```

```
>>> dfPay2.filter(dfPay2['_c0'] == "Wolverhampton").show()
+-------------+----+--------+
|          _c0| _c1|     _c2|
+-------------+----+--------+
|Wolverhampton|2004|18565.00|
|Wolverhampton|2005|19800.00|
|Wolverhampton|2006|20010.00|
|Wolverhampton|2007|21216.00|
|Wolverhampton|2008|22574.00|
|Wolverhampton|2009|21598.00|
|Wolverhampton|2010|21409.00|
|Wolverhampton|2011|21553.00|
|Wolverhampton|2012|23192.00|
|Wolverhampton|2013|23777.00|
|Wolverhampton|2014|22796.00|
|Wolverhampton|2015|23096.00|
|Wolverhampton|2016|23085.00|
|Wolverhampton|2017|24047.00|
|Wolverhampton|2018|24964.00|
+-------------+----+--------+

```

#pagebreak()

== Final Word Count

```
>>> text_file = sc.textFile("hdfs:
>>> counts = text_file.flatMap(lambda line: line.split()) \
...                   .map(lambda word: (word, 1)) \
...                   .reduceByKey(lambda a, b: a + b)
>>> counts.collect()
[('in', 1), ('galaxy', 1), ('Another', 1), ('A', 1), ('long', 1), ('a', 1), ('away', 1), ('time', 1), ('ago', 1), ('far', 2), ('episode', 1), ('of', 1), ('Star', 1), ('Wars', 1)]
```

```
>>> for x in counts.collect():
...     print(x)
...
('in', 1)
('galaxy', 1)
('Another', 1)
('A', 1)
('long', 1)
('a', 1)
('away', 1)
('time', 1)
('ago', 1)
('far', 2)
('episode', 1)
('of', 1)
('Star', 1)
('Wars', 1)

```

```
>>> counts.saveAsTextFile("hdfs:
>>> counts.toDF().show()
+-------+---+
|     _1| _2|
+-------+---+
|     in|  1|
| galaxy|  1|
|Another|  1|
|      A|  1|
|   long|  1|
|      a|  1|
|   away|  1|
|   time|  1|
|    ago|  1|
|    far|  2|
|episode|  1|
|     of|  1|
|   Star|  1|
|   Wars|  1|
+-------+---+

```

```sh
archbtw:week-7 (main ?) | hdfs dfs -ls /spark_output_word                                                                                                        [09:35]
Found 4 items
-rw-r--r--   3 rokshh supergroup          0 2026-04-17 09:33 /spark_output_word/_SUCCESS
-rw-r--r--   3 rokshh supergroup         39 2026-04-17 09:33 /spark_output_word/part-00000
-rw-r--r--   3 rokshh supergroup         42 2026-04-17 09:33 /spark_output_word/part-00001
-rw-r--r--   3 rokshh supergroup         83 2026-04-17 09:33 /spark_output_word/part-00002
archbtw:week-7 (main ?) | hdfs dfs -cat /spark_output_word/part-00001                                                                                            [09:35]
\('A', 1)
('long', 1)
('a', 1)
('away', 1)
archbtw:week-7 (main ?) | hdfs dfs -get /spark_output_word/part-00001 spark-results.txt                                                                          [09:35]
```
