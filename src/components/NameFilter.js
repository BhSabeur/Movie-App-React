import React, { Component } from "react";

export default class NameFilter extends Component {
  state = {
    inputValue: ""
  };
  render() {
    return (
      <div className="name-filter">
        {" "}
        <input
          className="name-filter-text"
          placeholder="enter movie name"
          type="text"
          // onChange={e => {
          //   onChange(e.target.value);
          onChange={e => {
            this.setState({ inputValue: e.target.value }, () =>
              this.props.nameFilter(this.state.inputValue)
            );
          }}
        />
        <input className="name-filter-button" type="button" value="Search" />
      </div>
    );
  }
}

// import React from "react";

// export default function NameFilter({ value = "") {

//   return (
//     <div className="name-filter">
//       <input
//         className="name-filter-text"
//         placeholder="enter movie name"
//         type="text"
//         value={value}
//         // onChange={e => {
//         //   onChange(e.target.value);
//         onChange={e => {
//           this.setState({ inputValue: e.target.value }, () =>
//             this.props.search(this.state.inputValue)
//         }}
//       />
//       <input className="name-filter-button" type="button" value="Search" />
//     </div>
//   );
// }
