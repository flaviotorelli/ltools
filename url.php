<?php

function url_safe_uri($string) {
    $string = htmlentities($string, ENT_QUOTES, 'UTF-8');
    $string = preg_replace('~&([a-z]{1,2})(acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i', '$1', $string);
    $string = html_entity_decode($string, ENT_QUOTES, 'UTF-8');
    $string = preg_replace(array('~[^0-9a-z\/]~i', '~[ -]+~'), '-', $string);
    $string = strtolower($string);

    return trim($string, ' -');
}