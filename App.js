// const span = React.createElement("span", {}, "React!");

// React Elements = Javascript Objects

// const heading = React.createElement("h1", { id: "heading" }, span); // Object

// console.log("Hello!", heading);

/**
 *
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>This is h1 tag!</h1>
 *      </div>
 * </div>
 *
 */

// const parent = React.createElement(
//   // Creates a JS object
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "This is h1 tag!")
//   )
// );

/**
 *
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>This is h1 tag!</h1>
 *          <h2>This is h2 tag!</h2>
 *      </div>
 * </div>
 *
 */

// const parent = React.createElement(
//   // Creates a JS object
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is h1 tag!"),
//     React.createElement("h2", {}, "This is h2 tag!"),
//   ])
// );

/**
 *
 *
 * <div id="parent">
 *      <div id="child1">
 *          <h1>This is h1 tag!</h1>
 *          <h2>This is h2 tag!</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>This is h1 tag!</h1>
 *          <h2>This is h2 tag!</h2>
 *      </div>
 * </div>
 *
 */

const parent = React.createElement(
  // Creates a JS object
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "This is h1 tag!"),
      React.createElement("h2", {}, "This is h2 tag!"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "This is h1 tag!"),
      React.createElement("h2", {}, "This is h2 tag!"),
    ]),
  ]
);

console.log("Parent!", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("root", root);

// React Element(Obejct) => HTML(Bowser Understands)
root.render(parent);
