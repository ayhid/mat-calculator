'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Calculator, RotateCcw, Image, FrameIcon, Layers, AlertCircle } from 'lucide-react'
import { MatCalculator } from '../lib/calculator'
import MatPreview from './MatPreview'
import ResultsDisplay from './ResultsDisplay'

interface Preset {
  frame: { width: number; height: number }
  photo: { width: number; height: number }
}

interface CalculationStyle {
  value: string
  label: string
}

const PRESETS: Record<string, Preset> = {
  'photo-10x15': { frame: { width: 20, height: 25 }, photo: { width: 10, height: 15 } },
  'photo-13x18': { frame: { width: 23, height: 28 }, photo: { width: 13, height: 18 } },
  'photo-20x30': { frame: { width: 30, height: 40 }, photo: { width: 20, height: 30 } },
  'a4-frame': { frame: { width: 21, height: 29.7 }, photo: { width: 15, height: 20 } }
}

const CALCULATION_STYLES: CalculationStyle[] = [
  { value: 'proportional', label: 'Proportional - Equal margins' },
  { value: 'uniform', label: 'Uniform - Average distribution' },
  { value: 'talon', label: 'Talon - Classic style' },
  { value: 'panoramic', label: 'Panoramic - Reduced horizontal margins' },
  { value: 'portrait', label: 'Portrait - Reduced vertical margins' }
]

