import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@wendel/react-header",
  app: () => System.import("@wendel/react-header"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@wendel/navbar",
//   app: () => System.import("@wendel/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
