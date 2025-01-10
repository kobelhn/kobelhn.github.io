::: tip
https://liaoxuefeng.com/books/python/introduction/index.html
:::
# Python

## 基础

### 数据类型与变量

#### 整数
- `100000000 => 10_000_000_000`，较大的整数在python中允许使用`_`分隔

#### 浮点数

#### 字符串
- `''`和`""`只是字符串表示方式，不是字符串的一部分，希望它们成为字符串的一部分需要用转义符号`\`, `print(‘\\\n\’’)`

#### 布尔值

- `True`
- `False`

##### 运算符
- `and`
- `or`
- `not`
#### 空值
- `None`。`None`不能理解为0,0是有意义的，`None`是Python里特殊的值，空值
#### 变量
- 变量名必须是大小写英文、数字和`_`的组合，不能以数字开头。声明变量不需要任何修饰符
- 变量类型可以是动态变化的
#### 常量
```python
# 常量 实际上手动修改PI的值也是可以的，用全大写的变量表示常量只是一个君子约定
PI = 3.14
# 除法
10 / 3 # 3.33333333333335
# 除法计算结果是浮点数，恰好整除得到的也是浮点数
9 / 3 # 3.0
# 地板除，整数的地板除永远是整数，即使除不尽
10 // 3 # 3
# 余数运算
10 % 3 # 1
```

> [!NOTE] Talk Is Cheap, Show Me The Code

```python
n = 123
f = 456.789
s1 = 'Hello, world'
s2 = 'Hello, \'Adam\''
s3 = r'Hello, "Bart"'
s4 = r'''Hello,
Bob!'''

print('n={0},f={1},s1={2},s2={3},s3={4},s4={5}'.format(n,f,s1,s2,s3,s4))
# 输出
# n=123,f=456.789,s1=Hello, world,s2=Hello, 'Adam',s3=Hello, "Bart",s4=Hello,
# Bob!
```
### 字符串和编码
- Python字符串支持多语言
```python
# 中文
print('你好')
# 英文
print('Hello')
# 韩文
print('안녕하세요')
```
- `ord()`获取字符的整数表示`chr()`把编码转换成对应的字符
```python
# ord
ord('A') # 65
ord('中') # 20013
# chr
chr(66) # B
chr(24991) # 文
```
- 格式化
```python
# 占位符
print('Hello, %s' % 'world') # Hello, world
print('Hi, %s, you have $%d.' % ('Michael', 1000000)) # Hi, Michael, you have $1000000.
# %d => 整数
# %f => 浮点数
# %s => 字符串
# %x => 十六进制整数

