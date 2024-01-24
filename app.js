const pronoun = ['la', 'nuestro'];
const adj = ['genial', 'grande'];
const noun = ['USA', 'universo'];
const domains = ['.ie', '.cl'];


pronoun.forEach(element1 => {
  adj.forEach(element2 => {
      noun.forEach(element3 => {
          domains.forEach(element4 => {
              console.log(element1 + element2 + element3 + element4);
          });
      });
  });
});