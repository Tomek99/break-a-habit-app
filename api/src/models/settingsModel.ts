export interface Setting {
  userId: number;
  darkMode: boolean;
  premiumMode: boolean;
  adverts: boolean;
}

export let settingsModel: Setting[] = [];
