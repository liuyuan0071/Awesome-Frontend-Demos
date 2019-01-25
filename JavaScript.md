# JavaScript教程
## 一、数据类型
### 原始类型：String Boolean Number Undefined Null


### 引用类型： Object(Function Array RegExp Date...)


### 判断数据类型：

typeof运算符

`typeof 100  // "number"`

`typeof(typeof(100))    //"string"`

`function f() {};    typeof(f)    // "function"`

`typeof([1, 2, 3]) //"object" 无法区分数组和对象，要用instanceof`

**typeof(null)的值是"object"。（特殊情况）**

instanceof运算符

`[1, 2, 3] instanceof Array //true`

Object.prototype.toString()方法

### 1. null 、 undefined:
1.几乎没区别。`Boolean(null) == Boolean(undefined) == false; null == undefined;`

2.区别：`Number(null) == 0; Number(undefined) == NaN;`

*undefined, null, false, 0, NaN, '', ""都是false。*

### 2. Number:
***JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。*** `1 === 1.0;`

这就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。

`0.3/0.1 == 2.9999999999999996;` 小数不能随意运算。

`NaN === NaN; //false`

`5 + 1c;    //'51c'`

`5 - 1c;    //NaN`

Infinity: 无穷大。`1/0;  //Infinity`

parseInt()方法：转换为整数。该方法的返回值一定是数字类型。

`parseInt(1.23);    //1`

`parseInt('   81');     // 81`

`parseInt('111hehe11221231sas');    //111`

`parseInt('abc') // NaN`

parseFloat()方法：转化为浮点数。

`parseFloat('3.14') //3.14`

### 3.String:

`'did you say \'hello\'?'   //"did you say 'hello'?"`
                                
