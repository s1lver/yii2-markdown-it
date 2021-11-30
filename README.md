# yii2-markdown-it

Minimalistic and customizable markdown editor for Yii2.

## Install

```
composer require s1lver/yii2-markdown-it
```

## Example

```php
<?= MarkdownIt::widget([
    'name' => 'test',
    'buttons' => [
        [
            'label' => '',
            'options' => ['class' => 'btn btn-outline-primary fa fa-bold',],
            'buttonActions' => ['before' => '**', 'after' => '**'],
        ],
        [
            'label' => '',
            'options' => ['class' => 'btn btn-outline-primary fa fa-arrows-h',],
            'buttonActions' => ['before' => '<--', 'after' => '-->'],
        ]
    ]
]) ?>
```

## Required
 - [Yii2](https://github.com/yiisoft/yii2)
 - [Markdown It!](https://github.com/markdown-it/markdown-it)