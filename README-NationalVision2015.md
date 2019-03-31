#### National Vision - rev. 18.8.0 CT Release 1.2.0 SPA Release (0215)
Last Updated: 1/28/16
========
##### Developer 
Jen Rasmussen, Four51

##### Github URL
* github.com/Four51Repositories/NationalVision

##### Theme URL
* http://www.four51.com/Themes/Custom/78ad1fd0-1ab1-4bd2-9a1a-a556f7bc77dc/NationalVision

##### Converter URL
* http://www.four51.com/Themes/Custom/78ad1fd0-1ab1-4bd2-9a1a-a556f7bc77dc/NationalVisionConverter/index.html


##### Modification Notes
* 8/14/15 TRT-01873 - updated specFormCtrl.js and some specforms for business cards that were not showing both center / address and removed name, title from store cards

#### Updated files

##### plugins
`lib/angular/plugins/ordercloudspecforms.js` 
* new spec form module 

##### js
`js/app.js`
* inject OrderCloud-SpecForms

`js/controllers/categoryCtrl.js`
* add Nav.set to conditionally show category tree  / lines 29, 36 

`js/controllers/contactUsCtrl.js`
* for Mandrill implementation

`js/controllers/checkOutViewCtrl.js`
* PW-15096 Custom Order Field - set the NVISupplierShipDay custom order field value / lines 19-41
* comment out analytics (not sure why/when this was done) / lines 48-50

`js/controllers/shortProductViewCtrl.js`
* PW-14681 Add to Order from Product List Page / lines 6-44

`js/controllers/specFormCtrl.js`
* add addresses via resourceService.js
* for AB-BCM only change title to General Manager instead of Manager / lines 36-41 [070615 Doug Hand Case #121311]
* TRT-01688 - fix for RXPad Stores pulling in non-exact store numbers / lines 100-113
* PW-14648 Prepopulating User Information / lines 27-154

`js/directives/productsearchinput.js`
* Top Nav Search

`js/directives/productzoom.js`
* Product Zoom

`js/routing.js`
* Add contactUsCtrl.js when /contactus

`js/services/emailService.js`
* Mandrill integration

`js/services/navService.js`
* Add nav set for category tree

`js/services/logoService.js`
* this is an override for the customer to update via converter

`js/services/resourceService.js`
* Add user and address details / lines 339-1139 

`js/services/userService.js`
* Add logo based on user group / lines 15-31
* PW-15096 Custom Order Field - Add ship day based on user group / lines 34-47

`js/services/whiteLabelService.js`
* replacement for ProofApproval

##### html
`index.html`
* add ng-class to main section
* lib/angular/plugins/ordercloud-specforms.js
* lib/mandrill.js
* js/controllers/contactUsCtrl.js
* js/directives/productsearchinput.js
* js/directives/productzoom.js
* js/services/emailService.js
* js/services/logoService.js

`partials/branding.html`
* add 'text-left' 
* add user.LogoURL

`partials/cartView.html`
* add 'cart-view'  / line 1
* update Cart header / lines 3-6
* add 'Delete' and make Edit Quantity red

`partials/categoryView.html`
* hide Search (is in top nav) 
* update column sizes for products / category tree

`partials/checkOutView.html`
* add 'checkout-view'  / line 1
* hide <orderbilling> / lines 10
* hide error messaging / lines 35-43

`partials/controls/login.html`
* add custom logo
* remove background
* remove ng-show on labels

`partials/controls/nav.html`
* add hidden-xs to back arrow / line
* make contact us primary nav item / lines 29-34
* hide 'dropdown-mega' / lines 102-109

`partials/controls/orderShipping.html`
* add UPS Ground filter to shippers / lines 56, 138
* update first/last name fields from col-sm-2 to col-sm-4 / lines 71, 74

`partials/controls/orderDetails.html`
* PW-15096 Custom Order Field - Hide NVISupplierShipDay custom order field / lines 42-46

`partials/controls/orderSummary.html`
* default ship cost to $0 value when not yet populated (instead of blank) / line 21

`partials/shortProductView.html`
* update thumbnail 'empty' / lines 8-14 
* update 'col-sm-8' to 'col-sm-7 col-sm-offset-1' / line 15
* remove product.ExternalID / line 17
* add product.ExternalID / line 32
* Case-124038 hide inventory / lines 33-35
* PW-14681 Add to Order from Product List Page / lines 35-53

`partials/copyrightView.html`
* powered by SupplyLogic  / line 7

`partials/Messages/contactus.html`
* Mandrill integration / lines 21-65 

`partials/Messages/searchView.html`
* change panel-search to panel-default / line 3 

`partials/productListView.html`
* PW-15245 Add Text When No Products are Shown In a Category / lines 1-10