# format()
print('Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)) # Hello, 小明, 成绩提升了 17.1%

# f-string
r = 2.5
s = 3.14 * r ** 2
print(f'The area of a circle with radius {r} is {s:.2f}') # The area of a circle with radius 2.5 is 19.62
```

> [!NOTE] Talk is Cheap, Show Me The Code

```python
s1 = 72
s2 = 85
r = (s2 - s1)/s1 * 100

# 占位符
print('小明成绩提升了%.2f%%' %(r))
# format()
print('小明成绩提升了{0:.2f}%'.format(r))
# f-string
print(f'小明成绩提升了{r: .2f}%')
```
### list => 列表
```python
arr = [1, 2, 3] # [1, 2, 3]
len(arr) # 3
arr[0] # 1
arr[1] # 2
arr[2] # 3 
# arr[3] # IndexError: list index out of range
arr[-1] # 3
arr[-2] # 2
arr[-3] # 1
# arr[-4] # IndexError: list index out of range
arr.append(4) # 追加到末尾
arr.insert(0, 0) # 指定位置插入元素
arr.pop() # 删除末尾元素 print这个结果是被删除的元素
arr.pop(0) # 删除指定位置元素 print这个结果是被删除的元素
arr[0] = 4 # 指定位置元素替换为其他元素
arr[0] = [1, 2] # list里的元素可以是不同数据类型组成
print(arr) # [[1, 2], 2, 3]
```
### tuple => 元组
```python
t = (1, 2, 3) # (1, 2, 3) tuple不可变，可以使用列表相同方法去访问元组内的元素，但不可赋值，也不可添加和删除元组的元素
t = (1) # 1 不是元组，是 t = 1,因为小括号可以数学意义的小括号
t = (1,) # (1,)元组,Python在现实一个元素的元组时也会显示逗号
t = (1, 2, [1, 2]) # (1, 2, [1, 2]) 元组内的元素也可以多种数据类型
t[2][0] = 3
t[2][1] = 4
print(t) # (1, 2, [3, 4])
```
> [!NOTE] Talk is Cheap, Show Me The Code

```python
L = [
    ['Apple', 'Google', 'Microsoft'],
    ['Java', 'Python', 'Ruby', 'PHP'],
    ['Adam', 'Bart', 'Bob']
]

print(L[0][0]) # Apple
print(L[1][1]) # Python
print(L[2][2]) # Bob
```
### 条件判断
```python
age = 20
if age >= 18:
	print('age is', age)
	print('adult')
elif age >= 6:
	print('age is', age)
	print('teenager')
else:
	print('kid')

s = input('birth: ') # input返回的是字符串
birth = int(s) # 需要转换成int才可比较，负责报错
if birth < 2000:
    print('00前')
else:
    print('00后')
```
> [!NOTE] Talk is Cheap, Show Me The Code

```python
height = float(input('height: '))
weight = float(input('weight: '))

bmi = weight / height ** 2

if bmi >32:
    print('严重肥胖')
elif bmi >=28 and bmi <= 32:
    print('肥胖')
elif bmi >=25 and bmi <= 28:
    print('过重')
elif bmi >=18.5 and bmi <= 25:
    print('正常')
elif bmi < 18.5:
    print('过轻')
else:
    print('error')
```
### 模式匹配
```python
# 常规匹配
score = 'B'

match score:
	case 'A':
		print('score is A')
	case 'B':
		print('score is B')
	case _: # _表示匹配到其他情况
		print('score is any')

# 复杂匹配
age = 15

match age:
	case x if x < 10:
		print(f'<10 years old: {x}')
	case 10:
		print('10 years old')
	case 11 | 12 | 13 | 14:
		print('11 ~ 14 years old')
	case 18:
	    print('18 years old')
	case _:
		print('other years old')

# 匹配列表
args = ['gcc', 'hello.c', 'world.c']
# args = ['clean']
# args = ['gcc']

match args:
	case ['gcc']:
		print('gcc: missing source files(s)')
	case ['gcc', file1, *files]:
		print('gcc compile: ' + file1 + ',' + ','.join(files))
	case ['clean']:
		print('clean')
	case _:
		print('invalid command')
```
### 循环
```python
# for ... in
names = ['m', 'v', 'n']
for name in names:
	print(name)

sum = 0
for x in [1, 2, 3, 4, 5, 6, 7, 8]:
	sum = sum + x
print(sum)

sum = 0
for x in range(101): # range(num)函数可以生成一个整数序列，生成的序列是从0到小于num的整数
	sum = sum + x
print(sum) # 1 + 2 + ... + 100

# while循环
sum = 0
n = 99
while n > 0:
	sum = sum + n
	n = n - 2
print(sum)

# break
n = 1
while n < 100:
	if n > 10:
		break
	print(n)
	n = n + 1
print('End')

# continue
n = 0
while n < 10:
	n = n + 1
	if n % 2 == 0: # 如果n是偶数，执行continue
		continue # continue会print语句，直接继续下一轮循环
	print(n)
# 1, 3, 5, 7, 9
```
### dict & set
```python
# dict
# 创建一个字典
person = {
    'name': 'Alice',
    'age': 30,
    'city': 'New York'
}

# 访问字典中的值
print(person['name'])  # 输出: Alice
print(person.get('age'))  # 输出: 30

# 添加或更新字典中的值
person['email'] = 'alice@example.com'
person['age'] = 31

# 删除字典中的值
del person['city']
removed_value = person.pop('email')

# 检查键是否在字典中
if 'name' in person:
    print('Name is in the dictionary')

# 遍历字典
for key, value in person.items():
    print(f'{key}: {value}')

# 获取所有的键
keys = person.keys()
print(keys)  # 输出: dict_keys(['name', 'age'])

# 获取所有的值
values = person.values()
print(values)  # 输出: dict_values(['Alice', 31])

# 获取所有的键值对
items = person.items()
print(items)  # 输出: dict_items([('name', 'Alice'), ('age', 31)])

# 清空字典
person.clear()
print(person)  # 输出: {}

# set
# 创建一个集合
fruits = {'apple', 'banana', 'cherry'}

# 添加元素到集合
fruits.add('orange')
print(fruits)  # 输出: {'apple', 'banana', 'cherry', 'orange'}

# 更新集合（可以添加多个元素）
fruits.update(['mango', 'grape'])
print(fruits)  # 输出: {'apple', 'banana', 'cherry', 'orange', 'mango', 'grape'}

# 移除元素
fruits.remove('banana')  # 如果元素不存在，会引发KeyError
print(fruits)  # 输出: {'apple', 'cherry', 'orange', 'mango', 'grape'}

# 使用discard移除元素（如果元素不存在，不会引发错误）
fruits.discard('banana')
print(fruits)  # 输出: {'apple', 'cherry', 'orange', 'mango', 'grape'}

# 弹出一个随机元素
popped_fruit = fruits.pop()
print(popped_fruit)  # 输出: 集合中的某个元素
print(fruits)  # 输出: 剩余的元素

# 清空集合
fruits.clear()
print(fruits)  # 输出: set()

# 创建两个集合
set1 = {'a', 'b', 'c'}
set2 = {'b', 'c', 'd', 'e'}

# 并集
union_set = set1.union(set2)
print(union_set)  # 输出: {'a', 'b', 'c', 'd', 'e'}

# 交集
intersection_set = set1.intersection(set2)
print(intersection_set)  # 输出: {'b', 'c'}

# 差集
difference_set = set1.difference(set2)
print(difference_set)  # 输出: {'a'}

# 对称差集
symmetric_difference_set = set1.symmetric_difference(set2)
print(symmetric_difference_set)  # 输出: {'a', 'd', 'e'}

# 检查子集
is_subset = set1.issubset(set2)
print(is_subset)  # 输出: False

# 检查超集
is_superset = set1.issuperset(set2)
print(is_superset)  # 输出: False

# 检查是否有交集
is_disjoint = set1.isdisjoint(set2)
print(is_disjoint)  # 输出: False
```
## 函数
### 内置函数
Python 提供了许多内置函数，这些函数可以帮助我们执行各种常见的任务。以下是一些常用的 Python 内置函数及其作用：
1. `{python icon} abs(x)`：返回数字的绝对值。
2. `{python icon} all(iterable)`：如果 iterable 的所有元素都为真，则返回 True。
3. `{python icon} any(iterable)`：如果 iterable 中的任何元素为真，则返回 True。
4. `{python icon} bin(x)`：将整数转换为二进制字符串。
5. `{python icon} bool(x)`：将值转换为布尔类型。
6. `{python icon} chr(i)`：返回整数 i 对应的字符。
7. `{python icon} dict()`：创建一个字典。
8. `{python icon} dir([object])`：不带参数时，返回当前范围内的变量、方法和定义的列表；带参数时，返回参数的属性、方法列表。
9. `{python icon} divmod(a, b)`：返回 (a // b, a % b) 的元组。
10. `{python icon} enumerate(iterable, start=0)`：返回一个枚举对象，从 start 开始计数。
11. `{python icon} eval(expression)`：执行字符串表达式，并返回表达式的值。
12. `{python icon} filter(function, iterable)`：构造一个由 iterable 中那些使 function 返回 True 的元素组成的迭代器。
13. `{python icon} float(x)`：将值转换为浮点数。
14. `{python icon} format(value, format_spec)`：格式化指定的值。
15. `{python icon} getattr(object, name[, default])`：返回对象的属性值。
16. `{python icon} hasattr(object, name)`：如果对象有指定的属性，则返回 True。
17. `{python icon} hash(object)`：返回对象的哈希值。
18. `{python icon} help([object])`：调用内置帮助系统。
19. `{python icon} hex(x)`：将整数转换为十六进制字符串。
20. `{python icon} id(object)`：返回对象的唯一标识符。
21. `{python icon} int(x[, base])`：将值转换为整数。
22. `{python icon} isinstance(object, classinfo)`：如果对象是 classinfo 的实例，则返回 True。
23. `{python icon} issubclass(class, classinfo)`：如果 class 是 classinfo 的子类，则返回 True。
24. `{python icon} iter(object[, sentinel])`：返回一个迭代器对象。
25. `{python icon} len(s)`：返回对象的长度（元素个数）。
26. `{python icon} list([iterable])`：将 iterable 转换为列表。
27. `{python icon} map(function, iterable, ...)`：返回一个将 function 应用于 iterable 中每一项并返回结果的迭代器。
28. `{python icon} max(iterable, *[, key, default])`：返回 iterable 中的最大值。
29. `{python icon} min(iterable, *[, key, default])`：返回 iterable 中的最小值。
30. `{python icon} next(iterator[, default])`：返回迭代器的下一个项目。
31. `{python icon} oct(x)`：将整数转换为八进制字符串。
32. `{python icon} open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)`：打开文件并返回文件对象。
33. `{python icon} ord(c)`：返回字符 c 对应的 Unicode 码点。
34. `{python icon} pow(x, y[, z])`：返回 (x**y) % z。
35. `{python icon} print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)`：打印对象到文本流文件。
36. `{python icon} range(start, stop[, step])`：返回一个表示从 start 到 stop 的序列的对象。
37. `{python icon} repr(object)`：返回对象的字符串表示。
38. `{python icon} reversed(seq)`：返回序列 seq 的反向迭代器。
39. `{python icon} round(number[, ndigits])`：返回 number 四舍五入到 ndigits 位小数。
40. `{python icon} set([iterable])`：返回一个新的集合对象。
41. `{python icon} sorted(iterable, *, key=None, reverse=False)`：返回一个新的排序列表。
42. `{python icon} str(object='')`：将对象转换为字符串。
43. `{python icon} sum(iterable, /, start=0)`：从 start 开始计算 iterable 的总和。
44. `{python icon} tuple([iterable])`：将 iterable 转换为元组。
45. `{python icon} type(object)`：返回对象的类型。
46. `{python icon} zip(*iterables)`：返回一个聚合了来自每个可迭代对象的元素的迭代器。
### 定义函数与函数参数
```python error:31
# 定义函数
def myFunc():
	print('myFunc')
