angular.module('friendsList').controller('mainCtrl', function($scope){
    $scope.friends = ['Monica', 'Rachel', 'Phoebe','Joye', 'Chandler', 'Ross'];

//Black Diamond
    $scope.add = function(friendName) {
        $scope.friends.push(friendName);
        $scope.newFriend=""; //to clear the input
    }

    $scope.delete = function(name){
        let index=$scope.friends.indexOf(name);
        $scope.friends.splice(index, 1)
    }
})
