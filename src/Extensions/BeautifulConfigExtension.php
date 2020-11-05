<?php

namespace permanentinc\beautiful\extensions;

use SilverStripe\Assets\File;
use SilverStripe\Forms\FieldList;
use SilverStripe\ORM\DataExtension;
use SilverStripe\Versioned\Versioned;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\TextField;

class BeautifulConfigExtension extends DataExtension
{

    private static $db = [
        'Highlight' => 'Varchar(8)'
    ];

    private static $has_one = [
        'LogoWide' => File::class,
        'LogoSquare' => File::class,
    ];

    public function updateCMSFields(FieldList $fields)
    {

        $fields->findOrMakeTab('Root.Main', 'Main');

        $fields->addFieldsToTab('Root.Main', [
            TextField::create('Highlight', 'Highlight colour hex')
                ->setDescription('i.e. #FF0000'),
            UploadField::create('LogoWide', 'CMS Logo - Wide')
                ->setFolderName('cms-logos')
                ->setAllowedExtensions(['svg'])
                ->setDescription('Upload an SVG at 110px by 26px'),
            UploadField::create('LogoSquare', 'CMS Logo - Square')
                ->setAllowedExtensions(['svg'])
                ->setFolderName('cms-logos')
                ->setDescription('Upload an SVG at 26px by 26px')
        ]);
    }


    public function onBeforeWrite()
    {
        if (class_exists(Versioned::class)) {
            if ($this->owner->LogoWide()->exists()) {
                $this->owner->LogoWide()->publishSingle();
            }
            if ($this->owner->LogoSquare()->exists()) {
                $this->owner->LogoSquare()->publishSingle();
            }
        }
    }
}
