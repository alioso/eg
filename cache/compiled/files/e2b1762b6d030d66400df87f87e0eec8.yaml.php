<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/var/www/everyglobal/user/config/site.yaml',
    'modified' => 1502852859,
    'data' => [
        'title' => 'EveryGlobal',
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
        'redirects' => [
            0 => '1420 Boren Ave, APT 210'
        ],
        'blog' => [
            'route' => '/blog'
        ]
    ]
];
