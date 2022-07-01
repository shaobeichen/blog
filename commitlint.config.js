module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'merge',
                'perf',
                'refactor',
                'revert',
                'setup',
                'style',
                'test'
            ]
        ]
    }
}
