// Basemap
var url_ww = 'http://localhost:8080/geoserver';
var url_wms = 'http://localhost:8080/geoserver/wms';
//var url_wms= 'http://ec2-3-15-148-89.us-east-2.compute.amazonaws.com:8080/geoserver/wms';
//var workspace_name = 'gis';
var workspace_name = 'GisPolimi';
var bingKey = 'AgtG84GxqgWsJZDR1jn1ROSuXfgcQTtJQxqL1FoWEac7JtF9uKRWw72QbZY9Criv'


// BaseMaps
var bingRoads = new ol.layer.Tile({ 
	title: 'Bing Maps—Roads', 
	type: 'base', 
	visible: true, 
	source: new ol.source.BingMaps({ 
		key: bingKey, 
		imagerySet: 'Road'
	})
});
var bingAerial = new ol.layer.Tile({ 
	title: 'Bing Maps—Aerial', 
	type: 'base', visible: true, 
	source: new ol.source.BingMaps({ 
		key: bingKey, 
		imagerySet: 'Aerial'
	})
});

var bingAerialWithLabels = new ol.layer.Tile({ 
	title: 'Bing Maps—Aerial with Labels', 
	type: 'base', 
	visible: true, 
	source: new ol.source.BingMaps({ 
		key: bingKey, 
		imagerySet: 'AerialWithLabels'
	})
});
var stamenWatercolor = new ol.layer.Tile({ 
	title: 'Stamen Watercolor', 
	type: 'base', 
	visible: true, 
	source: new ol.source.Stamen({ 
		layer: 'watercolor'
	})
});
var stamenToner = new ol.layer.Tile({ 
	title: 'Stamen Toner', 
	type: 'base', 
	visible: true, 
	source: new ol.source.Stamen({ 
		layer: 'toner'
	})
});


var osm = 	new ol.layer.Tile({
	title: 'OpenStreetMap',
	type: 'base',
	visibility: true,
	source: new ol.source.OSM()
	});

//  Overlay Layers

var aspect = new ol.layer.Image({
  title: "Aspect",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":aspect" },
   
  }),
  crossOrigin: "Anonymous",
});

var dtm = new ol.layer.Image({
  title: "Digital Terrain Model",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":dtm" }, 
  }),
  crossOrigin: "Anonymous",
});

var slope = new ol.layer.Image({
  title: "Slope",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":slope" }, //,'STYLES': 'Ex_GeoServer:water_areas'
  }),
  crossOrigin: "Anonymous",
});

var Sm = new ol.layer.Image({
  title: "Susceptibility Map",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":LandslideSusceptibilityMap" },
  }),
  crossOrigin: "Anonymous",
});
var Smp = new ol.layer.Image({
  title: "Susceptibility Map Reclassified",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":SuscMapPop" },
  }),
  crossOrigin: "Anonymous",
});
var population = new ol.layer.Image({
  title: "Population ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":population" },
  }),
  crossOrigin: "Anonymous",
});
var dusaf = new ol.layer.Image({
  title: "Land Use & Land Cover ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":dusaf" },
  }),
  crossOrigin: "Anonymous",
});
var ndvi = new ol.layer.Image({
  title: "NDVI ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":ndvi" },
  }),
  crossOrigin: "Anonymous",
});
var roads = new ol.layer.Image({
  title: "Roads Buffer ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":roads" },
  }),
  crossOrigin: "Anonymous",
});
var rivers = new ol.layer.Image({
  title: "Rivers Buffer ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":rivers" },
  }),
  crossOrigin: "Anonymous",
});
var faults = new ol.layer.Image({
  title: "Faults Buffer ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":faults" },
  }),
  crossOrigin: "Anonymous",
});
var plan = new ol.layer.Image({
  title: "Plan",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":plan" },
  }),
  crossOrigin: "Anonymous",
});
var profile = new ol.layer.Image({
  title: "Profile",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":profile" },
  }),
  crossOrigin: "Anonymous",
});

var MergeNLZLS = new ol.layer.Image({
  title: "NLZ ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":MergeNLZLS" },
  }),
  crossOrigin: "Anonymous",
});
var trainingpoints = new ol.layer.Image({
  title: "Training Points Sampled ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":trainingPointsSampled" },
  }),
  crossOrigin: "Anonymous",
});
var testingpoints = new ol.layer.Image({
  title: "Testing Points Sampled ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":testingPointsSampled" },
  }),
  crossOrigin: "Anonymous",
});


var map = new ol.Map({
  target: document.getElementById("map"),
  layers: [
    new ol.layer.Group({
      title: "Base Maps",
      layers: [osm, bingRoads, stamenToner, stamenWatercolor,bingAerial],
    }),
    new ol.layer.Group({
      title: "Overlay Layers",
      layers: [
        
        population,
        Smp,
        Sm,
        testingpoints,
        trainingpoints,
        MergeNLZLS,
        ndvi,
        roads,
        faults,
        rivers,
        aspect,
        slope,
        dusaf,
        dtm,
        plan,
        profile,
      ],
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([9.1190, 45.8490]),
    zoom: 11,
  }) /*new ol.View({ 
		center: [0, 0], 
		zoom: 2
	})
	*/,
  controls: ol.control.defaults().extend([
    new ol.control.ScaleLine(),
    new ol.control.FullScreen(),
    new ol.control.OverviewMap({ layers: [osm] }),
    new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: "EPSG:32632",
    }),
  ]),
});
//Add Layer Switcher
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);

//Add Popup
var elementPopup = document.getElementById("popup");
var popup = new ol.Overlay({
  element: elementPopup,
});
map.addOverlay(popup);

