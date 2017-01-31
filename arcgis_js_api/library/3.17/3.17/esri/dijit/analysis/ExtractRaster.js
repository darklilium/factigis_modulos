// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/ExtractRaster.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_hotspotsToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e \r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"extractRasterIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e${i18n.extractRaster}\x3c/td\x3e\r\n              \x3ctd\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                      \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e              \r\n                \x3c/div\x3e  \r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"\x3e \r\n      \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription" \x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e          \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_measurelabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.clipping}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"clippingGeometry"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel" style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_clippingMethodSelect" data-dojo-attach-event\x3d"onChange:_handleClippingMethodChange"\x3e\r\n              \x3coption value\x3d"byExtent"\x3e${i18n.clippingExtent}\x3c/option\x3e\r\n              \x3coption value\x3d"byGeometry"\x3e ${i18n.clippingGeometry}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_byGeometry" style\x3d"display:none"\x3e\r\n          \x3ctd style\x3d"padding-top:0;width:70%"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_clippingTypeSelect"\x3e\r\n              \x3coption value\x3d1\x3e${i18n.clippingInside}\x3c/option\x3e\r\n              \x3coption value\x3d2\x3e ${i18n.clippingOutside}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd style\x3d"width:10%;"\x3e\r\n            \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton" data-dojo-attach-point\x3d"_polyDrawBtn" class\x3d"esriFloatLeading esriActionButton" data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon polygonIcon\',label:\'${i18n.drawLabel}\'" data-dojo-attach-event\x3d"onChange:_handlePolyBtnChange"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputLayer"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseLayerTypeRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveLayerType}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput esriLongLabel" data-dojo-attach-point\x3d"_webLayerTypeSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont" href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true" /\x3e\r\n        ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3ctable class\x3d"esriFormTable"\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n              ${i18n.runAnalysis}\r\n            \x3c/button\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e  \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator" data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/ExtractRaster","dojo/_base/declare dojo/_base/lang dojo/has dojo/_base/connect dojo/_base/Color dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin ../../kernel ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../toolbars/draw ../../graphic ./RasterAnalysisMixin dojo/i18n!../../nls/jsapi dojo/text!./templates/ExtractRaster.html".split(" "),function(b,c,g,h,k,l,m,n,p,q,r,s,d,e,f,
t,u,v,w){b=b([m,n,p,q,r,u],{declaredClass:"esri.dijit.analysis.ExtractRaster",templateString:w,widgetsInTemplate:!0,inputLayer:null,clippingType:1,geometry:null,toolName:"ExtractRaster",helpFileName:"ExtractRaster",toolNlsName:v.extractRasterTool,_getRasterFunction:function(){return"Clip"},_getRasterArguments:function(){var a=this.get("clippingType");return{ClippingType:2<a?1:a,ClippingGeometry:2<a?this.map.extent:this.geometry}},_setDefaultInputs:function(){this.clippingType&&this._clippingTypeSelect.set("value",
this.clippingType)},_onClose:function(a){this.geometry&&this.map.graphics.clear();this._toolbar.deactivate();this.emit("drawtool-deactivate",{});a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:!a})},_handlePolyBtnChange:function(a){a?(this.emit("drawtool-activate",{}),this._toolbar.activate(f.POLYGON)):(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}))},_handleClippingMethodChange:function(a){l.set(this._byGeometry,"display","byExtent"===a?"none":"block");"byExtent"===
a&&(this.geometry=this.map.extent)},_addGeometry:function(a){var b=new d(d.STYLE_NULL,new e(e.STYLE_SOLID,new k([0,0,0]),4)),b=new t(a,b);this.geometry&&this.map.graphics.clear();this.map.graphics.add(b);this.geometry=a},_setMapAttr:function(a){this.map=a;this._toolbar=new f(this.map);h.connect(this._toolbar,"onDrawEnd",c.hitch(this,this._addGeometry))},_setClippingTypeAttr:function(a){this.clippingType=a},_getClippingTypeAttr:function(){if("byExtent"===this._clippingMethodSelect.get("value"))return 1;
var a=this._clippingTypeSelect.get("value");this.clippingType&&a&&(this.clippingType=a);return this.clippingType}});g("extend-esri")&&c.setObject("dijit.analysis.ExtractRaster",b,s);return b});