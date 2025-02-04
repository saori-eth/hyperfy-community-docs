# Is the trigger working?

```js
const action = app.create('action')
action.label = 'working?'
action.onTrigger = () => {
  console.log('working?')
}
```

