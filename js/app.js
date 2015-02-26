var app = angular.module('galleryList', ['ngAnimate']);

  app.controller('ListCtrl', function($scope){
    $scope.pins = [
        {
            photo:'img/list/1.jpg',
            face : 'img/member/14.png',
            what: 'Brunch this weekend?',
            who: 'Melanie'
        },
        {
            photo:'img/list/2.jpg',
            face : 'img/member/13.png',
            what: 'Brunch this weekend?',
            who: 'Jess Chan'
        },
        {
            photo:'img/list/3.jpg',
            face : 'img/member/12.png',
            what: 'Brunch this weekend?',
            who: 'Jill Tais'
        },
        {
            photo:'img/list/4.jpg',
            face : 'img/member/11.png',
            what: 'Brunch this weekend?',
            who: 'Alexandre Feset'
        },
        {
            photo:'img/list/5.jpg',
            face : 'img/member/10.png',
            what: 'Brunch this weekend?',
            who: 'Monique Chan'
        },
        {
            photo:'img/list/6.jpg',
            face : 'img/member/9.png',
            what: 'Brunch this weekend?',
            who: 'Rock Ttai'
        }
    ];
});
app.controller('ListrightCtrl', function($scope){
    $scope.pins = [
        {
            photo:'img/list/7.jpg',
            face : 'img/member/3.png',
            what: 'Brunch this weekend?',
            who: 'pilar Blasco'
        },
        {
            photo:'img/list/8.jpg',
            face : 'img/member/4.png',
            what: 'Brunch this weekend?',
            who: 'Tracy Chan'
        },
        {
            photo:'img/list/9.jpg',
            face : 'img/member/5.png',
            what: 'Brunch this weekend?',
            who: 'Yoshihiro Ogawa'
        },
        {
            photo:'img/list/10.jpg',
            face : 'img/member/6.png',
            what: 'Brunch this weekend?',
            who: 'World Feset'
        },
        {
            photo:'img/list/11.jpg',
            face : 'img/member/7.png',
            what: 'Brunch this weekend?',
            who: 'Monique Chan'
        },
        {
            photo:'img/list/12.jpg',
            face : 'img/member/8.png',
            what: 'Brunch this weekend?',
            who: 'Rock Ttai'
        }
    ];
});

// ng mouseover
 app.controller('MainCtrl', function($scope) {
    $scope.tasks = [
        {name: 'Item One'},
        {name: 'The second item'},
        {name: 'Three items is the best'}
    ];
    
    $scope.hoverIn = function(){
        this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        this.hoverEdit = false;
    };
    $scope.hovering = "hover";
});
