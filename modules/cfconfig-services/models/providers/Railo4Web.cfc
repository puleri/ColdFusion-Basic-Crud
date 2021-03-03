/**
*********************************************************************************
* Copyright Since 2017 CommandBox by Ortus Solutions, Corp
* www.ortussolutions.com
********************************************************************************
* @author Brad Wood
* 
* I represent the behavior of reading and writing CF engine config in the format compatible with a Lucee 4.x web context
* I extend the BaseConfig class, which represents the data itself.
*/
component accessors=true extends='cfconfig-services.models.BaseRailo' {
	
	/**
	* Constructor
	*/
	function init() {
		// Call super first, then override
		super.init();
		
		// Used when writing out a Lucee server context config file from the generic config
		setConfigFileTemplate( expandPath( '/cfconfig-services/resources/railo4/railo-web-base.xml' ) );
		
		// This is the file name used by this config file
		setConfigFileName( 'railo-web.xml.cfm' );
		// This is where said config file is stored inside the server home
		setConfigRelativePathWithinServerHome( '/' );

		setFormat( 'railoWeb' );
		setVersion( '4' );
		
		return this;
	}
	
}