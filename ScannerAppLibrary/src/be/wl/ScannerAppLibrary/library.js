/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library be.wl.ScannerAppLibrary.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * Demo Lib
		 *
		 * @namespace
		 * @name be.wl.ScannerAppLibrary
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "be.wl.ScannerAppLibrary",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			noLibraryCSS: true,
			types: [],
			interfaces: [],
			controls: [
				"be.wl.ScannerAppLibrary.controls.QRScanner"
			],
			elements: []
		});

		/* eslint-disable */
		return be.wl.ScannerAppLibrary;
		/* eslint-enable */

	}, /* bExport= */ false);