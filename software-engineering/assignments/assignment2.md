Individual Project
==================

*Submit by Nov 27, 2014 to cs3415@peace.lakeheadu.ca*

What to do:

######Phase 1

1. Download source files of the framework OCSF and project SimpleChat from [http://www.lloseng.com].
2. Compile and test `EchoServer` and `SimpleChat` using Eclipse or the CLI.
3. Complete the following client side modifications:
    - if the server shuts down while client is conneted, display a message to the user
    - the client always uses a default port. Change so the user can pick the port at runtime (similar to the way it obtains the host name)
    - add functionality so that the following commands work:
        - `#quit` terminates gracefully
        - `#logoff` disconnects from the server, but does not quit
        - `#sethost <host>` calls the `setHost` method in the client. Should only work when client is logged off
        - `#setport` <port> does the same thing as above, but calls the `setPort`method
        - `#login` opposite of logoff, should only work when client isn't logged in
        - `#gethost` this is obvious
        - `#getport` this is also obvious
4. Complete the following server-side modifications:
    - write a method in `EchoServer` that overrides a method in `AbstractServer` that displays a message when the client connects or disconnects
    - modify the server-sid so it allows user input. Base this method of the methods in the `ClilentConsole` class, which implements `ChatIF` interface. Do this by adding a new class called `ServerConsole` that implements `ChatIF`. All messages sent should be prefixed by `SERVER`
    - similar to the client side, implement these commands: `#quit, #stop, #close, #setport, #start, #getport`

######Phase 2

Client Side Modifications:

1. Add a `loginId` command line argument to the client. This should be the first arg, (before name and port). The login ID is mandatory, if it is not received it should throw an error. The login ID should be stored in an instance variable in `ChatClient`
2. Once logged in, send the message `#login <loginId>` to the server

Server Side Modifications

1. Modify `handleMessageFromClient` so that the server recognizes the `#login` message passed
2. Save the login ID, so the server can identify the client.
3. Each message echoed by the server should be prefixed by the login ID of the client that sent the message
4. If `#login` is called at any time other than the first command, throw an error and ignore the command
5. If the login command is not received as the first command, send an error message to the cient and terminate the connection `ConnectionToClient`'s `close` method

######Phase 3

1. Modify the SimpleChat system so that is uses the Observable layer of the OCSF. Note that when you use Observable pattern in the application, you also need to use the Adaptable pattern
2. Modify both the server and client according to Figure 6.15 p. 248 of the text

######Optional

1. Design GUI for client
2. Design GUI for server

Allocate around 1 - 2 weeks for each phase.

How To Run This:
================

Once you have ocsf unzipped in yout *home directory* (`~/ocsf`), use the following commands:

```bash
$ cd ocsf
$ find ~/ocsf -name *.java > sources_list.txt
$ javac -Xlint:unchecked -d ~/ocsf -classpath "${CLASSPATH}" @sources_list.txt
```

This compiles it. I haven't figured out how to run it yet.
