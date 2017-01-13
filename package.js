Package.describe({
  name: 'thebarty:popup-confirm-bs3',
  version: '0.2.2',
  summary: 'A clean and easy to use confirmation popup. Forked from `matdutour:popup-confirm` and made bootstrap3 compatible.',
  git: 'https://github.com/thebarty/Meteor-popup-confirm',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery');
  api.use('templating');
  api.addFiles('lib/popup-confirm.html', 'client');
  api.export('Confirmation', 'client');
  api.addFiles('lib/popup-confirm.js', 'client');
});
