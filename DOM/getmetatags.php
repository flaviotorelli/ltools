<?php

// Returns meta tags (description and keywords), page title and URI from a particular site
// Needs CURL and DOM libs

// example: http://localhost/ltools/DOM/getmetatags.php?url=http://www.domain.com.br

include 'curl.php';

$html = file_get_contents_curl( $_GET['url'] );
$title = NULL;
$description = 'null';
$keywords = 'null';
$uri = 'null';

//parsing begins here:
$doc = new DOMDocument();
@$doc->loadHTML('<?xml encoding="UTF-8">' . $html);
$nodes = $doc->getElementsByTagName('title');

//getting what you need:
$title = ($nodes->item(0)->nodeValue);

$metas = $doc->getElementsByTagName('meta');

for ($i = 0; $i < $metas->length; $i++) {
    $meta = $metas->item($i);
    if ($meta->getAttribute('name') == 'description') {
      $description = $meta->getAttribute('content');
    }
        
    if ($meta->getAttribute('name') == 'keywords') {
      $keywords = $meta->getAttribute('content');
    }
        
}

// getting the URI
$parse_url = parse_url($_GET['url']);
if ($parse_url['path'] && $parse_url['path'] != '/') {
  $uri = substr($parse_url['path'], 1);
}
  
print "$title##$description##$keywords##$uri";