myFunc()

# 函数参数
## 常规
def f1(x, y):
	print(x + y)
f1(1, 2)
## 默认参数
def f2(x=1, y=2):
	print(x + y)
f2(2)
## 可变参数 接收的是一个tuple
def f3(*nums):
	sum = 0
	for n in nums:
		sum = sum + n * n
	print(sum)
f3(1, 2, 3, 4, 5)
## 关键字参数 接收的是一个dict
def f4(x, y, **kw):
	print(x, y, kw)
	print(x + y + kw['a'] + kw['b'])
	print(x + y + kw.get('a', 0) + kw.get('b', 0))
f4(1, 2, a=4, b=5)
## 命名关键字参数 接收的是一个dict
def f5(x, y, *, a, b):
	print(x + y + a + b)
f5(1, 2, a=1, b=2, c=3) # TypeError: f5() got an unexpected keyword argument 'c'
f5(1, 2, a=1, b=2) # 6

## 习惯写法
def fn(*args, **kw):
```
### 递归函数
汉诺塔问题是一个经典的递归问题，描述如下：
**问题描述**
有三根柱子（通常称为 A、B 和 C），其中一根柱子上有若干个大小不一的圆盘，圆盘按大小顺序从上到下排列。目标是将所有圆盘从初始柱子移动到目标柱子，且每次只能移动一个圆盘，并且在移动过程中不能将较大的圆盘放在较小的圆盘上。
**解决思路**
汉诺塔问题的解决思路是递归的。假设我们有 [n](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) 个盘子，柱子分别为 A、B 和 C，目标是将所有盘子从 A 移动到 C，B 作为辅助柱。具体步骤如下：
1. **基本情况**：如果只有一个盘子（`n == 1`），直接将其从 A 移动到 C。
2. **递归情况**：
    1. 首先，将 n-1 个盘子从 A 移动到 B，使用 C 作为辅助柱。
    2. 然后，将第 n 个盘子从 A 移动到 C。
    3. 最后，将 n-1 个盘子从 B 移动到 C，使用 A 作为辅助柱。
```python
def move(n, a, b, c):
	if n == 1:
		print(a, '-->', c)
	else:
		move(n-1, a, c, b) # 将 n-1 个盘子从 a 移动到 b，使用 c 作为辅助柱
		move(1, a, b, c) # 将第 n 个盘子从 a 移动到 c
		move(n-1, b, a, c) # 将 n-1 个盘子从 b 移动到 c，使用 a 作为辅助柱
