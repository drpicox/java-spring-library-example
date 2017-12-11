Blog Web Application
====================

This repository contains a front-back fullstack solution for a blog 
web site application.

Backend is implemented with Spring Boot (JPA, H2 Web), and
Frontend with React+Redux+Redux-Observables (Epics).


Backend
-------

### Start backend:

```bash
$ mvn clean spring-boot:run
```

It works with:
- Apache Maven 3.5.0
- Java version: 1.8.0_131

### Test backend:

```bash
$ mvn test
```



Frontend
--------

Front end is at `frontend/`, so:

```bash
$ cd frontend
```

### Setup frontend:

```bash
$ npm install
```

It works with:
- npm: v5.5.1
- nodejs: v8.9.0
 
### Start frontend:

```bash
$ npm start
```

Remember that it requires the backend running.

### Test backend:

```
$ npm test
```

and with coverage:

```
$ npm test -- --coverage
```

You can ignore this warning: `Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills`.


Backend Files
-------------

Sources folder: `src/main/java`.
Test sources folder: `src/test/java`.

### Jackson

It uses heavily @JsonValue and @JsonCreator annotations to convert from Entity to JSON data and viceversa. Using this mechanism there is no need to use special Services: RestController becomes services that can be used without REST calls.

It might seem strange, but because we want a simple backend-frontend communication, JSON objects only contains the Id of the relationed entities and not its content. Because of it JsonValue and @JsonCreator transformations converts related entities into ids, and ids into stubs of related entities.
It might seem strange to convert material: 

    { 
      id: 4, 
      title: 'a material', 
      authorId: 1
    }

into:

    Post({ 
      id: 4L, 
      title: 'a material', 
      authorId: Author({
        id: 1L,
        name: null,
        email: null
      });
    });

But it works, you can save the Post without problems and without corrupting patron (because you are NOT saving patron). And if you need, you always can get the original patron by:

    User patron = userRestController.getUser(material.getUser().getId());

and then operate with the real patron instance.

Everything of this is possible thanks that "magic" comes from Annotations, and these annotations (and these magic) can be ignored to work with Java classes like POJOs.



### Helper classes

Note that there are classes `*Helper` in tests to help and ease testing.
Although initial testing examples at Spring Guide used _protected_ fields
to encourage reuse code, it is really bad idea to reuse code by inheritance,
because of it these code has been isolated in helpers so they can be reused
through composition.


IntelliJ notes
--------------

To start with "IntelliJ IDEA":

- Select "Import Project"
- Select this project folder.
- Select "Import project from external model"
- Select "Maven"
- Next
- Next
- Next
- Next
- Finish

For speed: right click on "frontend/node_modules" "Mark directory as" > "Excluded"

Add Test All configuration to run:
- Go to the dropdown just before the play button
- Select "Edit Configurations..."
- Select "+"
- Select "JUnit"
- Write into Name: "Test All"
- Select in Test Kind: "All in Package"
- Write into Package: "com.drpicox.blog"

To test one test:
- Go to the test
- Locate the play button in the left
- Click to run the test

To get code coverage, close to the play button, there is a button that has a hint that says: "Run 'Test All' with Coverage".


Eclipse Notes
-------------

To open the project: 
- Menu "File" > "Open Projects from File System..."
- Select the directory
- Finish

To run:
- Right click in the Project name
- Select "Run As"
- Select "Maven Build..."
- Write into Goals: "spring-boot:run"
- Run

To Test:
- Right click `src/test/java` (or any individual package or test suite)
- Select "Run As"
- Select "JUnit Test"
- Results are in the JUnit tab.

To get Coverage (requires Eclipse plugin EclEmma installed):
- Right click `src/test/java` (or any individual package or test suite)
- Select "Coverage As"
- Select "JUnit Test"
- Results are in the JUnit tab.

EclEmma is available in eclipse marketplace, read more at:
- http://www.eclemma.org/installation.html
- http://marketplace.eclipse.org/content/eclemma-java-code-coverage
