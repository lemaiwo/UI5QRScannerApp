sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller,JSONModel,MessageToast) {
		"use strict";

		return Controller.extend("be.wl.ScannerApp.controller.App", {
			onInit: function () {
                this.getView().setModel(new JSONModel({QRCode:""}),"ui")
            },
            onQRCodeScanned:function(event){
                //qr code from event
                console.log(event.getParameter("value"));
                //or use binding
                MessageToast.show("Scanned QRCode: "+ this.getView().getModel("ui").getProperty("/QRCode"));
            }
		});
	});
