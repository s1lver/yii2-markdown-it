<?php
declare(strict_types = 1);

namespace s1lver\widgets;

use yii\web\AssetBundle;

/**
 * @package s1lver\widgets
 */
class MarkdownAsset extends AssetBundle
{
    public $sourcePath = '@vendor/s1lver/yii2-markdown-it/src/assets';
    public $js = [
        'js/markdown.js'
    ];
    public $depends = [
        MarkdownItAsset::class,
    ];
}
