import './style.css'

console.log(document.querySelector('#quote-container'))
document.querySelector('#quote-container').innerHTML = `
  
  <p id="quote-content"></p>
  <button id="generate-btn">Generate Quote</button>
`
const quotes = [
  "One day I will tell my grandchildren that I trained Leo Messi. With Messi you have to speak to him in small doses and listen carefully to the little that he says. Don't write about him, don't try to understand how he does it, just watch him. - Pep Guardiola",
  "For me, to watch Messi is a pleasure. It's like having an orgasm. It's an incredible pleasure. - Luis Figo",
  "Newton and Einstein were on the autism spectrum; I hope that, like them, Messi exceeds himself every day and keeps giving us the gift of his football. - Romario",
  "Messi is a footballer from a Play Station game. Things that are impossible to do, he makes them possible. - Arsene Wenger",
  "Messi is the Mozart of football. - Radomir Antic",
  "Messi is a joke; the best joke my eyes have ever seen. - Wayne Rooney",
  "Cristiano knows English. Messi, football. - Fabio Capello",
  "When you watch Messi play, he makes it look so easy. But, if you stop and think for a moment, it's crazy what he can do. - Jordi Roura",
  "They told me that all of mankind are seen as equal in the eyes of God. This footballer makes you really question if that is true. - Ray Hudson",
  "Although he may not be human, it's good that Messi still thinks he is. - Javier Mascherano",
  "Seeing Messi play is like watching a video game… What Messi does on a football field is simply unthinkable… The way he walks from side to side, and once he sees an opportunity, he simply creates magic. - Victoria Azarenka",
  "Messi defies the laws of anatomy, he must have an extra bone in his ankle. - Carlos Bilardo"
];

function generateQuote() {
  const currentIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[currentIndex];
  document.getElementById('quote-content').textContent = quote;
}

document.getElementById('generate-btn').addEventListener("click", generateQuote)

// calling the function
generateQuote()


