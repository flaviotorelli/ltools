jQuery.get( "/ltools/DOM/getcontent.php?url=http://www.domain.com.br/about/&attr=class&value=<classname>&element=div", function( data ) {
  jQuery('#edit-body-und-0-value').val(data);
});