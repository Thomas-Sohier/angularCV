export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'material',
  properties: {
    '--foreground-default': '#ffffff',
    '--foreground-black': '#000000',

    '--background-default': '#ffffff',

    '--primary-default': '#3949ab',
    '--primary-light': '#6f74dd',
    '--primary-dark': '#00227b',

    '--secondary-default': '#f06292',
    '--secondary-light': '#ff94c2',
    '--secondary-dark': '#ba2d65',

    '--background-tertiary-shadow': '0 1px 3px 0 #C3C3C3'
  }
};

export const dark: Theme = {
  name: 'colorful',
  properties: {
    '--foreground-default': '#ffffff',

    '--background-black': '#000000',

    '--primary-default': '#4527a0',
    '--primary-light': '#7953d2',
    '--primary-dark': '#000070',

    '--secondary-default': '#ff8a65',
    '--secondary-light': '#ffbb93',
    '--secondary-dark': '#c75b39',

    '--background-tertiary-shadow': '0 1px 3px 0 #C3C3C3'
  }
};
