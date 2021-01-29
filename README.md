> *Note:* Please use the main [MaterialDesign](https://github.com/Templarian/MaterialDesign/issues) repo to report issues. This repo is for distribution of the Angular Material files only.

# Angular Material - Material Design Icons

Angular Material distribution for the [Material Design Icons](https://materialdesignicons.com).

## Installation

Install `@mdi/angular-material` and `@angular/cdk` from npm:

```bash
npm install @mdi/angular-material @angular/cdk
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

Or if you're using the Angular CLI, make sure to include `mdi.svg` in your `assets`
folder under the [Angular workspace configuration file](https://angular.io/guide/workspace-config)
in the `assets` array, located in the build configuration for your project:

    ```json Angular workspace configuration file
    {
       // ...
       "architect": {
         "build": {
           "options": {
             "assets": [
               { "glob": "**/*", "input": "./assets/", "output": "./assets/" },
               { "glob": "favicon.ico", "input": "./", "output": "./" },
               { "glob": "mdi.svg", "input": "./node_modules/@mdi/angular-material", "output": "./assets" }
             ]
           }
         }
       }
       // ...
    }
    ```

Note that the input directory is dependent on the workspace root which can be found
by looking at your desired project's `root` property. (For more information, visit the
Angular documentation on [project configuration options](https://angular.io/guide/workspace-config#project-configuration-options).)

Additionally, see the Angular documentation on [assets configuration](https://angular.io/guide/workspace-config#assets-configuration)
for more information.

Note: Documentation for Angular CLI versions 1.x.x (around Angular v5) has been dropped
as Angular v5 is [no longer supported](https://angular.io/guide/releases#support-policy-and-schedule).

### Angular Material

The `mdi.svg` contains all the icons provided on the site. It can be used inline with
[MatIconRegistry](https://material.angular.io/components/icon/api#MatIconRegistry).

1. In your app's main module (typically `app.module.ts`), import `MatIconModule` and `MatIconRegistry` from `@angular/material/icon`:

```typescript App module

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
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
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
```

2. The SVG icons can then be used with [`MatIcon`](https://material.angular.io/components/icon/api#MatIcon)'s
`svgIcon` attribute as shown below:

```html Example Usage
<mat-icon svgIcon="<name of icon>"></mat-icon>
```

For more information about SVG icons, check out the [documentation](https://material.angular.io/components/icon/overview#svg-icons).

[StackBlitz demo](https://stackblitz.com/edit/mdi-material-example)

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
