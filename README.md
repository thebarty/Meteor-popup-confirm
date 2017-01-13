A clean and easy to use confirmation popup. Forked from `matdutour:popup-confirm` and made bootstrap3 compatible.

NOTE: make sure that you have a bootstrap3-library installed. This package does NOT include bootstrap3, but simply uses its styles.

Installation
============

    $ meteor add thebarty:popup-confirm-bs3


Usage
=====


  new Confirmation({
      message: "Are you sure ?",
      title: "Confirmation",
      cancelText: "Cancel",
      okText: "Ok",
      success: true, // whether the button should be green or red
      focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
    }, function (ok) {
      // ok is true if the user clicked on "ok", false otherwise
    });
