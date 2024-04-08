export class AppConstants {
  public static ratingStarTotalCount = 5;
  //public static API_BASE_URL                = 'http://3.235.4.90:8080/nutrieats';
  public static API_BASE_URL                = 'http://localhost:8080';
  public static SIGN_IN_USER                = this.API_BASE_URL + '/api/v1/users/signIn'; //POST
  public static RESET_USER_REQUEST          = this.API_BASE_URL + '/api/v1/users/resetPassword/request'; //POST
  public static RESET_USER                  = this.API_BASE_URL + '/api/v1/users/resetPassword'; //POST
  public static VALIDATE_OTP                = this.API_BASE_URL + '/api/v1/users/resetPassword/otp/validate'; //POST
  public static SIGN_OUT_USER               = this.API_BASE_URL + '/api/v1/users/signOut'; //POST
  public static CREATE_USER                 = this.API_BASE_URL + '/api/v1/users/createUser'; //POST
  public static GET_LOGGED_USER             = this.API_BASE_URL + '/api/v1/users/details'; //GET
  public static PUT_USER_DETAILS            = this.API_BASE_URL + '/api/v1/users/update/details'; //PUT
  public static GET_USER_DETAILS            = this.API_BASE_URL + '/api/v1/users/username/{username}'; //PUT
  public static GET_DIETITIANS              = this.API_BASE_URL + '/api/v1/dietitians'; //GET
  public static SEND_MEAL_DIET_TO_CUST      = this.API_BASE_URL + '/api/v1/dietitians/customer/items'; //POST
  public static MSG_CUSTOMER                = this.API_BASE_URL + '/api/v1/dietitians/msgcustomer'; //POST
  public static GET_DIETITIAN_NEW_CUSTOMERS = this.API_BASE_URL + '/api/v1/dietitians/new/customers'; //GET
  public static GET_DIETITIAN_CUSTOMERS     = this.API_BASE_URL + '/api/v1/dietitians/customers'; //GET
  public static SAVE_DIETITIAN_MENU         = this.API_BASE_URL + '/api/v1/dietitians/menus/{menuName}'; //GET
  public static GET_DIETITIAN_MENUS         = this.API_BASE_URL + '/api/v1/dietitians/menus'; //GET
  public static GET_DIETITIAN_MENU_ITEMS    = this.API_BASE_URL + '/api/v1/dietitians/menus/{menuName}/items'; //GET
  public static MODIFY_DIETITIAN_MENU       = this.API_BASE_URL + '/api/v1/dietitians/menus/modify/{menuName}'; //POST
  public static HIRE_DIETITIANS             = this.API_BASE_URL + '/api/v1/customers/hireDietitian'; //POST
  public static CUSTOMER_HIRED_DIETITIANS   = this.API_BASE_URL + '/api/v1/customers/dietitians'; //POST
  public static CUSTOMER_CONFIRM_MENU       = this.API_BASE_URL + '/api/v1/customers/confirmmenu'; //POST
  public static CUSTOMER_REJECT_MENU        = this.API_BASE_URL + '/api/v1/customers/rejectmenu'; //POST
  public static MSG_DIETITIAN               = this.API_BASE_URL + '/api/v1/customers/msgdietitan'; //POST
  public static GET_ALL_ITEMS               = this.API_BASE_URL + '/api/v1/items'; //GET
  public static CREATE_ITEM                 = this.API_BASE_URL + '/api/v1/items/create'; //GET
  public static GET_ALL_ITEMS_LIST          = this.API_BASE_URL + '/api/v1/items/list'; //GET
  public static GET_OR_POST_DIET_CUST_ITEM  = this.API_BASE_URL + '/api/v1/items/dietitian/customer/{customerName}'; //GET/POST
  public static DELETE_DIET_CUST_ITEM       = this.API_BASE_URL + '/api/v1/items/dietitian/customer/{customerName}/{itemName}'; //DELETE
  public static GET_CUST_DIET_ITEM          = this.API_BASE_URL + '/api/v1/items/customer/dietitian/{dietitianName}'; //GET
  public static GET_CUST_DIET_ITEM_LOOKUPS  = this.API_BASE_URL + '/api/v1/items/dietitian/customer/{itemName}/unit/lookupValue'; //GET
  public static GET_CHILD_ITEMS             = this.API_BASE_URL + '/api/v1/items/child/items/{parentItemName}'; //GET
  public static GET_ITEMS_RESTAURANTS       = this.API_BASE_URL + '/api/v1/items/restaurants/{parentItemName}'; //GET
  public static GET_PREFERRED_OPTION_LOOKUPS= this.API_BASE_URL + '/api/v1/lookups/{lookupTypeId}'; //GET
  public static GET_RATINGS_OF_USER         = this.API_BASE_URL + '/api/v1/rating/{username}'; //GET
  public static GET_SPECIFIC_RATINGS_OF_USER= this.API_BASE_URL + '/api/v1/rating/specificRating/{username}'; //GET
  public static POST_RATINGS_OF_USER        = this.API_BASE_URL + '/api/v1/rating'; //POST
  public static GET_ALL_RESTAURANTS         = this.API_BASE_URL + '/api/v1/restaurants'; //GET
  public static GET_RESTAURANT_ITEMS_LOGGED = this.API_BASE_URL + '/api/v1/restaurants/items'; //GET WHEN LOGGED
  public static GET_RESTAURANT_ITEMS_NOT_LOG= this.API_BASE_URL + '/api/v1/restaurants/{restaurantUsername}/items'; //GET
  public static CREATE_GET_ORDER            = this.API_BASE_URL + '/api/v1/orders/customer'; //POST
  public static GET_ORDER                   = this.API_BASE_URL + '/api/v1/orders/customer/new/orders'; //GET
  public static RESTAURANT_ORDERS           = this.API_BASE_URL + '/api/v1/orders/restaurant'; //POST
  public static RESTAURANT_LIVE_ORDERS      = this.API_BASE_URL + '/api/v1/orders/restaurant/live'; //POST
  public static RESTAURANT_NEXT_STATUS      = this.API_BASE_URL + '/api/v1/orders/restaurant/status'; //GET
  public static CREATE_RECURRING_ORDER      = this.API_BASE_URL + '/api/v1/orders/recurring'; //POST
  public static GET_NEW_RECURRING_ORDER     = this.API_BASE_URL + '/api/v1/orders/recurring'; //GET
  public static UPD_NEW_RECURRING_ORDER     = this.API_BASE_URL + '/api/v1/orders/recurring/update'; //GET
  public static PENDING_RECURRING_ORDER     = this.API_BASE_URL + '/api/v1/orders/recurring/pending/order'; //GET
  public static GET_RECURRING_ORDER_BY_NUMB = this.API_BASE_URL + '/api/v1/orders/recurring/{orderId}'; //GET
  public static GET_RECURRING_ORDER_BY_DIET = this.API_BASE_URL + '/api/v1/orders/recurring/dietitian'; //GET
  public static GET_RECURRING_ORDER_DET_BY_DIET= this.API_BASE_URL + '/api/v1/orders/recurring/dietitian/{orderId}'; //GET
  public static UPD_NEW_RECURRING_ORDER_DIET= this.API_BASE_URL + '/api/v1/orders/recurring/update/dietitian'; //GET
  public static CONFIRM_NEW_RECURRING_ORDER = this.API_BASE_URL + '/api/v1/orders/recurring/restaurant/confirm'; //GET
  public static NEW_ORDER_FOR_RECURRING_ORDER = this.API_BASE_URL + '/api/v1/orders/customer/restaurant'; //POST
}
export class AppRoles {
  public static CUSTOMER_ROLE   = 'ROLE_CUSTOMER';
  public static DIETITIAN_ROLE  = 'ROLE_DIETITIAN';
  public static RESTAURENT_ROLE = 'ROLE_RESTAURANT';
  public static ADMIN_ROLE      = 'ROLE_ADMIN';
}
export class LookupTypes {
  public static ratingCategory = "5";
  public static commentOptionsCategory = "6";
  public static degreeCategory = "7";
  public static servicesCategory = "5";
  public static cuisinesCategory = "8";
}
