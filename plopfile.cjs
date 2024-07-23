module.exports = function (plop) {
    plop.setGenerator('component', {
        // オプション名になる
        description: 'Create a new component',
        prompts: [
            {
                type: 'input',
                name: 'path',
                default: '',
                message: 'Please enter the directory name following src/components/:',
            },
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the component name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{path}}/{{kebabCase name}}/index.tsx',
                templateFile: 'templates/components/index.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{path}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
                templateFile: 'templates/components/component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{path}}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
                templateFile: 'templates/components/component.stories.tsx.hbs',
            },
        ],
    })
}
