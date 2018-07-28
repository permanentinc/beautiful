<?php

namespace permanentinc\beautiful\extensions;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

class LeftAndMainExtension extends Extension {
    public function init() {
        Requirements::css('permanentinc/beautiful:dist/styles/style.css');
    }
}