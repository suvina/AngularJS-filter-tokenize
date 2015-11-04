
// Creating a filter linked with myFilterApp module
angular.module('myFilterApp', [])
.filter('tokenize', ['delimiter', function(delimiter) {
// returns the input separated by given delimiter 
  function deliFilter(input) {
  return input.split('').join(delimiter.symbol);
  }
  deliFilter.$stateful = true;

  return deliFilter;
}])
// controller assigns the default value of input boxes
.controller('MyController', ['$scope', 'delimiter', function($scope, delimiter) {
  $scope.greeting = 'hello world';

  $scope.delimiter = delimiter;
}])
.value('delimiter', {symbol: ','});