<?php
declare(strict_types = 1);

namespace s1lver\widgets;

use yii\helpers\Html;
use yii\widgets\InputWidget;

/**
 * @package s1lver\widgets
 */
class MarkdownIt extends InputWidget {
	public array $buttons = [];

	public function init(): void {
		MarkdownAsset::register($this->view);

		echo Html::beginTag('div', ['class' => 'panel', 'id' => 'markdown-container']);
		echo Html::beginTag('div', ['class' => 'panel-header']);

		$this->renderButton();

		echo Html::endTag('div');
		echo Html::beginTag('div', ['class' => 'panel-content']);
		echo Html::textarea('markdown-content', '', ['id' => 'markdown-content', 'class' => 'form-control', 'rows' => 5]);
		echo Html::tag('section', '', ['id' => 'markdown-output']);
		echo Html::endTag('div');
		echo Html::endTag('div');

		parent::init();
	}

	private function renderButton(): void
	{
		if (!empty($this->buttons)) {
			$id = 0;
			foreach ($this->buttons as $button) {
				$id ++;
				$data = [
					'data-button' => $id,
					'data-before' => $button['buttonActions']['before']??'',
					'data-after' => $button['buttonActions']['after']??'',
				];
				echo Html::button($button['label'], array_merge($data, $button['options']));
			}
		}
	}
}
