# ngx-aurora

`@omnedia/ngx-aurora` is an Angular library that creates a mesmerizing aurora background effect. This component provides an animated, gradient-based light effect with customizable inversion and two different animation styles. It's a perfect addition for enhancing the visual aesthetics of your Angular application.

## Features

- Animated aurora light effect with customizable inversion.
- Supports two distinct animation styles.
- Easy to integrate as a standalone component.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-aurora
```

## Usage

Import the `NgxAuroraComponent` in your Angular module or component:

```typescript
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';

@Component({
  ...
  imports: [
    ...
    NgxAuroraComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-aurora [invert]="true" [versionTwo]="false" styleClass="custom-aurora">
  <h1>Your Content Here</h1>
</om-aurora>
```

## How It Works

- Inversion and Animation Versions: The aurora effect can be inverted by using the invert input, and a different animation style can be applied using the versionTwo input.
- Global and Custom Styling: The .om-aurora container can be styled globally or with a custom styleClass. The component automatically applies the aurora background effect to its container, while maintaining the flexibility to style the container as needed.

## API

```html
<om-aurora
  [invert]="invert"
  [versionTwo]="versionTwo"
  styleClass="your-custom-class"
>
  <ng-content></ng-content>
</om-aurora>
```

- `invert` (optional): A boolean to toggle the inversion of the aurora effect. When true, the aurora colors are inverted. Defaults to false.
- `versionTwo` (optional): A boolean to toggle the second version of the aurora animation. When true, a different set of gradients is applied. Defaults to false.
- `styleClass` (optional): A custom CSS class to apply to the .om-aurora container for additional styling.

## Example

```html
<om-aurora [invert]="false" [versionTwo]="true" styleClass="custom-aurora-style">
  <div class="inner-content">
    <h2>Welcome to the Aurora Experience</h2>
  </div>
</om-aurora>
```

This will create an aurora background with the second version of the animation and no inversion.

## Styling
`.om-aurora`

- This is the main container for the aurora effect. You can apply global or custom styles using the styleClass input. The .om-aurora class manages the overall background, ensuring that the effect covers the entire container.

### Example of Global and Custom Styling

In this example, the aurora container is customized with additional padding and background color:

```html
<om-aurora styleClass="custom-aurora-background">
    <div class="inner-content">
        <h2>Aurora Background with Custom Styling</h2>
    </div>
</om-aurora>
```

```css
.custom-aurora-background {
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 10px;
}

.inner-content {
  text-align: center;
  color: white;
}
```

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.