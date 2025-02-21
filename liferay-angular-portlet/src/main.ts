// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';

declare const Liferay: any;
enableProdMode();

Liferay.Loader.require(['liferay-angular-portlet@1.0.0'], (module: any) => {
  module.default.bootstrapApplication(AppComponent).catch((err: any) => console.error(err));
});