# 期待输出:
# A --> C
# A --> B
# C --> B
# A --> C
# B --> A
# B --> C
# A --> C
move(3, 'A', 'B', 'C')
```
## 高级特性
### 切片
Python 的切片操作可以用于从列表或元组中提取部分元素
#### 列表切片示例
```python
# 定义一个列表
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 获取索引 2 到 5 的元素（不包括索引 5）
print(my_list[2:5])  # 输出: [2, 3, 4]

# 获取前 5 个元素
print(my_list[:5])  # 输出: [0, 1, 2, 3, 4]

# 获取从索引 5 开始的所有元素
print(my_list[5:])  # 输出: [5, 6, 7, 8, 9]

# 获取最后 3 个元素
print(my_list[-3:])  # 输出: [7, 8, 9]

# 获取从索引 2 到 8 的元素，步长为 2
print(my_list[2:9:2])  # 输出: [2, 4, 6, 8]

# 获取整个列表的副本
print(my_list[:])  # 输出: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 反转列表
print(my_list[::-1])  # 输出: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

#### 元组切片示例
```python
# 定义一个元组
my_tuple = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

# 获取索引 2 到 5 的元素（不包括索引 5）
print(my_tuple[2:5])  # 输出: (2, 3, 4)

# 获取前 5 个元素
print(my_tuple[:5])  # 输出: (0, 1, 2, 3, 4)

# 获取从索引 5 开始的所有元素
print(my_tuple[5:])  # 输出: (5, 6, 7, 8, 9)

# 获取最后 3 个元素
print(my_tuple[-3:])  # 输出: (7, 8, 9)

# 获取从索引 2 到 8 的元素，步长为 2
print(my_tuple[2:9:2])  # 输出: (2, 4, 6, 8)

# 获取整个元组的副本
print(my_tuple[:])  # 输出: (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

# 反转元组
print(my_tuple[::-1])  # 输出: (9, 8, 7, 6, 5, 4, 3, 2, 1, 0)
```
#### 切片操作的通用格式
切片操作的通用格式为 `sequence[start:stop:step]`，其中：
- `start` 是切片的起始索引（包含）。
- `stop` 是切片的结束索引（不包含）。
- `step` 是切片的步长（默认为 1）。
### 迭代
```python
# list
l = [1, 2, 3]
for li in l:
	print(li)
t = (1, 2, 3)
for ti in t:
	print(ti)
# dict
d = {'a':1,'b':2, 'c':3}
for key in d:
	print(key)
for val in d.values():
	print(val)
for k, v in d.items():
	print(k, v)
```
### 列表生成式
```python
[表达式 for 变量 in 可迭代对象 if 条件]
```
- `表达式`：生成列表元素的表达式，可以是对变量的操作。
- `变量`：在可迭代对象中逐个取值的变量。
- `可迭代对象`：可以是列表、元组、字符串等。
- `条件`：可选部分，用于过滤哪些元素会被包含在生成的列表中。
#### 示例 1：生成平方数列表
```python
# 使用列表生成式生成一个包含 0 到 9 的平方数的列表
squares = [x**2 for x in range(10)]
print(squares)  # 输出: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```
解析：`x**2` 是表达式，`x` 是变量，`range(10)` 是可迭代对象。生成的列表包含 0 到 9 的平方数。
#### 示例 2：生成偶数列表
```python
# 使用列表生成式生成一个包含 0 到 9 的偶数的列表
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # 输出: [0, 2, 4, 6, 8]
```
解析：`x` 是表达式，`x` 是变量，`range(10)` 是可迭代对象，`if x % 2 == 0` 是条件。生成的列表包含 0 到 9 的偶数。
#### 示例 3：生成带条件的平方数列表
```python
# 使用列表生成式生成一个包含 0 到 9 的偶数的平方数的列表
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)  # 输出: [0, 4, 16, 36, 64]
```
解析：`x**2` 是表达式，`x` 是变量，`range(10)` 是可迭代对象，`if x % 2 == 0` 是条件。生成的列表包含 0 到 9 的偶数的平方数。
#### 示例 4：嵌套循环的列表生成式
```python
# 使用列表生成式生成一个包含 (x, y) 形式的元组的列表，其中 x 和 y 分别取自两个范围
pairs = [(x, y) for x in range(3) for y in range(3)]
print(pairs)  # 输出: [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
```
解析：`(x, y)` 是表达式，`x` 和 `y` 是变量，`range(3)` 是可迭代对象。生成的列表包含所有可能的 (x, y) 组合。
在 Python 中，迭代器（Iterator）和生成器（Generator）是用于遍历数据结构的工具。它们提供了一种惰性计算（lazy evaluation）的方式，可以节省内存并提高效率。

