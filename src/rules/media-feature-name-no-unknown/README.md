# media-feature-name-no-unknown

Disallow unknown media feature names.

```css
@media (min-width: 700px) { }
/**     ↑
 * These media feature names */
```

## Options

### `true`

The following patterns are considered warnings:

```css
@media screen and (unknown) { }
```

```css
@media screen and (unknown: 10px) { }
```

The following patterns are *not* considered warnings:

```css  
@media all and (monochrome) { }
```

```css  
@media (min-width: 700px) { }
```

```css
@media (MIN-WIDTH: 700px) { }
```

```css
@media (min-width: 700px) and (orientation: landscape) { }
```

```css
@media (-webkit-min-device-pixel-ratio: 2) { }
```

## Optional options

### `ignoreMediaFeatureNames: ["/regex/", "string"]`

Given:

```js
["/^my-/", "custom"]
```

The following patterns are *not* considered warnings:

```css
@media screen and (my-media-feature-name) { }
```

```css
@media screen and (MY-MEDIA-FEATURE-NAME) { }
```

```css
@media screen and (custom: 10px) { }
```

```css
@media (min-width: 700px) and (custom: 10px) { }
```
