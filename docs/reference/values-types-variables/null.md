# null型

JavaScriptのnullは値がないことを示す値です。

## nullリテラル

JavaScriptのnullリテラルは`null`です。

```ts twoslash
const x = null;
```

## nullの型注釈

TypeScriptでnull型を型注釈するには`null`を用います。

```ts twoslash
const x: null = null;
```

## typeof演算子の注意点

JavaScriptには値の型を調べるtypeof演算子があります。`null`に対して`typeof`を用いると`"object"`が返るので注意が必要です。

```ts twoslash
console.log(typeof null);
// @log: "object"
```

typeof演算子の詳細は「typeof演算子」のセクションをご覧ください。

[typeof演算子 (typeof operator)](typeof-operator.md)
