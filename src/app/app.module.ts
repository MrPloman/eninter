import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppRoutingModule, routes } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormComponent } from "./components/form/form.component";
import { InputComponent } from "./components/input/input.component";
import { SelectComponent } from "./components/select/select.component";
import { BrowserComponent } from "./components/browser/browser.component";
import { HeaderComponent } from "./components/header/header.component";
import { CardComponent } from "./components/card/card.component";
import { RegisterComponent } from "./pages/register/register.component";
import { HomeComponent } from "./pages/home/home.component";
import { HttpService } from "./services/http.service";
import { LandingComponent } from "./components/landing/landing.component";
import { RadiusComponent } from "./components/radius/radius/radius.component";
import { FormsModule } from "@angular/forms";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    InputComponent,
    SelectComponent,
    BrowserComponent,
    HeaderComponent,
    CardComponent,
    RegisterComponent,
    LandingComponent,
    RadiusComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: false,
    }),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translate: TranslateService) {
    let browserLang = localStorage.getItem("userLanguage");
    console.log(browserLang);
    if (!browserLang) {
      browserLang = translate.getBrowserLang();
    }
    browserLang = browserLang.toLowerCase();
    translate.use(browserLang);
  }
}
