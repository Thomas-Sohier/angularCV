# CV 📜

The purpose of this project is to make your own CV easily.

[i want screenshots](#screen)

## Why ?

It's a personnal project that i made, because i wanted a beautiful CV and i wasn't too good with Word and i didn't want to pay my CV on some online web site.

It's in angular because why not ? I'm a bit experienced with it so i made it quite easily.

My code is ugly but it get the jobs done 😀

## Things to do next ?

- [ ] Currently only in french... Do atleast English !
- [x] Try to make theming work with the printing. Currently i can only print with de default theme
- [x] Make css work while printing on firefox ?
- [ ] Lot of things i don't think about yet

## How to use it ?

### Live demo

You can try it [live](https://elegant-swanson-7243d9.netlify.com) thanks to Netlify !!

### Docker

There is a docker hub available [here](https://hub.docker.com/repository/docker/icecu8e/angularcv)

Then just :

```bash
docker pull icecu8e/angularcv:latest
docker run --rm -d -p 80:80/tcp icecu8e/angularcv:latest
```

### Build it

```bash
git clone https://github.com/Thomas-Sohier/angularCV.git
cd angularCV
ng build --prod # to build or 'ng serve' to test
```

## Can i help or anything related ?

Just do a pull request, if anyone have anything to add ! 🙌

## Screen

![cv](/assets/cv.png)

## Angular documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
