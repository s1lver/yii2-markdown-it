<?php
declare(strict_types = 1);

namespace s1lver\widgets;

use app\assets\AppAsset;
use yii\web\AssetBundle;

/**
 * @package s1lver\widgets
 */
class MarkdownAsset extends AssetBundle {
	public $sourcePath = '@vendor/s1lver/src/assets';
	public $js = [
		'js/markdown-it.js',
		'js/markdown.js'
	];
	public $depends = [
		AppAsset::class,
	];
}
