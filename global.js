//import * as firebase from 'firebase';
//import 'firebase/firestore';
//import { useState } from 'react/cjs/react.production.min';
import React, { useState, useEffect } from 'react';

global.bookmarked = [
  {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Polar Bear found drinking by West Coast Park, having Magfuse juices.',
      image: 'https://www.themebeta.com/media/cache/400x225/files/windows/images/201907/26/3872e0062b2df0aecdd5b6568f5e16d9.jpeg',
      link: 'SingleDisplay'
    },
  {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Mr Polar surfing up the NTU UWAVEs. Come see him now!',
      image: 'https://previews.123rf.com/images/cnuisin/cnuisin1802/cnuisin180200234/95217848-bear-polar-bear-surf-ocean-vector-illustration-character-cartoon-yellow-.jpg',
      link: 'SingleDisplay'
  },
  {
      id: 'asd8239-3da1-471f-bd96-145571e29d72',
      title: 'Polar bears been breeding all over Singapore and Malaysia. WTH is going on>!?!?!',
      image: 'data:image/jpeg;base64,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',
      link: 'SingleDisplay'
  },
];

global.userPreferences = [];

global.selectedArticle = 0;
global.bookmarkedArticle = [];

global.preferenceList = ['Food', 'Romance', 'Sports', 'Family', 'Movies', 'Travel'];

