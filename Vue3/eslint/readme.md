[eslint](https://eslint.bootcss.com/)
Eslint 在运行代码前就可以发现一些语法错误和潜在bug，目标是保证团队代码的一致性和避免错误

[prettier](https://www.prettier.cn)
prettier 是代码格式化工具，用户检测代码中的格式问题，比如单行代码长度、tab长度、空格、逗号表达式

区别与联系：
Eslint偏向把控项目的代码质量，而Prettier更翩跹于统一项目的编码风格。
Eslint有小部分代码格式化功能，一般和Prettier结合使用。

eslint: ESLint 的核心代码库
prettier: prettier 格式化代码核心库

eslint-config-airbnb-base   airbnb的代码规范（依赖plugin-import）
eslint-config-prettier      eslint结合prettirer的格式化
eslint-plugin-bue           eslint在vue里的格式化
eslint-plugin-import        项目里面支持eslint
eslint-plugin-prettier      将prettier结合进eslint的插件

.cjs common js

ts 项目
pnpm install typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-alias @types/eslint @types/node -D

@typescript-eslint/parser:          ESLint的解析器，用户解析typescript，从而检查和规范Typescript代码
@typescript-eslint/eslint-plugin：  这是一个ESLint插件，包含了各类定义好的检测Typescript代码的规范
eslint-import-resolver-alias:       import时添加@别名

pnpm install stylelint-less stylelint-config-recommended-less -D
pnpm install stylelint-scss style-config-recommended-scss styleline-config-recommended-vue -D
pnpm install postcss postcss-html stylelint-config-standard-scss stylelint-config-recommended-vue -D
