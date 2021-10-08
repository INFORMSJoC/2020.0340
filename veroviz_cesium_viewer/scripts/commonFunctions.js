
var localVersion = '2020.10.23';
var latestVersion = undefined;

var isActiveOpen   = false;
var isActiveConfig = false;
var isActiveUtil   = false;
var isActiveInfo   = false;

// Global variables to store entities
var allIDs = new Array; 
var orientationIDs = new Array; 
var pinBuilder = new Cesium.PinBuilder();
var paths = new Array;

var vehiclePolylines = {};
var objectInfo = {};
var myImageryProviders = {};


function turnMenuDivsOff(input_div)  {
	if (input_div != 'openDiv')  {
		document.getElementById('openDiv').style.display = 'none';
		document.getElementById("openIcon").src="images/open_off.png";
		document.getElementById('btnOpenDiv').style.width = '30px';
		document.getElementById('btnOpenDiv').style.borderTopRightRadius = '4px';
		document.getElementById('btnOpenDiv').style.borderBottomRightRadius = '4px';
		isActiveOpen = false;
	};
	if (input_div != 'configDiv')  {
		document.getElementById('configDiv').style.display = 'none';
		document.getElementById("configIcon").src="images/config_off.png";
		document.getElementById('btnConfigDiv').style.width = '30px';
		document.getElementById('btnConfigDiv').style.borderTopRightRadius = '4px';
		document.getElementById('btnConfigDiv').style.borderBottomRightRadius = '4px';
		isActiveConfig = false;
	};
	/*
	if (input_div != 'utilDiv')  {
		document.getElementById('utilDiv').style.display = 'none';
		document.getElementById("utilIcon").src="images/util_off.png";
		document.getElementById('btnUtilDiv').style.width = '30px';
		document.getElementById('btnUtilDiv').style.borderTopRightRadius = '4px';
		document.getElementById('btnUtilDiv').style.borderBottomRightRadius = '4px';
		isActiveUtil = false;
	};
	*/
	if (input_div != 'infoDiv')  {
		document.getElementById('infoDiv').style.display = 'none';
		document.getElementById("infoIcon").src="images/info_off.png";
		document.getElementById('btnInfoDiv').style.width = '30px';
		document.getElementById('btnInfoDiv').style.borderTopRightRadius = '4px';
		document.getElementById('btnInfoDiv').style.borderBottomRightRadius = '4px';
		isActiveInfo = false;
	};
};


function toggleOpenDiv()  {
	turnMenuDivsOff('openDiv');

	isActiveOpen = !isActiveOpen;

	if (isActiveOpen) {
		document.getElementById('btnOpenDiv').style.width = '34px';
		document.getElementById('btnOpenDiv').style.borderTopRightRadius = '0px';
		document.getElementById('btnOpenDiv').style.borderBottomRightRadius = '0px';

		document.getElementById('openDiv').style.display = 'block';
		document.getElementById("openIcon").src="images/open_on.png";
	}  else  {
		document.getElementById('btnOpenDiv').style.width = '30px';
		document.getElementById('btnOpenDiv').style.borderTopRightRadius = '4px';
		document.getElementById('btnOpenDiv').style.borderBottomRightRadius = '4px';

		document.getElementById('openDiv').style.display = 'none';
		document.getElementById("openIcon").src="images/open_off.png";
	};
};


function toggleConfigDiv()  {
	turnMenuDivsOff('configDiv');

	isActiveConfig = !isActiveConfig;

	if (isActiveConfig) {
		// document.querySelector('btnConfigDiv').style.width = '60px';
		document.getElementById('btnConfigDiv').style.width = '34px';
		document.getElementById('btnConfigDiv').style.borderTopRightRadius = '0px';
		document.getElementById('btnConfigDiv').style.borderBottomRightRadius = '0px';

		document.getElementById('configDiv').style.display = 'block';
		document.getElementById("configIcon").src="images/config_on.png";
	}  else  {
		document.getElementById('btnConfigDiv').style.width = '30px';
		document.getElementById('btnConfigDiv').style.borderTopRightRadius = '4px';
		document.getElementById('btnConfigDiv').style.borderBottomRightRadius = '4px';

		document.getElementById('configDiv').style.display = 'none';
		document.getElementById("configIcon").src="images/config_off.png";
	};
};


