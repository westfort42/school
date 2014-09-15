Lecture 1
=========

*Sep 8*

*Nothing*.

Lecture 2
=========

*Sep 10*

Network Databses: Have a one-to-many relationship, ie, a doctor has many patients.

Relational: Have a many-to-one relationship, ie, each patient has a doctor.

####Relational

Is based upon a key-value store (*single field primary key*). These relational databases are two-dimensional. There are also multidimensional database architectures (these are usually used in data warehousing).

Types of Database Applications:

- Personal: one user, client only.
- Two tier: less than 100 users, client/server communicate directly.
- Three tier: less than 1000 users, client/server communicate through some application server (like a web server) which talks to a database management system).

This course is basically just about SQL databases, and Allaire likes to use MS Access. As a mac user, this is a real kick in the dick.

Lecture 3
=========

*Sep 12*

How to name data: make it business related, non-technical, meaningful, self-documenting, unique, readable, and repeatable.

For example, say *Phone Number* instead of *PHNO* (or something weird like that).

######Entity-Relationship Model Constructs

**Entities**: stuff that corresponds to a row in the tale -- a person, place, thing, object, whatever.
**Relationships**: links between entities.
**Attributes**: characteristics of an entity or relationship (usually corresponds to a field or table or row or something like that).

**Mac User Tip**: Don't want to use MS Access? Try this trash <a href="https://itunes.apple.com/app/id417392270?mt=12">MDB ACCDB Viewer</a>. Also, Allaire was born in January.

This way E-R Models actually work is way easier to understand when you're looking at one. Just rememer this explanation when you find yourself doing that :).

Lab 1
=====

*Sep 15*

Identifiers: there are two kinds.
- Simple identifier: This is basically just its name in declaration. For example, 
```sql
DECLARE
	a INTEGER;
```
- Complex identifier (also called qualified identifier): This is a reference to the identifier, instead of just it's name. For example,
```sql
BEGIN
	a := 1
END
```

######Modeling Relationships
*Relationship types* are lines between entity types, *relationship instances* are between specific entity instances. Relationships can have attributes (as mentioned before, these describe features describing the association between the entitites in the relationship).

####The Relational Model
- Data goes in tables
- Stuff in tables has relationships between them

For example, a relationship between an entity like a  car and an entity like a person is "drives" (person drives car). This was Allaire's wild example.

######Cardinality
This just means you can impose a limit on the amount of children a parent element has.
