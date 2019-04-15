> *Note:* Please use the main [MaterialDesign](https://github.com/Templarian/MaterialDesign/issues) repo to report issues. This repo is for distribution of the Angular Material files only.

# Angular Material - Material Design Icons

Angular Material distribution for the [Material Design Icons](https://materialdesignicons.com).

## Installation

Install `@mdi/angular-material` from npm:

```bash
npm install @mdi/angular-material
```

## Usage

This bundle is usable with AngularJS Material/Angular Material and to facilitate usage, it's recommended to use
[`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin).

Add the following plugin configuration in the Webpack configuration:

```javascript
new CopyWebpackPlugin([
  { from: 'node_modules/@mdi/angular-material/mdi.svg',
    to: 'assets/mdi.svg'
  }
]);
```

Or if you're using Angular CLI:

* For Angular CLI version 1.x, make sure to include `mdi.svg` in your `assets` folder under `.angular-cli.json` in the `assets` array:

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

* For Angular CLI version 6.x, make sure to include `mdi.svg` in your `assets` folder under `angular.json` in the `assets` array, located in the build configuration for your project:

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

_Note: To check your version of Angular CLI, run `ng -v` or `$(npm bin)/ng -v`._

### Angular

The `mdi.svg` contains all the icons provided on the site. Use inline with [MatIconRegistry](https://material.angular.io/components/icon/api#MatIconRegistry).

1. Place the SVG file under your `assets` folder thanks to Angular CLI or thanks to `CopyWebpackPlugin`. Please ensure that this file is publicly accessible.
2. In your app's main module (typically `app.module.ts`), import `MatIconModule` and `MatIconRegistry` from `@angular/material`:

```typescript App module

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

// ...
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Required by the Angular Material icon module
    HttpClientModule,
    // ...
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
<mat-icon svgIcon="android" aria-label="Android icon"></mat-icon>
<!-- Icon button -->
<a mat-icon-button href="https://android.com" matTooltip="Go to Android.com" aria-label="Go to Android.com">
  <mat-icon svgIcon="android" aria-label="Android icon"></mat-icon>
</button>
<!-- You can also combine an icon and text together -->
<button mat-button>
  <mat-icon svgIcon="code-tags" aria-label="Code icon"></mat-icon>
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

[Stackblitz](https://stackblitz.com/edit/mdi-material-example)

For more information on icons, refer to the [icon docs](https://material.angular.io/components/icon/overview).

### AngularJS Material

The `mdi.svg` contains all the icons provided on the site. Use inline with [`$mdIconProvider`](https://material.angularjs.org/latest/api/service/$mdIconProvider).

```javascript Configuration

var app = angular.module('myApp', ['ngMaterial']);
app.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('assets/mdi.svg')
});

```

#### Usage

```html Example Usage

<md-icon md-svg-icon="android"></md-icon>
<md-button aria-label="Android" class="md-icon-button">
  <md-icon md-svg-icon="android"></md-icon>
</md-button>

```

## Related Packages

[NPM @MDI Organization](https://npmjs.com/org/mdi)

* SVG: [MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG)
* Webfont: [MaterialDesign-Webfont](https://github.com/Templarian/MaterialDesign-Webfont)

## Learn More

* [MaterialDesignIcons.com](https://materialdesignicons.com)
* [Templarian/MaterialDesign](https://github.com/Templarian/MaterialDesign)
