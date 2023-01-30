document.addEventListener('DOMContentLoaded', () => {

   function structureUserInfo(userName) {
       let result = {};
       result.userName = userName;
       return function(role) {
           result.role = role;
           return result;
       }
   }

    console.log(structureUserInfo('John')('Admin'));

});