global.fakeFeed = [
  {
    id : "0",
    category: "Food",
    date: "15/6/2021",
    price: 100,
    title : "Polar Bear found drinking by West Coast Park",
    caption: 'Polar Bear found drinking by West Coast Park, having Magfuse juices.',
    image: 'https://www.themebeta.com/media/cache/400x225/files/windows/images/201907/26/3872e0062b2df0aecdd5b6568f5e16d9.jpeg',
    //text : "Wanna get drunk and groove with polar bears on a Monday Blues in a Post Covid Era?",
    text : "Wanna get drunk and groove with polar bears on a Monday Blues in a Post Covid Era? Join us and DJ Magnus as we set up a chilly bar for you in Magnus's Fusion Bar today. Register now!",
    link : 'https://steamcommunity.com/id/Magfuse'
  },
  {
    id: '1',
    category: "Romance",
    date: "10/6/2021",
    price: 25,
    title : "Polar Bears kissing in public",
    caption: 'Two polar bears caught kissing out in public. GROSSSSS~',
    image: 'https://images.ctfassets.net/pjshm78m9jt4/301580_header/10665ca84d607b41a4b7d1c8590751c3/importedImage301580_header',
    text: "Tonight at 11, we caught 2 polar bears kissing under Chua Chu Kang Avenue. However their sucking sounds caught the attention of Magnus and friends. The nosypasserby included his link below.",
    link : 'https://steamcommunity.com/id/Magfuse'
  },
  {
    id: '2',
    category: "Sports",
    date: "5/1/2010",
    price: 690,
    title : "Surfing Bear by NTU UWAVE",
    caption: 'Mr Polar surfing up the NTU UWAVEs. Come see him now!',
    image: 'https://previews.123rf.com/images/cnuisin/cnuisin1802/cnuisin180200234/95217848-bear-polar-bear-surf-ocean-vector-illustration-character-cartoon-yellow-.jpg',
    text: "Mr Polar, aged 47, the oldest polar bear in Singapore, has decided to take up surfing down Sentosa Beach. His presence enabled the arrival of huge waves, which he proceeded to surf like his youth is back. #surfgod",
    link : 'https://steamcommunity.com/id/Magfuse'
  },
  {
      id: '3',
      category: "Family",
      date: "13/2/1990",
      price: 10,
      title : "Population of Polar Bear in Asia",
      caption: 'Polar bears been breeding all over Singapore and Malaysia. WTH is going on>!?!?!',
      image: 'data:image/jpeg;base64,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',
      text: "Thousands of Polar Bears have migrated from Australia to Johor Bahru during covid-19. The lack of humans gathering out with their cameras allow polar bears to be more obscene and active in their sexual reproduction. Join them in the discord link below.",
      link : 'https://steamcommunity.com/id/Magfuse'
  },
  {
      id: '4',
      category: "Movies",
      date: "4/5/2000",
      price: 8,
      title : "Scaring in Cinema",
      caption: 'Bear hijacks cinemas with popcorn. Scares of 0 moviegoers due to covid-19.',
      image: 'https://cdn3.vectorstock.com/i/1000x1000/93/22/cute-polar-bear-with-popconr-childish-character-vector-25099322.jpg',
      text: "Polar bears have hijacked Shaw Theatres, due to the student discount of $8 per movie. However, polar bears were then addicted salted popcorns due to their similar taste with salted fish. To also get student discounts and chill with the polar bears, join the link below! Polar bears have hijacked Shaw Theatres, due to the student discount of $8 per movie. However, polar bears were then addicted salted popcorns due to their similar taste with salted fish. To also get student discounts and chill with the polar bears, join the link below!",
      link : 'https://steamcommunity.com/id/Magfuse'
    },
    {
    id: '5',
    category: "Sports",
    date: "6/12/2015",
    price: 4390,
    title : "Bears in Olympics",
    caption: 'Bears taking part in the olympics 2021 since the humans were all quarantined. What a day.', 
    image: 'https://biganimals.com/wp-content/uploads/polarBearsSwim.jpg',
    text: 'Singapore is hosting 2021 olympics within the covid-19 era because they have gold medalist godilocks representing the frontline. Her fellow family of bears, Daddy bear, Mommy Bear, and Baby Bear are taking part in the olympics to gain a huge jar of honey. Would Winnie Pooh beat the Bear Family? See more below! ',
    link : 'https://steamcommunity.com/id/Magfuse'
    },
    {
      id: '6',
      category: "Sports",
      date: "9/9/1999",
      price: 2400,
      title : "Bears?",
      caption: 'Are these bears?.', 
      image: 'https://api.time.com/wp-content/uploads/2014/03/red-pandas-cincinnati-zoo-3.jpg',
      text: 'For centuries, the issue of whether these cute creatures are bears has been an intense debate between the "bear bears" and the "not bear bears" groups. A recent and perhaps groundbreaking study by the University of Bearology is about to once and for all prove who is right. Or will it? ',
      link : 'https://steamcommunity.com/id/Magfuse'
      },
      {
        id: '7',
        category: "Pets",
        date: "1/1/2045",
        price: 109,
        title : "New Programming Language Discovered",
        caption: 'MaoScript? Hmmm...', 
        image: 'https://scx2.b-cdn.net/gfx/news/hires/2020/careforcatss.jpg',
        text: 'A new programming language has been discovered! Researchers have look at the genetics of cats and surprisingly they realised that cats have the ability to code, just like mankind. They have the capability to adapt, improvise and overcome those challenges infused with complex logical thinking. Introducing the new programming language MaoScript, a new programming language cater to communicate with cats. This programming language have the capability to use Cats Intelligence framework to learn a deep neural cats network all thanks to the PyKatze package. Available at the price of $109. Don\'t wait, get yours today!',
        link : 'https://steamcommunity.com/id/Magfuse'
        },

        {
          id: '8',
<<<<<<< HEAD
=======
          category: "Travel",
          date: "12/8/2020",
          price: 200,
          title : "Boxplane invented in 2020",
          image: 'https://cdn5.vectorstock.com/i/1000x1000/95/79/teddy-bear-made-plane-vector-3069579.jpg',
          text: 'Introducing boxplane. The world leading environmentally friendly plane made of cardboard and paper. Endorsed by Park Ranger Patricia, this cardboard plane is said to be able to travel for at most 1km! Limited seat available! ',
          link : 'https://steamcommunity.com/id/Magfuse'
        },
        {
          id: '9',
          category: "Romance",
          date: "22/10/2011",
          price: 10,
          title : "Of Fire and Ice",
          image: 'https://i.dailymail.co.uk/i/pix/2014/07/14/article-0-1FA10FF600000578-698_634x397.jpg',
          text: 'Ever heard of two opposites coming together to mate? Meet Mr Blue and Mrs Brown. Two lizards of two distinct breed, coming to the walls of hive for their once in a blue moon mating season. Join them, as you get a preview of their honeymoon 24/7. ',
          link : 'https://steamcommunity.com/id/Magfuse'
        },
        {
          id: '10',
          category: "Food",
          date: "13/8/2009",
          price: 50,
          title : "Cattegetti",
          image: 'https://i.ytimg.com/vi/tOg9wzhQWLU/maxresdefault.jpg',
          text: 'Watch as Munchkin, cat of Jurong East munch on what it seems to be a spagetthi. Freshly served from the ovens of some wild peanuts, Munchkins owner can only be frightened of whats next. Join the food session below. ',
          link : 'https://steamcommunity.com/id/Magfuse'
        },
        {
          id: '11',
          category: "Family",
          date: "3/1/2019",
          price: 1000,
          title : "White 'Sheep' of the Breed",
          image: 'https://barkpost.com/wp-content/uploads/2015/06/dog-family-reunion-2.jpg',
          text: 'Amongthe family of four, one particular dog grows with a different fur from her siblings. Meet Amily. The cutest and upcoming shepherd leading Mianna Ranch at the stunning age of 4! Visit the ranch today in the link below. ',
          link : 'https://steamcommunity.com/id/Magfuse'
        },
        {
          id: '12',
          category: "Movies",
          date: "18/12/2008",
          price: 12,
          title : "Ratatouille 2",
          image: 'https://www.wired.com/images_blogs/underwire/images/2007/04/30/043007ratatouilee.jpg',
          text: 'Ratatouille is back, with more cooking action, dishes, wild pulling of hairs and chef manipulation! Get the tickets today!',
          link : 'https://steamcommunity.com/id/Magfuse'
        },
        {
          id: '13',
          category: "Travel",
          date: "8/1/2021",
          price: 900,
          title : "Journey of the Hermit Seal",
          image: 'https://stickershop.line-scdn.net/stickershop/v1/product/7359238/LINEStorePC/main.png;compress=true',
          text: 'Written by your one and only Mianna, the story covers a seal named Lilzzy as she travels around the artic ocean looking for a place called home. To purchase the pre-order of the book, click on the link below.',
          link : 'https://steamcommunity.com/id/Magfuse'
        },
        {
          id: '14',
>>>>>>> 02067aa95dc6921b21f1958f2115f1102cea7151
          category: "Family",
          date: "30/5/2021",
          price: 109,
          title : "Dance Party!",
          caption: 'Bears Dancing in the Forest', 
          image: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/02/dancing-baby-bears-cubs-photography-valtteri-mulkahainen-1-1-5e46a1f555003__700.jpg',
          text: 'As winter turns to spring and the bears stop hibernating, they need to shed their winter coats the only way they know how. Come and Join the dance party!',
          link : 'https://www.youtube.com/watch?v=ddq42IRjK3E'
        },
        {
          id: '15',
          category: "Food",
          date: "30/5/2021",
          price: 109,
          title : "Watermelon – A Snack Fit for our Grizzly Bear Friends",
          caption: 'What About Watermelons?', 
          image: 'https://i.pinimg.com/564x/7b/96/5a/7b965a62b066e0b1f9902a2c137c134b.jpg',
          text: 'Us humans are not the only watermelon lovers in the world. Did you know that bears love watermelon too? Watermelons hold moisture making them a popular choice for a range of animals that have fallen water poor in drought conditions. We don’t blame our furry friends for wanting a taste of our juicy, pink fleshed melons although if you are close to the habitat of natural animals you might want to protect your watermelons if you intend on eating them whole.',
          link : 'https://www.whataboutwatermelon.com/index.php/2018/04/watermelon-snack-fit-grizzly-bear-friends/'
        },
];

