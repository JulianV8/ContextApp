import {create} from 'zustand';

export interface ProfileStore {
  name: string;
  email: string;

  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileStore>()((set, get) => ({
  name: 'Julian Vasquez',
  email: 'julian_djv@hotmail.com',

  changeProfile: (name: string, email: string) => {
    console.log(get());
    set({name, email});
  },
}));
