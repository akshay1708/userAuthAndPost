angular.module("postfeed") //did'nt used (..,[]) because module exist in htmlfile
  .controller("postCtrl", function ($scope,$http) {

        $scope.data = {};

          $http.get('http://localhost:3000/posts/api/posts')
                      .then(function (data) {
                      //  console.log(data);
                      $scope.data.posts = data.data.data;//Poor name convention :P
                  })
                  .catch(function (error) {
                      $scope.data.error = error;
                    });

                                  // when submitting the add form, send the text to the node API
               $scope.addpost = function() {

                   $http.post('posts/addpost', {"heading":$scope.postForm.postHead,"content":$scope.postForm.postContent})
                       .then(function(data) {

                         if (!data.data.data) {
                           alert(data.data)//in case of Unauthorized access
                         }
                              //  $scope.postHead = {};
                          //  $scope.postContent={}; // clear the form so our user is ready to enter another
                           //console.log(data);
                        else
                           $scope.data.posts = data.data.data;

                       })
                       .catch(function(data) {
                           console.log('Error: ' + data);
                       });
               }
        $scope.deletepost = function(id) {
          $http.delete('http://localhost:3000/posts/deletepost/'+id)
                      .then(function (data) {

                      $scope.data.posts = data.data.data;
                  })
                  .catch(function (error) {
                      $scope.data.error = error;
                    });
                    }
                  });
