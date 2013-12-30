jQuery.get( "/ltools/DOM/getmetatags.php?url=http://www.tableless.com.br/contato", function( data ) {
var result = data.split('##');
  var page_title = result[0];
  var meta_description = result[1];
  var meta_keywords = result[2];
  var error = false;

  if (page_title != jQuery('title').html()) {
    alert('Page title does NOT match!');
    error = true;
  }

  if (meta_description != 'null' || jQuery("meta[name=description]").length) {
    if (meta_description != jQuery("meta[name=description]").attr('content')) {
      alert('Meta description does NOT match!');
      error = true;
    }
  }

  if (meta_keywords != 'null' || jQuery("meta[name=keywords]").length > 0) {
    if (meta_keywords != jQuery("meta[name=keywords]").attr('content')) {
      alert('Meta keywords does NOT match!');
      error = true;
    }
  }

  if (!error) {
    alert('Meta tags are equal!');
  }

});