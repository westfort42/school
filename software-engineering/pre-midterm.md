Lecture 1
=========

*Sep 9*

Figure out what we actually have to do for the project - Dr Wei says mobile compatibility, what does that really mean? Write the API in Java and the front-end in Ember?

Group Project:
- Derek - API/ORM
- Issac - ORM/Server-side logic
- McCutcheons - DB
- Me - Client-side

For the project, we can use whatever crappy ole thing we want, like Rails or Node or Meteor but never PHP. Make a little babby mockup in Meteor to convince them of that being the worlds easiest technology.

Software is hard to understand, easy to reproduce (low cost, and you can just hit copy and paste to reproduce it), and labor intensive (you can't automate it)

Sofrware can never be perfect..

Lecture 2
=========

*Sep 11*

We'll look at some different dev-lifecycle models.

######The Waterfall Model
1. Requirement Definition
2. Software Design
3. Implementation
4. Testing
5. Maintenance

######Incremental Development
- Outline Description
- Specification, dev, tests are done concurrently (think Test-Driven-Development)
- Several versions are developed until project requirements are satisfied
*This is kind of like Agile development*

######Agile
Agile is a buzzword that means different things. According to this course, agile dev is as follows:

"We are uncovering better ways of developing software by doing it and helping others do it. Through this work, we have come to value
- Individuals and interactions over processes and tools
- Working software over comprehensive docs
- Customer collaboration over contract negotiation
- Responding to change over following a plan

That is, while there is value in the items on the right, we value the items on the left more."

Principles:

- Active user involvment is imperative
- The team must be empowered to make decisions
- Requirements evolve but timescale is fixed
- Capture ligthweight requirements at a high level
- Develop small, incremental releases and iterate

Great. This course will cover "classic" software engineering, but will also cover "the new hipster shit". *(Not an actual quote from Dr. Wei)*

######More Buzzwords
- *Agile* methods are incremental dev methods invented by Rails programmers at 37Signals.
- *Extreme programming* and *scrum* methods are widely used Agile methods, used by recruiters at IBM to attract 19 year old Fortran developers.
- Many small and medium companies and teams use these methods, since in large companies, nothing is ever easy like it is in small companies. Oh, you're at big company and you to change a while statement to a for loop? Good luck getting that one by management buddy.

Honestly in 2014,  if you use microservices instead of large frameworks, write modular code, write tests and follow SemVer, you'll be a-ok :)

Things I think are actually valuable in real life:
- Using UMLs where appropriate
- Defining DB schema even in NoSQL DBs
- Following SemVer, using a software repo, using version control

######Back To Agile Wizardry
Super Important Stuff
- Focus on frequent delivery of software
- Complete each feature before moving onto the next
- Apply the 80/20 principle (80% of work is produced by 20% of the system. I think this means that for every 100 lines of code, 80 should be unit tests. The other 20 should be functional tests you amateur)
- Testing is integrated throughout the project
- A collaborative and cooperative approach between all stakeholders is essential as heck

Getting away from Agile and back to the classsic approach, lets look at...

####Domain Analysis

This is the process by which the software engineer learns about the problem they're trying to solve. A domain expert is the guy who knows the most about the problem, or the field the problem is in. Also, if your software doesn't solve any problems, turn off your computer and go something else.

The domain analysis doc is a real pile of crap. There's just no way you need all these letters,
A. Intro
B. Glossary
C. General knowledge about domain
D. Customer and users
E. Environment

There're more but I didn't write it down.

####Defining the Problem and the Scope
Write down what the problem is on a napkin and give it to your boss, who will give it to the investors. Next step please.
But for real, the problem's definition should be short enough that you can say the whole thing during an elevator ride ("the elevator pitch").

####What is the Requirement?

It's a statment describing what the proposed system should do. Its **not** "delighting users and investors". This isn't the article you wrote on [http://medium.com](Medium) about your startup. If you're a lawyer at IBM, it's also the negotiated agreement between all the stakeholders.

Types of requirements:

1. Functional requirements - what the thing should do. What're the input devices? How about the output? Is there a DB? Is it synchronous?
2. Quality requirements - how good it should be. Usually, you'll want to put "good" and "secure". Quality requirements must be *verifiable*, so its stuff like response time, throughput, reiability/availability, failure recovery, etc.
3. Platform requirements - constraints on the environment and tech. In 2002, its always "JVM". In 2014, its always "web". In 2016, its always "Oculus Rift".
4. Process requirements - constraints on the plans and methods. I don't know what the point of this one is.

If you don't understand any of this, try looking at the README for any succesful open source project.

Lecture 3
=========

*Sep 16*

######Central Use Case
This is supposed to be the use case that is the most typical. It's basically the core of what the application does. The entire system needs to be built around this use case. Use cases help define the scope of the system, and help plan the development process accordingly. They also validate requirements (although its pretty weird if you have requirements without having a reason to use the app...). This also will help structure the user manual, and inspire the tests you'll write.

####Requirements Documentation
1. Problem
2. Background Info
3. Environment and system models
4. Functional requirements
5. Non-functional requirements

######What Is A Requirement?
Each requirements should outweight the cost of development, contribute to the solution of the current problem, be expressed using a clear and consistent notation, be unambiguous, be logically consistent, lead to a system of sufficient quality, be realistic within available resources, be verifiable, be uniquely identifiable, and should not over-constrain the design of the system.

####Object-Oriented Software Engineering
This means we get to use UMLs. The course also focuses on Java. So what is object orientation? I actually can't bring myself to write about it, it's already been talked about so much up until this point. You know what it is.

At this point, you're probably going to want to invest in some UML building software or web tool cause this keeps coming up.

Lecture 5
=========

*Sep 23*

In lecture 4 which I wasn't around for, we just reviewed UMLs and how Java handles object orientation. Let's review more:

######Access Control
- `public` any class can access
- `protected` only code in the package or subclasses can access
- (blank) only code in the package can access
- `private` only code written in the class can access, inheritance still occurs though (obviously)

######Threads and Concurrency
This is the sequence of executing statements that can be runing concurrently with other threads. To create a thread in Java,
- create a class implementing `Runnable` or extending `Thread`
- implement the `run` method as a loop that does something for a period of time
- create an instance of this class
- invoke the `start` operation, which calls `run`

######Programming Style Guidelines
- remember programs are *for people to read*
- always choose the simpler alternative
- reject clever code that is hard to understand **(read this with some skepticism)**
- shorter code is not necessarily better
- choose good names
    - make them descriptive
    - don't worry if they're long, that's fine
- comment whatever is non-obvious
- do not comment the obvious (debatable)
- comments should be about 25-50% of the code
- organize class elements consistently:
    - variables, constructors, public methods, followed by private methods
- be consistent regarding layout of code (whitespace, indentation, etc)
- **avoid duplication of code**!!!!!
    - reuse it whenever you possibly can
    - extend things, create new methods if necessary, just make it nice and modular and extendable and everything good (read the source for (Telescope)[http://telesc.pe) because Sascha Greif's code is insanely good)
- adhere to the "is a" rule
- prefer private as opposed to public
- do not mix UI code with non UI code!
    - this makes non UI code more reusable
- this wasn't in the slides, but this is an obvious one: if something looks like it might throw an exception, handle it!!

######UML Diagrams
- class diagrams
    - describe classes and their relationships
- interaction diagrams
    - show behaviour of systems in terms of how objects interact with each other
- state diagrams
    - show how systems behave internally
- component and deployment diagrams
    - show how the various compnents of systems are arranged logically and physically

######What Makes A Good Model?

A model should:
- use a standard notation
- be understandable by clients and users
- lead software engineers to have insights about the system
- provide abstraction
- help create diagrams
- permit analysis and review of those designs
- contain documentation

Lecture ???
===========

*Oct 16*

The stupid midterm will be **next Tuesday**. As of 1:05PM, I have no idea what's going on in this class.

Assignment 1: Wtf... mark received was 78/100. I got marks reduced for suggesting that we implement fast search queries. I forgot that was bad.

####Midterm Info:
######Chapter 1
- some characteristics of software
- what is software?
- software quality
- software lifecycle

######Chpater 2
- OO vs structured
- classes and objects
- class generalization and inheritance
- polymorphism, encapsulation

######Chapter 3
- Reuse in SE?
    - develop software with code reusability in mind, etc
- frameworks (socks and hooks)
  > wtf does that mean???
- client-server architecture
- OCSF & SimpleClient, protocols like TCP/IP, HTTP, whatever
- you need to be able to understand a class diagram, UML, whatever

######Chapter 4
- domain analysis
- scope of software and defining the problem
- functional and quality requirements
- use cases for the requirements

######Chapter 5
- UML class diagrams
- class generalization, object diagram
- object diagram and interface
- derive from class diagram
    - identify attributes and operations
    - define classes
    - distribute the attributes and operations to classes

######Chapter 6
- design patterns
    - specialization-occurence pattern
    - player-role pattern
    - 
