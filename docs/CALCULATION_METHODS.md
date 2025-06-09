# 📐 Mat Calculator - Calculation Methods Documentation

> **Comprehensive guide to professional mat cutting calculations**  
> Understanding the mathematical formulas and use cases for each calculation style

## 📚 Table of Contents

- [Overview](#-overview)
- [Core Principles](#-core-principles)
- [Calculation Methods](#-calculation-methods)
  - [1. Proportional](#1-proportional)
  - [2. Uniform](#2-uniform)
  - [3. Talon](#3-talon)
  - [4. Panoramic](#4-panoramic)
  - [5. Portrait](#5-portrait)
- [Mathematical Formulas](#-mathematical-formulas)
- [Examples & Use Cases](#-examples--use-cases)
- [Recommendations System](#-recommendations-system)
- [Best Practices](#-best-practices)

## 🎯 Overview

The Mat Calculator implements five distinct calculation methods for determining optimal mat dimensions in photo framing. Each method serves specific aesthetic and practical purposes, following established framing industry standards.

### Key Concepts
- **Frame Interior**: The interior dimensions of the frame opening (where mat and photo fit)
- **Photo**: The actual photo dimensions
- **Mat**: The matboard border around the photo
- **Available Space**: Interior frame dimensions minus photo dimensions

> ⚠️ **Important**: Frame dimensions refer to **interior measurements** only (the opening inside the frame where the mat and photo will sit), not the exterior frame dimensions.

## 🏗️ Core Principles

### Input Validation
```typescript
// All dimensions must be positive numbers
frameInteriorWidth > 0 && frameInteriorHeight > 0
photoWidth > 0 && photoHeight > 0

// Photo must fit within frame interior
photoWidth < frameInteriorWidth && photoHeight < frameInteriorHeight
```

### Available Space Calculation
```typescript
availableWidth = frameInteriorWidth - photoWidth
availableHeight = frameInteriorHeight - photoHeight
```

### Mathematical Guarantees
```typescript
// If photo fits in frame interior, calculations will always produce valid margins
// All calculation methods ensure margins stay within available space
availableWidth = frameInteriorWidth - photoWidth
availableHeight = frameInteriorHeight - photoHeight

// Margins are calculated as fractions/portions of available space
// Therefore: margins will never exceed frame interior dimensions
```

### Units
- **Primary Unit**: Millimeters (mm)
- **Precision**: Rounded to 1 decimal place
- **Professional Standard**: Industry-standard measurements

## 🔢 Calculation Methods

### 1. Proportional
> **Perfect symmetry with equal margins on all sides**

#### Formula
```typescript
margin = Math.min(availableWidth, availableHeight) / 2

result = {
  top: margin,
  right: margin,
  bottom: margin,
  left: margin
}
```

#### Characteristics
- **Equal margins** on all four sides
- **Symmetrical appearance** regardless of photo orientation
- **Conservative approach** using the smaller available dimension
- **Safe choice** for most applications

#### Use Cases
- ✅ Standard photo frames
- ✅ Certificates and documents
- ✅ When symmetry is paramount
- ✅ Beginner framing projects

#### Example
```
Frame: 300×400mm, Photo: 200×300mm
Available: 100×100mm

Calculation: margin = min(100, 100) / 2 = 50mm

Result: 50mm on all sides
```

---

### 2. Uniform
> **Equal distribution of all available space**

#### Formula
```typescript
horizontalMargin = availableWidth / 2
verticalMargin = availableHeight / 2
avgMargin = (horizontalMargin + verticalMargin) / 2

result = {
  top: avgMargin,
  right: avgMargin,
  bottom: avgMargin,
  left: avgMargin
}
```

#### Characteristics
- **Utilizes all available space** efficiently
- **Equal margins** calculated from average
- **Balanced appearance** with maximum space usage
- **Optimal for** rectangular frames with non-square photos

#### Use Cases
- ✅ Maximum mat exposure desired
- ✅ Non-square photo in rectangular frame
- ✅ When you want to use all available space
- ✅ Modern, clean aesthetic

#### Example
```
Frame: 300×500mm, Photo: 200×300mm
Available: 100×200mm

Horizontal: 100/2 = 50mm
Vertical: 200/2 = 100mm
Average: (50 + 100) / 2 = 75mm

Result: 75mm on all sides
```

---

### 3. Talon
> **Classic fine arts style with larger bottom margin**

#### Formula
```typescript
horizontalMargin = availableWidth / 2
topMargin = availableHeight × 0.4
bottomMargin = availableHeight × 0.6

result = {
  top: topMargin,
  right: horizontalMargin,
  bottom: bottomMargin,
  left: horizontalMargin
}
```

#### Characteristics
- **Larger bottom margin** (60% of available height)
- **Smaller top margin** (40% of available height)
- **Equal horizontal margins**
- **Classical proportions** following fine arts tradition

#### Use Cases
- ✅ Fine art prints
- ✅ Classical paintings
- ✅ Formal presentations
- ✅ Traditional aesthetic preference
- ✅ Museum-quality framing

#### Example
```
Frame: 300×400mm, Photo: 200×250mm
Available: 100×150mm

Horizontal: 100/2 = 50mm
Top: 150 × 0.4 = 60mm
Bottom: 150 × 0.6 = 90mm

Result: Top 60mm, Sides 50mm, Bottom 90mm
```

---

### 4. Panoramic
> **Optimized for wide, landscape-oriented photos**

#### Formula
```typescript
horizontalMargin = availableWidth × 0.3
verticalMargin = availableHeight / 2

result = {
  top: verticalMargin,
  right: horizontalMargin,
  bottom: verticalMargin,
  left: horizontalMargin
}
```

#### Characteristics
- **Reduced horizontal margins** (30% of available width)
- **Standard vertical margins** (50% of available height)
- **Emphasizes width** of the photo
- **Ideal for landscape photos**

#### Use Cases
- ✅ Panoramic photographs
- ✅ Landscape artwork
- ✅ Wide format prints
- ✅ Horizontal compositions
- ✅ Modern architectural photography

#### Example
```
Frame: 400×300mm, Photo: 300×200mm
Available: 100×100mm

Horizontal: 100 × 0.3 = 30mm
Vertical: 100 / 2 = 50mm

Result: Top/Bottom 50mm, Sides 30mm
```

---

### 5. Portrait
> **Optimized for tall, portrait-oriented photos**

#### Formula
```typescript
horizontalMargin = availableWidth / 2
verticalMargin = availableHeight × 0.3

result = {
  top: verticalMargin,
  right: horizontalMargin,
  bottom: verticalMargin,
  left: horizontalMargin
}
```

#### Characteristics
- **Reduced vertical margins** (30% of available height)
- **Standard horizontal margins** (50% of available width)
- **Emphasizes height** of the photo
- **Ideal for portrait photos**

#### Use Cases
- ✅ Portrait photographs
- ✅ Tall artwork
- ✅ Vertical compositions
- ✅ People photography
- ✅ Fashion photography

#### Example
```
Frame: 300×400mm, Photo: 200×300mm
Available: 100×100mm

Horizontal: 100 / 2 = 50mm
Vertical: 100 × 0.3 = 30mm

Result: Top/Bottom 30mm, Sides 50mm
```

## 📊 Mathematical Formulas

### Quick Reference Table

| Method | Top | Right | Bottom | Left |
|--------|-----|-------|--------|------|
| **Proportional** | `min(W,H)/2` | `min(W,H)/2` | `min(W,H)/2` | `min(W,H)/2` |
| **Uniform** | `avg` | `avg` | `avg` | `avg` |
| **Talon** | `H×0.4` | `W/2` | `H×0.6` | `W/2` |
| **Panoramic** | `H/2` | `W×0.3` | `H/2` | `W×0.3` |
| **Portrait** | `H×0.3` | `W/2` | `H×0.3` | `W/2` |

Where:
- `W` = Available Width
- `H` = Available Height  
- `avg` = (W/2 + H/2) / 2

### Comparison Example
**Input**: Frame 400×300mm, Photo 200×150mm  
**Available Space**: 200×150mm

| Method | Top | Right | Bottom | Left | Total Mat |
|--------|-----|-------|--------|------|-----------|
| Proportional | 75mm | 75mm | 75mm | 75mm | 300mm |
| Uniform | 87.5mm | 87.5mm | 87.5mm | 87.5mm | 350mm |
| Talon | 60mm | 100mm | 90mm | 100mm | 350mm |
| Panoramic | 75mm | 60mm | 75mm | 60mm | 270mm |
| Portrait | 45mm | 100mm | 45mm | 100mm | 290mm |

## 🎨 Examples & Use Cases

### Standard Photo Frame (200×300mm photo in 300×400mm frame)

#### Available Space: 100×100mm

**Proportional**: Perfect for balanced, symmetrical presentation
```
Result: 50mm all around
Best for: Family photos, standard prints
```

**Uniform**: Maximum mat exposure while maintaining balance
```
Result: 50mm all around (same as proportional in this case)
Best for: When proportional and uniform yield same result
```

**Talon**: Classical fine arts presentation
```
Result: Top 40mm, Sides 50mm, Bottom 60mm
Best for: Artwork, formal portraits
```

**Panoramic**: Not ideal for this ratio
```
Result: Top/Bottom 50mm, Sides 30mm
Best for: When you want minimal side margins
```

**Portrait**: Enhanced vertical emphasis
```
Result: Top/Bottom 30mm, Sides 50mm
Best for: Portrait photos, vertical artwork
```

### Landscape Photo (300×200mm photo in 400×300mm frame)

#### Available Space: 100×100mm

**Panoramic**: Optimal choice
```
Result: Top/Bottom 50mm, Sides 30mm
Perfect for: Landscape photography, wide scenes
```

### Portrait Photo (150×250mm photo in 250×400mm frame)

#### Available Space: 100×150mm

**Portrait**: Optimal choice
```
Result: Top/Bottom 45mm, Sides 50mm
Perfect for: People photography, vertical compositions
```

## 🎯 Recommendations System

The calculator provides intelligent recommendations based on:

### Margin Size Analysis
```typescript
if (avgMargin < 20mm) {
  "⚠️ Very small margins - consider a larger frame"
}
if (avgMargin > 100mm) {
  "💡 Generous margins - perfect for showcasing the photo"
}
```

### Style-Specific Feedback
```typescript
if (style === 'talon' && bottom > top) {
  "✨ Talon style applied - classic visual effect"
}
```

### Balance Assessment
```typescript
if (perfectly_balanced) {
  "📐 Perfectly balanced margins"
}
```

### Professional Standards
```typescript
if (minMargin >= 30mm) {
  "✅ Optimal dimensions for framing"
}
```

## 📋 Best Practices

### Choosing the Right Method

#### For Artwork & Fine Arts
- **Talon**: Classical paintings, formal artwork
- **Proportional**: Safe choice for most art

#### For Photography
- **Panoramic**: Landscape, architectural, wide scenes
- **Portrait**: People, fashion, vertical compositions
- **Uniform**: When maximizing mat exposure

#### For Documents & Certificates
- **Proportional**: Professional, balanced appearance
- **Uniform**: When frame is significantly larger than document

### Technical Considerations

#### Minimum Margins
- **Professional**: 25-30mm minimum
- **Standard**: 15-20mm minimum  
- **Tight**: 10-15mm (not recommended)

#### Material Considerations
- **Mat board thickness**: Typically 1.4-2.0mm
- **Cutting precision**: ±0.5mm tolerance
- **Bevel angles**: Standard 45° cuts

#### Quality Control
- Always verify calculations manually
- Check for practical cutting constraints
- Consider frame rabbet depth
- Account for glass thickness

### Common Mistakes to Avoid

❌ **Photo larger than frame interior**
```
Ensure: photoWidth < frameInteriorWidth && photoHeight < frameInteriorHeight
```



❌ **Insufficient margins**
```
Minimum recommended: 15mm for small frames, 25mm+ for large
```

❌ **Wrong style for content**
```
Don't use portrait style for landscape photos
```

❌ **Ignoring proportions**
```
Consider the visual balance of the final composition
```

❌ **Measuring exterior frame dimensions**
```
Always measure interior frame opening, not exterior frame size
```

## 🔧 Implementation Notes

### TypeScript Interface
```typescript
interface MatDimensions {
  top: number     // mm
  right: number   // mm  
  bottom: number  // mm
  left: number    // mm
}
```

### Precision Handling
```typescript
// Round to 1 decimal place for practical cutting
Math.round(dimension * 10) / 10
```

### Error Handling
```typescript
// Only input validation is needed
if (photoWidth >= frameInteriorWidth || photoHeight >= frameInteriorHeight) {
  return { error: 'Photo is too large for the frame interior' }
}

// No margin validation needed - calculations are mathematically guaranteed
// to produce valid results if input validation passes
```

---

<div align="center">
  <strong>Professional Mat Cutting Made Simple</strong><br>
  <em>Calculations based on industry standards and fine arts traditions</em>
</div> 
