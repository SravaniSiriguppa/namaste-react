// import React from "react";
// import ReactDOM from "react-dom/client";
// /* // Use the new client entry for createRoot
// // import { createRoot } from "react-dom/client";

// // const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello from React!");

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);

// // const parent = React.createElement("div", {id: "parent"}, [ React.createElement("div", {id: "child1"}, [ React.createElement("h1", {id: "heading1"}, "I am h1"), React.createElement("h2", {id: "heading2"}, "I am h2")]), React.createElement("div", {id: "child2"}, [ React.createElement("h1", {id: "heading1"}, "I am h1"), React.createElement("h2", {id: "heading2"}, "I am h2")] )]);
// const parent = React.createElement(
// 	"div",
// 	{ id: "parent" },
// 	[
// 		React.createElement(
// 			"div",
// 			{ id: "child1", key: "child-1" },
// 			[
// 				React.createElement("h1", { id: "heading1", key: "child-1-h1" }, "I am h1"),
// 				React.createElement("h2", { id: "heading2", key: "child-1-h2" }, "I am h2")
// 			]
// 		),
// 		React.createElement(
// 			"div",
// 			{ id: "child2", key: "child-2" },
// 			[
// 				React.createElement("h1", { id: "heading1", key: "child-2-h1" }, "I am h1"),
// 				React.createElement("h2", { id: "heading2", key: "child-2-h2" }, "I am h2")
// 			]
// 		)
// 	]
// );

// console.log(parent);

// // The HTML has a <div id="root"> — mount the React tree there instead of looking
// // for an element with id "parent" which doesn't exist in the DOM.
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent); */


// const element = <span> React Element</span>;

// // React.createElement => Object => HTMLElement (via ReactDOM.render())
// // React Element using React.createElement
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React!" );

// console.log(heading);

// // JSX
// // ReactElement using JSX
// // JSZ => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
// const JsxHeading = () => (
//     <h1 className="heading"> 
//     {/* {element} */}
//     Namaste React from JSX!
//     </h1>
// );

// console.log(JsxHeading);

// const number = 1000;
// // React Functional Component
// // Component Composition
// const HeadingComponent1 = () => (
//     <div id="container">
//         {number}
//         <JsxHeading />
//         <h1 className="heading"> Namaste React from functional component</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"))

// // root.render(jsxHeading)
// root.render(< HeadingComponent1 />);


// // const HeadingComponent = () => {
// //     return <h1 id="heading"> Namaste React from functional component</h1>;
// // }

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error';
import RestaurantMenu from "./components/RestaurantMenu";
import { CDN_URL } from "./utils/constants";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const styleCard = {
    backgroundColor: "#f0f0f0",
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData.info;
    // console.log(resData);

    return (
        <div className="restaurant-card" style={styleCard}>
            <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            {/* <h3> {props.resName} </h3>
            <h4> {props.cuisine} </h4>
            <h4> {props.Rating} </h4> */}
            <h3> {name} </h3>
            <h4> {cuisines.join(", ")} </h4>
            <h4> {avgRating} ⭐</h4>
            <h4> ₹{costForTwo / 100} FOR TWO </h4>
            <h4> {deliveryTime} MINS</h4>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />)