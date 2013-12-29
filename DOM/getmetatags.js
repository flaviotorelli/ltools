// Useful js scripts for migration Drupal projects
// Copy this snippet and past into a console javascript during a new Drupal page creation
// NOTE: do now use Admin Drupal with overlay enabled in this case

jQuery.get( "/ltools/DOM/index.php?url=http://www.domain.com.br", function( data ) {
var result = data.split('##');
  var page_title = result[0];
  var meta_description = result[1];
  var meta_keywords = result[2];

  // mapping all data for each field
  jQuery('#edit-title').val(page_title);


});