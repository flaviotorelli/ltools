jQuery.get( "/ltools/DOM/getmetatags.php?url=http://www.tableless.com.br/contato", function( data ) {
var result = data.split('##');
  var page_title = result[0];
  var meta_description = result[1];
  var meta_keywords = result[2];

  // comparing titles  
  if (page_title != jQuery('title').html()) {
    alert('Page title does NOT match!');
  }
  else {
    alert('Page title MATCHES!');
  }

  // comparing description
  if (meta_description != 'null' && meta_description != jQuery("meta[name=description]").attr('content')) {
    alert('Meta description does NOT match!');
  }
  else {
    alert('Meta description MATCHES!');
  }

  // comparing keywords
  if (meta_keywords != 'null' && meta_keywords != jQuery("meta[name=keywords]").attr('content')) {
    alert('Meta keywords does NOT match!');
  }
  else {
    alert('Meta keywords MATCHES!');
  }
  
});