### 迭代器（Iterator）
迭代器是一个实现了迭代协议的对象，迭代协议包括 `__iter__()` 和 `__next__()` 方法。
#### 示例代码与解析
```python
# 创建一个迭代器类
class MyIterator:
    def __init__(self, data):
        self.data = data
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index < len(self.data):
            result = self.data[self.index]
            self.index += 1
            return result
        else:
            raise StopIteration

# 使用迭代器
my_list = [1, 2, 3]
iterator = MyIterator(my_list)

for item in iterator:
    print(item)
```
解析：
- `MyIterator` 类实现了 `__iter__()` 和 `__next__()` 方法。
- `__iter__()` 返回迭代器对象自身。
- `__next__()` 返回下一个元素，如果没有更多元素则抛出 `StopIteration` 异常。
- 使用 `for` 循环遍历迭代器对象。

### 生成器（Generator）
生成器是使用 `yield` 关键字的函数。生成器函数返回一个生成器对象，该对象支持迭代协议。
#### 示例代码与解析
```python
# 创建一个生成器函数
def my_generator():
    yield 1
    yield 2
    yield 3

# 使用生成器
gen = my_generator()

for item in gen:
    print(item)
```
解析：
- `my_generator` 是一个生成器函数，使用 `yield` 关键字逐个返回值。
- 每次调用 `yield` 时，生成器函数会暂停并保存其状态，下一次调用 `__next__()` 时会从暂停的地方继续执行。
- 使用 `for` 循环遍历生成器对象。
#### 生成器表达式
生成器表达式与列表生成式类似，但使用圆括号而不是方括号，生成器表达式返回一个生成器对象。
##### 示例代码与解析
```python
# 创建一个生成器表达式
gen_expr = (x**2 for x in range(5))

# 使用生成器表达式
for item in gen_expr:
    print(item)
```
解析：
- `gen_expr` 是一个生成器表达式，生成 0 到 4 的平方数。
- 使用 `for` 循环遍历生成器对象。
## 函数式编程
### 高阶函数
#### 变量可以指向函数
![alt](/static/program/python/1.png)
#### 函数名也是变量
![alt](/static/program/python/2.png)
#### 传入函数
一个函数接收另一个函数作为参数，这种函数就被称为高阶函数
```python
def add(x, y, f):
	return f(x) + f(y)
print(add(-5, 6, abs)) # 11
```
#### map/reduce
`{python icon}map` 和 `{python icon}reduce` 是 Python 中用于函数式编程的两个重要函数。
##### `{python icon}map` 函数
`{python icon}map` 函数将一个函数应用到一个可迭代对象的每个元素上，并返回一个迭代器。其语法为：
```python
map(function, iterable, ...)
```
**示例代码**
```python
# 使用 map 函数将列表中的每个元素平方
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # 输出: [1, 4, 9, 16, 25]
```
**解析**
在这个例子中，`{python icon}lambda x: x ** 2` 是一个匿名函数，它将每个元素平方。`{python icon}map` 函数将这个匿名函数应用到 `numbers` 列表的每个元素上，并返回一个包含所有平方值的迭代器。`{python icon}list` 函数将这个迭代器转换为一个列表。
##### `{python icon}reduce` 函数
`{python icon}reduce` 函数将一个二元函数应用到可迭代对象的元素上，从而将其减少为一个单一的值。`{python icon}reduce` 函数在 `{python icon}functools` 模块中，其语法为：
```python
from functools import reduce
reduce(function, iterable[, initializer])
```
**示例代码**
```python
from functools import reduce

# 使用 reduce 函数将列表中的所有元素相加
numbers = [1, 2, 3, 4, 5]
sum_numbers = reduce(lambda x, y: x + y, numbers)
print(sum_numbers)  # 输出: 15
```
**解析**
在这个例子中，`{python icon}lambda x, y: x + y` 是一个匿名函数，它将两个元素相加。`{python icon}reduce` 函数将这个匿名函数应用到 `numbers` 列表的元素上，从而将其减少为一个单一的值，即所有元素的和。
**综合示例**

