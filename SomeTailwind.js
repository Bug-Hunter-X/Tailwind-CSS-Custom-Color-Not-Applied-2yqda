```javascript
// SomeTailwind.js

module.exports = {
  theme: {
    extend: {
      colors: {
        'theme-color': '#333',
      }
    }
  },
  variants: {},
  plugins: [],
};
```
```html
<!-- SomeComponent.vue -->
<template>
  <div :class="{'bg-theme-color': true}">
    This is some text
  </div>
</template>
```