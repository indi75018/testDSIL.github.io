var wms_layers = [];

var format_Dept_PDLL_0 = new ol.format.GeoJSON();
var features_Dept_PDLL_0 = format_Dept_PDLL_0.readFeatures(json_Dept_PDLL_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dept_PDLL_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dept_PDLL_0.addFeatures(features_Dept_PDLL_0);
var lyr_Dept_PDLL_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dept_PDLL_0, 
                style: style_Dept_PDLL_0,
                interactive: false,
                title: '<img src="styles/legend/Dept_PDLL_0.png" /> Dept_PDLL'
            });
var format_Limitescommunales_1 = new ol.format.GeoJSON();
var features_Limitescommunales_1 = format_Limitescommunales_1.readFeatures(json_Limitescommunales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitescommunales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitescommunales_1.addFeatures(features_Limitescommunales_1);
var lyr_Limitescommunales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limitescommunales_1, 
                style: style_Limitescommunales_1,
                interactive: false,
                title: '<img src="styles/legend/Limitescommunales_1.png" /> Limites communales '
            });
var format_ProjetsEPCI_2 = new ol.format.GeoJSON();
var features_ProjetsEPCI_2 = format_ProjetsEPCI_2.readFeatures(json_ProjetsEPCI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetsEPCI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetsEPCI_2.addFeatures(features_ProjetsEPCI_2);
var lyr_ProjetsEPCI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjetsEPCI_2, 
                style: style_ProjetsEPCI_2,
                interactive: true,
                title: '<img src="styles/legend/ProjetsEPCI_2.png" /> Projets EPCI'
            });
var format_Projetscommunes_3 = new ol.format.GeoJSON();
var features_Projetscommunes_3 = format_Projetscommunes_3.readFeatures(json_Projetscommunes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projetscommunes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projetscommunes_3.addFeatures(features_Projetscommunes_3);
var lyr_Projetscommunes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Projetscommunes_3, 
                style: style_Projetscommunes_3,
                interactive: true,
                title: '<img src="styles/legend/Projetscommunes_3.png" /> Projets communes'
            });
var format_Projetsautresbnficiaires_4 = new ol.format.GeoJSON();
var features_Projetsautresbnficiaires_4 = format_Projetsautresbnficiaires_4.readFeatures(json_Projetsautresbnficiaires_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projetsautresbnficiaires_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projetsautresbnficiaires_4.addFeatures(features_Projetsautresbnficiaires_4);
var lyr_Projetsautresbnficiaires_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Projetsautresbnficiaires_4, 
                style: style_Projetsautresbnficiaires_4,
                interactive: true,
                title: '<img src="styles/legend/Projetsautresbnficiaires_4.png" /> Projets autres bénéficiaires '
            });

lyr_Dept_PDLL_0.setVisible(true);lyr_Limitescommunales_1.setVisible(true);lyr_ProjetsEPCI_2.setVisible(true);lyr_Projetscommunes_3.setVisible(true);lyr_Projetsautresbnficiaires_4.setVisible(true);
var layersList = [lyr_Dept_PDLL_0,lyr_Limitescommunales_1,lyr_ProjetsEPCI_2,lyr_Projetscommunes_3,lyr_Projetsautresbnficiaires_4];
lyr_Dept_PDLL_0.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts3': 'nuts3', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_Limitescommunales_1.set('fieldAliases', {});
lyr_ProjetsEPCI_2.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Code INSEE': 'Code INSEE', 'Profil': 'Profil', 'Détails': 'Détails', 'Coût': 'Coût', 'Montant subvention': 'Montant subvention', 'Taux subvention': 'Taux subvention', 'Catégorie': 'Catégorie', });
lyr_Projetscommunes_3.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Code INSEE': 'Code INSEE', 'Profil': 'Profil', 'Détails': 'Détails', 'Coût ': 'Coût ', 'Montant subvention': 'Montant subvention', 'Taux subvention': 'Taux subvention', 'Catégorie': 'Catégorie', });
lyr_Projetsautresbnficiaires_4.set('fieldAliases', {'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'code INSEE': 'code INSEE', 'Profil': 'Profil', 'Détails': 'Détails', 'Coût ': 'Coût ', 'Montant subvention': 'Montant subvention', 'Taux subvention': 'Taux subvention', 'Catégorie': 'Catégorie', });
lyr_Dept_PDLL_0.set('fieldImages', {'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts3': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', });
lyr_Limitescommunales_1.set('fieldImages', {});
lyr_ProjetsEPCI_2.set('fieldImages', {'Nom': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Code INSEE': 'Hidden', 'Profil': 'TextEdit', 'Détails': 'TextEdit', 'Coût': 'TextEdit', 'Montant subvention': 'TextEdit', 'Taux subvention': 'TextEdit', 'Catégorie': 'TextEdit', });
lyr_Projetscommunes_3.set('fieldImages', {'Nom': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Code INSEE': 'Hidden', 'Profil': 'TextEdit', 'Détails': 'TextEdit', 'Coût ': 'TextEdit', 'Montant subvention': 'TextEdit', 'Taux subvention': 'TextEdit', 'Catégorie': 'TextEdit', });
lyr_Projetsautresbnficiaires_4.set('fieldImages', {'Nom': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'code INSEE': 'Hidden', 'Profil': 'TextEdit', 'Détails': 'TextEdit', 'Coût ': 'TextEdit', 'Montant subvention': 'TextEdit', 'Taux subvention': 'TextEdit', 'Catégorie': 'TextEdit', });
lyr_Dept_PDLL_0.set('fieldLabels', {'code_insee': 'no label', 'nom': 'no label', 'nuts3': 'no label', 'wikipedia': 'no label', 'surf_km2': 'no label', });
lyr_Limitescommunales_1.set('fieldLabels', {});
lyr_ProjetsEPCI_2.set('fieldLabels', {'Nom': 'inline label', 'Profil': 'inline label', 'Détails': 'inline label', 'Coût': 'inline label', 'Montant subvention': 'inline label', 'Taux subvention': 'inline label', 'Catégorie': 'inline label', });
lyr_Projetscommunes_3.set('fieldLabels', {'Nom': 'inline label', 'Profil': 'inline label', 'Détails': 'inline label', 'Coût ': 'inline label', 'Montant subvention': 'inline label', 'Taux subvention': 'inline label', 'Catégorie': 'inline label', });
lyr_Projetsautresbnficiaires_4.set('fieldLabels', {'Nom': 'inline label', 'Profil': 'inline label', 'Détails': 'inline label', 'Coût ': 'inline label', 'Montant subvention': 'inline label', 'Taux subvention': 'inline label', 'Catégorie': 'inline label', });
lyr_Projetsautresbnficiaires_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});