```python
# 使用 map 和 reduce 函数计算列表中所有元素的平方和
from functools import reduce

numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
sum_squared = reduce(lambda x, y: x + y, squared)
print(sum_squared)  # 输出: 55
```
#### filter
`{python icon} filter` 函数是 Python 内置的高阶函数之一，用于过滤序列中的元素。它接受两个参数：一个函数和一个可迭代对象。`{python icon} filter` 函数会将可迭代对象中的每个元素传递给函数进行判断，如果函数返回 `True`，则保留该元素，否则过滤掉该元素。
以下是 `filter` 函数的语法：
```python
filter(function, iterable)
```
示例代码及解析：
```python
# 定义一个判断是否为偶数的函数
def is_even(n):
    return n % 2 == 0

# 创建一个包含数字的列表
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 使用 filter 函数过滤出偶数
even_numbers = filter(is_even, numbers)

# 将过滤结果转换为列表并打印
print(list(even_numbers))
```

解析：
1. 定义了一个函数 `is_even`，用于判断一个数是否为偶数。
2. 创建了一个包含 1 到 10 的列表 `numbers`。
3. 使用 `{python icon} filter` 函数将 `numbers` 列表中的每个元素传递给 `is_even` 函数进行判断，保留返回 `{python icon} True` 的元素（即偶数）。
4. 将 `{python icon} filter` 函数的结果转换为列表并打印出来，结果为 `[2, 4, 6, 8, 10]`。
#### sorted
`{python icon} sorted` 函数是 Python 内置的用于排序的函数。它可以对任何可迭代对象进行排序，并返回一个新的列表。`{python icon} sorted` 函数不会修改原始对象，而是返回一个新的排序后的列表。
以下是 `{python icon} sorted` 函数的语法：
```python
sorted(iterable, key=None, reverse=False)
```
参数说明：
- `iterable`：要排序的可迭代对象。
- `key`：一个函数，用于从每个元素中提取用于比较的键（默认为 `None`，表示直接比较元素本身）。
- `reverse`：一个布尔值，如果为 `True`，则按降序排序（默认为 `False`，表示按升序排序）。
  示例代码及解析：
