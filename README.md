# 🖼️ Mat Calculator | Professional Photo Framing Tool

> **Professional mat calculator for photo framing**  
> Modern interface, precise calculations, 5 calculation styles, real-time visual preview

[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge)](https://mat-calculator-app.vercel.app)
[![GitHub](https://img.shields.io/github/license/username/mat-calculator-app?style=for-the-badge)](LICENSE)
[![Made with](https://img.shields.io/badge/Made%20with-Next.js%20%2B%20Tailwind-blue?style=for-the-badge)](https://nextjs.org/)

## ✨ Features

### 🎯 Professional Calculations
- **5 calculation styles**: Proportional, Uniform, Talon, Panoramic, Portrait
- **Precise calculations** to the tenth of a centimeter
- **Expert recommendations** for optimal framing
- **Error handling** with input validation

### 🎨 Modern Interface
- **Glassmorphism design** with transparency effects
- **Full English interface**
- **Responsive design** for mobile/desktop
- **Smooth animations** and CSS transitions

### 📐 Visual Preview
- **Real-time preview** of results
- **Dimension annotations** on preview
- **Accurate representation** of frame and mat
- **Adaptive scaling** based on size

### 🚀 User Experience
- **Auto-calculation** on input change
- **Keyboard shortcuts** (Ctrl+Enter, Escape)
- **Preset dimensions** for common formats
- **State persistence** with localStorage

## 🛠️ Technologies

- **[Next.js 14](https://nextjs.org/)** - React framework with SSG support
- **[React 18](https://reactjs.org/)** - Modern React with hooks
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[PostCSS](https://postcss.org/)** - CSS transformations

## 📦 Installation

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn**

### Local Installation

```bash
# Clone the repository
git clone https://github.com/username/mat-calculator-app.git
cd mat-calculator-app

# Install dependencies
npm install

# Run in development mode
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Export static files
npm run export

# Lint code
npm run lint
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Automatic Deployment
1. Push code to GitHub
2. Connect repository on [vercel.com](https://vercel.com)
3. Deployment happens automatically

#### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Deploy to Netlify

```bash
# Build for production
npm run build
npm run export

# Deploy the 'out' folder to Netlify
# Or connect GitHub repository directly
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"scripts": {
  "deploy": "npm run build && npm run export && gh-pages -d out"
}

# Deploy
npm run deploy
```

## 📁 Project Structure

```
mat-calculator-app/
├── 📁 app/
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page (App Router)
├── 📁 components/
│   ├── MatCalculator.tsx  # Main calculator component
│   ├── MatPreview.tsx     # Visual preview component
│   └── ResultsDisplay.tsx # Results display component
├── 📁 lib/
│   └── calculator.ts      # Calculation logic (TypeScript)
├── 📁 styles/
│   └── globals.css        # Global styles with Tailwind
├── 📄 next.config.js        # Next.js configuration
├── 📄 tsconfig.json         # TypeScript configuration
├── 📄 package.json          # Dependencies and scripts
├── 📄 tailwind.config.js    # Tailwind configuration
├── 📄 postcss.config.js     # PostCSS configuration
├── 📄 vercel.json           # Vercel deployment config
├── 📄 .gitignore           # Git ignore rules
└── 📄 README.md            # Documentation
```

## 🎯 Usage

### Main Interface
1. **Enter frame dimensions** (width × height in cm)
2. **Enter photo dimensions** (width × height in cm)
3. **Choose calculation style** from dropdown
4. **Click "Calculate"** or use Ctrl+Enter

### Available Calculation Styles

| Style | Description |
|-------|-------------|
| **Proportional** | Equal margins on all sides |
| **Uniform** | Average distribution of available space |
| **Talon** | Larger bottom margin (classic style) |
| **Panoramic** | Reduced horizontal margins |
| **Portrait** | Reduced vertical margins |

### Keyboard Shortcuts
- `Ctrl + Enter` : Calculate
- `Escape` : Reset

### Quick Presets
- **Photo 10×15** : Frame 20×25, Photo 10×15
- **Photo 13×18** : Frame 23×28, Photo 13×18
- **Photo 20×30** : Frame 30×40, Photo 20×30
- **A4 Frame** : Frame 21×29.7, Photo 15×20

## 🎨 Customization

### Colors
Modify colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Main color
    600: '#0284c7',
    // ...
  }
}
```

### Calculation Styles
Add new styles in `lib/calculator.js`:

```javascript
// Add a new calculation method
calculateCustom(availableWidth, availableHeight) {
  // Custom calculation logic
  return {
    top: /* value */,
    right: /* value */,
    bottom: /* value */,
    left: /* value */
  };
}
```

### Component Styling
Modify component styles in `styles/globals.css` or create new Tailwind classes.

## 🐛 Troubleshooting

### Common Issues

**Build Error**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

**Styling Issues**
```bash
# Check Tailwind configuration
npx tailwindcss -i ./styles/globals.css -o ./styles/output.css --watch
```

**Module Not Found**
- Check imports in component files
- Ensure file paths are correct
- Verify Next.js file-based routing

**Deployment Issues**
- Check `next.config.js` for export settings
- Ensure all dependencies are in `package.json`
- Verify build process completes successfully

## 🤝 Contributing

1. **Fork** the project
2. Create a **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

### Development Guidelines
- Use **English** for all code and comments
- Follow **React** and **Next.js** best practices
- Test on **mobile and desktop**
- Maintain **existing code style**
- Add **JSDoc comments** for functions

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Next.js](https://nextjs.org/)** for the excellent React framework
- **[Tailwind CSS](https://tailwindcss.com/)** for the utility-first CSS framework
- **[Lucide](https://lucide.dev/)** for beautiful icons
- **The framing community** for feedback and suggestions

## 📞 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/username/mat-calculator-app/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/username/mat-calculator-app/discussions)
- 📧 **Email**: support@mat-calculator-app.com

## 📈 Roadmap

- [ ] **Print functionality** for calculations
- [ ] **Save/load projects** feature
- [ ] **Multiple mat layers** support
- [ ] **Imperial units** (inches) support
- [ ] **PWA capabilities** for offline use
- [ ] **API integration** for frame suppliers

---

<div align="center">
  <strong>Made with ❤️ for professional framers worldwide</strong>
</div>

