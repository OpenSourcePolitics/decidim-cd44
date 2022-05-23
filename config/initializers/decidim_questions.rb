# frozen_string_literal: true

if defined?(Decidim::QuestionCaptcha)
  Decidim::QuestionCaptcha.configure do |config|
    config.questions = {
      fr: [
        { "question" => "Quelle est la capitale de la France ?", "answers" => "Paris,paris,PARIS" },
        { "question" => "De quelle couleur est le chat noir ?", "answers" => "noir,Noir,NOIR" },
        { "question" => "Quel est le numéro de département de la Loire-Atlantique ?", "answers" => "44,quarante quatre,Quarante-quatre,QUARANTE-QUATRE" },
        { "question" => "Quelle est la seconde couleur de la liste : langue, gris, orange", "answers" => "orange,Orange,ORANGE" },
        { "question" => "Quel est le nombre le plus grand entre les nombres suivants : 18, cinq, quarante, cent", "answers" => "cent,100,Cent,CENT" },
        { "question" => "Parmi 50, soixante-seize, vingt-trois, un, 28 ou 77, lequel est le plus grand ?", "answers" => "77	soixante dix sept,soixante-dix-sept,Soixante-dix-sept" },
        { "question" => "14, trente-cinq ou quarante-cinq : le plus petit est ?", "answers" => "14,quatorze,Quatorze" },
        { "question" => "Si les cheveux sont noirs, de quelle couleur sont les cheveux ?", "answers" => "noirs,noir,Noir,Noirs,NOIR,Noirs" },
        { "question" => "Rose, vert et coude : combien de couleurs dans la liste ?", "answers" => "2,deux,Deux,DEUX" },
        { "question" => "Dans la liste suivante lequel n'est pas un continent: Afrique, Asie, Italie ?", "answers" => "italie,l'italie,litalie" },
        { "question" => "Dans la liste suivante lequel est un verbe : marcher, vache, cavalier ?", "answers" => "marcher" },
        { "question" => "On respire par : le nez, l'oreil, les cheveux ?", "answers" => "nez,le nez,lenez" },
        { "question" => "ans quelle ville se trouve la Tour Eiffel ?", "answers" => "paris,a paris,à paris" },
        { "question" => "La liste bleu, doigt, rose, fromage, œil et pain contient combien de couleurs ?", "answers" => "2,deux,Deux,DEUX" }
      ],
      en: [
        { "question" => "The blue hat is what color?", "answers" => "blue" },
        { "question" => "The green hat is what color?", "answers" => "green" },
        { "question" => "The yellow hat is what color?", "answers" => "yellow" },
        { "question" => "The red hat is what color?", "answers" => "red" }
      ],
      es: [
        { "question" => "El sombrero verde es de qué color?", "answers" => "verde" }
      ],
      ca: [
        { "question" => "El barret verd és de quin color?", "answers" => "verd" }
      ]
    }
  end
end
