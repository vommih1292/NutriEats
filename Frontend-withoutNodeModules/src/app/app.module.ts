import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { LoginComponent } from './component/login/login.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupComponent } from './component/signup/signup.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './component/shared/spinner/spinner.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { OverlayModule } from '@angular/cdk/overlay';
import { ListDieticiansComponent } from './component/list-dieticians/list-dieticians.component';
import { AppInterceptor } from './service/interceptor';
import { SharedService } from './service/shared.service';
import { DietitianDetialDialogComponent } from './component/dietitian-detial-dialog/dietitian-detial-dialog.component';
import { CustomerDetialDialogComponent } from './component/customer-detial-dialog/customer-detial-dialog.component';
import { ListAllItemsComponent } from './component/item/list-all-items/list-all-items.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { ListAllCustomersHiredDietitiansComponent } from './component/list-all-customers-hired-dietitians/list-all-customers-hired-dietitians.component';
import { DisplayAllItemsComponent } from './component/item/display-all-items/display-all-items.component';
import { ProfileComponent } from './component/profile/profile.component';
import { DetailUserProfileComponent } from './component/user-profile/detail-user-profile/detail-user-profile.component';
import { DefaultPageComponent } from './component/default-page/default-page.component';
import { CustomerRestaurantOrdersDashboardComponent } from './component/customer-restaurant-orders-dashboard/customer-restaurant-orders-dashboard.component';
import { CustomerLiveDialogComponent } from './component/customer-restaurant-orders-dashboard/customer-dashboard-live-dialog/customer-dashboard-live-dialog.component';
import { CustomerRestaurantOrdersComponent } from './component/customer-restaurant-orders/customer-restaurant-orders.component';
import { CustomerOrderLiveDialogComponent } from './component/customer-restaurant-orders/customer-live-dialog/customer-live-dialog.component';
import { RateUserDialogComponent } from './component/rate-user/rate-user.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ConfigureRestaurantMenuComponent } from './component/item/display-or-create-restaurant-items/configure-restaurant-items.component';
import { ViewRatingsDialogComponent } from './component/view-rating/view-rating.component';
import { ListMenuItemsComponent } from './component/item/list-menu-items/list-menu-items.component';
import { CreateStaticMenuComponent } from './component/item/create-static-menu/create-static-menu.component';
import { AddFromStaticDialogComponent } from './component/item/add-from-static/add-from-static-dialog.component';
import { CreateNewItemDialogComponent } from './component/item/create-new-item/create-new-item.component';
import { ViewStaticItemsComponent } from './component/item/view-static-menu/view-static-menu.component';
import { CreateStaticItemQtyDialogComponent } from './component/item/create-static-item-quantity-dialog/create-static-item-quantity-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    SpinnerComponent,
    ListDieticiansComponent,
    DietitianDetialDialogComponent,
    CustomerDetialDialogComponent,
    ListAllItemsComponent,
    ConfirmDialogComponent,
    ListAllCustomersHiredDietitiansComponent,
    DisplayAllItemsComponent,
    ProfileComponent,
    DefaultPageComponent,
    CustomerRestaurantOrdersDashboardComponent,
    RateUserDialogComponent,
    UserProfileComponent,
    ConfigureRestaurantMenuComponent,
    ViewRatingsDialogComponent,
    ListMenuItemsComponent,
    CustomerLiveDialogComponent,
    CustomerRestaurantOrdersComponent,
    CustomerOrderLiveDialogComponent,
    CreateStaticMenuComponent,
    ViewStaticItemsComponent,
    AddFromStaticDialogComponent,
    CreateStaticItemQtyDialogComponent,
    CreateNewItemDialogComponent,
    DetailUserProfileComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    /*MatDialog,
    MatDialogRef,*/
    HttpClientModule,
    CommonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    OverlayModule,
    NgxMatTimepickerModule,
  ],
  providers: [SharedService,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
