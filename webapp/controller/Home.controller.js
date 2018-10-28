sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui5.dialerzDialer.controller.Home", {
		onInit: function() {
			this.oModel = new JSONModel({
				Number: ""
			});
			this.getView().setModel(this.oModel);
			this.oModel.refresh(); 
		},
		onNumberChange: function(oEvent) {
			this.oModel.getData().Number += oEvent.getSource().getText();
			this.oModel.refresh();
		}
	});
});