global.fakeArticle = {
  id : "1",
  title : "Polar Bear found drinking by West Coast Park",
  category: "Food",
  date: new Date(),
  image : 'https://www.themebeta.com/media/cache/400x225/files/windows/images/201907/26/3872e0062b2df0aecdd5b6568f5e16d9.jpeg',
  text : "Wanna get drunk and groove with polar bears on a Monday Blues in a Post Covid Era? Join us and DJ Magnus as we set up a chilly bar for you in Magnus's Fusion Bar today. Register now!",
  link : 'https://steamcommunity.com/id/Magfuse'
}

/*
const configuration = {
    apiKey: "AIzaSyD-osswqARxtLg0p2_5tOwfYdjql_lh-EM",
    authDomain: "codeexp2021-d9c74.firebaseapp.com",
    projectId: "codeexp2021-d9c74",
    storageBucket: "codeexp2021-d9c74.appspot.com",
    messagingSenderId: "998917826690",
    appId: "1:998917826690:web:cee9bf4b25b54b9e5f2c9b",
    measurementId: "G-RTM7FKQVKC"
}
if (!firebase.apps.length) {
  firebase.initializeApp(configuration);
}

const db = firebase.firestore();
export default db;

const grabData = () => {
  
  const [ data, setData ] = useState([])
  
  useEffect( () => {
    db.collection('data')
    .get()
    .then(result => result.docs)
    .then(docs => docs.map(doc => ({
      id: doc.id,
      image: doc.image,
      text: doc.text,
    })))
    .then(data => setData(data))
  }, [])

}
*/
