Package.describe({
  name: 'thebarty:modal-prompt-bootstrap',
  version: '0.2.2',
  summary: 'A clean and easy to use confirmation popup - based on bootstrap3 modals.',
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
