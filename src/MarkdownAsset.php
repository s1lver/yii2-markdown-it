<?php
declare(strict_types = 1);

namespace s1lver\widgets;

use app\assets\AppAsset;
use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 */
class MarkdownAsset extends AssetBundle {
	public $sourcePath = '@app/components/markdown/assets';
	public $js = [
		'js/markdown-it.js',
		'js/markdown.js'
	];
	public $depends = [
		AppAsset::class,
	];
}
