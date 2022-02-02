//import React, { Component } from "react";

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar nvbar-light bg-light">
//         <a className="navbar-brand" href="">
//           Navbar
//           <span className="badge badge-pill badge-secondary m-2">
//             {this.props.totalcount}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// 1. or we can define a Stateless Functional Component which does the same work
// this.props only works in class components
// in functional components we need to add props as parameter
// react passes props object as an argument function
// 2. we can use argument destructuring to avoid using "props." repetatively
// 3. We can't use lifecycle hooks like mount,update.. in stateless functions

//const Navbar = (props) => {
const Navbar = ({ totalcount }) => {
  console.log("Navbar- rendered");
  return (
    <nav className="navbar nvbar-light bg-light">
      <a className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalcount}
        </span>
      </a>
    </nav>
  );
};
export default Navbar;
