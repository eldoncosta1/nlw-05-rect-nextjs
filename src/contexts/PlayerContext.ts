import { createContext } from 'react';

type Eipisode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: Eipisode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Eipisode) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
};

export const PlayerContext = createContext({} as PlayerContextData);