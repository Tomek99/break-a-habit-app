export interface Setting {
  userId: number;
  premiumMode: boolean;
  adverts: boolean;
}

export let settingsModel: Setting[] = [];
