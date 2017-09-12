const navigation = document.getElementsByTagName('nav')[0];
const pagination = document.getElementById('pagination');
const ava = document.getElementById('avatar');

class ResultController {
  constructor($scope) {
    $scope.title = 'Ваш результат';
    $scope.stepName = '';
    navigation.style.display = 'none';
    pagination.style.display = 'none';
    avatar.style.background = 'url(' + $scope.user.avatar + ') center';
    avatar.style.backgroundSize = 'cover';

    this.reset = () => {
      $scope.user = {};
      navigation.style.display = 'flex';
      pagination.style.display = 'flex';
      $scope.page1 = $scope.page2 = false;
      $scope.page3 = $scope.page4 = false;
    }
  }
}

ResultController.$inject = ['$rootScope'];
export default ResultController;