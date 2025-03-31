# CapitalBulls  Website

A premium website for CapitalBulls , South Africa's only LIVE trading community with 4700+ members. This website is designed to match their bold Instagram aesthetic.

## Features

- Bold, dark theme with high-contrast typography
- Responsive design optimized for all devices
- Interactive Instagram gallery with category filtering
- Testimonials slider
- Mobile-friendly navigation
- Sales-oriented copy that converts visitors to members
- Pricing section showcasing membership options
- Animated sections and interactive elements

## Project Structure

```
CapitalBulls/
├── index.html           # Main HTML file
├── styles.css           # CSS styling
├── script.js            # JavaScript functionality
└── images/              # Image assets
    ├── logo.png
    ├── favicon.ico
    ├── hero-bg.jpg
    ├── broker-phones.jpg
    └── gallery1.jpg - gallery6.jpg
```

## Design

The website follows the CapitalBulls  Instagram aesthetic:
- Dark backgrounds with bold typography
- High contrast colors
- Gold accents for important elements
- Direct, confident messaging
- Clean and modern layout

## Setup and Running

### Prerequisites

- A modern web browser
- [http-server](https://www.npmjs.com/package/http-server) or any static file server

### Running with http-server

1. Install http-server globally (if not already installed):
   ```
   npm install -g http-server
   ```

2. Navigate to the project directory:
   ```
   cd path/to/CapitalBulls
   ```

3. Start the server:
   ```
   http-server
   ```

4. Open your browser and visit:
   ```
   http://localhost:8080
   ```

## Adding Images

The website requires the following images in the `images/` directory:

1. **logo.png**: The CapitalBulls  logo (approximately 200px wide)
2. **favicon.ico**: Site icon for browser tabs (32x32px or 64x64px)
3. **hero-bg.jpg**: A high-resolution background image with dark overlay (at least 1920x1080px)
4. **broker-phones.jpg**: Image showing the "your broker blocked us" message on phones
5. **gallery1.jpg through gallery6.jpg**: Square format images for the Instagram gallery:
   - `gallery1.jpg` & `gallery4.jpg` - Trading results/chart screenshots (category: results)
   - `gallery2.jpg` & `gallery5.jpg` - Educational content/quotes (category: education)
   - `gallery3.jpg` & `gallery6.jpg` - Motivational content (category: motivation)

### Sourcing Images from Instagram

To save images from CapitalBulls 's Instagram:
1. Navigate to the [CapitalBulls  Instagram profile](https://www.instagram.com/capitalbulls_za/)
2. Find images that match the needed categories (results, education, motivation)
3. Right-click on desired images and select "Save image as..."
4. Save them to the `images/` directory with the appropriate filenames

## Key Sections

1. **Hero Section**: Bold headline "Profits Wait for No One. Neither Do We." with call-to-action buttons
2. **Features Section**: Highlights the benefits of joining the community
3. **Broker Section**: Addresses the "broker blocked" issue with a solution
4. **Community Section**: Displays community size and multilingual support
5. **Gallery Section**: Showcases Instagram content with category filtering
6. **Pricing Section**: Clear pricing options for membership
7. **Testimonials**: Social proof from community members
8. **Links Section**: Quick access to important resources
9. **Call-to-Action**: Final encouragement to join

## Customization

### Social Media Links

Update social media links in the HTML file:

```html
<!-- In index.html -->
<div class="social-links">
    <a href="https://discord.gg/your-invite-link" class="social-link discord">
        <i class="fab fa-discord"></i>
        <span>Discord</span>
    </a>
    <!-- Other social links -->
</div>
```

### Pricing Information

Update pricing and feature information in the pricing section:

```html
<!-- In index.html -->
<div class="pricing-amount">
    <span class="price">R1250</span>
    <span class="period">/ week</span>
</div>
```

### Gallery Categories

Modify the Instagram gallery categories and images in script.js:

```javascript
// In script.js
const galleryImages = [
    {
        url: 'images/gallery1.jpg',
        link: 'https://www.instagram.com/capitalbulls_za/',
        category: 'results'
    },
    // Other gallery images
];
```

## License

All rights reserved. This site is proprietary to CapitalBulls .

## Disclaimer

Trading CFDs is highly risky and requires skill. Past performance is not indicative of future results. You trade at your own risk. CapitalBulls  is not a financial advisor, and all information provided is for educational purposes only. 