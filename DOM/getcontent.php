<?php

// Returns a block of content from an external site
// Example:
// http://localhost/ltools/DOM/getcontent.php?url=https://domain.com/about&attr=class&value=<classname>

include 'simplehtmldom/simple_html_dom.php';

// Create DOM from URL
$html = file_get_html( $_GET['url'] );

$attr = $_GET['attr'];
$value = $_GET['value'];

// Find all article blocks
foreach($html->find("div[$attr=$value]") as $article) {
  print $article->innertext;
}
