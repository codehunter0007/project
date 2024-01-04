module.exports = {
    env: {
        browser: true,  //liulanqi 
        es6: true, //es2021
        node: true,
        jest: true
    },

    //规则继承
    extends: [
        //全部规则默认是关闭的，这个配置项开启推荐规则，推荐规则参照文档https://eslint.nodejs.cn/docs/latest/use/configure/rules
        //比如：函数不能重名、对象不能出现重复key
        'eslint:recommended',
        //ts语法规则
        'plugin:@typescript-eslint/recommended',
        //vue3语法规则
        'plugin:vue/vue3-essential',
        'plugin:prettier/recommended'

    ],
    //要为特定类型的文件指定处理器
    overrides: [
        {
            env: {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],

    parser: 'vue-eslint-parser', //指定如何解析语

    //解析器选项
    parserOptions: {
        ecmaVersion: 'latest',//校验ecma最新版本
        //指定解析器
        //esprima 默认解析器
        //bael-eslint/parser bael解析器
        //@typescript-eslint/parser ts解析器
        parser: '@typescript-eslint/parser',
        sourceType: 'module', //设置为"script"（默认），或者"module"代码在ECMAScript模块中
        jsxPragma: 'React',
        ecmaFeatures: {
            jsx: true,
        },
    },
    //esl int支持第三方插件，在使用插件之前，必须使用npm安装她
    //该eslint-plugin-前缀可以从插件名称被省略
    plugins: ['@typescript-eslint', 'vue'],
    /**eslint规则
     * off或0 关闭规则
     * warn或1 打开规则作为警告
     * error或2 规则作为错误
    **/
    rules: {
        'no-var': 'error', //要求使用let或const而不是car
        'no-multiple-empty-lines': ['warn', { max: 1 }], //不允许多个空行
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unexpected-multiline': 'error', //净值空余的多行
        'no-useless-escape': 'off',//禁止不必要的转义字符

        '@typescript-eslint/no-unused-vars': 'error',//禁止定义未使用的变量
        '@typescript-eslint/prefer-ts-expect-error': 'error',//禁止使用@ts-ignore
        '@typescript-eslint/no-explicit-any': 'off',//禁止使用any类型
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-namespace': 'off',//禁止使用自动以TypeScript模块
        '@typescript-eslint/semi': 'off',

        "vue/multi-word-component-names'": 'off',//要求组件名称始终未“-”链接单词
        "vue/script-setup-uses-vars": 'error',//防止<script setup>使用的变量
        "vue/no-mutating-props": 'off',//不允许组件prop的改变
        "vue/attribute-hyphenation": 'off',//对模版中的自定义组件强制执行属性名样式
    }
}
