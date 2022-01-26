const quotes =[
    "We grow fearless when we do the things we fear.",
    "And, when you want something, all the universe conspires in helping you to achieve it.",
    "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
    "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
    "You can't be great if you don't feel great. Make exceptional health your number one priority.",
    "Impossible is just an opinion.",
    "The secret of getting ahead is getting started.",
    "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.",
    "All our dreams can come true if we have the courage to pursue them.",
    "I always wanted to be somebody, but now I realize I should have been more specific.",
    "If you let your head get too big, it'll break your neck.",
    "I am an early bird and a night owl… so I am wise and I have worms",
    "Age is of no importance unless you're a cheese.",
    "If you think you are too small to make a difference, try sleeping with a mosquito.",
    "Honest criticism is hard to take, particularly from a relative, a friend, an acquaintance, or a stranger.",
    "When life gives you lemons, squirt someone in the eye.",
    "Even a stopped clock is right twice every day. After some years, it can boast of a long series of successes.",
    "Live each day like it's your second to the last. That way you can fall asleep at night.",
    "I am so clever that sometimes I don't understand a single word of what I am saying.",
    "Whatever you are, be a good one.",
    "The big secret in life is that there is no secret. Whatever your goal, you can get there if you're willing to work.",
    "The miracle is not that we do this work, but that we are happy to do it.",
    "When I had nothing to lose, I had everything. When I stopped being who I am, I found myself.",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    "Everyone has inside them a piece of good news. The good news is you don't know how great you can be!... And what your potential is.",
    "The best way to appreciate your job is to imagine yourself without one.",
    "In the middle of every difficulty lies opportunity.",
    "Never allow a person to tell you no who doesn't have the power to say yes.",
    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    "Because when I look at you, I can feel it. And I look at you and I'm home.",
    "What defines us is how well we rise after falling.",
    "If you believe in yourself, with a tiny pinch of magic, all your dreams can come true!",
    "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "Weaseling out of things is important to learn; it's what separates us from the animals… except the weasel.",
    "Who, being loved, is poor?",
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do",
    "Do, or do not. There is no try.",
    "There is some good in this world, and it's worth fighting for.",
    "No matter how your heart is grieving, if you keep on believing, the dream that you wish will come true.",
]

const authors = [
    "Robin Sharma",
    "Paulo Coelho, 'The Alchemist'",
    "Helen Keller",
    "Vincent Van gogh",
    "Paulo Coelho",
    "Robin Sharma",
    "Paulo Coelho",
    "Mark Twain",
    "Paulo Coelho",
    "Walt Disney",
    "Lily Tomlin",
    "Elvis Presley",
    "Michael Scott",
    "Billie Burke",
    "Dalai Lama",
    "Franklin P. Jones",
    "Cathy Guisewhite",
    "Marie Von Ebner-Eschenbach",
    "Jason Love",
    "Oscar Wilde",
    "Abraham Lincoln",
    "Oprah Winfrey",
    "Mother Teresa",
    "Paulo Coelho",
    "Steve Jobs",
    "Anne Frank",
    "Oscar Wilde",
    "Albert Einstein",
    "Eleanor Roosevelt",
    "Neil Gaiman",
    "Dory, Finding Home",
    "Lionel, 'Maid In Manhattan'",
    "Spongebob, 'Spongebob squarepants'",
    "William Shakespeare",
    "Homer Simpson",
    "Oscar Wilde",
    "H. Jackson Brown",
    "Yoda, 'Star Wars: The Empire Strikes Back'",
    "Cindrella, 'Cindrella'",
    "Ritika Tripathi"
]


const btn = document.querySelector(".btn");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");


btn.addEventListener('click', function(){
    let i = getRandom();
    quote.textContent = `"${quotes[i]}"`;
    author.textContent = `- ${authors[i]}`;

})

function getRandom(){
    return Math.floor(Math.random()* quotes.length);
}