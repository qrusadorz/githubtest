# MarkDown

see [Markdown](https://daringfireball.net/projects/markdown/basics)

# 段落、ヘッダー、ブロック引用

A First Level Header  
===
# A First Level Header  
# A First Level Header #  

A Second Level Header  
---
## A Second Level Header  
## A Second Level Header ##  

normal

### Header 3

>引用  
>引用  
>引用  
>引用ここまで

#### 見出し4
##### 見出し5
##### 見出し6

**code:**  

```
A First Level Header
===
# A First Level Header
# A First Level Header #

A Second Level Header
---
## A Second Level Header
## A Second Level Header ##

normal

### Header 3

>引用  
>引用  
>引用  
>引用ここまで

#### 見出し4
##### 見出し5
##### 見出し6

```


# 引用

>引用引用引用引用引用引用引用  
引用引用引用引用引用引用引用  
引用引用引用引用引用引用引用  

**code:**  

```
>引用引用引用引用引用引用引用  
引用引用引用引用引用引用引用  
引用引用引用引用引用引用引用  

```


> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");


**code:**  

```
> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");
```


# リスト

* アスタリスク
* アスタリスク
* アスタリスク
  
+ プラス
+ プラス
+ プラス
  
- マイナス
- マイナス
- マイナス

**code:**  

```
* アスタリスク
* アスタリスク
* アスタリスク
  
+ プラス
+ プラス
+ プラス
  
- マイナス
- マイナス
- マイナス

```

1. 順序リスト
2. 順序リスト
3. 順序リスト


**code:**  

```
1. 順序リスト
2. 順序リスト
3. 順序リスト
```

アイテムの間に空白行を入れる<p>と、リストアイテムのテキストにタグが付きます。段落を4つのスペースまたは1タブでインデントすることで、複数段落のリスト項目を作成できます
* リスト
  
    With Multiple paragraphs.

* リスト


**code:**  

```
* リスト
  
    With Multiple paragraphs.

* リスト

```

- リスト
  - サブ 
    - サブサブ
  - サブ
- リスト
- リスト
  
1. リスト
   1. リスト
      1. リスト
      2. リスト
   2. リスト
2. リスト

* リスト
  * サブ 
    * サブサブ
  * サブ
* リスト
* リスト
  

* 怠惰にならない  
  怠惰にならない  
怠惰になる
* 怠惰にならない  
  怠惰にならない  
    怠惰になる


**code:**  

```
* 怠惰にならない  
  怠惰にならない  
怠惰になる
* 怠惰にならない  
  怠惰にならない  
    怠惰になる


```

*   リスト内部で引用

    > This is a blockquote  
    > inside a list item.


**code:**  

```
*   リスト内部で引用

    > This is a blockquote  
    > inside a list item.

```

誤ったリスト回避

1986\. What a great season.


**code:**  

```
1986\. What a great season.
```


# コードブロック

例えば次のような関数`() => {}`です。

**code:**  

```
例えば次のような関数`() => {}`です。
```

`
    const func = () => {
      const count = 0;
      count++;
      console.log('count:', count);
    };
`

**code:**  

```
  const func = () => {
    const count = 0;
    count++;
    console.log('count:', count);
  };
```

    const func = () => {
      const count = 0;
      count++;
      console.log('count:', count);
    };


**code:**  

```
    const func = () => {
      const count = 0;
      count++;
      console.log('count:', count);
    };

```

4文字のスペース、もしくは1タブでのインデント


# 水平線

ここから分離

---

分離された

***

分離された

___

分離された


**code:**  

```
ここから分離

---

分離された

***

分離された

___

分離された


```

# リンク

これは[リンク](http://example.com/)です。  
これは[リンク](http://example.com/ "タイトル")です。

**code:**  

```
これは[リンク](http://example.com/)です。  
これは[リンク](http://example.com/ "タイトル")です。

```

[グーグル][1]、[ヤフー][2]、[MSN][3]、[GitHub][github]

[1]: http://google.com/ "Google"
[2]: http://search.yahoo.com/ "Yahoo"
[3]: http://search.msn.com/ "MSN"
[github]: https://github.io/


**code:**  

```
[グーグル][1]、[ヤフー][2]、[MSN][3]、[github][github]

[1]: http://google.com/ "Google"
[2]: http://search.yahoo.com/ "Yahoo"
[3]: http://search.msn.com/ "MSN"
[github]: https://github.com/

```


[google](https://www.google.co.jp)


# 画像

ないのでパス。リンクの先頭に！が付くのみ。


# 強調

normal *italic* normal  
normal _italic_ normal

normal **blod** normal  
normal __blod__ normal

# コード

例えば次のような関数`() => {}`です。


**code:**  

```
例えば次のような関数`() => {}`です。
```

``There is a literal backtick (`) here.``


**code:**  

```
``There is a literal backtick (`) here.``
```

# 自動リンク

<http://example.com/>


**code:**  

```
<http://example.com/>
```

<address@example.com>


**code:**  

```
<address@example.com>
```

# エスケープ

\*literal asterisks\*


**code:**  

```
\*literal asterisks\*
```

**code:**  

```
\   backslash
`   backtick
*   asterisk
_   underscore
{}  curly braces
[]  square brackets
()  parentheses
#   hash mark
+   plus sign
-   minus sign (hyphen)
.   dot
!   exclamation mark
```