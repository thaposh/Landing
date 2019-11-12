'use strict'
var quotes = [
    'Love is that condition in which the happiness of another person is essential to your own. – Robert Heinlein',
    'You can’t depend on your eyes when your imagination is out of focus. – Mark Twain',
    'One way to break up any kind of tension is good deep breathing. – Byron Nelson',
    'Believe deep down in your heart that you’re destined to do great things. – Joe Paterno',
    'The problem, often not discovered until late in life, is that when you look for things in life like love, meaning, motivation, it implies they are sitting behind a tree or under a rock. The most successful people in life recognize, that in life they create their own love, they manufacture their own meaning, they generate their own motivation. – Neil deGrasse Tyson',
    'Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, I will try again tomorrow. - Mary Anne Radmacher',
    'In the middle of difficulty lies opportunity. - Albert Einstein',
    'Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is the eternity. - Henry Van Dyke',
    'We make a living by what we get, but we make a life by what we give. - Winston Churchill',
    'There is no passion to be found playing small, in settling for a life that is less than the one you are capable of living. - Nelson Mandela',
    'Happiness comes when we test our skills towards some meaningful purpose. - John Stossel',
    'Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for. - Epicurus',
    'It is better to have a meaningful life and make a difference than to merely have a long life. - Bryant H. McGill',
    'If you don’t like something, change it. If you can’t change it, change your attitude. - Maya Angelou',
    'Promise me you’ll always remember: You’re braver than you believe and stronger than you seem, and smarter than you think. - A.A Milne',
    'The thinking that got us to where we are is not the thinking that will get us to where we want to be. - Albert Einstein',
    'Happiness is like a butterfly: the more you chase it, the more it will elude you, but if you turn your attention to other things, it will come and sit softly on your shoulder. - Henry David Thoreau',
    'What we have done for ourselves alone, dies with us. What we have done for others and the world remains and is immortal. - Albert Pike',
    'Never be bullied into silence, never allow yourself to be made a victim. Accept no one’s definition of your life, define yourself. - Robert Frost',
    'The desire for a more positive experience is itself a negative experience. And, paradoxically, the acceptance of one’s negative experience is itself a positive experience. - Mark Manson',
    'We are what we repeatedly do. Excellence then is not an act, but a habit. - Aristotle',
    'And in the end, it’s not the years in your life that count. It’s the life in your years. - Abraham Lincoln',
    'Dream as if you’ll live forever, live as if you’ll die today. - James Dean',
    'This is my simple religion. There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is the kindness. - Dalai Lama',

]

function newQuote() {
    var randomNum = Math.floor(Math.random() * (quotes.length))
    document.getElementById('displayQuote').innerHTML = quotes[randomNum];

}
