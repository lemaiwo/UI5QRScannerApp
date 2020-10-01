/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"be/wl/ScannerApp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
