/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import("@docusaurus/plugin-content-docs/lib/types").Sidebars} */
module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "category",
      label: "はじめに",
      collapsed: true,
      link: { type: "doc", id: "README" },
      items: ["license"],
    },
    {
      type: "category",
      label: "TypeScriptのあらまし",
      collapsed: false,
      link: { type: "doc", id: "overview/README" },
      items: [
        "overview/features",
        "overview/javascript-is-typescript",
        "overview/before-typescript",
        "overview/ecosystem",
        "overview/why-you-should-use-typescript",
        "overview/static-type",
        "overview/ecmascript",
        "overview/range-of-typescript",
        "overview/typescript-is-not-that",
      ],
    },
    {
      type: "category",
      label: "作って学ぶTypeScript",
      collapsed: false,
      link: { type: "doc", id: "tutorials/README" },
      items: [
        "tutorials/setup",
        "tutorials/make-a-simple-function-via-cli",
        "tutorials/react-like-button-tutorial",
        "tutorials/nextjs",
        "tutorials/vercel-deploy",
        "tutorials/jest",
        "tutorials/component-test",
        "tutorials/prettier",
        "tutorials/eslint",
        "tutorials/husky",
      ],
    },
    {
      type: "category",
      label: "読んで学ぶTypeScript",
      collapsed: false,
      link: { type: "doc", id: "reference/README" },
      items: [
        {
          type: "category",
          label: "値・型・変数",
          link: {
            type: "generated-index",
            slug: "/reference/values-types-variables",
          },
          items: [
            "reference/values-types-variables/let-and-const",
            "reference/values-types-variables/type-annotation",
            "reference/values-types-variables/vars-problems",
            "reference/values-types-variables/type-inference",
            "reference/values-types-variables/difference-between-type-inference-and-dynamic-typing",
            "reference/values-types-variables/primitive-types",
            "reference/values-types-variables/boolean",
            {
              type: "category",
              label: "数値型",
              link: {
                type: "doc",
                id: "reference/values-types-variables/number/README",
              },
              items: [
                "reference/values-types-variables/number/decimal-calculation-error",
              ],
            },
            "reference/values-types-variables/string",
            "reference/values-types-variables/null",
            "reference/values-types-variables/undefined",
            "reference/values-types-variables/undefined-vs-null",
            "reference/values-types-variables/symbol",
            "reference/values-types-variables/bigint",
            "reference/values-types-variables/type-coercion",
            "reference/values-types-variables/boxing",
            "reference/values-types-variables/literal-types",
            "reference/values-types-variables/any",
            {
              type: "category",
              label: "オブジェクト",
              link: {
                type: "generated-index",
                slug: "reference/values-types-variables/object",
              },
              items: [
                "reference/values-types-variables/object/non-primitives-are-objects",
                "reference/values-types-variables/object/object-literal",
                "reference/values-types-variables/object/properties-of-objects",
                "reference/values-types-variables/object/type-annotation-of-objects",
                "reference/values-types-variables/object/readonly-property",
                "reference/values-types-variables/object/readonly-vs-const",
                "reference/values-types-variables/object/optional-property",
                "reference/values-types-variables/object/excess-property-checking",
                "reference/values-types-variables/object/index-signature",
                "reference/values-types-variables/object/prototype-based-programming",
                "reference/values-types-variables/object/difference-among-object-and-object",
                "reference/values-types-variables/object/destructuring-assignment-from-objects",
                "reference/values-types-variables/object/shorthand-property-names",
                "reference/values-types-variables/object/optional-chaining",
                "reference/values-types-variables/object/how-to-loop-an-object",
              ],
            },
            "reference/values-types-variables/structural-subtyping",
            {
              type: "category",
              label: "配列",
              link: {
                type: "generated-index",
                slug: "reference/values-types-variables/array",
              },
              items: [
                "reference/values-types-variables/array/array-literal",
                "reference/values-types-variables/array/type-annotation-of-array",
                "reference/values-types-variables/array/array-as-a-object",
                "reference/values-types-variables/array/how-to-access-elements-in-an-array",
                "reference/values-types-variables/array/readonly-array",
                "reference/values-types-variables/array/destructuring-assignment-from-array",
                "reference/values-types-variables/array/array-operations",
                "reference/values-types-variables/array/how-to-loop-an-array",
                "reference/values-types-variables/array/spread-syntax-for-array",
                "reference/values-types-variables/array/array-type-is-covariant",
              ],
            },
            "reference/values-types-variables/tuple",
            {
              type: "category",
              label: "列挙型",
              link: {
                type: "doc",
                id: "reference/values-types-variables/enum/README",
              },
              items: [
                "reference/values-types-variables/enum/numeric-enum",
                "reference/values-types-variables/enum/string-enum",
                "reference/values-types-variables/enum/enum-problems-and-alternatives-to-enums",
              ],
            },
            "reference/values-types-variables/union",
            "reference/values-types-variables/discriminated-union",
            "reference/values-types-variables/intersection",
            "reference/values-types-variables/type-alias",
            "reference/values-types-variables/type-assertion-as",
            "reference/values-types-variables/const-assertion",
            "reference/values-types-variables/definite-assignment-assertion",
            "reference/values-types-variables/typeof-operator",
            "reference/values-types-variables/equality",
            "reference/values-types-variables/truthy-falsy-values",
          ],
        },
        {
          type: "category",
          label: "文",
          link: {
            type: "generated-index",
            slug: "reference/statements",
          },
          items: [
            "reference/statements/variable-scope",
            "reference/statements/if-else",
            "reference/statements/ternary-operator",
            "reference/statements/for-of",
            "reference/statements/switch",
            "reference/statements/switch-fallthrough",
            "reference/statements/switch-and-variable-scope",
            "reference/statements/exception",
            "reference/statements/never",
            "reference/statements/control-flow-analysis-and-type-guard",
            "reference/statements/unknown",
            "reference/statements/any-vs-unknown",
          ],
        },
        {
          type: "category",
          label: "関数",
          link: {
            type: "generated-index",
            slug: "reference/functions",
          },
          items: [
            "reference/functions/function-declaration",
            "reference/functions/function-expression",
            "reference/functions/arrow-functions",
            "reference/functions/function-type-declaration",
            "reference/functions/function-declaration-and-hoisting",
            "reference/functions/function-expression-vs-arrow-functions",
            "reference/functions/function-is-a-value",
            "reference/functions/function-is-an-object",
            "reference/functions/void-type",
            "reference/functions/function-parameters",
            "reference/functions/pass-by-value",
            "reference/functions/optional-parameters",
            "reference/functions/default-parameters",
            "reference/functions/rest-parameters",
            "reference/functions/this-parameters",
            "reference/functions/destructuring-assignment-parameters",
            "reference/functions/keyword-arguments-and-options-object-pattern",
            "reference/functions/type-guard-functions",
            "reference/functions/assertion-functions",
            "reference/functions/iife",
            "reference/functions/callback-functions",
            "reference/functions/overload-functions",
          ],
        },
        {
          type: "category",
          label: "🚧非同期処理",
          link: {
            type: "doc",
            id: "reference/asynchronous/README",
          },
          items: [
            "reference/asynchronous/promise",
            "reference/asynchronous/async",
            "reference/asynchronous/await",
          ],
        },
        "reference/promise-async-await",
        {
          type: "category",
          label: "オブジェクト指向",
          link: {
            type: "generated-index",
            slug: "reference/object-oriented",
          },
          items: [
            {
              type: "category",
              label: "クラス",
              link: {
                type: "doc",
                id: "reference/object-oriented/class/README",
              },
              items: [
                "reference/object-oriented/class/constructor",
                "reference/object-oriented/class/fields",
                "reference/object-oriented/class/methods",
                "reference/object-oriented/class/field-initializers",
                "reference/object-oriented/class/access-modifiers",
                "reference/object-oriented/class/constructor-shorthand",
                "reference/object-oriented/class/readonly-modifier-in-classes",
                "reference/object-oriented/class/class-is-an-object",
                "reference/object-oriented/class/static-fields",
                "reference/object-oriented/class/static-methods",
                "reference/object-oriented/class/return-this-type",
                "reference/object-oriented/class/class-inheritance",
                "reference/object-oriented/class/instanceof-operator",
                "reference/object-oriented/class/class-nominality",
                "reference/object-oriented/class/abstract-class",
                "reference/object-oriented/class/final-sealed-class",
              ],
            },
            {
              type: "category",
              label: "インターフェース",
              link: {
                type: "doc",
                id: "reference/object-oriented/interface/README",
              },
              items: [
                "reference/object-oriented/interface/implementing-interfaces",
                "reference/object-oriented/interface/readonly-modifier-in-interfaces",
                "reference/object-oriented/interface/interface-inheritance",
                "reference/object-oriented/interface/open-ended-and-declaration-merging",
                "reference/object-oriented/interface/instanceof-and-interfaces",
                "reference/object-oriented/interface/interface-vs-type-alias",
              ],
            },
            "reference/object-oriented/javascript-vs-typescript-in-oop-features",
          ],
        },
        {
          type: "category",
          label: "組み込みAPI",
          link: {
            type: "generated-index",
            slug: "reference/builtin-api",
          },
          items: [
            "reference/builtin-api/map",
            "reference/builtin-api/set",
            "reference/builtin-api/date",
            "reference/builtin-api/regexp",
            "reference/builtin-api/error",
          ],
        },
        "reference/modules",
        "reference/import-export-require",
        "reference/single-process-and-callback",
        {
          type: "category",
          label: "型の再利用",
          link: {
            type: "doc",
            id: "reference/type-reuse/README",
          },
          items: [
            "reference/type-reuse/typeof-type-operator",
            "reference/type-reuse/keyof-type-operator",
            {
              type: "category",
              label: "ユーティリティ型",
              link: {
                type: "generated-index",
                slug: "reference/type-reuse/utility-types",
                title: "ユーティリティ型 (utility type)",
                description:
                  "ユーティリティ型(utility type)は、型から別の型を導き出してくれる型です。functionが実行時の世界の関数だとしたら、ユーティリティ型は型の世界の関数といったイメージです。\n" +
                  "\n" +
                  "ここではユーティリティ型のうち、主要なものだけを取り上げます。興味がある方は公式やソースコードを参照してください。ここで取り上げるユーティリティ型は、すべてTypeScriptのビルトインパッケージで定義されています。ソースコードも同梱されているので、その実装方法を見ることが可能です。",
              },
              items: [
                "reference/type-reuse/utility-types/required",
                "reference/type-reuse/utility-types/readonly",
                "reference/type-reuse/utility-types/partial",
                "reference/type-reuse/utility-types/record",
                "reference/type-reuse/utility-types/pick",
                "reference/type-reuse/utility-types/omit",
                "reference/type-reuse/utility-types/exclude",
                "reference/type-reuse/utility-types/extract",
              ],
            },
            "reference/type-reuse/mapped-types",
            "reference/type-reuse/indexed-access-types",
          ],
        },
        {
          type: "category",
          label: "ジェネリクス",
          link: {
            type: "doc",
            id: "reference/generics/README",
          },
          items: [
            "reference/generics/built-in-libraries-using-generics",
            "reference/generics/type-variables",
            "reference/generics/type-parameter-constraint",
            "reference/generics/default-type-parameter",
          ],
        },
        {
          type: "category",
          label: "tsconfig",
          link: {
            type: "generated-index",
            slug: "reference/tsconfig",
          },
          items: [
            "reference/tsconfig/tsconfig.json-settings",
            "reference/tsconfig/strict",
            "reference/tsconfig/noimplicitany",
            "reference/tsconfig/strictnullchecks",
            "reference/tsconfig/strictfunctiontypes",
            "reference/tsconfig/strictbindcallapply",
            "reference/tsconfig/strictpropertyinitialization",
            "reference/tsconfig/noimplicitthis",
            "reference/tsconfig/useunknownincatchvariables",
            "reference/tsconfig/alwaysstrict",
            "reference/tsconfig/nounusedlocals",
            "reference/tsconfig/nounusedparameters",
            "reference/tsconfig/exactoptionalpropertytypes",
            "reference/tsconfig/noimplicitreturns",
            "reference/tsconfig/nofallthroughcasesinswitch",
            "reference/tsconfig/nouncheckedindexedaccess",
            "reference/tsconfig/noimplicitoverride",
            "reference/tsconfig/nopropertyaccessfromindexsignature",
          ],
        },
        "reference/declaration-file",
        {
          type: "category",
          label: "Advanced Topics",
          link: {
            type: "generated-index",
            slug: "reference/advanced-topics",
          },
          items: [
            "reference/advanced-topics/tsconfig-for-npm-package-developers",
            "reference/advanced-topics/tsconfig-for-dual-package-developers",
            "reference/advanced-topics/generator",
            "reference/advanced-topics/getters-and-setters",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Tips",
      collapsed: false,
      link: {
        type: "generated-index",
        slug: "tips",
        description:
          "今日の開発で知っておくと便利なTypeScript (JavaScript) の小技を紹介する",
      },
      items: [
        "tips/shallow-copy-object",
        "tips/merge-objects",
        "tips/get-a-subset-of-an-object",
        "tips/receive-an-object-return-an-object",
        "tips/companion-object",
        "tips/generates-type-from-object",
        "tips/generates-type-from-object-key",
        "tips/generates-type-from-object-property",
        "tips/generates-type-from-array",
      ],
    },
    "symbols-and-keywords",
    "how-to-use-typescript-playground",
    "typescript",
  ],
  writerSidebar: [
    "writing/writing",
    "writing/contributing",
    "writing/getting-started",
    "writing/ticket-driven",
    "writing/how-to-change",
    "writing/markdown",
    "writing/styles",
    "writing/japanese-english-table",
    "writing/vscode",
    "writing/file-structure",
    {
      type: "category",
      label: "PDR",
      collapsed: false,
      link: {
        type: "doc",
        id: "writing/pdr/README",
      },
      items: [
        "writing/pdr/0000-why-do-we-write-technical-books",
        "writing/pdr/0002-iterative-writing-process",
        "writing/pdr/0003-target-readers",
        "writing/pdr/0004-how-to-manage-article-status",
        "writing/pdr/0005-about-license",
        "writing/pdr/0006-use-desu-masu",
        "writing/pdr/0007-use-function-for-sample-code",
        "writing/pdr/0008-prefer-type-alias-over-interface",
        "writing/pdr/0009-use-docusaurus",
        "writing/pdr/0010-ticket-driven",
        {
          type: "category",
          label: "廃止",
          items: ["writing/pdr/0001-write-with-gitbook"],
        },
      ],
    },
  ],
};
