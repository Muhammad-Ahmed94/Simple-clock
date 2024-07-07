const shuffeledCard = document.querySelector(".shuffeledCard");
const cardPack = ["K", "Q", "J", 9, 8, 7, 6, 5, 4, 3, 2, "A"];

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[random]] = [cards[random], cards[i]];
  }
  return (shuffeledCard.textContent = cards);
}

console.log(shuffle(cardPack));
