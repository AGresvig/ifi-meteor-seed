// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "soundcloud"
});
ServiceConfiguration.configurations.insert({
  service: "soundcloud",
  clientId: "<your soundcloud clientId here>",
  secret: "<your soundcloud app secret here>"
});