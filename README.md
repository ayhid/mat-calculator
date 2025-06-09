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

