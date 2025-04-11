// {label: 'Home', iconName: 'home'},
// {label: 'Profile', iconName: 'user'},
// {label: 'Settings', iconName: 'settings'},
// {label: 'Notifications', iconName: 'bell'},
// {label: 'Help', iconName: 'help-circle'},

export enum MENU_KEY {
  HOME = 'home',
  USER = 'user',
  SETTINGS = 'settings',
  BELL = 'bell',
  HELP = 'help-circle',
}

export interface IOption {
  label: string;
  iconName: MENU_KEY;
}
