sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/Button",
    "sap/m/Dialog",
    "be/wl/ScannerAppLibrary/controls/QRScanner"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast,Button,Dialog,QRScanner) {
        "use strict";

        return Controller.extend("be.wl.ScannerApp.controller.App", {
            onInit: function () {
                this.getView().setModel(new JSONModel({ QRCode: "" }), "ui")
            },
            onQRCodeScanned: function (event) {
                //qr code from event
                console.log(event.getParameter("value"));
                //or use binding
                MessageToast.show("Scanned QRCode: " + this.getView().getModel("ui").getProperty("/QRCode"));
            },
            onOpenScanner: function () {
                if (!this.oDefaultDialog) {
                    this.oDefaultDialog = new Dialog({
                        title: "Scanner in dialog",
                        content: new QRScanner({
                            QRCodeScanned:this.onQRCodeScanned,
                            value:"{ui>/QRCode}"
                        }),
                        endButton: new Button({
                            text: "Close",
                            press: function () {
                                this.oDefaultDialog.getDomRef().style.visibility = "hidden";
                                //this.oDefaultDialog.getDomRef().classList.remove("sapMDialogOpen");
                                document.getElementById("sap-ui-blocklayer-popup").style.visibility = "hidden";
                                //this.oDefaultDialog.close();
                            }.bind(this)
                        })
                    });
                    // to get access to the controller's model
                    this.getView().addDependent(this.oDefaultDialog);
                    this.oDefaultDialog.open();
                }
                document.getElementById("sap-ui-blocklayer-popup").style.visibility = "visible";
                this.oDefaultDialog.getDomRef().style.visibility = "visible";
                //this.oDefaultDialog.getDomRef().classList.add("sapMDialogOpen");
                //this.oDefaultDialog.open();
            },
            onOpenScanner2: function () {
                if (!this.oDefaultDialog2) {
                    this.oDefaultDialog2 = new Dialog({
                        title: "Scanner in dialog",
                        content: new QRScanner({
                            QRCodeScanned:".onQRCodeScanned",
                            value:"{ui>/QRCode}"
                        }),
                        endButton: new Button({
                            text: "Close",
                            press: function () {
                                this.oDefaultDialog.close();
                            }.bind(this)
                        })
                    });
                    // to get access to the controller's model
                    this.getView().addDependent(this.oDefaultDialog2);
                }
                this.oDefaultDialog2.open();
            }
        });
    });
