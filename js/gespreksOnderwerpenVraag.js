const gespreksOnderwerpenVraag = [
    "“Waar zou je nu het liefst willen zijn?”" 
,"“Wie is jouw grootste fan?”",
"“Bij wie voel jij je veilig?”",
"“Heb je wel eens gespiekt?”",
"“Bij wie kan je echt jezelf zijn?”",
"“Wat maakte jou blij vandaag?”",
"“Wat zou je doen als je wist dat je niet kon falen?”",
"“Doe je wel eens wat aardigs voor een vreemde?”",
"“Voor wie zou je door het vuur gaan?“",
"“Wat vind je het mooiste aan jezelf?”",
"“Van welke muziek word je vrolijk?”",
"“Wat is het laatste dat je gevierd hebt?”",
"“Hoe ben je veranderd in het afgelopen jaar?”",
"“Van wie krijg jij het warm?”",
"“Wat is het gekste dat je in het buitenland hebt meegemaakt?”",
"“Wat is het spannendste dat je hebt meegemaakt?”",
"“Met welk familielid deel je de mooiste jeugdherinne-ringen?”",
"“Welke naam vind jij echt mooi?”",
"“Welke periode uit de geschiedenis vind jij het interessantst?“",
"“Welke goede gewoonte wil je aanleren?”",
"“Wat is voor jou het woord van het jaar?”",
"“Hoe ziet jou ideale zondag eruit?”",
"“Welke zonsondergang is jou bijgebleven?”",
"“Wat is jouw favoriete muziekinstru-ment?”",
"“Welk gerecht kan jij het beste koken?”",
"“Van wie kreeg jij je eerste kus?”",
"“Bij welk liedje kun je niet stil blijven zitten?”",
"“Waar droom je vaak over?”",
"“Wat had je nog graag op school willen leren?”",
"“Welke eigenschap vind jij het belangrijkst bij een vriend(in)?”",
"“Welk boek heeft indruk op jou gemaakt?”",
"“Kun je goed alleen zijn?”",
"“Met wie heb jij de grootste lol?”",
"“Wat is je natuurlijke gave?”",
"“Wat was vroeger jouw favoriete liedje?”",
"“Welke angst heb jij overwonnen?”",
"“Wat was je laatste overwinning?”",
"“Waar wil je het liefst naartoe op reis?”",
"“Wat is je favoriete filmgenre?”",
"“Wat is je lievelingseten?”",
"“Bij wie kan je alles kwijt?”"
];
const random = Math.floor(Math.random() * gespreksOnderwerpenVraag.length);
document.write("<p>" + gespreksOnderwerpenVraag[random] + "</p>");
var script = document.getElementById("template");
var target = document.getElementById("target");
target.innerHTML = script.textContent;