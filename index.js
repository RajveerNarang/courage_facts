import facts from "./courage_facts.json" assert { type: "json" };
// console.log(facts.facts[0].fact);
// console.log(facts.facts[1].fact);
// console.log(facts.facts[2].fact);
// console.log(facts.facts[3].fact);
// console.log(facts.facts[4].fact);
// console.log(facts.facts[5].fact);
// console.log(facts.facts[6].fact);

const button = document.querySelector("button");
var i = 0;

button.addEventListener("click", () => {
  //   alert("Notification");
  Notification.requestPermission().then((perm) => {
    // alert(perm);
    if (perm === "granted") {
      const notification = new Notification(
        "Random Facts about Courage The Cowardly Dog",
        {
          body: JSON.stringify(facts.facts[i].fact, i++, i <= 6),
          // body: factsForEach(facts.fact),
          data: { hello: "World" },
          icon: "New_Courage.webp",
        }
        // if(facts.facts[i].fact)
      );

      notification.addEventListener("close", (e) => {
        console.log(e);
      });
    }
  });
});
