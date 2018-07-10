> *Note:* Please use the main [MaterialDesign](https://github.com/Templarian/MaterialDesign/issues) repo to report issues. This repo is for distribution of the Angular-Material files only.

# Angular-Material - Material Design Icons

Webfont distribution for the [Material Design Icons](https://materialdesignicons.com).

## Installation
Install @mdi/angular-material from npm
```
npm install @mdi/angular-material
```

## Usage
This bundle is usable with Angular(JS) Material and to facilitate his usage, it's recommended to use
[copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin).

Add the following plugin configuration in webpack config:
```javascript
new CopyWebpackPlugin([
  { from: 'node_modules/@mdi/angular-material/mdi.svg',
    to: 'assets/mdi.svg'
  }
]);
``` 
Or if you're using Angular CLI

* version 1.x, make sure to include `mdi.svg` in your `assets` folder under `.angular-cli.json` in `assets` array:
   
   ```json Angular CLI file
   {
      "apps": [
        {
          "assets": [
            { "glob": "**/*", "input": "./assets/", "output": "./assets/" },
            { "glob": "favicon.ico", "input": "./", "output": "./" },
            { "glob": "mdi.svg", "input": "../node_modules/@mdi/angular-material", "output": "./assets" }
          ]
        }
      ]
   }
   ```

* version 6.x, make sure to include `mdi.svg` in your `assets` folder under `angular.json` in `assets` array:
 
   ```json Angular CLI file
    {
       // ...
       "architect": {
         "build": {
           "options": {
             "assets": [
               { "glob": "**/*", "input": "./assets/", "output": "./assets/" },
               { "glob": "favicon.ico", "input": "./", "output": "./" },
               { "glob": "mdi.svg", "input": "../node_modules/@mdi/angular-material", "output": "./assets" }
             ]
           }
         }
       }
       // ...
    }
    ```
   
### Angular 2.x/4.x/5.x/6.x
The `mdi.svg` contains all the icons provided on the site. Use inline with [MatIconRegistry](https://material.angular.io/components/icon/api).
The following assumes that you're using the latest version of `@angular/material` (`5.x`) and you already have the basic knowledge of Angular Material.
Place the SVG file under your `assets` folder thanks to Angular CLI or thanks to CopyWebpackPlugin. Please ensure that this file is publicly accessible.
In your app's module file (typically `app.module.ts`), import `MatIconModule` and `MatIconRegistry` from `@angular/material`:

```typescript App module
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
/*
From the latest master, HttpClientModule is required instead
import { HttpClientModule } from '@angular/common/http';
*/

...
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    // From the latest master, HttpClientModule is required instead
    // Your other modules
    // Take note that you have to import MatIconModule into your app
    MatIconModule
  ]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); // Or whatever path you placed mdi.svg at
  }
}
```

Usage:

```html Example Usage
<!-- Icon by itself -->
<mat-icon [svgIcon]="'android'"></mat-icon>
<!-- Icon button -->
<button mat-icon-button>
  <mat-icon [svgIcon]="'android'"></mat-icon>
</button>
<!-- You can also combine an icon and text together -->
<button mat-button>
  <mat-icon [svgIcon]="'code-tags'"></mat-icon>
  View source
</button>
```

Please also add the following class to your styles (`styles.css`) to solve the problem where an icon isn't aligned properly when used in a menu item:

```css styles.css
button.mat-menu-item {
  line-height: 24px !important;
}
a.mat-menu-item > mat-icon {
  margin-bottom: 14px;
}
.mat-icon svg {
  height: 24px;
  width: 24px;
}
```

[Demo](https://stackblitz.com/edit/mdi-material-example)

For more information on icons, refer to the [icon docs](https://material.angular.io/components/icon/overview).

### Angular JS Material
The `mdi.svg` contains all the icons provided on the site. Use inline with [$mdIconProvider](https://material.angularjs.org/latest/api/service/$mdIconProvider).

```javascript Configuration
var app = angular.module('myApp', ['ngMaterial']);
app.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('assets/mdi.svg')
});
```

Usage:

```html Example Usage
<md-icon md-svg-icon="android"></md-icon>
<md-button aria-label="Android" class="md-icon-button">
  <md-icon md-svg-icon="android"></md-icon>
</md-button>
```

## Related Packages

[NPM @MDI Organization](https://npmjs.com/org/mdi)

- SVG: [MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG)
- Webfont: [MaterialDesign-Webfont](https://github.com/Templarian/MaterialDesign-Webfont)

## Learn More

- [MaterialDesignIcons.com](https://materialdesignicons.com)
- https://github.com/Templarian/MaterialDesign