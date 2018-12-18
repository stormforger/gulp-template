//
// This file is automatically generated.
//
// (!!!) DO NOT MODIFY DIRECTLY! (!!!)
//

definition.setTargets(["testapp.loadtest.party"]);

definition.setArrivalPhases([
  // === debug
  //{ duration: 10 * 60, rate: 4.0, max_clients: 20 },

  // === testing
  { duration: 15 * 60, rate: 48000 / 60 / 60 }
]);

definition.setTestOptions({
  cluster: { region: "eu-central-1", sizing: "large", },
});

definition.setSessionWeights({
  "demo": 1,
});

// SETUP END

definition.session("debug", function(session) {
  session.defaults.setGzip(true);

  session.get("/debugging");
});

definition.session("demo", function(session) {
  session.defaults.setGzip(true);
  session.defaults.setHeader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36");

  session.get("/demo");
});

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

// ==================================================================
// == HELPERS
// ==================================================================

/*
  Include helpers here.

  A helper (function) is a small unit of functionality that is independent
  of a business feature.
*/

// (!!!) DO NOT REMOVE OR CHANGE THE FOLLOWING LINES! (!!!)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VzL2FjbWUtc2hvcC9zZXR1cC5qcyIsImNhc2VzL2FjbWUtc2hvcC9zY2VuYXJpb3MvZGVidWcuanMiLCJjYXNlcy9hY21lLXNob3Avc2NlbmFyaW9zL2RlbW8uanMiLCJjb21wb25lbnRzL2NvbXBvbmVudHMuanMiLCJjb21wb25lbnRzL2hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWNtZS1zaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5pdGlvbi5zZXRUYXJnZXRzKFtcInRlc3RhcHAubG9hZHRlc3QucGFydHlcIl0pO1xuXG5kZWZpbml0aW9uLnNldEFycml2YWxQaGFzZXMoW1xuICAvLyA9PT0gZGVidWdcbiAgLy97IGR1cmF0aW9uOiAxMCAqIDYwLCByYXRlOiA0LjAsIG1heF9jbGllbnRzOiAyMCB9LFxuXG4gIC8vID09PSB0ZXN0aW5nXG4gIHsgZHVyYXRpb246IDE1ICogNjAsIHJhdGU6IDQ4MDAwIC8gNjAgLyA2MCB9XG5dKTtcblxuZGVmaW5pdGlvbi5zZXRUZXN0T3B0aW9ucyh7XG4gIGNsdXN0ZXI6IHsgcmVnaW9uOiBcImV1LWNlbnRyYWwtMVwiLCBzaXppbmc6IFwibGFyZ2VcIiwgfSxcbn0pO1xuXG5kZWZpbml0aW9uLnNldFNlc3Npb25XZWlnaHRzKHtcbiAgXCJkZW1vXCI6IDEsXG59KTtcblxuLy8gU0VUVVAgRU5EXG4iLCJkZWZpbml0aW9uLnNlc3Npb24oXCJkZWJ1Z1wiLCBmdW5jdGlvbihzZXNzaW9uKSB7XG4gIHNlc3Npb24uZGVmYXVsdHMuc2V0R3ppcCh0cnVlKTtcblxuICBzZXNzaW9uLmdldChcIi9kZWJ1Z2dpbmdcIik7XG59KTtcbiIsImRlZmluaXRpb24uc2Vzc2lvbihcImRlbW9cIiwgZnVuY3Rpb24oc2Vzc2lvbikge1xuICBzZXNzaW9uLmRlZmF1bHRzLnNldEd6aXAodHJ1ZSk7XG4gIHNlc3Npb24uZGVmYXVsdHMuc2V0SGVhZGVyKFwiVXNlci1BZ2VudFwiLCBcIk1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzEzXzYpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS82OS4wLjM0OTcuMTAwIFNhZmFyaS81MzcuMzZcIik7XG5cbiAgc2Vzc2lvbi5nZXQoXCIvZGVtb1wiKTtcbn0pO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PSBDT01QT05FTlRTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLypcbiAgQSBjb21wb25lbnQgY291bGQgYmUgYSBzZXQgb2Ygc3RlcHMgb2ZcbiAgYSBidXNpbmVzcyBwcm9jZXNzIGxpa2UgcGVyZm9ybWluZyBhIGxvZ2luLlxuXG4gIEV4YW1wbGU6XG5cbiAgZnVuY3Rpb24gZG9Mb2dpbihjb250ZXh0KSB7XG4gICAgdmFyIHVzZXJzID0gY29udGV4dC5kcy5sb2FkU3RydWN0dXJlZChcInNob3AvdXNlcnMuY3N2XCIpO1xuXG4gICAgLy8gLi4uXG5cbiAgICB2YXIgdXNlciA9IGNvbnRleHQuZHMucGlja0Zyb20odXNlcnMpO1xuXG4gICAgY29udGV4dC5wb3N0KFwiaHR0cHM6Ly9hcGkuc2hvcC5leGFtcGxlLmNvbS9sb2dpblwiLCB7XG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGVtYWlsOiB1c2VyLmdldChcImVtYWlsXCIpLFxuICAgICAgICBwYXNzd29yZDogdXNlci5nZXQoXCJwYXNzd29yZFwiKSxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4qL1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PSBIRUxQRVJTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLypcbiAgSW5jbHVkZSBoZWxwZXJzIGhlcmUuXG5cbiAgQSBoZWxwZXIgKGZ1bmN0aW9uKSBpcyBhIHNtYWxsIHVuaXQgb2YgZnVuY3Rpb25hbGl0eSB0aGF0IGlzIGluZGVwZW5kZW50XG4gIG9mIGEgYnVzaW5lc3MgZmVhdHVyZS5cbiovXG4iXX0=
