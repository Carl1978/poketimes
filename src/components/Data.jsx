import React, { Component } from "react";

class Data extends Component {
  state = {
    name: null
  };

  constructor() {
    super();
    this.state.name = "Carl";
    this.fetchData();

    //     console.log("Home ctr...");

    //     let promise = new Promise((resolve, reject) => {
    //       let value = true;

    //       setTimeout(() => {
    //         if (value) {
    //           resolve("This is value is true");
    //         } else {
    //           reject("This is value is false");
    //         }
    //       }, 5000);
    //     });

    //     console.log("before");

    //     promise.then(
    //       resolved => console.log(resolved),
    //       rejected => console.log(rejected)
    //     );

    //     console.log("after");
  }

  fetchData = () => {
    // console.log("fetchData()...");
    // let c = document.getElementById("IDContainer");
    // let p = document.createElement("p");
    // p.innerHTML = "a new paragraph";
    // p.style.backgroundColor = "#ff0000";
    // c.appendChild(p);
    // 1) fetch method
    // const url = "https://randomuser.me/api/?results=5";
    // fetch(url)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     let authors = data.results;
    //     return console.log(authors);
    //   });
    // let myButton = $("button.continue");
    // myButton.html("This is a new message!");
    // myButton.on("click", e => {
    //   myButton.hide();
    // });
    // 2) JQuery ajax
    // $.ajax({
    //   url: "https://randomuser.me/api/?results=5",
    //   dataType: "json",
    //   success: function(data) {
    //     console.log(data);
    //   }
    // });
    // 3) Axios
  };

  render() {
    return <div>Data: {this.state.name}</div>;
  }
}

export default Data;
