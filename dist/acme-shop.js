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
// == HELPERS
// ==================================================================

/*
  Include helpers here.

  A helper (function) is a small unit of functionality that is independent
  of a business feature.
*/

// (!!!) DO NOT REMOVE OR CHANGE THE FOLLOWING LINES! (!!!)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2VzL2FjbWUtc2hvcC9zZXR1cC5qcyIsImNhc2VzL2FjbWUtc2hvcC9zY2VuYXJpb3MvZGVidWcuanMiLCJjYXNlcy9hY21lLXNob3Avc2NlbmFyaW9zL2RlbW8uanMiLCJjb21wb25lbnRzL2hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhY21lLXNob3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbml0aW9uLnNldFRhcmdldHMoW1widGVzdGFwcC5sb2FkdGVzdC5wYXJ0eVwiXSk7XG5cbmRlZmluaXRpb24uc2V0QXJyaXZhbFBoYXNlcyhbXG4gIC8vID09PSBkZWJ1Z1xuICAvL3sgZHVyYXRpb246IDEwICogNjAsIHJhdGU6IDQuMCwgbWF4X2NsaWVudHM6IDIwIH0sXG5cbiAgLy8gPT09IHRlc3RpbmdcbiAgeyBkdXJhdGlvbjogMTUgKiA2MCwgcmF0ZTogNDgwMDAgLyA2MCAvIDYwIH1cbl0pO1xuXG5kZWZpbml0aW9uLnNldFRlc3RPcHRpb25zKHtcbiAgY2x1c3RlcjogeyByZWdpb246IFwiZXUtY2VudHJhbC0xXCIsIHNpemluZzogXCJsYXJnZVwiLCB9LFxufSk7XG5cbmRlZmluaXRpb24uc2V0U2Vzc2lvbldlaWdodHMoe1xuICBcImRlbW9cIjogMSxcbn0pO1xuXG4vLyBTRVRVUCBFTkRcbiIsImRlZmluaXRpb24uc2Vzc2lvbihcImRlYnVnXCIsIGZ1bmN0aW9uKHNlc3Npb24pIHtcbiAgc2Vzc2lvbi5kZWZhdWx0cy5zZXRHemlwKHRydWUpO1xuXG4gIHNlc3Npb24uZ2V0KFwiL2RlYnVnZ2luZ1wiKTtcbn0pO1xuIiwiZGVmaW5pdGlvbi5zZXNzaW9uKFwiZGVtb1wiLCBmdW5jdGlvbihzZXNzaW9uKSB7XG4gIHNlc3Npb24uZGVmYXVsdHMuc2V0R3ppcCh0cnVlKTtcbiAgc2Vzc2lvbi5kZWZhdWx0cy5zZXRIZWFkZXIoXCJVc2VyLUFnZW50XCIsIFwiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTNfNikgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzY5LjAuMzQ5Ny4xMDAgU2FmYXJpLzUzNy4zNlwiKTtcblxuICBzZXNzaW9uLmdldChcIi9kZW1vXCIpO1xufSk7XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09IEhFTFBFUlNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKlxuICBJbmNsdWRlIGhlbHBlcnMgaGVyZS5cblxuICBBIGhlbHBlciAoZnVuY3Rpb24pIGlzIGEgc21hbGwgdW5pdCBvZiBmdW5jdGlvbmFsaXR5IHRoYXQgaXMgaW5kZXBlbmRlbnRcbiAgb2YgYSBidXNpbmVzcyBmZWF0dXJlLlxuKi9cbiJdfQ==
