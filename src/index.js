import { h, app } from "hyperapp";
import "./style.css";
import "./reset.css";

const initialState = {
  google: "help",
  generalOrders: 
    {
      gOrder: "To take charge of this post and all government property in view"
    },
    {
      gOrder:
        "To walk my post in a military manner, keeping always on alert, and observing everything that takes place within sigh or hearing"
    },
    {
      gOrder: "To report all violations of orders I am instructed to enforce"
    },
    {
      gOrder:
        "To repeat all calls from the post more distant from the guard house than my own"
    },
    {
      gOrder: "To quit my post only when properly relieved"
    },
    {
      gOrder:
        "To receive, obey and pass on to sentry who relieves me, all orders from the Commanding Officer, Command Duty Officer, Offier of the Deck, and Officer and Petty Officers on the watch only"
    }
  ]
};
const log = props =>
  props.generalOrders.forEach(x => {
    h("div", {}, `${x.gOrder}`);
  });

const view = state => h("div", {}, ["11 General Orders", log(state)]);

app({
  init: initialState,
  view: view,
  node: document.getElementById("app")
});