/*
function toggleUtilDiv()  {
	turnMenuDivsOff('utilDiv');

	isActiveUtil = !isActiveUtil;

	if (isActiveUtil) {
		document.getElementById('btnUtilDiv').style.width = '34px';
		document.getElementById('btnUtilDiv').style.borderTopRightRadius = '0px';
		document.getElementById('btnUtilDiv').style.borderBottomRightRadius = '0px';

		document.getElementById('utilDiv').style.display = 'block';
		document.getElementById("utilIcon").src="images/util_on.png";
	}  else  {
		document.getElementById('btnUtilDiv').style.width = '30px';
		document.getElementById('btnUtilDiv').style.borderTopRightRadius = '4px';
		document.getElementById('btnUtilDiv').style.borderBottomRightRadius = '4px';

		document.getElementById('utilDiv').style.display = 'none';
		document.getElementById("utilIcon").src="images/util_off.png";
	};
};
*/


function toggleInfoDiv()  {
	turnMenuDivsOff('infoDiv');

	isActiveInfo = !isActiveInfo;

	if (isActiveInfo) {
		document.getElementById('btnInfoDiv').style.width = '34px';
		document.getElementById('btnInfoDiv').style.borderTopRightRadius = '0px';
		document.getElementById('btnInfoDiv').style.borderBottomRightRadius = '0px';

		document.getElementById('infoDiv').style.display = 'block';
		document.getElementById("infoIcon").src="images/info_on.png";
	}  else  {
		document.getElementById('btnInfoDiv').style.width = '30px';
		document.getElementById('btnInfoDiv').style.borderTopRightRadius = '4px';
		document.getElementById('btnInfoDiv').style.borderBottomRightRadius = '4px';

		document.getElementById('infoDiv').style.display = 'none';
		document.getElementById("infoIcon").src="images/info_off.png";
	};
};


function checkVersion(localVersion, latestVersion)  {
	var myString = "<p style='margin-left:10px;margin-right:5px;'>You are using version <b>" + 		
		localVersion + "</b> of the VeRoViz Cesium viewer plugin. </p>";
	
	if (latestVersion != undefined)  {
		if (localVersion != latestVersion)  {
			myString = myString + "<p style='margin-left:10px;margin-right:5px;'><font color='#EF6700'>A new version (<b>" + latestVersion + "</b>) is available.</font><br> Visit <a href='https://veroviz.org/downloads/' class='mine' target=_blank>https://veroviz.org/downloads/</a> to download the updated version.</p>";
			toggleInfoDiv();
		}  else  {
			myString = myString + "<p style='margin-left:10px;margin-right:5px;'><b>You are up-to-date with the latest version.</b></p>";
		}
	}  	
	
	myString = myString + "<p style='margin-left:10px;margin-right:5px;'>You are running Cesium version " + Cesium.VERSION + ".</p>";
	// myString += "<p>Visit <a href='https://cesiumjs.org/downloads/' target=_blank class='mine'>cesiumjs.org/downloads/</a> to find the latest version of Cesium.</p>"

	document.getElementById('versionSpan').innerHTML = myString;
};


function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};


function isPosNumber(n) {
	if (isNumber(n))  {
		if (n >= 0)  {
			return true;
		}  else  {
			return false;
		}
	}  else  {
		return false;
	}
};


function isInt(n) {
  return !isNaN(n) &&
		 parseInt(Number(n)) == n &&
		 !isNaN(parseInt(n, 10));
};


function isPosInt(n) {
	if (isInt(n))  {
		if (n >= 0)  {
			return true;
		}  else  {
			return false;
		}
	}  else  {
		return false;
	}
};


function toggleAllPaths()  {
	routePolylines.show = !routePolylines.show;
	if (routePolylines.show)  {
		document.getElementById('togglePathsBtn').value = "Hide All Paths";
	}  else  {
		document.getElementById('togglePathsBtn').value = "Show Selected Paths";	
	};
};

function toggleAllNodePins()  {
	nodePins.show = !nodePins.show;
	if (nodePins.show)  {
		document.getElementById('toggleNodePinsBtn').value = "Hide All Pins";
	}  else  {
		document.getElementById('toggleNodePinsBtn').value = "Show All Pins";	
	};
};


