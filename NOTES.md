# Learn Bootstrap

## Intro

What we will cover

-   What is Bootstrap
-   Installation / Setup
-   Grid System
-   Components

### What is Bootstrap

![what is ](image/what-is.png)

### Why use ?

![why-use](./image/why-use.png)

### Components & helpers

![components-helpers](./image/components-helpers.png)

## Bootstrap Grid

-   breakpoints
    [Available breakpoints](<[https://](https://getbootstrap.com/docs/5.3/layout/breakpoints/#available-breakpoints)>)
-   container
    [how does it work](<[https://](https://getbootstrap.com/docs/5.3/layout/containers/#how-they-work)>)
-   grid
    [grid](https://getbootstrap.com/docs/5.3/layout/grid/)
-   columns
-   gutters

### grid options

-   breakpoints
-   col width
-   row col number
-   align

## Button

-   color
-   size

## Cards

-   using utilities

examples:

-   `card`
-   `w-25`
-   `card-header`
-   `card-footer`
-   `card-text`
-   `card-group`

### Card Layout

## Typography

-   `display-1` to `display-6`
-   `<blockquote></blockquote>`
-   Alignment: `text-center`
-   Lists

### Lists

-   `list-unstyled`: only immediate children
-   `list-inline`

### RFS

[Bootstrap’s side project RFS is a unit resizing engine which was initially developed to resize font sizes (hence its abbreviation for Responsive Font Sizes). Nowadays RFS is capable of rescaling most CSS properties with unit values like margin, padding, border-radius, or even box-shadow.

The mechanism automatically calculates the appropriate values based on the dimensions of the browser viewport. It will be compiled into calc() functions with a mix of rem and viewport units to enable the responsive scaling behavior.]([https://](https://getbootstrap.com/docs/5.3/getting-started/rfs/#what-is-rfs))

## Responsive images

-   `float-start`

## Utilities

-   Border
-   Spacing
-   Color
-   Horizontal centering

### Spacing

Where property is one of:

    m - for classes that set margin
    p - for classes that set padding

Where sides is one of:

    t - for classes that set margin-top or padding-top
    b - for classes that set margin-bottom or padding-bottom
    s - (start) for classes that set margin-left or padding-left in LTR, margin-right or padding-right in RTL
    e - (end) for classes that set margin-right or padding-right in LTR, margin-left or padding-left in RTL
    x - for classes that set both *-left and *-right
    y - for classes that set both *-top and *-bottom
    blank - for classes that set a margin or padding on all 4 sides of the element

Where size is one of:

    0 - for classes that eliminate the margin or padding by setting it to 0
    1 - (by default) for classes that set the margin or padding to $spacer * .25
    2 - (by default) for classes that set the margin or padding to $spacer * .5
    3 - (by default) for classes that set the margin or padding to $spacer
    4 - (by default) for classes that set the margin or padding to $spacer * 1.5
    5 - (by default) for classes that set the margin or padding to $spacer * 3
    auto - for classes that set the margin to auto

(You can add more sizes by adding entries to the $spacers Sass map variable.)

### Display Property

-   Hiding elements: `d-none`
-   display inline: `d-inline`

### Overflow

-   auto: `overflow-auto`
-   `overflow-hidden`
-   `overflow-visible`
-   `overflow-scroll`

### Position

## Shadow

## Tables

### Responsive tables
```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-sm">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-md">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-lg">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-xl">
  <table class="table">
    ...
  </table>
</div>

<div class="table-responsive-xxl">
  <table class="table">
    ...
  </table>
</div>
```

## Alerts

