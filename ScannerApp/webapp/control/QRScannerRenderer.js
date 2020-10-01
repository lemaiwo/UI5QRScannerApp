sap.ui.define([], function () {
	"use strict";
	var QRScannerRenderer = {};
	QRScannerRenderer.render = function (oRm, oControl) {
		oRm.write("<video");
		oRm.writeControlData(oControl);
		oRm.addStyle("width", "100%");
		oRm.addStyle("height", "100%"); 
		oRm.writeStyles();
		oRm.write(">");
		oRm.write("</video>");
	};
	return QRScannerRenderer;
}, true);