function toggleIndivPath(id)  {
	vehiclePolylines[id].show = !vehiclePolylines[id].show;
};

    
function registerPaths(pathNames)  {
	// The "config" menu has an initially-empty table of all paths.
	var pathTable = document.getElementById('pathListTable');

	for (i = 0; i < pathNames.length; i++) { 
		// Define an empty Cesium entity for each path.
		// The parent is the collection of ALL polylines.
		vehiclePolylines[pathNames[i]] = viewer.entities.add({
				parent: routePolylines
			});

		// Set this flag to true...we'll display all paths by default:	
		vehiclePolylines[pathNames[i]].show = true;

		// Add a row to the "config" table of paths:
		var pathRow = pathTable.insertRow(-1);
		pathRow.setAttribute("id", "vehicle", 0);		// WHAT IS THIS??
		var cell1 = pathRow.insertCell(0);
		var cell2 = pathRow.insertCell(1);
		cell1.innerHTML = "<input type='checkbox' onChange=\"toggleIndivPath('" + pathNames[i] + "')\" checked>";
		cell2.innerHTML = pathNames[i];
	};
};


function registerObjects(objectInfo)  {
	// The "config" menu has an initially-empty table of all objects.
	var objectTable = document.getElementById('objectListTable');

	for (var key in objectInfo) {
		// Add a row to the "config" table of objects:
		var objectRow = objectTable.insertRow(-1);
		// objectRow.setAttribute("id", "vehicle", 0);		// WHAT IS THIS??
		var cell1 = objectRow.insertCell(0);
		cell1.innerHTML = objectInfo[key]['label'];

		var objectRow = objectTable.insertRow(-1);
		// objectRow.setAttribute("id", "vehicle", 0);		// WHAT IS THIS??
		var cell1 = objectRow.insertCell(0);
		
		var myString = "<table>" + 
			"<tr><td>&nbsp;</td><td>Scale:</td><td><INPUT TYPE='number' min='0' MAXLENGTH='5' SIZE='5' VALUE='" + objectInfo[key]['scale'] + "' onChange='changeScale(\"" + key + "\", this)'></INPUT></td><td>%</td></tr>" + 
			"<tr><td>&nbsp;</td><td>Min Size:</td><td><INPUT TYPE='number' min='0' MAXLENGTH='3' SIZE='3' VALUE='" + objectInfo[key]['minPxSize'] + "' onChange='changeMinSize(\"" + key + "\", this)'></INPUT></td><td>pixels</td></tr></table>";		
			
		cell1.innerHTML = myString;
	};	
};    

  
function changeScale(entityID, scaleInput)  {
	// scaleInput.value must be a non-negative number
	if (isPosNumber(scaleInput.value))  {
		for (i=0; i < objectInfo[entityID]['childModels'].length; i++)  {
			var myEntity = viewer.entities.getById(objectInfo[entityID]['childModels'][i]);
			myEntity.model.scale.setValue(scaleInput.value / 100.0);   
		};		
	}  else  {
		alert('The scale value must be a non-negative number.');
		scaleInput.focus();
	};
			
};


function changeMinSize(entityID, sizeInput)  {
	// sizeInput.value must be a non-negative integer
	if (isPosInt(sizeInput.value))  {
		for (i=0; i < objectInfo[entityID]['childModels'].length; i++)  {
			var myEntity = viewer.entities.getById(objectInfo[entityID]['childModels'][i]);
			myEntity.model.minimumPixelSize.setValue(sizeInput.value);	
		};				
	}  else  {
		alert('The minimum pixel size must be a non-negative integer.');
		sizeInput.focus();	
	}
};    


function changeBackgroundMap(selectedProvider)  {
	// Change the Imagery Provider
	
	// Find the current layer
	var currentLayer = viewer.imageryLayers.get(viewer.imageryLayers.length - 1);
	
	// Remove the current layer
	viewer.imageryLayers.remove(currentLayer, false);

	// Add the new layer
	var newLayer = new Cesium.ImageryLayer(myImageryProviders[selectedProvider.value]);
	viewer.imageryLayers.add(newLayer);
};


