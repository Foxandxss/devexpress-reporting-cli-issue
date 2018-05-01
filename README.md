# Devexpress reporting issue with CLI

To try, just `ng serve` and check the console. It should show a html.

To try the issue, do a `npm run build`.

At first, you will see a:

```
WARNING in ./src/app/app.component.ts
5:20-27 "export 'Html' (imported as 'dr') was not found in 'devexpress-reporting/dx-web-document-viewer'
```

If you go to dist and run it (http-server or something) you get a:

`Uncaught TypeError: Cannot assign to read only property 'exports' of object '[object Object]'`

Digging, if we open `node_modules/devexpress-reporting/dx-web-document-viewer` and we change:

```
module.exports = { DevExpress: DevExpress, Html: Html };
```

For:

```
exports.foo = { DevExpress: DevExpress, Html: Html };
```

With the appropiate changes in the code for this new export, it won't fail anymore.

Now, if instead of making this change we do a `ng build --prod --buildOptimizer false` it won't fail.
