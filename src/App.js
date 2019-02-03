import React, { Component } from "react";
import SideMenu from "react-sidemenu";
import "./App.css";
import "../node_modules/react-sidemenu/dist/side-menu.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidemenu: [
        { divider: true, label: "Main navigation", value: "main-nav" },
        {
          label: "item 1",
          value: "item1",
          icon: "fa-search",
          children: [
            {
              label: "item 1.1",
              value: "item1.1",
              icon: "fa-adjust",
              children: [
                { label: "item 1.1.1", value: "item1.1.1", icon: "fa-anchor" },
                {
                  label: "item 1.1.2",
                  value: "item1.1.2",
                  icon: "fa-ankh"
                }
              ]
            },
            { label: "item 1.2", value: "item1.2", icon: "fa-bath" }
          ]
        },
        {
          label: "item 2",
          value: "item2",
          icon: "fa-award",
          children: [
            {
              label: "item 2.1",
              value: "item2.1",
              icon: "fa-shower",
              children: [
                { label: "item 2.1.1", value: "item2.1.1", icon: "fa-bed" },
                { label: "item 2.1.2", value: "item2.1.2", icon: "fa-bolt" }
              ]
            },
            { label: "item 2.2", value: "item2.2", icon: "fa-bomb" }
          ]
        },
        { divider: true, label: "Strategie & Concept", value: "nav-SCO" },
        { label: "Vak", value: "sco1", icon: "fa-beer" },
        {
          divider: true,
          label: "User Experience & User Centered Design",
          value: "nav-UXU"
        },
        { label: "Vak", value: "uxu1", icon: "fa-beer" },
        { divider: true, label: "Design & Development", value: "nav-DED" },
        { label: "Vak", value: "ded1", icon: "fa-beer" }
      ]
    };
  }
  render() {
    const { sidemenu } = this.state;
    return (
      <div className="App">
        <SideMenu items={sidemenu} />
        <main>
          <h1 className="hind bold center">Portfolio-S4</h1>
          <h2 className="center">Max Altena</h2>
        </main>
      </div>
    );
  }
}

export default App;
