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


