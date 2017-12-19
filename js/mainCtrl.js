angular.module('friendsList').controller('mainCtrl', 
function($scope){
    $scope.friends = [ 'Ben', 'Alex', 'Bob', 'Charlie', 'Jocelyn'];
    $scope.addFriend = function(){
        $scope.friends.push($scope.newFriends)
        $scope.newFriends = '';
    }
});