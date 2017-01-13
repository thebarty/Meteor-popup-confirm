A clean and easy to use confirmation popup. Forked from [`matdutour:popup-confirm`](https://github.com/mathieudutour/Meteor-popup-confirm/) and made bootstrap3 compatible.

Installation
============

Make sure that you have a bootstrap3-library installed. This package does NOT include bootstrap3, but simply uses its styles.

Then add this package via:

```
$ meteor add thebarty:modal-prompt-bootstrap
```

Usage
=====

```
new Confirmation({
  message: 'Are you sure ?',
  title: 'Confirmation',
  cancelText: 'Cancel',
  okText: 'Ok',
  success: true, // whether the button should be green or red
  focus: 'cancel' // which button to autofocus, 'cancel' (default) or 'ok', or 'none'
}, function (ok) {
  // ok is true if the user clicked on 'ok', false otherwise
})
```

Notes
=====

The API of this is really nice, but the code itself could be nicer. We are in meteor-blaze-land
and - if we only had more time - should change the foundation of this package to a meteor-template controller.
We decided to keep it like it is, because it simply works as it is.

In opposite to `theduke:bootstrap-modal-prompt` this package here will
also pass your tests on a CircleCi Chimp-testing setup.
