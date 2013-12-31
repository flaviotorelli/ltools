<?php
// URL slug
function url_safe_uri($uri) {
  $uri = htmlentities($uri, ENT_QUOTES, 'UTF-8');
  $uri = preg_replace('~&([a-z]{1,2})(acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i', '$1', $uri);
  $uri = html_entity_decode($uri, ENT_QUOTES, 'UTF-8');
  $uri = preg_replace(array('~[^0-9a-z\/]~i', '~[ -]+~', '~[\/]+~'), array('-', '-', '/'), $uri);
  $uri = strtolower($uri);

  return trim($uri, ' -');
}
