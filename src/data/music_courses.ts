import { MusicItem, SocialMedia } from "./Types";
const Data = {
  songs: [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      release_year: 2019,
      genre: "Synthwave",
      duration: "3:20",
      record_label: "XO, Republic",
      writers: [
        "Abel Tesfaye",
        "Ahmad Balshe",
        "Jason Quenneville",
        "Max Martin",
        "Oscar Holter",
      ],
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      release_year: 2020,
      genre: "Disco",
      duration: "3:23",
      record_label: "Warner",
      writers: [
        "Dua Lipa",
        "Clarence Coffee Jr.",
        "Sarah Hudson",
        "Stephen Kozmeniuk",
      ],
    },
    {
      id: 3,
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      release_year: 2019,
      genre: "Pop Rock",
      duration: "2:54",
      record_label: "Columbia",
      writers: [
        "Harry Styles",
        "Thomas Hull",
        "Tyler Johnson",
        "Mitch Rowland",
      ],
    },
    {
      id: 4,
      title: "Bad Guy",
      artist: "Billie Eilish",
      album: "When We All Fall Asleep, Where Do We Go?",
      release_year: 2019,
      genre: "Electropop",
      duration: "3:14",
      record_label: "Interscope",
      writers: ["Billie Eilish", "Finneas O'Connell"],
    },
    {
      id: 5,
      title: "Circles",
      artist: "Post Malone",
      album: "Hollywood's Bleeding",
      release_year: 2019,
      genre: "Pop Rock",
      duration: "3:35",
      record_label: "Republic",
      writers: [
        "Austin Post",
        "Louis Bell",
        "Kaan Gunesberk",
        "Frank Dukes",
        "Billy Walsh",
      ],
    },
    {
      id: 6,
      title: "Savage Love",
      artist: "Jawsh 685, Jason Derulo",
      album: "Single",
      release_year: 2020,
      genre: "Pop",
      duration: "2:51",
      record_label: "Columbia",
      writers: [
        "Joshua Nanai",
        "Jason Desrouleaux",
        "Jacob Kasher Hindlin",
        "Philippe Greiss",
      ],
    },
    {
      id: 7,
      title: "Peaches",
      artist: "Justin Bieber",
      album: "Justice",
      release_year: 2021,
      genre: "R&B",
      duration: "3:18",
      record_label: "Def Jam",
      writers: [
        "Justin Bieber",
        "Givēon",
        "Daniel Caesar",
        "Andrew Watt",
        "Louis Bell",
        "Bernard Harvey",
        "Felisha King",
        "Matthew Sean Leon",
        "Luis Manuel Martinez Jr.",
      ],
    },
    {
      id: 8,
      title: "Drivers License",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      release_year: 2021,
      genre: "Pop",
      duration: "4:02",
      record_label: "Geffen",
      writers: ["Olivia Rodrigo", "Daniel Nigro"],
    },
  ],
};

export default Data;

export const musicData = [
  {
    id: 1,
    title: "Bohemian Rhapsody",
    description: "A song by the British rock band Queen.",
    image:
      "https://c4.wallpaperflare.com/wallpaper/838/577/226/album-covers-band-black-background-bohemian-rhapsody-wallpaper-preview.jpg",
  },
  {
    id: 2,
    title: "Stairway to Heaven",
    description: "A song by the English rock band Led Zeppelin.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGv0s3P8WslXB9VBOI8-cdTkn3GeHp9l155qEa73dQEIYyuJWUpSgSO_WpBoiootrCRg&usqp=CAU",
  },
  {
    id: 3,
    title: "Hotel California",
    description: "A song by the American rock band Eagles.",
    image:
      "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-eagles-623b231c-d795-49ce-bb17-89d1aa951aa4.jpg",
  },
  {
    id: 4,
    title: "Imagine",
    description: "A song by the English rock musician John Lennon.",
    image:
      "https://cdn.britannica.com/54/178354-050-7E239648/John-Lennon-publicity-Help-Richard-Lester.jpg",
  },
  {
    id: 5,
    title: "Like a Rolling Stone",
    description: "A song by the American rock artist Bob Dylan.",
    image:
      "https://cdn.britannica.com/02/192302-050-A99AC74B/Bob-Dylan-1963.jpg",
  },
];
export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Gachumalu",
  },

  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/feed/?rk=guest_homepage-basic_google-one-tap-submit",
  },
];
