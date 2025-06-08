'use client'

import React from 'react'
import { BarChart3 } from 'lucide-react'
import { MatCalculator } from '../lib/calculator'

interface ResultsDisplayProps {
  result: any
  calculator: MatCalculator
}

export default function ResultsDisplay({ result, calculator }: ResultsDisplayProps) {
  const formatted = calculator.formatDimensions(result)

  return (
    <div className="glass p-6 rounded-2xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <BarChart3 className="w-6 h-6 mr-2 text-primary-600" />
        Calculation Results
      </h2>
      
      {/* Dimensions Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="glass p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Top</div>
          <div className="text-2xl font-bold text-primary-600">{formatted.top} cm</div>
        </div>
        <div className="glass p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Right</div>
          <div className="text-2xl font-bold text-primary-600">{formatted.right} cm</div>
        </div>
        <div className="glass p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Bottom</div>
          <div className="text-2xl font-bold text-primary-600">{formatted.bottom} cm</div>
        </div>
        <div className="glass p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Left</div>
          <div className="text-2xl font-bold text-primary-600">{formatted.left} cm</div>
        </div>
      </div>
      
      {/* Style Applied */}
      <div className="glass p-4 rounded-lg mb-6">
        <div className="text-sm text-gray-600 mb-2">Style Applied</div>
        <div className="text-lg font-semibold text-gray-800">{result.style}</div>
      </div>

      {/* Recommendations */}
      {result.recommendations && result.recommendations.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-800 mb-3">Recommendations</h3>
          {result.recommendations.map((recommendation: string, index: number) => (
            <div key={index} className="glass p-3 rounded-lg text-sm text-gray-700 animate-slide-up">
              {recommendation}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

