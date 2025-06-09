# 🖼️ Mat Calculator | Professional Photo Framing Tool

> **Professional mat calculator for photo framing**  
> Modern interface, precise calculations, 5 calculation styles, real-time visual preview

[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge)](https://mat-calculator-app.vercel.app)
[![GitHub](https://img.shields.io/github/license/username/mat-calculator-app?style=for-the-badge)](LICENSE)
[![Made with](https://img.shields.io/badge/Made%20with-Next.js%2015%20%2B%20Tailwind-blue?style=for-the-badge)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v22-green?style=for-the-badge)](https://nodejs.org/)

## ✨ Features

### 🎯 Professional Calculations
- **5 calculation styles**: Proportional, Uniform, Talon, Panoramic, Portrait
- **Millimeter precision** for professional accuracy
- **Expert recommendations** for optimal framing
- **Error handling** with comprehensive input validation

### 🎨 Modern Interface
- **Clean, professional design** with clear visual boundaries
- **Constrained layout** for better focus and readability
- **Built-in Tailwind classes** for consistent styling
- **Full English interface** with improved accessibility
- **Responsive design** optimized for mobile and desktop
- **Smooth animations** with native CSS transitions

### 📐 Visual Preview
- **Real-time preview** of frame and mat calculations
- **Dimension annotations** with precise measurements
- **Accurate representation** of proportions
- **Adaptive scaling** based on actual dimensions

### 🚀 User Experience
- **Auto-calculation** with debounced input changes
- **Keyboard shortcuts** (Ctrl+Enter, Escape)
- **Quick preset dimensions** for common photo formats
- **Clear section separation** with bordered containers
- **Enhanced focus states** for better accessibility

## 🛠️ Technologies

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - Modern React with latest features
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[next/font/google](https://nextjs.org/docs/pages/api-reference/components/font)** - Self-hosted Google Fonts
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[TypeScript 5+](https://www.typescriptlang.org/)** - Type-safe development

## 📦 Installation

### Prerequisites
- **Node.js** v22+ ([Download](https://nodejs.org/))
- **npm** or **yarn**

### Local Installation

```bash
# Clone the repository
git clone https://github.com/username/mat-calculator-app.git
cd mat-calculator-app

# Use Node.js v22 (with nvm)
nvm use

# Install dependencies
npm install

# Run in development mode with Turbopack
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development with hot reload and Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Automatic Deployment
1. Push code to GitHub
2. Connect repository on [vercel.com](https://vercel.com)
3. Deployment happens automatically with Node.js v22

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

# Deploy with static export
# Netlify will automatically detect the build settings
```

### Environment Setup
Ensure your deployment platform supports:
- **Node.js v22**
- **Static export** configuration
- **Tailwind CSS v4** build process

## 📁 Project Structure

```
mat-calculator-app/
├── 📁 app/
│   ├── layout.tsx         # Root layout with Inter font
│   └── page.tsx           # Home page (App Router)
├── 📁 components/
│   ├── MatCalculator.tsx  # Main calculator with modern UI
│   ├── MatPreview.tsx     # Visual preview component
│   └── ResultsDisplay.tsx # Results display component
├── 📁 docs/
│   └── CALCULATION_METHODS.md # Detailed calculation documentation
├── 📁 lib/
│   └── calculator.ts      # Calculation logic (TypeScript)
├── 📁 styles/
│   └── globals.css        # Minimal global styles
├── 📄 .nvmrc              # Node.js version specification
├── 📄 next.config.js      # Next.js configuration
├── 📄 tsconfig.json       # TypeScript configuration
├── 📄 package.json        # Dependencies and scripts
├── 📄 tailwind.config.js  # Tailwind v4 configuration
├── 📄 .gitignore          # Git ignore rules
└── 📄 README.md           # Documentation
```

## 🎯 Usage

### Main Interface
1. **Enter frame dimensions** (width × height in **mm**)
2. **Enter photo dimensions** (width × height in **mm**)
3. **Choose calculation style** from dropdown
4. **Results appear automatically** with visual preview

### Available Calculation Styles

| Style | Description |
|-------|-------------|
| **Proportional** | Equal margins on all sides |
| **Uniform** | Average distribution of available space |
| **Talon** | Larger bottom margin (classic style) |
| **Panoramic** | Reduced horizontal margins for wide photos |
| **Portrait** | Reduced vertical margins for tall photos |

> 📚 **Detailed Documentation**: See [Calculation Methods Guide](docs/CALCULATION_METHODS.md) for comprehensive formulas, examples, and best practices.

### Keyboard Shortcuts
- `Ctrl + Enter` : Force calculate
- `Escape` : Reset all fields

### Quick Presets (in millimeters)
- **Photo 10×15** : Frame 200×250mm, Photo 100×150mm
- **Photo 13×18** : Frame 230×280mm, Photo 130×180mm
- **Photo 20×30** : Frame 300×400mm, Photo 200×300mm
- **A4 Frame** : Frame 210×297mm, Photo 150×200mm

## 🎨 Customization

### Design System
The app uses a clean, professional design with:
- **White backgrounds** with subtle borders
- **Clear visual hierarchy** with proper spacing
- **Color-coded sections** (blue for frame, green for photo, purple for style)
- **Consistent button styling** with hover effects

### Tailwind Configuration
Modify the design in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Custom color palette
        }
      }
    }
  }
}
```

### Adding New Calculation Styles
Extend the calculator in `lib/calculator.ts`:

```typescript
calculateCustomStyle(frame: Dimensions, photo: Dimensions): MatDimensions {
  // Custom calculation logic
  return {
    top: number,
    right: number,
    bottom: number,
    left: number
  };
}
```

## 🔧 Development

### Node.js Version Management
This project uses Node.js v22. Use the `.nvmrc` file:

```bash
# Install and use correct Node version
nvm install
nvm use
```

### CSS Architecture
- **Minimal global styles** in `globals.css`
- **Built-in Tailwind classes** for all components
- **No custom CSS utilities** for better maintainability
- **Self-hosted fonts** via `next/font/google`

### Component Guidelines
- Use **semantic HTML** with proper accessibility
- Implement **clear visual boundaries** between sections
- Follow **consistent spacing** with Tailwind utilities
- Ensure **responsive design** across all screen sizes

## 🐛 Troubleshooting

### Common Issues

**Node Version Mismatch**
```bash
# Ensure you're using Node.js v22
node --version
nvm use  # If using nvm
```

**Build Error**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

**Tailwind Styles Not Working**
- Verify Tailwind v4 configuration
- Check that class names are correctly spelled
- Ensure no conflicting CSS

**Font Loading Issues**
- Verify `next/font/google` import in `app/layout.tsx`
- Check that fonts are properly applied to `<body>`

## 🤝 Contributing

1. **Fork** the project
2. Create a **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

### Development Guidelines
- Use **Node.js v22** as specified in `.nvmrc`
- Follow **TypeScript best practices**
- Use **built-in Tailwind classes** only
- Test on **mobile and desktop** devices
- Maintain **accessibility standards**
- Add **proper TypeScript types** for new features

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Next.js](https://nextjs.org/)** for the excellent React framework
- **[Tailwind CSS](https://tailwindcss.com/)** for the utility-first approach
- **[Vercel](https://vercel.com/)** for seamless deployment
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
- [ ] **Imperial units** (inches) support alongside metric
- [ ] **PWA capabilities** for offline use
- [ ] **Semantic release** automation
- [ ] **API integration** for frame suppliers
- [ ] **Advanced calculations** for complex frames

## 🆕 Recent Updates

### v2.0.0 - Modern Redesign
- ✅ **Millimeter precision** - Changed from cm to mm for professional accuracy
- ✅ **Modern UI design** - Clean, professional interface with clear boundaries
- ✅ **Node.js v22 support** - Latest LTS with performance improvements
- ✅ **Tailwind CSS v4** - Updated to latest version with built-in classes only
- ✅ **Enhanced accessibility** - Better focus states and semantic markup
- ✅ **Self-hosted fonts** - Optimized font loading with next/font/google
- ✅ **Improved responsiveness** - Better mobile and tablet experience

---

<div align="center">
  <strong>Made with ❤️ for professional framers worldwide</strong>
</div>

