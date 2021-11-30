<?php
declare(strict_types = 1);

namespace s1lver\widgets;

use yii\web\AssetBundle;

/**
 * @package s1lver\widgets
 */
class MarkdownItAsset extends AssetBundle
{
    public $sourcePath = '@bower/markdown-it/dist';
    public $js = [
        'markdown-it.min.js',
    ];
}
