<?php

namespace permanentinc\beautiful\extensions;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

class BeautifulLeftAndMainExtension extends Extension {
    public function onInit() {
        Requirements::css('permanentinc/beautiful:dist/styles/style.css');
    }
}