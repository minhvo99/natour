# SSR Network Debugging Guide

## Problem Description

When using Angular with Server-Side Rendering (SSR), API requests made during initial page load **will NOT appear in the browser's Network tab**. This is because:

1. **SSR Pre-renders the page** on the server
2. **API calls are made server-side** during pre-rendering
3. **Data is embedded in the HTML** sent to the browser
4. **Browser never makes the initial API calls** itself

## Understanding the Flow

### SSR Flow (Initial Page Load)

```
1. User requests page → Server
2. Server runs Angular app → Makes API calls
3. Server pre-renders HTML with data → Sends to browser
4. Browser receives complete HTML → No API calls needed
```

### CSR Flow (Client-Side Navigation)

```
1. User navigates within app → Browser
2. Browser runs Angular app → Makes API calls
3. Browser displays data → API calls visible in Network tab
```

## How to Debug

### 1. Check Console Logs

Our enhanced `TourService` and `HomeComponent` now log where requests are made:

```typescript
// Look for these logs in browser console:
🔗 [SERVER] TourService.getTourCheap() - Making request to: /api/tour/top-5-cheap
🖥️ This request is made server-side (SSR) - will NOT appear in Browser Network tab
```

### 2. Use Network Debug Component

We've added a debug component that makes client-side requests:

1. Scroll to bottom of home page
2. Click "Test Get Tours (Client-side)"
3. Check Browser DevTools → Network tab
4. You should see the API request appear

### 3. Check Platform Detection

Look for platform logs in console:

```typescript
🏠 [SERVER] HomeComponent.ngOnInit() - Starting to load tours
🏠 [BROWSER] HomeComponent.ngOnInit() - Starting to load tours
```

## Configuration Files

### angular.json

```json
"ssr": {
  "entry": "server.ts"
},
"prerender": true
```

### proxy.conf.json

```json
{
  "/api/**": {
    "target": "http://localhost:8080",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug",
    "pathRewrite": {
      "^/api": "/api/v1"
    }
  }
}
```

## Expected Behavior

### ✅ What You SHOULD See

- Console logs showing server-side API calls
- Data appearing on page after SSR
- Client-side API calls (from debug component) in Network tab
- Platform detection logs showing both SERVER and BROWSER execution

### ❌ What You WON'T See

- Initial page load API calls in Network tab
- Proxy logs in browser console (they're in server logs)

## Verification Steps

1. **Server-Side Logs**: Check terminal where `npm start` is running for proxy logs
2. **Browser Console**: Check for platform and API call logs
3. **Network Tab**: Should be empty for initial load, but show debug requests
4. **Page Content**: Tours should display (data came from SSR)

## Common Misconceptions

❌ **"API calls aren't working"** - They are working, just server-side
❌ **"Proxy isn't working"** - It works server-side during SSR
❌ **"No network requests means no data"** - Data comes embedded in HTML

## Development vs Production

### Development (ng serve --ssr)

- SSR + hydration
- Initial API calls server-side
- Subsequent navigation client-side

### Production Build

- Pre-rendered static pages
- Even fewer client-side API calls
- Faster initial page loads

## Debugging Commands

```bash
# Run with SSR (current setup)
npm start

# Run without SSR (for comparison)
ng serve

# Check server logs
# Look for proxy logs in terminal where npm start runs
```

## Key Takeaways

1. **SSR is working correctly** when you don't see initial API calls in Network tab
2. **Data on page proves** API calls succeeded server-side
3. **Use debug component** to test client-side requests
4. **Check console logs** for platform detection and API call tracing
5. **Server logs** contain proxy request information
