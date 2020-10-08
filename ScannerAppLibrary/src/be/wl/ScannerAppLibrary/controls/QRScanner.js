sap.ui.define(["sap/ui/core/Control", "sap/m/Select", "sap/ui/core/Item", "sap/m/Switch", "sap/m/Toolbar","../libs/instascan.min","../libs/adapter"], function (Control, Select, Item, Switch, Toolbar,instaLibrary,adapterLibrary) {
    "use strict";
    return Control.extend("be.wl.ScannerAppLibrary.controls.QRScanner", {
        "metadata": {
            "properties": {
                value: 'string'
            },
            "events": {
                QRCodeScanned: {
                    parameters: {
                        value: {
                            type: "string"
                        }
                    }
                }
            },
            aggregations: {
                _toolbar: {
                    type: "sap.m.Toolbar",
                    multiple: false,
                    visibility: "hidden"
                }
            }
        },
        init: function () {
            this._cameraSelection = new Select({ change: this.onChangeCamera.bind(this) });
            this._mirrorSwitch = new Switch({ state: false, change: this.onChangeMirror.bind(this) });
            this.setAggregation("_toolbar", new Toolbar({ content: [this._cameraSelection, this._mirrorSwitch] }));
        },
onAfterRendering: function (evt) {
    this.scanner = new Instascan.Scanner({
        video: this.getDomRef().lastElementChild,
        mirror: false
    });
    this.scanner.addListener('scan', function(qrcode){ 
        this.onQRCodeScanned(qrcode);
    }.bind(this));
    Instascan.Camera.getCameras().then(function (cameras) {
        this.cameras = cameras;
        cameras.forEach(function (camera, key) {
            this._cameraSelection.addItem(new Item({ key: key, text: camera.name }));
        }.bind(this))
        if (cameras.length > 0) {
            this.scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
        }
    }.bind(this)).catch(function (e) {
        console.error(e);
    });
},
onQRCodeScanned: function (qrcode) {
    this.setProperty("value", qrcode, true);
    this.fireQRCodeScanned({
        value: qrcode
    });
},
onChangeCamera: function (event) {
    this.scanner.start(this.cameras[event.getParameter("selectedItem").getKey()]);
},
onChangeMirror: function (event) {
    this.scanner.mirror = event.getParameter("state");
}
    });
});
