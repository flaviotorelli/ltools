// Useful js scripts for migration Drupal projects
// Copy this snippet and past into a console javascript during a new Drupal page creation
// NOTE: do now use Admin Drupal with overlay enabled in this case

jQuery.get( "/ltools/DOM/getmetatags.php?url=http://www.domain.com.br", function( data ) {
var result = data.split('##');
  var page_title = result[0];
  var meta_description = result[1];
  var meta_keywords = result[2];
  var uri = result[3];

  // mapping all data for each field
  jQuery('#edit-title').val(page_title);
  if (meta_description != 'null') {
    jQuery('#edit-meta-description-und-0-metatags-quick').val(meta_description);
  }
  
  if (meta_keywords != 'null') {
    jQuery('#edit-meta-keywords-und-0-metatags-quick').val(meta_keywords);
  }
  
  if (uri != 'null') {
    jQuery('#edit-path-alias').val(uri);
  }
  
});