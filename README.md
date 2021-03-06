## svrx-plugin-mock

[![svrx](https://img.shields.io/badge/svrx-plugin-%23ff69b4?style=flat-square)](https://svrx.io/)
[![npm](https://img.shields.io/npm/v/svrx-plugin-mock.svg?style=flat-square)](https://www.npmjs.com/package/svrx-plugin-mock)

The svrx plugin for [mock.js](http://mockjs.com/examples.html) ,
Zero config, Provide us with a convenient way to mock data

## Usage

> Please make sure that you have installed [svrx](https://svrx.io/) already.

**Mock plugin must be used with [routing dsl](https://docs.svrx.io/zh/guide/route.html)**, it will [register new action](https://docs.svrx.io/en/plugin/contribution.html#-routeractionname-builder) named `mock`

### Via CLI

```bash
svrx -p mock --route route.js
```

### Via API

```js
const svrx = require('@svrx/svrx');

svrx({ plugins: ['mock'] }).start();
```

### Then play it in your `route.js`

```js
get('/blog/:id').to.mock({
  'code|+1': 202,
  'object|2': {
    '310000': 'ShangHai',
    '320000': 'JiangSu',
    '330000': 'ZheJiang',
    '340000': 'Anhui'
  }
});

get('/user/:id').to.mock('@paragraph');
```

Visit `/blog/1` , and you will see output as below

```js
{
    "number":202,
    "object":{
        "310000":"ShangHai",
        "330000":"ZheJiang"
    }
}
```

Thanks for [routing dsl](https://docs.svrx.io/zh/guide/route.html), **mocking rule is also hot-reloading**.
If you update the rules, there is no need to restart the server-x.

see [official mock.js reference](http://mockjs.com/examples.html) for more details

## Options

None.

<!-- TODO -->

## License

MIT
