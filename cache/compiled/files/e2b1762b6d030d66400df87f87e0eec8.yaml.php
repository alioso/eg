<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/var/www/everyglobal/user/config/site.yaml',
    'modified' => 1502855794,
    'data' => [
        'title' => 'EveryGlobal',
        'default_lang' => 'en',
        'author' => [
            'name' => 'Won Lee',
            'email' => 'albanbailly@gmail.com'
        ],
        'taxonomies' => [
            0 => 'category',
            1 => 'tag'
        ],
        'metadata' => [
            'description' => 'Grav is an easy to use, yet powerful, open source flat-file CMS'
        ],
        'summary' => [
            'enabled' => true,
            'format' => 'short',
            'size' => 300,
            'delimiter' => '==='
        ],
        'blog' => [
            'route' => '/blog'
        ]
    ]
];
