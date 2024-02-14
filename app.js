var imagenes = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];
var titulos = ["JIJIJI COMO EMPIEZO", "ha pasado tanto", "y todo ese aprecio", "con cielo y mar", "arullo", "tqm gateta maeeew"];
var parrafos = ["La verdad es que no sabía qué regalarte, y hice este regalito para ti para recordarte qué tan importante eres y fuiste en mi proceso de vida. No sabría cómo agradecerte, y esto es lo mínimo.", "Sé que llevamos tiempo conociéndonos, y claro, aunque ya no somos pareja, los dos sabemos que fuimos increíbles compañeros, que hicimos desmadres juntos y que siempre encontrábamos en qué divertirnos.", "Y todo ese aprecio, está en esta carta. Todo ese cariño que te tengo, y te llegué a tener, te lo demuestro aquí. Todo ese amor, todas esas sonrisas, todo ese empeño que me llegaste a dar, me enseñaste y me moldeaste para apreciar, valorar y querer de una forma más linda. Sé que aunque estoy solo actualmente, sigo teniendo en mente aquello que fue de juramento eterno.", "Como el cielo y el mar que se relumbran uno al otro, sé que es un sentimiento de recuerdo, pero también de cariño eterno. Sin duda alguna, sin pena incoherente, fuiste mi cariño y serás por siempre", "Como el arrullo de una madre es el recuerdo que tengo de ti. Te pienso con cariño la noche sin fin. Te deseo lo mejor, te anhelo lo bueno, mi cariño sincero para ti es eterno. Quiero que sepas que cuentas conmigo siempre, cuando quieras. Somos dos amigos pero con historias y secuelas.", "espero este regalo te guste y te haga sentir bien gateta es con cariño para que no piences que yo te he olvidado por que no es asi  te quiero mucho y siempre cuenta conmigo para cualquier cosa maeeew feliz dia del amor y la amistad espero y que esto no te haga sentir mal y mas bien sea algo lindo que te llene el corazon de felicidad  postdata : hacer esto me costo mucho pero estoy orgulloso de que es para ti"];
var currentIndex = 0;

function cambiarContenido() {
  var titulo = document.getElementById("titulo");
  var imagen = document.getElementById("imagen");
  var parrafo = document.getElementById("parrafo");

  // Cambiar el título
  titulo.textContent = titulos[currentIndex];

  imagen.src = imagenes[currentIndex];
  imagen.alt = "Imagen " + (currentIndex + 1);


  parrafo.textContent = parrafos[currentIndex];

  currentIndex = (currentIndex + 1) % imagenes.length
}