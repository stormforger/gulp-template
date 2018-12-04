definition.session("debug", function(session) {
  session.defaults.setGzip(true);

  session.get("/debugging");
});
