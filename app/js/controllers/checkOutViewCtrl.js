four51.app.controller('CheckOutViewCtrl', ['$scope', '$routeParams', '$location', '$filter', '$rootScope', '$451', 'User', 'Order', 'OrderConfig', 'FavoriteOrder', 'AddressList', 'Resources', 'GoogleAnalytics',
	function ($scope, $routeParams, $location, $filter, $rootScope, $451, User, Order, OrderConfig, FavoriteOrder, AddressList, Resources, GoogleAnalytics) {
		$scope.errorSection = 'open';

		$scope.isEditforApproval = $routeParams.id != null && $scope.user.Permissions.contains('EditApprovalOrder');
		if ($scope.isEditforApproval) {
			Order.get($routeParams.id, function(order) {
				$scope.currentOrder = order;
			});
		}

		if (!$scope.currentOrder) {
			$location.path('catalog');
		}

		$scope.hasOrderConfig = OrderConfig.hasConfig($scope.currentOrder, $scope.user);
		$scope.checkOutSection = $scope.hasOrderConfig ? 'order' : 'shipping';

		/*PW-15096 Custom Order Field*/
		angular.forEach($scope.currentOrder.OrderFields, function (field) {
			if (field.Name == "NVISupplierShipDay") {
				switch ($scope.user.LogoName) {
					case "Walmart":
						field.Value = 'Thursday';
						break;
					case "AmericasBest":
						field.Value = 'Monday / Tuesday';
						break;
					case "EyeglassWorld":
						field.Value = 'Wednesday';
						break;
					case "Military":
						field.Value = 'Wednesday';
						break;
					case "FredMeyer":
						field.Value = 'Wednesday';
						break;
				}
			}
		});
		/*PW-15096 Custom Order Field*/

		function submitOrder() {
			$scope.displayLoadingIndicator = true;
			$scope.submitClicked = true;
			$scope.errorMessage = null;
			Order.submit($scope.currentOrder,
				function(data) {
					if ($scope.user.Company.GoogleAnalyticsCode) {
						GoogleAnalytics.ecommerce(data, $scope.user);
					}
					$scope.user.CurrentOrderID = null;
					User.save($scope.user, function(data) {
						$scope.user = data;
						$scope.displayLoadingIndicator = false;
					});
					$scope.currentOrder = null;
					$location.path('/order/' + data.ID);
				},
				function(ex) {
					$scope.submitClicked = false;
					$scope.errorMessage = ex.Message;
					$scope.displayLoadingIndicator = false;
					$scope.shippingUpdatingIndicator = false;
					$scope.shippingFetchIndicator = false;
				}
			);
		};

		$scope.$watch('currentOrder.CostCenter', function() {
			OrderConfig.address($scope.currentOrder, $scope.user);
		});

		function saveChanges(callback) {
			$scope.displayLoadingIndicator = true;
			$scope.errorMessage = null;
			$scope.actionMessage = null;
			var auto = $scope.currentOrder.autoID;
			Order.save($scope.currentOrder,
				function(data) {
					$scope.currentOrder = data;
					if (auto) {
						$scope.currentOrder.autoID = true;
						$scope.currentOrder.ExternalID = 'auto';
					}
					$scope.displayLoadingIndicator = false;
					if (callback) callback($scope.currentOrder);
					$scope.actionMessage = "Your changes have been saved";
				},
				function(ex) {
					$scope.currentOrder.ExternalID = null;
					$scope.errorMessage = ex.Message;
					$scope.displayLoadingIndicator = false;
					$scope.shippingUpdatingIndicator = false;
					$scope.shippingFetchIndicator = false;
				}
			);
		};

		$scope.continueShopping = function() {
			if (confirm('Do you want to save changes to your order before continuing?') === true)
				saveChanges(function() { $location.path('catalog') });
			else
				$location.path('catalog');
		};

		$scope.cancelOrder = function() {
			if (confirm('Are you sure you wish to cancel your order?') === true) {
				$scope.displayLoadingIndicator = true;
				Order.delete($scope.currentOrder,
					function() {
						$scope.user.CurrentOrderID = null;
						$scope.currentOrder = null;
						User.save($scope.user, function(data) {
							$scope.user = data;
							$scope.displayLoadingIndicator = false;
							$location.path('catalog');
						});
					},
					function(ex) {
						$scope.actionMessage = ex.Message;
						$scope.displayLoadingIndicator = false;
					}
				);
			}
		};

		$scope.saveChanges = function() {
			saveChanges();
		};

		$scope.submitOrder = function() {
			submitOrder();
		};

		$scope.saveFavorite = function() {
			FavoriteOrder.save($scope.currentOrder);
		};

		$scope.cancelEdit = function() {
			$location.path('order');
		};
	}]);
