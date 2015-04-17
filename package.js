Package.describe({
  name: "gwendall:autoform-i18n",
  summary: "Internationalization for Autoform",
  version: "0.1.0",
  git: "https://github.com/gwendall/meteor-autoform-i18n.git"
});

Package.onUse(function (api, where) {

  api.use([
    "aldeed:simple-schema@1.3.2",
    "tap:i18n@1.4.1",
    "templating@1.1.1",
    "underscore@1.0.3"
  ]);

  api.add_files([
    "client/lib.js"
  ], "client");

  api.addFiles("package-tap.i18n");
  api.addFiles([
    "i18n/en.i18n.json",
    "i18n/fr.i18n.json",
    "i18n/de.i18n.json"
  ]);

});
