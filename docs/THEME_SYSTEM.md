# Theme System Documentation

## Overview

The Natours application includes a comprehensive theme system that supports light and dark themes with automatic persistence using localStorage.

## Theme Configuration

### Available Themes

#### Light Theme (Default)

```typescript
{
  background: '#fffffe',
  headline: '#272343',
  paragraph: '#2d334a',
  button: '#ffd803',
  buttonText: '#272343',
  stroke: '#272343',
  main: '#fffffe',
  highlight: '#ffd803',
  secondary: '#e3f6f5',
  tertiary: '#bae8e8'
}
```

#### Dark Theme

```typescript
{
  background: '#16161a',
  headline: '#fffffe',
  paragraph: '#94a1b2',
  button: '#7f5af0',
  buttonText: '#fffffe',
  stroke: '#010101',
  main: '#fffffe',
  highlight: '#7f5af0',
  secondary: '#72757e',
  tertiary: '#2cb67d'
}
```

## Implementation

### Theme Service

Located at: `src/app/core/services/theme.service.ts`

Key features:

- ✅ SSR Compatible (uses PLATFORM_ID injection)
- ✅ LocalStorage persistence
- ✅ CSS Custom Properties integration
- ✅ Observable pattern for reactivity
- ✅ Type-safe theme definitions

### Usage in Components

```typescript
import { ThemeService } from '../core/services/theme.service';

constructor(private themeService: ThemeService) {}

// Subscribe to theme changes
this.themeService.currentTheme$.subscribe(theme => {
  console.log('Current theme:', theme);
});

// Toggle theme
this.themeService.toggleTheme();

// Set specific theme
this.themeService.setTheme('dark');
```

### Theme Toggle Component

Located at: `src/app/shared/components/theme-toggle/`

Features:

- ✅ Visual switch UI with sun/moon icons
- ✅ Accessibility support (ARIA labels, focus states)
- ✅ Smooth transitions
- ✅ Auto-updates on theme change

## Tailwind Integration

### Dynamic Colors

The Tailwind config has been updated to use CSS custom properties:

```javascript
colors: {
  background: "var(--color-background)",
  headline: "var(--color-headline)",
  paragraph: "var(--color-paragraph)",
  button: "var(--color-button)",
  "button-text": "var(--color-button-text)",
  // ... etc
}
```

### Usage in Templates

```html
<div class="bg-background text-headline">
  <p class="text-paragraph">Content</p>
  <button class="bg-button text-button-text">Click me</button>
</div>
```

## CSS Custom Properties

### Global Variables

Defined in `src/styles.css`:

```css
:root {
  --color-background: #fffffe;
  --color-headline: #272343;
  /* ... */
}

.theme-dark {
  --color-background: #16161a;
  --color-headline: #fffffe;
  /* ... */
}
```

## Theme Toggle Location

### Header Component

The theme toggle is integrated into the header component at:

- **Desktop**: Right side of navigation bar
- **Mobile**: Mobile menu with label

## Features

### ✅ Automatic Persistence

- Themes are automatically saved to localStorage
- On app reload, the last selected theme is restored

### ✅ SSR Compatibility

- Uses Angular's PLATFORM_ID to detect browser environment
- Gracefully falls back to default theme during SSR

### ✅ Smooth Transitions

- All color changes have CSS transitions
- Body element gets transition classes for smooth switching

### ✅ Accessibility

- Theme toggle has proper ARIA labels
- Focus states are maintained across themes
- Color contrast ratios meet accessibility standards

## Adding New Themes

1. **Define Theme Object**:

```typescript
newTheme: {
  name: 'new-theme',
  displayName: 'New Theme',
  properties: {
    background: '#color',
    headline: '#color',
    // ... other properties
  }
}
```

2. **Add to ThemeService**:

```typescript
readonly themes: Record<string, Theme> = {
  light: { /* ... */ },
  dark: { /* ... */ },
  newTheme: { /* ... */ }
};
```

3. **Add CSS Class** (optional):

```css
.theme-new-theme {
  --color-background: #color;
  --color-headline: #color;
  /* ... */
}
```

## Best Practices

1. **Use Tailwind Classes**: Always use the dynamic color classes (e.g., `bg-background`) instead of hardcoded colors
2. **Test Both Themes**: Ensure components work well in both light and dark themes
3. **Maintain Contrast**: Ensure sufficient color contrast for accessibility
4. **Consistent Naming**: Follow the established naming convention for color properties

## Testing

To test the theme system:

1. Start the development server: `npm start`
2. Navigate to any page
3. Use the theme toggle in the header
4. Verify colors change smoothly
5. Reload the page to test persistence
6. Test on mobile devices

## Troubleshooting

### Theme not persisting

- Check browser localStorage
- Ensure ThemeService is properly injected
- Verify PLATFORM_ID is correctly configured

### Colors not updating

- Check if CSS custom properties are properly defined
- Verify Tailwind config includes dynamic colors
- Ensure components use correct class names

### SSR issues

- Make sure all localStorage access is wrapped in browser checks
- Verify PLATFORM_ID injection is working
