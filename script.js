function getQuote() {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");

  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      quote.innerText = `"${data.content}"`;
      author.innerText = `— ${data.author}`;
    })
    .catch(() => {
      quote.innerText = "❌ Failed to load quote";
      author.innerText = "";
    });
}