function setScripts(problemName)  {
	// Load Configs:
	var myScriptConfigs = problemName + '/config.js';
	var myFunctionConfigs = 'setConfigs()';
	
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = myScriptConfigs;
	script.onload = function(){
		eval(myFunctionConfigs);
	};
	document.head.appendChild(script);
	
	// Load Nodes:
	var myScriptNodes = problemName + '/displayNodes.js';
	var myFunctionNodes = 'displayNodes()';
	
	try {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = myScriptNodes;
		script.onload = function(){
			eval(myFunctionNodes);
		};
		document.head.appendChild(script);
	} catch (err) {
		console.log("No nodes to display.")
	}
	
	// Load Paths:
	var myScriptPaths = problemName + '/displayPaths.js';
	var myFunctionPaths = 'displayPaths()';
	
	try {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = myScriptPaths;
		script.onload = function(){
			eval(myFunctionPaths);
		};
		document.head.appendChild(script);
	} catch(err) {
		console.log("No paths to display.")
	}
	
	// Load Keys:
	// NOTE: We're no longer using keys (9/20/19)
	/*
	var myScriptKeys = problemName + '/keys.js';
	var myFunctionKeys = 'getKeys()';

	try {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = myScriptKeys;
		script.onload = function(){
			eval(myFunctionKeys);
		};
		document.head.appendChild(script);
	} catch(err) {
		console.log("No keys to load.")
	}
	*/
	
	// Enable the button to hide/show all paths:
	document.getElementById('togglePathsBtn').disabled = false;
	
	// Enable the button to hide/show all node pins:
	document.getElementById('toggleNodePinsBtn').disabled = false;
};	


function runRoutes(czmlRouteFile, allIDs, orientationIDs)  {
	var dataSource = new Cesium.CzmlDataSource(czmlRouteFile);
	viewer.dataSources.add(dataSource);
	dataSource.load(czmlRouteFile).then(function(){
		for (i = 0; i < allIDs.length; i++) { 
			myID = allIDs[i];
			if (dataSource.entities.getById(myID) != undefined) {
				var matchingEntity = viewer.entities.add(dataSource.entities.getById(myID));
				if (orientationIDs.indexOf(myID) >= 0)  {
					matchingEntity.orientation=new Cesium.VelocityOrientationProperty(matchingEntity.position);
				}				
			}
		}	
	}).otherwise(function(error){
		window.alert(error);
	});		   
};


function loadProblem()  {
	reqFilename = document.getElementById("targetFile").value;		
	reqFilename = reqFilename.replace("C:\\fakepath\\", "");
	reqFilename = reqFilename.replace(".vrv", "");
	problemName = reqFilename.replace(/;/g, "/");
	if (reqFilename != "")  {
		setScripts(problemName);

		document.getElementById('loadProblemButton').disabled = true;
		document.getElementById('targetFile').disabled = true;
		turnMenuDivsOff('all');
	}
	else
	{
		console.log("There was no file selected to load.");
	}
};


