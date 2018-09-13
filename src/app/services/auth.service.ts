
export class AuthService {

    isAuthenticated(): boolean {
      var isAuth=true;
      if(localStorage.getItem('token') !=null) {
          isAuth=false;
      }
      return isAuth;
    }

  }
  