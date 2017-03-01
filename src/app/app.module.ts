import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Route} from '@angular/router';
import { AccordionModule, TabsModule } from 'ng2-bootstrap';
import 'hammerjs';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { DomainsComponent } from './domains/domains.component';
import { SitesComponent } from './sites/sites.component';
import { AppsComponent } from './apps/apps.component';

const routingApp: Route[] = [
  {path: 'domains', component: DomainsComponent},
  {path: 'sites', component: SitesComponent},
  {path: 'apps', component: AppsComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: IntroComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TopNavbarComponent,
    SideNavComponent,
    AboutComponent,
    PricingComponent,
    DomainsComponent,
    SitesComponent,
    AppsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routingApp),
    AccordionModule.forRoot(),
    TabsModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
