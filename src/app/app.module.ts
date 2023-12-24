import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipe } from './pipes/safe.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { QuoteComponent } from './component/quote/quote.component';
import { ServicesComponent } from './component/services/services.component';
import { FeatureComponent } from './component/feature/feature.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { TeamComponent } from './component/team/team.component';
import { TestimoninalComponent } from './component/testimoninal/testimoninal.component';
import { BlogComponent } from './component/blog/blog.component';
import { FooterComponent } from './component/footer/footer.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ReviewsComponent } from './component/reviews/reviews.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StrengthComponent } from './component/strength/strength.component';
import { TrackingComponent } from './component/tracking/tracking.component';
import { MapsComponent } from './component/contacts/maps/maps.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN7-wy6ntnxhpMKkzcB9ls5GrEQJz2_XY",
  authDomain: "prrtransglobal-7094f.firebaseapp.com",
  projectId: "prrtransglobal-7094f",
  storageBucket: "prrtransglobal-7094f.appspot.com",
  messagingSenderId: "412558237754",
  appId: "1:412558237754:web:3da2ab61f26cc1a0f59503",
  measurementId: "G-0H42QE5TM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    QuoteComponent,
    ServicesComponent,
    FeatureComponent,
    PricingComponent,
    TeamComponent,
    TestimoninalComponent,
    BlogComponent,
    FooterComponent,
    ReviewsComponent,
    SafeHtmlPipe,
    ContactsComponent,
    StrengthComponent,
    TrackingComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
