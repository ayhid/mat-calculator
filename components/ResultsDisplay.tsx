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
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <BarChart3 className="w-6 h-6 mr-2 text-blue-600" />
        Calculation Results
      </h2>
      
      {/* Dimensions Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Top</div>
          <div className="text-2xl font-bold text-blue-600">{formatted.top} mm</div>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Right</div>
          <div className="text-2xl font-bold text-blue-600">{formatted.right} mm</div>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Bottom</div>
          <div className="text-2xl font-bold text-blue-600">{formatted.bottom} mm</div>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">Left</div>
          <div className="text-2xl font-bold text-blue-600">{formatted.left} mm</div>
        </div>
      </div>
      
      {/* Style Applied */}
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mb-6">
        <div className="text-sm text-gray-600 mb-2">Style Applied</div>
        <div className="text-lg font-semibold text-gray-900">{result.style}</div>
      </div>

      {/* Recommendations */}
      {result.recommendations && result.recommendations.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-900 mb-3">Recommendations</h3>
          {result.recommendations.map((recommendation: string, index: number) => (
            <div key={index} className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-sm text-blue-800">
              {recommendation}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

