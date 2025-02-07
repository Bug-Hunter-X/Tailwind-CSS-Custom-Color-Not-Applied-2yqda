# Tailwind CSS Custom Color Not Applied

This repository demonstrates a common issue when using custom colors in Tailwind CSS.  The custom color `theme-color` is defined in the `SomeTailwind.js` file, but it's not being applied to the `SomeComponent.vue` element.

## Problem
The custom color is defined correctly in the Tailwind configuration but isn't picked up by the component.

## Solution
The solution is to ensure the Tailwind CSS configuration file is correctly imported and the build process is configured appropriately to handle custom configurations.