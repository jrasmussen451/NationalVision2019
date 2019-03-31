#### NationalVision2019
##### Vendor: Supply Logic
##### PM: Luke Paschka, Supply Logic
##### Developer: Jen Rasmussen, Independent

##### Github URL
* https://github.com/jrasmussen451/NationalVision2019

##### Converter URL
* http://www.four51.com/Themes/Custom/78ad1fd0-1ab1-4bd2-9a1a-a556f7bc77dc/NationalVisionConverter/index.html

#### Merged files from NationalVision repository
* js/controllers/contactUsCtrl.js
* js/directives/productZoom.js
* js/services/analyticsService.js
* js/services/buyerResourceServices.js
* js/services/emailService.js
* js/services/logoService.js
* lib/mandrill.js
* lib/angular/plugins/ordercloudspecforms.js (why is this here? its duplicated in lib/oc - compare)
* product-detail-template.html

#### Non-merged files from NationalVision repository
* js/directives/productSearchInput.js (lib/oc)
* app/lib/angular/plugins/ordercloudspecforms.js (lib/oc) - needs compare

#### Logos based on user group (Example User Group Store #s)

* National Vision (none) - this is too tall on mobile
* AC Lens (??) per luke, ok to ignore 
* americas-best (5101)
* eyeglass-world (8201) - this is too tall on mobile
* walmart (140)
* fred-meyer (7603) - this is too tall on mobile
* military (6103)


#### Notes
* A default image is displayed on the category pages (in the code)
* If a category has a description, it needs removed (ex: Name Badges)
* The default image can be overridden on a category basic by using the category description to house an image
* ex: xxxx

#### Items where 2019 was newer

##### Controllers
* addressListCtrl.js - change in scope.checkAll (36-37)
* approvalInputCtrl.js - inclusion of Address (1-29)
* cartCtrl.js - includes Punchout (1-25)
* categoryCtrl.js - navStatus (29-31, 38-40) - commented out, breaks and we probably don't need
* checkOutViewCtrl.js - Custom Order Field (19-41) | analytics (49-51)
* Four51Ctrl.js - adds Punchout

##### Directives
* addToOrderSpecs.js
* alertShow.js
* customFileField.js
* customTextField.js
* nav.js
* orderBilling.js
* orderDetails.js
* orderShipping.js
* orderSummary.js
* paymentSelection.js

##### Services
* navService.js
* orderConfigService.js
* orderService.js
* productDisplayService.js
- merged in override, contains 'scope.pdfviewed = "veiwed"' (164)
* productService.js
* securityService.js
* XLATTables.js
* config/js
* routing/js 


#### Bugs
#### Updates Needed
* Messages/contactus.html - is Doug Hand still the Account Director?