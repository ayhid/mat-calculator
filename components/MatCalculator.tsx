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
  'photo-10x15': { frame: { width: 200, height: 250 }, photo: { width: 100, height: 150 } },
  'photo-13x18': { frame: { width: 230, height: 280 }, photo: { width: 130, height: 180 } },
  'photo-20x30': { frame: { width: 300, height: 400 }, photo: { width: 200, height: 300 } },
  'a4-frame': { frame: { width: 210, height: 297 }, photo: { width: 150, height: 200 } }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🖼️</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Mat Calculator
                </h1>
                <p className="text-sm text-gray-600">
                  Professional photo framing tool
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                Professional
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                Free
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Input Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Frame Dimensions */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center border-b border-gray-100 pb-3">
                <FrameIcon className="w-5 h-5 mr-2 text-blue-600" />
                Frame Dimensions
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Width (mm) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="0"
                    placeholder="e.g. 300"
                    value={frameWidth}
                    onChange={(e) => validateInput(e.target.value, setFrameWidth)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height (mm) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="0"
                    placeholder="e.g. 400"
                    value={frameHeight}
                    onChange={(e) => validateInput(e.target.value, setFrameHeight)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>
              </div>
            </section>

            {/* Photo Dimensions */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center border-b border-gray-100 pb-3">
                <Image className="w-5 h-5 mr-2 text-green-600" />
                Photo Dimensions
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Width (mm) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="0"
                    placeholder="e.g. 200"
                    value={photoWidth}
                    onChange={(e) => validateInput(e.target.value, setPhotoWidth)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height (mm) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="0"
                    placeholder="e.g. 300"
                    value={photoHeight}
                    onChange={(e) => validateInput(e.target.value, setPhotoHeight)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>
              </div>
            </section>

            {/* Style Selection */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center border-b border-gray-100 pb-3">
                <Layers className="w-5 h-5 mr-2 text-purple-600" />
                Calculation Style
              </h2>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 focus:bg-white transition-colors"
              >
                {CALCULATION_STYLES.map((styleOption) => (
                  <option key={styleOption.value} value={styleOption.value}>
                    {styleOption.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-3 bg-gray-50 p-3 rounded-lg">
                The "talon" style increases the bottom margin for a balanced visual effect
              </p>
            </section>

            {/* Presets */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-md font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-3">Quick Presets</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handlePreset('photo-10x15')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 text-xs"
                >
                  Photo 10×15
                </button>
                <button
                  onClick={() => handlePreset('photo-13x18')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 text-xs"
                >
                  Photo 13×18
                </button>
                <button
                  onClick={() => handlePreset('photo-20x30')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 text-xs"
                >
                  Photo 20×30
                </button>
                <button
                  onClick={() => handlePreset('a4-frame')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 text-xs"
                >
                  A4 Frame
                </button>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button 
                onClick={calculate} 
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate
              </button>
              <button 
                onClick={handleReset} 
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-gray-500 text-center bg-gray-50 p-3 rounded-lg">
              <kbd className="bg-white px-2 py-1 rounded border text-xs">Ctrl + Enter</kbd> to calculate •{' '}
              <kbd className="bg-white px-2 py-1 rounded border text-xs">Esc</kbd> to reset
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Error Display */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl animate-pulse">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-3 text-red-600" />
                  <span className="font-medium">{error}</span>
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
              <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <Calculator className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional Mat Calculator
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Enter your frame and photo dimensions to get optimal mat dimensions
                  according to different framing styles.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-4 rounded-xl">
                    <div className="font-semibold text-blue-900 mb-2">✨ 5 Styles Available</div>
                    <div className="text-blue-700">Proportional, Uniform, Talon, Panoramic, Portrait</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 p-4 rounded-xl">
                    <div className="font-semibold text-green-900 mb-2">📏 Visual Preview</div>
                    <div className="text-green-700">Real-time visualization with annotations</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 p-4 rounded-xl">
                    <div className="font-semibold text-purple-900 mb-2">💡 Recommendations</div>
                    <div className="text-purple-700">Expert advice for optimal framing</div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
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

