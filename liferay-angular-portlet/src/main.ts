// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

declare const Liferay: any;
enableProdMode();

Liferay.Loader.require(['liferay-angular-portlet@1.0.0'], (module: any) => {
  module.default.bootstrapModule(AppModule).catch((err: any) => console.error(err));
});
