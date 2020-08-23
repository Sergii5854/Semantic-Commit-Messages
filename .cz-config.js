const glob = require('glob')

/**
 * @param {string} pattern
 * @param {(path: string) => string} fn
 */
const globMap = (pattern, fn) =>
    glob
        .sync(pattern)
        .map(fn || (path => path))
        .map(path => path.replace(/\/$/, ''))

/**
 * Check `path` to not include substring in `variants`
 * @param {string[]} variants
 * @return {(path: string) => boolean}
 */
const exclude = variants => path =>
    variants.every(variant => !path.includes(variant))

/**
 * Check `path` to include substring of one of `variants`
 * @param {string[]} variants
 * @return {(path: string) => boolean}
 */
const include = variants => path =>
    variants.some(variant => path.includes(variant))

const pad = name => name + new Array(12 - name.length).join(' ')

// reference: https://github.com/ngryman/cz-emoji/blob/master/lib/types.json
const typesList = [
    {
        emoji: '✨',
        code: ':sparkles:',
        description: 'Introduce a new feature',
        name: 'feat',
    },
    {
        emoji: '🐛',
        code: ':bug:',
        description: 'Introduce a bug fix',
        name: 'fix',
    },
    {
        emoji: '🚧',
        code: ':construction:',
        description: 'Work in progress',
        name: 'wip',
    },
    {
        emoji: '📝',
        code: ':pencil:',
        description: 'Documentation only changes',
        name: 'docs',
    },
    {
        emoji: '🔖',
        code: ':bookmark:',
        description: 'Releasing / Version tags',
        name: 'release',
    },
    {
        emoji: '🚩',
        code: ':triangular_flag_on_post:',
        description:
            'A specific type which you can use in specific cases\n                  when no release is needed for your change',
        name: 'no-release',
    },

    // Changes block
    {
        emoji: '🎨',
        code: ':art:',
        description:
            'Changes that do not affect the meaning of the code\n                  (white-space, formatting, missing semi-colons, etc)',
        name: 'style',
    },
    {
        emoji: '♻️',
        code: ':recycle:',
        description: 'Refactoring code',
        name: 'refactor',
    },
    {
        emoji: '⚡️',
        code: ':zap:',
        description: 'A code change that improves performance',
        name: 'perf',
    },
    {
        emoji: '✅',
        code: ':white_check_mark:',
        description: 'Adding missing tests',
        name: 'test',
    },
    {
        emoji: '🏷️',
        code: ':label:',
        description: 'Adding or updating types (TypeScript)',
        name: 'types',
    },

    // Configuration block
    {
        emoji: '🔧',
        code: ':wrench:',
        description: 'Changes in configuration files',
        name: 'config',
    },
    {
        emoji: '🚀',
        code: ':rocket:',
        description:
            'Changes to the build process or auxiliary tools\n                  and libraries such as documentation generation',
        name: 'chore',
    },
    {
        emoji: '👷',
        code: ':construction_worker:',
        description: 'Adding CI build system',
        name: 'ci',
    },

    // Other
    {
        emoji: '⏪',
        code: ':rewind:',
        description: 'Revert to a commit',
        name: 'revert',
    },
]

module.exports = {
    // prettier-ignore
    types: typesList.map(choice => ({
        value: choice.name,
        name: `${pad(choice.name)}  ${choice.emoji}  ${choice.description}`,
    })),

    scopes: [].concat(
        'app',
        // globMap('src/*/', path => path.replace(/src\//, '')).filter(
        //     exclude(['features', 'ui', 'pages', 'lib', 'api']),
        // ),
        // globMap('src/api/*', path => path.replace(/src\//, '')),
        'features',
        // globMap('src/features/*/', path => path.replace(/src\//, '')),
        // // globMap('src/features/*/features/*', path =>
        // //   path.replace('src/', '').replace(/\/features\//, '/'),
        // // ),
        'pages',
        // globMap('src/pages/*/', path => path.replace(/src\//, '')),
        'ui',
        // globMap('src/ui/*/', path => path.replace(/src\//, '')),
        'lib',
        // globMap('src/lib/*/', path => path.replace(/src\//, '')),
    ),
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix', 'revert', 'perf'],

    // limit subject length
    subjectLimit: 100,
}
