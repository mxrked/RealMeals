import { useEffect } from "react";

const CheckingSearchFieldVal = () => {
  useEffect(() => {
    var i;
    const sFInput = document.getElementById("searchFieldIpt");
    const sFGo = document.getElementById("searchFieldGo");

    function rerouteSF(route) {
      const serverHost = "/react-projects/realmeals/";

      window.history.pushState("URL", "Page URL", serverHost + route);

      setTimeout(() => {
        document.location.reload();
      }, 100);
    }

    const home = ["home", "index", "hub"];
    const about = ["about", "background", "history", "learn about us"];
    const products = ["all products", "all foods", "food", "products"];
    const meats = [
      "meats",
      "meat",
      "roasted chicken",
      "ribeye",
      "steak",
      "poultry",
      "lamb chops",
      "fish",
      "lobster",
      "salmon",
      "turkey",
    ];
    const produce = [
      "produce",
      "canned fruit",
      "corn",
      "apples",
      "eggplant",
      "lemons",
      "peanuts",
      "nuts",
      "apple",
      "eggplants",
      "lemon",
    ];
    const desserts = [
      "dessert",
      "desserts",
      "chocolate cake",
      "mint ice cream",
      "cheesecake",
      "cheese cake",
      "cupcakes",
      "cupcake",
      "cup cake",
      "cup cakes",
      "custard cake",
      "glaze cake",
    ];
    //const team = ["team", "our team", "crew", "squad"];
    const contact = [
      "contact",
      "contact us",
      "need support",
      "support",
      "help",
      "get in touch",
      "reach out",
    ];

    function checkingSFVal() {
      const sFInputVal = sFInput.value.toLowerCase();

      // Home Page
      switch (true) {
        case sFInputVal.indexOf(home[0]) > -1 ||
          sFInputVal.indexOf(home[1]) > -1 ||
          sFInputVal.indexOf(home[2]) > -1:
          rerouteSF("home");
          break;
        default:
          console.log("Could not locate Home Page.");
          break;
      }

      // About Page
      switch (true) {
        case sFInputVal.indexOf(about[0]) > -1 ||
          sFInputVal.indexOf(about[1]) > -1 ||
          sFInputVal.indexOf(about[2]) > -1 ||
          sFInputVal.indexOf(about[3]) > -1:
          rerouteSF("about");
          break;
        default:
          console.log("Could not locate About Page.");
          break;
      }

      // Products Page (ALL)
      switch (true) {
        case sFInputVal.indexOf(products[0]) > -1 ||
          sFInputVal.indexOf(products[1]) > -1 ||
          sFInputVal.indexOf(products[2]) > -1 ||
          sFInputVal.indexOf(products[3]) > -1:
          rerouteSF("products#p0");
          break;
        default:
          console.log("Could not locate Products Page.");
          break;
      }

      // Products Page (MEATS)
      switch (true) {
        case sFInputVal.indexOf(meats[0]) > -1 ||
          sFInputVal.indexOf(meats[1]) > -1 ||
          sFInputVal.indexOf(meats[2]) > -1 ||
          sFInputVal.indexOf(meats[3]) > -1 ||
          sFInputVal.indexOf(meats[4]) > -1 ||
          sFInputVal.indexOf(meats[5]) > -1 ||
          sFInputVal.indexOf(meats[6]) > -1 ||
          sFInputVal.indexOf(meats[7]) > -1 ||
          sFInputVal.indexOf(meats[8]) > -1 ||
          sFInputVal.indexOf(meats[9]) > -1 ||
          sFInputVal.indexOf(meats[10]) > -1:
          rerouteSF("products#p1");
          break;
        default:
          console.log("Could not locate Meat Products Page.");
          break;
      }

      // Products Page (PRODUCE)
      switch (true) {
        case sFInputVal.indexOf(produce[0]) > -1 ||
          sFInputVal.indexOf(produce[1]) > -1 ||
          sFInputVal.indexOf(produce[2]) > -1 ||
          sFInputVal.indexOf(produce[3]) > -1 ||
          sFInputVal.indexOf(produce[4]) > -1 ||
          sFInputVal.indexOf(produce[5]) > -1 ||
          sFInputVal.indexOf(produce[6]) > -1 ||
          sFInputVal.indexOf(produce[7]) > -1 ||
          sFInputVal.indexOf(produce[8]) > -1 ||
          sFInputVal.indexOf(produce[9]) > -1 ||
          sFInputVal.indexOf(produce[10]) > -1:
          rerouteSF("products#p2");
          break;
        default:
          console.log("Could not locate Produce Products Page.");
          break;
      }

      // Products Page (DESSERTS)
      switch (true) {
        case sFInputVal.indexOf(desserts[0]) > -1 ||
          sFInputVal.indexOf(desserts[1]) > -1 ||
          sFInputVal.indexOf(desserts[2]) > -1 ||
          sFInputVal.indexOf(desserts[3]) > -1 ||
          sFInputVal.indexOf(desserts[4]) > -1 ||
          sFInputVal.indexOf(desserts[5]) > -1 ||
          sFInputVal.indexOf(desserts[6]) > -1 ||
          sFInputVal.indexOf(desserts[7]) > -1 ||
          sFInputVal.indexOf(desserts[8]) > -1 ||
          sFInputVal.indexOf(desserts[9]) > -1 ||
          sFInputVal.indexOf(desserts[10]) > -1:
          rerouteSF("products#p3");
          break;
        default:
          console.log("Could not locate Dessert Products Page.");
          break;
      }

      // Team Page
      // switch (true) {
      //   case sFInputVal.indexOf(team[0]) > -1 ||
      //     sFInputVal.indexOf(team[1]) > -1 ||
      //     sFInputVal.indexOf(team[2]) > -1 ||
      //     sFInputVal.indexOf(team[3]) > -1:
      //     rerouteSF("team");
      //     break;
      //   default:
      //     console.log("Could not locate Team Page.");
      //     break;
      // }

      // Contact Page
      switch (true) {
        case sFInputVal.indexOf(contact[0]) > -1 ||
          sFInputVal.indexOf(contact[1]) > -1 ||
          sFInputVal.indexOf(contact[2]) > -1 ||
          sFInputVal.indexOf(contact[3]) > -1 ||
          sFInputVal.indexOf(contact[4]) > -1 ||
          sFInputVal.indexOf(contact[5]) > -1 ||
          sFInputVal.indexOf(contact[6]) > -1:
          rerouteSF("contact");
          break;
        default:
          console.log("Could not locate Contact Page.");
          break;
      }
    }

    if (window.location.href.indexOf("search") > -1) {
      window.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          checkingSFVal();
        }
      });

      sFGo.addEventListener("click", checkingSFVal);
    }
  }, []);

  return "";
};

export default CheckingSearchFieldVal;
