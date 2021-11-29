# yii2-markdown-it


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