```python
# 示例 1：对数字列表进行排序
numbers = [5, 2, 9, 1, 5, 6]
sorted_numbers = sorted(numbers)
print(sorted_numbers)  # 输出: [1, 2, 5, 5, 6, 9]

# 示例 2：对字符串列表按字母顺序排序
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)  # 输出: ['apple', 'banana', 'cherry']

# 示例 3：对字符串列表按长度排序
sorted_by_length = sorted(words, key=len)
print(sorted_by_length)  # 输出: ['apple', 'banana', 'cherry']

# 示例 4：按降序排序
sorted_numbers_desc = sorted(numbers, reverse=True)
print(sorted_numbers_desc)  # 输出: [9, 6, 5, 5, 2, 1]
```
解析：
1. 示例 1：对数字列表 `numbers` 进行排序，结果为 `[1, 2, 5, 5, 6, 9]`。
2. 示例 2：对字符串列表 `words` 按字母顺序排序，结果为 `['apple', 'banana', 'cherry']`。
3. 示例 3：对字符串列表 `words` 按字符串长度排序，使用 `key=len` 提取每个字符串的长度作为排序键，结果为 `['apple', 'banana', 'cherry']`。
4. 示例 4：对数字列表 `numbers` 按降序排序，使用 `reverse=True` 参数，结果为 `[9, 6, 5, 5, 2, 1]`。
### 闭包
类似JavaScript的闭包，不赘述
### 匿名函数
`{python icon} lambda x: x * x, [1, 2, 3]`
### 装饰器
类似TypeScript装饰器，不赘述
### 偏函数
偏函数（Partial Function）是通过固定函数的某些参数值来创建一个新的函数。Python 的`{python icon} functools`模块提供了 `{python icon} partial` 函数，用于创建偏函数。
```python
from functools import partial

# 定义一个普通函数
def multiply(x, y):
    return x * y

# 使用 partial 创建一个偏函数，将 x 固定为 2
double = partial(multiply, 2)

# 使用偏函数
result = double(5)  # 相当于 multiply(2, 5)

print(result)  # 输出 10
```
### 解析
1. 导入 `{python icon} partial` 函数：`{python icon} from functools import partial`
2. 定义一个普通函数 `multiply`，接受两个参数 `x` 和 `y`，返回它们的乘积。
3. 使用 `{python icon} partial` 创建一个偏函数 `double`，将 `multiply` 函数的第一个参数 `x` 固定为 2。
4. 调用偏函数 `double`，传入一个参数 `5`，相当于调用 `multiply(2, 5)`。
5. 输出结果 `10`。
   通过偏函数，可以简化函数调用，尤其是在需要多次调用具有相同参数的函数时。
