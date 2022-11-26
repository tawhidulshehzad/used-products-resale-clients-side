import React from "react";

const Blogs = () => {
  return (
    <div className="p-5">
      <div className="py-5">
        <h2 className="text-3xl py-3">
          {" "}
          What are the different ways to manage a state in a React application?
        </h2>
        <p>
          Local (UI) state – Local state is data we manage in one or another
          component. Local state is most often managed in React using the
          useState hook. For example, local state would be needed to show or
          hide a modal component or to track values for a form component, such
          as form submission, when the form is disabled and the values of a
          form’s inputs. Global (UI) state – Global state is data we manage
          across multiple components. Global state is necessary when we want to
          get and update data anywhere in our app, or in multiple components at
          least. A common example of global state is authenticated user state.
          If a user is logged into our app, it is necessary to get and change
          their data throughout our application. Sometimes state we think should
          be local might become global. Server state – Data that comes from an
          external server that must be integrated with our UI state. Server
          state is a simple concept, but can be hard to manage alongside all of
          our local and global UI state. There are several pieces of state that
          must be managed every time you fetch or update data from an external
          server, including loading and error state. Fortunately there are tools
          such as SWR and React Query that make managing server state much
          easier. URL state – Data that exists on our URLs, including the
          pathname and query parameters. URL state is often missing as a
          category of state, but it is an important one. In many cases, a lot of
          major parts of our application rely upon accessing URL state. Try to
          imagine building a blog without being able to fetch a post based off
          of its slug or id that is located in the URL! There are undoubtedly
          more pieces of state that we could identify, but these are the major
          categories worth focusing on for most applications you build.
        </p>
      </div>
      <div className="py-5">
        <h2 className="text-3xl py-3">
          {" "}
          How does prototypical inheritance work?
        </h2>
        <p>
          JavaScript is a bit confusing for developers experienced in
          class-based languages (like Java or C++), as it is dynamic and does
          not have static types. When it comes to inheritance, JavaScript only
          has one construct: objects. Each object has a private property which
          holds a link to another object called its prototype. That prototype
          object has a prototype of its own, and so on until an object is
          reached with null as its prototype. By definition, null has no
          prototype, and acts as the final link in this prototype chain. It is
          possible to mutate any member of the prototype chain or even swap out
          the prototype at runtime, so concepts like static dispatching do not
          exist in JavaScript. While this confusion is often considered to be
          one of JavaScript's weaknesses, the prototypical inheritance model
          itself is, in fact, more powerful than the classic model. It is, for
          example, fairly trivial to build a classic model on top of a
          prototypical model — which is how classes are implemented. Although
          classes are now widely adopted and have become a new paradigm in
          JavaScript, classes do not bring a new inheritance pattern. While
          classes abstract most of the prototypical mechanism away,
          understanding how prototypes work under the hood is still useful.
        </p>
      </div>
      <div className="py-5">
        <h2 className="text-3xl py-3">
          {" "}
          What is a unit test? Why should we write unit tests?
        </h2>
        <p>
          Unit testing is a type of software testing where individual units or
          software components are tested. Its purpose is to validate that each
          unit of code performs as expected. A unit can be anything you want it
          to be — a line of code, a method, or a class. Generally, smaller tests
          are better as they give a more granular view of your code’s
          performance. Also, when you test very small units, your tests can run
          fast, like a thousand tests in a second fast. To justify any effort in
          business, there must be a positive impact on the bottom line. Here are
          a few benefits to writing unit tests: Unit tests save time and money.
          Usually, we tend to test the happy path more than the unhappy path. If
          you release such an app without thorough testing, you would have to
          keep fixing issues raised by your potential users. The time to fix
          these issues could’ve been used to build new features or optimize the
          existing system. Bear in mind that fixing bugs without running tests
          could also introduce new bugs into the system. Well-written unit tests
          act as documentation for your code. Any developer can quickly look at
          your tests and know the purpose of your functions. It simplifies the
          debugging process. Unit testing is an integral part of extreme
          programming. Extreme programming is basically a
          “test-everything-that-can-possibly-break” programming strategy. Unit
          tests make code reuse easier. If you want to reuse existing code in a
          new project, you can simply migrate both the code and tests to your
          new project, then run your tests to make sure you have the desired
          results. Unit testing improves code coverage. A debatable topic is to
          have 100% code coverage across your application. In the testing
          pyramid, unit tests are faster than integration and end-to-end. They
          are more assertive and return quick feedback.
        </p>
      </div>
      <div className="py-5">
        <h2 className="text-3xl py-3"> React vs. Angular vs. Vue?</h2>
        <p>
          <span className="p-2">
            The choice between React vs Vue is often debated and it’s not an
            easy one. Vue has a vibrant and ever-growing community and has taken
            over popularity vs. React in many respects. React developers are
            still churning out lots of new components and extras, so there’s no
            sign that React is on the decline either. Vue is generally more
            suited to smaller, less complex apps and is easier to learn from
            scratch compared to React. Vue can be easier to integrate into new
            or existing projects and many feel its use of HTML templates along
            with JSX is an advantage. Overall, Vue might be the best choice if
            you’re a newer developer and not as familiar with advanced
            JavaScript concepts, while React is quite well suited for
            experienced programmers and developers who have worked with
            object-oriented JavaScript, functional JavaScript, and similar
            concepts.
          </span>
          <br />
          <br />
          <span className="p-2">
            In most cases, you probably wouldn’t be deciding between only
            Angular and Vue. They are vastly different libraries with very
            different feature sets and learning curves. Vue is the clear choice
            for less experienced developers, and Angular would be preferred for
            those working on larger apps. A large library like Angular would
            require more diligence in keeping up with what’s new, while Vue
            would be less demanding in this regard and the fact that the two
            most recent major releases of Vue are in separate repositories
            helps. It should also be noted that Vue was created by a developer
            who formerly worked on Angular for Google, so that’s another thing
            to keep in mind, though that wouldn’t have a huge impact on your
            decision.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
