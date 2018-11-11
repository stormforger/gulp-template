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