## 模块
`{python icon} from xx import xxx`
### 面向对象
```python
from enum import Enum, unique

# 枚举类
@unique
class Gender(Enum):
    MALE = 1
    FEMALE = 2

# 元类
class Meta(type):
    def __new__(cls, name, bases, attrs):
        attrs['class_name'] = name
        return super().__new__(cls, name, bases, attrs)

# 基类
class Person(metaclass=Meta):
    # 类属性
    species = 'Homo sapiens'
    
    # __slots__ 限制实例属性
    __slots__ = ['_name', '_age', '_gender']
    
    def __init__(self, name, age, gender):
        self._name = name
        self._age = age
        self._gender = gender
    
    # 实例方法
    def greet(self):
        return f'Hello, my name is {self._name}.'
    
    # 访问限制
    def _get_age(self): # _开头的方法或属性建议尽量不要在外部进行使用，但这只是约定不是强制的限制
        return self._age
    
    # @property 装饰器
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("Age cannot be negative")
        self._age = value
    
    # @staticmethod 静态方法
    @staticmethod
    def species_info():
        return 'Humans are the only extant members of the subtribe Hominina.'
    
    # __str__ 方法
    def __str__(self):
        return f'Person(name={self._name}, age={self._age}, gender={self._gender})'

# 子类
class Student(Person):
    def __init__(self, name, age, gender, student_id):
        super().__init__(name, age, gender)
        self.student_id = student_id
        self.__type = 'Student' # 私有属性，外部不可访问
    
    # 方法重写（多态）
    def greet(self):
        return f'Hello, I am {self._name}, and my student ID is {self.student_id}.'

# 装饰器
def log_method_call(func):
    def wrapper(*args, **kwargs):
        print(f'Calling method {func.__name__}')
        return func(*args, **kwargs)
    return wrapper

# 使用装饰器
class Teacher(Person):
    def __init__(self, name, age, gender, subject):
        super().__init__(name, age, gender)
        self.subject = subject
        self.__type = 'Teacher' # 私有属性，外部不可访问
    
    @log_method_call
    def teach(self):
        return f'Teaching {self.subject}'

# 创建实例
john = Student('John Doe', 20, Gender.MALE, 'S12345')
jane = Teacher('Jane Smith', 35, Gender.FEMALE, 'Mathematics')

# 尝试直接访问私有属性
try:
	print(jane.__type)
except AttributeError as e:
	print(e) # 输出: 'Teacher' object has no attribute '__type'

# 通过名称重整访问私有属性
print(jane._Teacher__type) # 输出: Teacher

# 访问实例属性和方法
print(john.greet())  # Hello, I am John Doe, and my student ID is S12345.
print(jane.greet())  # Hello, my name is Jane Smith.
print(jane.teach())  # Calling method teach \n Teaching Mathematics

# 访问类属性和静态方法
print(Person.species)  # Homo sapiens
print(Person.species_info())  # Humans are the only extant members of the subtribe Hominina.

# 使用 @property 和 setter
john.age = 21
print(john.age)  # 21

# 打印对象信息
print(john)  # Person(name=John Doe, age=21, gender=Gender.MALE)
print(jane)  # Person(name=Jane Smith, age=35, gender=Gender.FEMALE)
```
