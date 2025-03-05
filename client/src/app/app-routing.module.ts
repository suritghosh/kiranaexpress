import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing/landing.component';
import { LoginComponent } from './components/common/page/login/login.component';
import { RegisterComponent } from './components/common/page/register/register.component';
import { AboutComponent } from './components/common/page/about/about.component';
import { ContactComponent } from './components/common/page/contact/contact.component';
import { BlogComponent } from './components/common/page/blog/blog.component';
import { HomeComponent } from './components/user/home/home.component';
import { CartComponent } from './components/user/home/cart/cart.component';
import { SearchResultsComponent } from './components/user/home/search-results/search-results.component';
import { LocationComponent } from './components/user/home/location/location.component';
import { CategoriesComponent } from './components/user/product/categories/categories.component';
import { ProductsComponent } from './components/user/product/products/products.component';
import { ProductDetailsComponent } from './components/user/product/product-details/product-details.component';
import { ProfileComponent } from './components/user/user-profile/profile/profile.component';
import { OrderStatusComponent } from './components/user/user-profile/order-status/order-status.component';
import { PreviousOrdersComponent } from './components/user/user-profile/previous-orders/previous-orders.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './components/admin/manage-users/manage-users.component';
import { ManageDeliveryPartnersComponent } from './components/admin/manage-delivery-partners/manage-delivery-partners.component';
import { AnalyticsComponent } from './components/admin/analytics/analytics.component';
import { OrderDashboardComponent } from './components/admin/order-dashboard/order-dashboard.component';
import { ManageAdminComponent } from './components/super-admin/manage-admin/manage-admin.component';
import { SuperAdminDashboardComponent } from './components/super-admin/super-admin-dashboard/super-admin-dashboard.component';
import { DeliveryDashboardComponent } from './components/delivery/delivery-dashboard/delivery-dashboard.component';
import { OrdersComponent } from './components/delivery/orders/orders.component';
import { NavigationComponent } from './components/delivery/navigation/navigation.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, // Default landing page
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },

  // User routes
  {
    path: 'user',
    children: [
      { path: 'cart', component: CartComponent },
      { path: 'search', component: SearchResultsComponent },
      { path: 'location', component: LocationComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent }, // Dynamic product ID
      { path: 'profile', component: ProfileComponent },
      { path: 'orders', component: PreviousOrdersComponent },
      { path: 'order-status/:id', component: OrderStatusComponent } // Dynamic order ID
    ]
  },

  // Admin routes
  {
    path: 'admin',
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'manage-users', component: ManageUsersComponent },
      { path: 'manage-delivery', component: ManageDeliveryPartnersComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'orders', component: OrderDashboardComponent }
    ]
  },

  // Super Admin routes
  {
    path: 'super-admin',
    children: [
      { path: 'dashboard', component: SuperAdminDashboardComponent },
      { path: 'manage-admins', component: ManageAdminComponent }
    ]
  },

  // Delivery routes
  {
    path: 'delivery',
    children: [
      { path: 'dashboard', component: DeliveryDashboardComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'navigation', component: NavigationComponent }
    ]
  },

  // Wildcard route (404 Page Not Found)
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
