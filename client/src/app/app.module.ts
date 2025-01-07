import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/element/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './components/user/home/cart/cart.component';
import { HomeComponent } from './components/user/home/home.component';
import { SearchResultsComponent } from './components/user/home/search-results/search-results.component';
import { CategoriesComponent } from './components/user/product/categories/categories.component';
import { ProductsComponent } from './components/user/product/products/products.component';
import { ProductDetailsComponent } from './components/user/product/product-details/product-details.component';
import { ProfileComponent } from './components/user/user-profile/profile/profile.component';
import { OrderStatusComponent } from './components/user/user-profile/order-status/order-status.component';
import { PreviousOrdersComponent } from './components/user/user-profile/previous-orders/previous-orders.component';
import { FooterComponent } from './components/common/element/footer/footer.component';
import { ButtonComponent } from './components/common/element/button/button.component';
import { LocationComponent } from './components/user/home/location/location.component';
import { LoginComponent } from './components/common/page/login/login.component';
import { RegisterComponent } from './components/common/page/register/register.component';
import { LoaderComponent } from './components/common/element/loader/loader.component';
import { AboutComponent } from './components/common/page/about/about.component';
import { ContactComponent } from './components/common/page/contact/contact.component';
import { BlogComponent } from './components/common/page/blog/blog.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './components/admin/manage-users/manage-users.component';
import { ManageDeliveryPartnersComponent } from './components/admin/manage-delivery-partners/manage-delivery-partners.component';
import { AnalyticsComponent } from './components/admin/analytics/analytics.component';
import { ManageAdminComponent } from './components/super-admin/manage-admin/manage-admin.component';
import { SuperAdminDashboardComponent } from './components/super-admin/super-admin-dashboard/super-admin-dashboard.component';
import { OrderDashboardComponent } from './components/admin/order-dashboard/order-dashboard.component';
import { DeliveryDashboardComponent } from './components/delivery/delivery-dashboard/delivery-dashboard.component';
import { OrdersComponent } from './components/delivery/orders/orders.component';
import { NavigationComponent } from './components/delivery/navigation/navigation.component';
import { LandingComponent } from './components/landing/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    HomeComponent,
    SearchResultsComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProfileComponent,
    OrderStatusComponent,
    PreviousOrdersComponent,
    FooterComponent,
    ButtonComponent,
    LocationComponent,
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    AdminDashboardComponent,
    ManageUsersComponent,
    ManageDeliveryPartnersComponent,
    AnalyticsComponent,
    ManageAdminComponent,
    SuperAdminDashboardComponent,
    OrderDashboardComponent,
    DeliveryDashboardComponent,
    OrdersComponent,
    NavigationComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
