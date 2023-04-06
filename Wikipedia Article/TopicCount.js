async function getTopicCount(topic) {
  const url = `https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=${topic}`;

  const response = await fetch(url);

  const data = await response.json();

  const text = data.parse.text["*"];

  // Je ne connaissais pas cette méthode RegExp
  const count = (text.match(new RegExp(topic, "g")) || []).length;

  console.log(topic + " : " + count);
}

getTopicCount("blockchain");
getTopicCount("football");
getTopicCount("linux");
getTopicCount("pizza");
