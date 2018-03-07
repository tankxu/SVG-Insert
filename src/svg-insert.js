export default function(context) {
	//Create input window
	const UI = require('sketch/ui')
	const svgCode = UI.getStringFromUser('Input your SVG code', 'edit here')

	const svgString = NSString.stringWithString(svgCode);
	const svgData = svgString.dataUsingEncoding(NSUTF8StringEncoding);

	const svgImporter = MSSVGImporter.svgImporter();
	svgImporter.prepareToImportFromData(svgData);
	const svgLayer = svgImporter.importAsLayer();

	//Add SVG Layer 
	svgLayer.setName('SVG Layer');
	context.document.currentPage().addLayers([svgLayer]);
    context.document.showMessage(`🎉 SVG inserted!`)
}