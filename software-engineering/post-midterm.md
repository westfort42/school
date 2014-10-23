Lecture 14
==========

*Oct 23*

####The Factory Pattern

**Context**: a reusable framework needs to *create objects*.
**Problem**: how do you enable a programmer to add new app-specific classes into a system built on such a framework?
**Forces**: the framework should create and work with app specific classes that th frameowrk doesn't yet know about
**Solution**: define an interface for creating a single object, but let subclasses decide which class to instantiate. A factory lets a class defer instantiation to subclasses (dependency injection).

###Chapter 7: Focusing on users and their tasks
**User Centered Design**: the idea that software development should focus on the needs of the user. Basically, you design software based on an understanding of the users tasks. Ensure users are involved in dsecision making processes, and get user feedback on every apsect of the software.

**Aspects of usability**: learnability, efficiency of use, error handling, acceptability (how much users like the system).
