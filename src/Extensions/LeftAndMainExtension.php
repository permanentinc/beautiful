<?php

namespace permanentinc\beautiful\extensions;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

class LeftAndMainExtension extends Extension {
    public function init() {
        var_dump('fdsfsdfdsdfsd');
        Requirements::css('beautiful:dist/styles/style.css');
    }
}