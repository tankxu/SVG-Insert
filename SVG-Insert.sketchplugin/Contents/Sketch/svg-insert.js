var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (context) {

    var document, svgCode, OK, READY_TO_Insert, CANCELLED, NOT_READY;

    initialise(context);

    userInterfaceLoop();

    function initialise(context) {
        svgCode = "";
        OK = 1000;
        READY_TO_Insert = true;
        CANCELLED = false;
        NOT_READY = null;
    }

    // Keep displaying the user interface until we've either cancelled or clicked search
    function userInterfaceLoop() {

        var uiResponse = NOT_READY;

        while (uiResponse === NOT_READY) {

            // Creatte the interface
            var modal = createUserInterface();

            // Show it and process the form
            uiResponse = processButtonClick(modal, modal.runModal());

            // Process the response
            switch (uiResponse) {

                // Reload the interface
                case NOT_READY:
                    alert("Input content cannot be blank");
                    break;

                // Let's go
                case READY_TO_Insert:
                    doInsertSVG();
                    break;

                // Cancelled
                case CANCELLED:
                    break;
            }
        }
    }

    function createUserInterface() {

        // Create modal window
        var userInterface = COSAlertWindow["new"]();

        // Text for modal
        userInterface.setMessageText("SVG Insert");
        userInterface.setInformativeText("Use this plugin to help you save time from copy a svg graph on web into sketch. Just paste the svg xml code into the input frame below and click OK,the svg graph will be inserted into the artboard.");

        // Svg Code input
        var svgCode = createTextField("", "Paste svg xml code here, like <svg ... /></svg>", NSMakeRect(0, 0, 280, 120));
        userInterface.addAccessoryView(svgCode);

        // OK and cancel buttons
        userInterface.addButtonWithTitle('OK');
        userInterface.addButtonWithTitle('Cancel');

        // Return the Modal structure
        return userInterface;
    }

    function createTextField(value, placeholder, frame) {
        var textfield = NSTextField.alloc().initWithFrame(frame);
        textfield.setStringValue(value);
        if (placeholder) textfield.setPlaceholderString(placeholder);

        return textfield;
    }

    // Processes the result of the UI
    function processButtonClick(modal, buttonClick) {

        var result;

        // We're only concerned if the replace all button has been clicked
        if (buttonClick === OK) {

            // Grab the data from the form
            svgCode = modal.viewAtIndex(0).stringValue();

            // Make sure we have svg to insert
            if (svgCode != "") {

                // Yeah, ready to go
                result = READY_TO_Insert;
            } else {

                // Need something in input
                result = NOT_READY;
            }
        } else {

            // Cancel button pressed
            result = CANCELLED;
        }

        return result;
    }

    function doInsertSVG() {

        var svgString = NSString.stringWithString(svgCode);
        var svgData = svgString.dataUsingEncoding(NSUTF8StringEncoding);

        var svgImporter = MSSVGImporter.svgImporter();
        svgImporter.prepareToImportFromData(svgData);
        var svgLayer = svgImporter.importAsLayer();

        svgLayer.setName('SVG Layer');
        context.document.currentPage().addLayers([svgLayer]);
        context.document.showMessage("🎉 SVG inserted!");
    }

    // Show a small alert dialog
    function alert(message) {

        // Create the dialog
        var alertDialog = COSAlertWindow["new"]();

        // Add a title, message and button
        alertDialog.setMessageText("SVG Insert - Error");
        alertDialog.setInformativeText(message);
        alertDialog.addButtonWithTitle("OK");

        // And show it
        alertDialog.runModal();
    }
};

/***/ })
/******/ ]);
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')
