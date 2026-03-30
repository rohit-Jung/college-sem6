
#set document(
  title: "Big Data Process Report - Sales Analytics",
  author: "Group Members",
)

#set text(font: "Times New Roman", size: 12pt, lang: "en")
#set heading(numbering: "1.")
#set par(justify: true, leading: 0.65em)

#set page(
  paper: "a4",
  margin: (x: 2.5cm, y: 2.5cm),
  numbering: none,
  header: none,
)

#align(center)[
  #v(2cm)

  #text(size: 14pt)[Big Data | 6CS030]

  #v(3cm)

  #text(size: 28pt, weight: "bold")[Interaction with MongoDB \ using `mongosh`]

  #v(0.5cm)

  #text(size: 16pt)[NoSQL databases]

  #v(1cm)

  #line(length: 50%)

  #v(4cm)

  *Submitted By:*
  #v(0.3cm)
  Rohit Jung Kathet \
  L5CG15

]

#pagebreak()

#outline(title: [Table of Figures], indent: auto, depth: 3)

#pagebreak()

#outline(title: [Table of Contents], indent: auto, depth: 3, target: figure)

#pagebreak()


#set page(
  paper: "a4",
  margin: (x: 2.5cm, y: 2.5cm),
  numbering: "あ",
  header: align(right)[_Big Data - MongoDB_],
)
#counter(page).update(1)

= MongoDB Workshop Exercises

== Exercise 2.1

=== Inserting Departments

#figure(
  image("assets/insert-depts.png", width: 98%),
  caption: [Insert Departments],
) <fig-insert-depts>


#figure(
  image("assets/write-error-duplicate-key.png", width: 98%),
  caption: [Duplicate Key write error],
) <fig-write-error-duplicate-key>


#pagebreak()

=== Question 01:  comparing INSERT operation
\

1. *Compare how you added the above data and how it differs from INSERT records in a relational database*

*Ans*: We directly added the data into the db using `insert` command while in the relational db we
had to first define the schema of table (how the data we are going to store looks like) and then only we could
insert data according to that schema/interface defined.
\

2. *Add Department 30, which has the following `key/values: _id: 30, deptno: 30, dname: SALES and loc: CHICAGO`*


#figure(
  image("assets/insert-newdept.png", width: 98%),
  caption: [Inserting new department],
) <fig-insert-newdept>


#pagebreak()


== Exercise 2.2

=== Inseting bulk employee

#figure(
  image("assets/bulk-insert-emp.png", width: 98%),
  caption: [Bulk Inserting Emp],
) <fig-bulk-insert-emp>


=== Question 01: adding table employees

Add the employees for Department 30.
Remember this time, some employees will have a commission (COMM):

#table(
  columns: (1fr, 1.2fr, 1.4fr, 0.8fr, 1.4fr, 0.8fr, 1fr, 1.3fr),
  inset: 4pt,
  stroke: 0.5pt,
  [*EMPNO*],
  [*ENAME*],
  [*JOB*],
  [*MGR*],
  [*HIREDATE*],
  [*SAL*],
  [*COMM*],
  [*DEPTNO*],

  [7499], [ALLEN], [SALESMAN], [7698], [20-FEB-95], [1600], [300], [30],
  [7698], [BLAKE], [MANAGER], [7839], [01-MAY-81], [2850], [], [30],
  [7900], [JAMES], [CLERK], [7698], [03-DEC-81], [950], [], [30],
  [7654], [MARTIN], [SALESMAN], [7698], [28-SEP-93], [1250], [1400], [30],
  [7844], [TURNER], [SALESMAN], [7698], [08-SEP-81], [1500], [0], [30],
  [7521], [WARD], [SALESMAN], [7698], [22-FEB-94], [1250], [500], [30],
)


#figure(
  image("assets/data-from-table.png", width: 98%),
  caption: [Inserted Data from Given Table],
) <fig-data-from-table>

== Exercise 2.4

=== Update the name of department 40 to: COMPUTING

#figure(
  image("assets/udpate-one-dept.png", width: 98%),
  caption: [Update Dept to ACCOUNTING],
) <fig-udpate-one-dept>

=== Update the salary of employee number 7788 in department 20 to 3500

#figure(
  image("assets/update-salary.png", width: 98%),
  caption: [Update the salary of emp],
) <fig-update-salary>
