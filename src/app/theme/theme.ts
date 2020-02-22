export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "material",
  properties: {
    "--foreground-default": "#ffffff",
    "--foreground-black": "#000000",
    "--foreground-grey": "#404040",

    "--foreground-font-primary": "#ffffff",
    "--foreground-font-secondary": "#ffffff",

    "--background-default": "#ffffff",

    "--primary-default": "#3949ab",
    "--primary-light": "#6f74dd",
    "--primary-dark": "#00227b",

    "--secondary-default": "#ff4081",
    "--secondary-light": "#ff79b0",
    "--secondary-dark": "#c60055",

    "--background-tertiary-shadow": "0 1px 3px 0 #C3C3C3"
  }
};

export const dark: Theme = {
  name: "colorful",
  properties: {
    "--foreground-default": "#ffffff",
    "--foreground-black": "#000000",
    "--foreground-grey": "#404040",

    "--foreground-font-primary": "#ffffff",
    "--foreground-font-secondary": "#000000",

    "--background-default": "#ffffff",

    "--primary-default": "#4527a0",
    "--primary-light": "#7953d2",
    "--primary-dark": "#000070",

    "--secondary-default": "#ff8a65",
    "--secondary-light": "#ffbb93",
    "--secondary-dark": "#c75b39",

    "--background-tertiary-shadow": "0 1px 3px 0 #C3C3C3"
  }
};