function getImageryProviders()  {

	myImageryProviders['arcGISAerial'] = new Cesium.ArcGisMapServerImageryProvider({
		url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
		enablePickFeatures : false
	});

	myImageryProviders['arcGISGray'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', 
		credit : 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
		maximumLevel : 16,
		enablePickFeatures : false
	});

	myImageryProviders['arcGISOceanBasemap'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', 
		credit : 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
		maximumLevel : 13,
		enablePickFeatures : false
	});

	myImageryProviders['arcGISRoad'] = new Cesium.ArcGisMapServerImageryProvider({
		url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer',
		enablePickFeatures : false
	});

	myImageryProviders['arcGISShadedRelief'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',
		credit : 'Tiles &copy; Esri &mdash; Source: Esri',	
		maximumLevel : 13,
		enablePickFeatures : false
	});
	
	myImageryProviders['arcGISTopo'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', 
		credit : 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
		// maximumLevel : 16,
		enablePickFeatures : false
	});

	/*
	// Requires Bing Maps API Key
	myImageryProviders['bingAerial'] = new Cesium.BingMapsImageryProvider({
		url : 'https://dev.virtualearth.net',
		key : Cesium.BingMapsApi.defaultKey,
		mapStyle : Cesium.BingMapsStyle.AERIAL
	});

	myImageryProviders['bingAerialLabels'] = new Cesium.BingMapsImageryProvider({
		url : 'https://dev.virtualearth.net',
		key : Cesium.BingMapsApi.defaultKey,
		mapStyle : Cesium.BingMapsStyle.AERIAL_WITH_LABELS_ON_DEMAND
	});

	myImageryProviders['bingCanvasDark'] = new Cesium.BingMapsImageryProvider({
		url : 'https://dev.virtualearth.net',
		key : Cesium.BingMapsApi.defaultKey,
		mapStyle : Cesium.BingMapsStyle.CANVAS_DARK
	});

	myImageryProviders['bingCanvasGray'] = new Cesium.BingMapsImageryProvider({
		url : 'https://dev.virtualearth.net',
		key : Cesium.BingMapsApi.defaultKey,
		mapStyle : Cesium.BingMapsStyle.CANVAS_GRAY
	});

	myImageryProviders['bingCanvasLight'] = new Cesium.BingMapsImageryProvider({
		url : 'https://dev.virtualearth.net',
		key : Cesium.BingMapsApi.defaultKey,
		mapStyle : Cesium.BingMapsStyle.CANVAS_LIGHT
	});

	myImageryProviders['bingRoad'] = new Cesium.BingMapsImageryProvider({
		url : 'https://dev.virtualearth.net',
		key : Cesium.BingMapsApi.defaultKey,
		mapStyle : Cesium.BingMapsStyle.ROAD_ON_DEMAND
	});
	*/

	// Access the CartoDB Positron basemap, which uses an OpenStreetMap-like tiling scheme.
	myImageryProviders['positron'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
		credit : 'Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
		enablePickFeatures : false
	});

	myImageryProviders['positronNoLabels'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
		credit : 'Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
		enablePickFeatures : false
	});

	myImageryProviders['darkMatter'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
		credit : 'Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
		enablePickFeatures : false
	});

	myImageryProviders['darkMatterNoLabels'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
		credit : 'Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
		enablePickFeatures : false
	});
	
	myImageryProviders['voyagerLabelsUnder'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
		credit : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		subdomains : 'abcd',
		maximumLevel : 19,
		enablePickFeatures : false
	});

	/*
	myImageryProviders['mapboxStreets'] = new Cesium.MapboxImageryProvider({
		mapId: 'mapbox.streets'
	});

	myImageryProviders['mapboxSat'] = new Cesium.MapboxImageryProvider({
		mapId: 'mapbox.satellite'
	});
	*/
	
	myImageryProviders['NaturalEarthII'] = new Cesium.UrlTemplateImageryProvider({
		url : Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII'),
		enablePickFeatures : false
	});

	myImageryProviders['OSM'] = new Cesium.OpenStreetMapImageryProvider({
		url : 'https://a.tile.openstreetmap.org/',
		enablePickFeatures : false
	});

	myImageryProviders['openTopo'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
		credit : 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
		enablePickFeatures : false
	});

	// I got the Stamens to work by removing the {r} from the URL.
	myImageryProviders['stamenToner'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}',
		credit : 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 
		subdomains : 'abcd', 
		customTags : {
			ext : function(){
				return 'png'
			}
		},
		enablePickFeatures : false
	});

	myImageryProviders['stamenTonerBackground'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.{ext}',
		credit : 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 
		subdomains : 'abcd', 
		customTags : {
			ext : function(){
				return 'png'
			}
		},
		enablePickFeatures : false
	});

	myImageryProviders['stamenTonerLite'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}',
		credit : 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 
		subdomains : 'abcd', 
		customTags : {
			ext : function(){
				return 'png'
			}
		},
		enablePickFeatures : false
	});

	myImageryProviders['stamenTerrain'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}',
		credit : 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 
		subdomains : 'abcd', 
		customTags : {
			ext : function(){
				return 'png'
			}
		},
		enablePickFeatures : false
	});

	myImageryProviders['stamenTerrainBackground'] = new Cesium.UrlTemplateImageryProvider({
		url : 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.{ext}',
		credit : 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 
		subdomains : 'abcd', 
		customTags : {
			ext : function(){
				return 'png'
			}
		},
		enablePickFeatures : false
	});	
};

