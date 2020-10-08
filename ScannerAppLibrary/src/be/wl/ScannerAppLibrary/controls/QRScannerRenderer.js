sap.ui.define([], function () {
    "use strict";
var QRScannerRenderer = {
    apiVersion: 2, 
    render: function (oRm, oControl) {
        oRm.openStart("div", oControl).style("width", "100%").style("height", "100%").openEnd();
        oRm.renderControl(oControl.getAggregation("_toolbar"));
        oRm.openStart("video", oControl).style("width", "100%").style("height", "100%").openEnd().close("video");
        oRm.close("div");
    }
};
    return QRScannerRenderer;
}, true);