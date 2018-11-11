definition.session("demo", function(session) {
  session.defaults.setGzip(true);
  session.defaults.setHeader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36");

  session.get("/demo");
});
