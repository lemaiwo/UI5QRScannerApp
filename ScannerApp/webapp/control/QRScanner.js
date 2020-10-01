sap.ui.define(["sap/ui/core/Control"], function (Control) {
	"use strict";
	return Control.extend("be.wl.ScannerApp.control.QRScanner", {
		"metadata": {
			"properties": {
				value:'string'
			},
			"events": {
				QRCodeScanned: {
					parameters: {
						value: {
							type: "string"
						}
					}
				}
			}
		},
		init: function () { },
		onAfterRendering: function (evt) {
			let scanner = new Instascan.Scanner({
				video: this.getDomRef()
			});
			scanner.addListener('scan', (qrcode) => this.onQRCodeScanned(qrcode));
			Instascan.Camera.getCameras().then(function (cameras) {
				if (cameras.length > 0) {
					scanner.start(cameras[0]);
				} else {
					console.error('No cameras found.');
				}
			}).catch(function (e) {
				console.error(e);
			});
		},
		onQRCodeScanned: function (qrcode) {
			// this.setValue(qrcode);
			//use setproperty with suppressinvalidate true to avoid rerender of control
			this.setProperty("value",qrcode,true);
			this.fireQRCodeScanned({
				value: qrcode
			});
		}
	});
});