export default function MatCalculatorComponent() {
  const [calculator] = useState(() => new MatCalculator())
  const [frameWidth, setFrameWidth] = useState('')
  const [frameHeight, setFrameHeight] = useState('')
  const [photoWidth, setPhotoWidth] = useState('')
  const [photoHeight, setPhotoHeight] = useState('')
  const [style, setStyle] = useState('proportional')
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [showResults, setShowResults] = useState(false)

  // Auto-calculate with debounce
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  const calculate = useCallback(() => {
    setError(null)
    
    if (!frameWidth || !frameHeight || !photoWidth || !photoHeight) {
      setShowResults(false)
      return
    }

    const frame = { width: frameWidth, height: frameHeight }
    const photo = { width: photoWidth, height: photoHeight }
    
    const calculationResult = calculator.calculate(frame, photo, style)
    
    if (calculationResult.error) {
      setError(calculationResult.error)
      setShowResults(false)
      return
    }
    
    setResult(calculationResult)
    setShowResults(true)
  }, [calculator, frameWidth, frameHeight, photoWidth, photoHeight, style])

  const debouncedCalculate = useCallback(debounce(calculate, 300), [calculate])

  useEffect(() => {
    debouncedCalculate()
  }, [frameWidth, frameHeight, photoWidth, photoHeight, style, debouncedCalculate])

  const handleReset = () => {
    setFrameWidth('')
    setFrameHeight('')
    setPhotoWidth('')
    setPhotoHeight('')
    setStyle('proportional')
    setResult(null)
    setError(null)
    setShowResults(false)
  }

  const handlePreset = (presetKey: string) => {
    const preset = PRESETS[presetKey]
    if (preset) {
      setFrameWidth(preset.frame.width.toString())
      setFrameHeight(preset.frame.height.toString())
      setPhotoWidth(preset.photo.width.toString())
      setPhotoHeight(preset.photo.height.toString())
    }
  }

  const validateInput = (value: string, setter: (value: string) => void) => {
    const numValue = parseFloat(value)
    if (value === '' || (!isNaN(numValue) && numValue >= 0)) {
      setter(value)
    }
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault()
        calculate()
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        handleReset()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [calculate])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass mx-4 mt-4 mb-8 rounded-2xl">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🖼️</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 text-shadow">
                  Mat Calculator
                </h1>
                <p className="text-sm text-gray-600">
                  Professional photo framing tool
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium">
                Professional
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                Free
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Input Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Frame Dimensions */}
            <section className="glass p-6 rounded-2xl">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FrameIcon className="w-5 h-5 mr-2 text-primary-600" />
                Frame Dimensions
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Width (cm) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g. 30"
                    value={frameWidth}
                    onChange={(e) => validateInput(e.target.value, setFrameWidth)}
                    className="w-full px-4 py-3 input-glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height (cm) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g. 40"
                    value={frameHeight}
                    onChange={(e) => validateInput(e.target.value, setFrameHeight)}
                    className="w-full px-4 py-3 input-glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </section>

            {/* Photo Dimensions */}
            <section className="glass p-6 rounded-2xl">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Image className="w-5 h-5 mr-2 text-primary-600" />
                Photo Dimensions
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Width (cm) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g. 20"
                    value={photoWidth}
                    onChange={(e) => validateInput(e.target.value, setPhotoWidth)}
                    className="w-full px-4 py-3 input-glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height (cm) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="e.g. 30"
                    value={photoHeight}
                    onChange={(e) => validateInput(e.target.value, setPhotoHeight)}
                    className="w-full px-4 py-3 input-glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </section>

            {/* Style Selection */}
            <section className="glass p-6 rounded-2xl">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Layers className="w-5 h-5 mr-2 text-primary-600" />
                Calculation Style
              </h2>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full px-4 py-3 input-glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {CALCULATION_STYLES.map((styleOption) => (
                  <option key={styleOption.value} value={styleOption.value}>
                    {styleOption.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-2">
                The "talon" style increases the bottom margin for a balanced visual effect
              </p>
            </section>

            {/* Presets */}
            <section className="glass p-6 rounded-2xl">
              <h3 className="text-md font-semibold text-gray-800 mb-3">Quick Presets</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handlePreset('photo-10x15')}
                  className="btn-secondary text-xs py-2"
                >
                  Photo 10×15
                </button>
                <button
                  onClick={() => handlePreset('photo-13x18')}
                  className="btn-secondary text-xs py-2"
                >
                  Photo 13×18
                </button>
                <button
                  onClick={() => handlePreset('photo-20x30')}
                  className="btn-secondary text-xs py-2"
                >
                  Photo 20×30
                </button>
                <button
                  onClick={() => handlePreset('a4-frame')}
                  className="btn-secondary text-xs py-2"
                >
                  A4 Frame
                </button>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button onClick={calculate} className="flex-1 btn-primary">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate
              </button>
              <button onClick={handleReset} className="btn-secondary">
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-gray-500 text-center">
              <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Ctrl + Enter</kbd> to calculate •{' '}
              <kbd className="bg-gray-100 px-2 py-1 rounded text-xs">Esc</kbd> to reset
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Error Display */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg animate-slide-up">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {error}
                </div>
              </div>
            )}

            {/* Results */}
            {showResults && result ? (
              <div className="space-y-6 animate-fade-in">
                <ResultsDisplay result={result} calculator={calculator} />
                <MatPreview result={result} calculator={calculator} />
              </div>
            ) : (
              /* Info Section */
              <section className="glass p-8 rounded-2xl text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                  <Calculator className="w-10 h-10 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Professional Mat Calculator
                </h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Enter your frame and photo dimensions to get optimal mat dimensions
                  according to different framing styles.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/50 p-4 rounded-xl">
                    <div className="font-semibold text-gray-800 mb-2">✨ 5 Styles Available</div>
                    <div className="text-gray-600">Proportional, Uniform, Talon, Panoramic, Portrait</div>
                  </div>
                  <div className="bg-white/50 p-4 rounded-xl">
                    <div className="font-semibold text-gray-800 mb-2">📏 Visual Preview</div>
                    <div className="text-gray-600">Real-time visualization with annotations</div>
                  </div>
                  <div className="bg-white/50 p-4 rounded-xl">
                    <div className="font-semibold text-gray-800 mb-2">💡 Recommendations</div>
                    <div className="text-gray-600">Expert advice for optimal framing</div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass mx-4 mb-4 rounded-2xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span>© 2024 Mat Calculator App</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Professional framing tool</span>
            </div>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span>Made with ❤️ for framers</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

