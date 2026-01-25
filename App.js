// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement("div", {id: "parent"}, [ React.createElement("div", {id: "child1"}, [ React.createElement("h1", {id: "heading1"}, "I am h1"), React.createElement("h2", {id: "heading2"}, "I am h2")]), React.createElement("div", {id: "child2"}, [ React.createElement("h1", {id: "heading1"}, "I am h1"), React.createElement("h2", {id: "heading2"}, "I am h2")] )]);

console.log(parent);

// The HTML has a <div id="root"> — mount the React tree there instead of looking
// for an element with id "parent" which doesn't exist in the DOM.
ReactDOM.createRoot(document.getElementById("root")).render(parent);