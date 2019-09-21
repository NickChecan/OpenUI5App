sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			switch (sStatus) {
				case "A":
					return 'Approved';
				case "B":
                    return 'New';
				case "C":
                    return 'Delayed';
				default:
					return sStatus;
			}
		}
	};
});