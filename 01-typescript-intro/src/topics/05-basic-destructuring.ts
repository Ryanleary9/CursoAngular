interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 26,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const { song, songDuration: duration, details } = audioPlayer;

const { author } = details;

// console.log("Song : ", song);
// console.log("Duration : ", duration);
// console.log("Author : ", author);

const [, , trunks]: string[] = ["Goku", "Vegeta", "Trunks"];

console.log("Personaje 3: ", trunks);

export {};
