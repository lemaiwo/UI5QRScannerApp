sap.ui.define([], function () {
    "use strict";
    var QRScannerRenderer = {};
    QRScannerRenderer.render = function (oRm, oControl) {

        oRm.write("<div");
        oRm.writeControlData(oControl);
        oRm.addStyle("width", "100%");
        oRm.addStyle("height", "100%");
        oRm.writeStyles();
        oRm.write(">");
        oRm.renderControl(oControl.getAggregation("_toolbar"));
        oRm.write("<video");
        oRm.addStyle("width", "100%");
        oRm.addStyle("height", "100%");
        oRm.writeStyles();
        oRm.write(">");
        oRm.write("</video>");
        oRm.write("</div>");
    };
    return QRScannerRenderer;
}, true);