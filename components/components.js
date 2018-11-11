// ==================================================================
// == COMPONENTS
// ==================================================================

/*
  A component could be a set of steps of
  a business process like performing a login.

  Example:

  function doLogin(context) {
    var users = context.ds.loadStructured("shop/users.csv");

    // ...

    var user = context.ds.pickFrom(users);

    context.post("https://api.shop.example.com/login", {
      payload: {
        email: user.get("email"),
        password: user.get("password"),
      }
    });
  }

*/
