<?php

use SilverStripe\View\SSViewer;
use SilverStripe\Admin\LeftAndMain;
// Force use of custom admin theme
LeftAndMain::config()->set(
    'admin_themes',
    [
        'permanentinc/beautiful:cms-forms',
        'silverstripe/admin:cms-forms',
        SSViewer::DEFAULT_THEME
    ]
);
