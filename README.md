# utilibs

js 通用方法库

### 安装

`npm i utilibs or yarn add utilibs`

### API

- 深拷贝
  ` deepClone(obj: Object): object;`

- 判断字符串是否是十六进制的颜色值
  `isColor: (value: string) => boolean;`

- 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
  `debounce(func: Function, wait: number, immediate: boolean): () => any;`

- 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
  `throttle(func: Function, wait: number, options: any): () => any;`

- 通过名称获取 cookie
  `getCookie: (name: string) => any;`
- 通过名称删除 cookie
  `deleteCookie: (name: string) => void;`
- 设置 cookie
  `setCookie: (cname: string, cvalue: string, exdays: number) => void;`
- 空字符串 空数组 空对象值统一处理成 null
  `filterEmptyValue: (values: object) => any;`
- Date 转换字符串
  `getDateStr: (theDate: Date) => string;`
- 清除字符串所有空格
  `removeAllSpace: (str: string) => string;`
- 判断是否为正整数或 0
  `isInteger: (value: string | number, isZero: boolean) => boolean;`
- 一维数组去重
  `arrayUnique: (arr: Array<string | number>) => (string | number)[];`
- 判断数组内容是否相同 忽略顺序
  `arrIsEqualContent: (arr1: Array<string | number>, arr2: Array<string | number>) => boolean;`

### 本地开发

```
git clone至本地
npm install
src下新建文件编写
```

### 打包编译

```
npm run build 生成index.ts文件和.d.ts声明文件
```

### npm 发布

```
1.更新package.json的version（比npm现有的版本大）
2.copy根目录下的package.json和README.md至dist目录下
3.cd dist
4.npm publish

```
