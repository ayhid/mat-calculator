'use client'

import React from 'react'
import { MatCalculator } from '../lib/calculator'

interface MatPreviewProps {
  result: any
  calculator: MatCalculator
}

export default function MatPreview({ result, calculator }: MatPreviewProps) {
  const scale = 0.8 // Scale for preview
  const frameWidth = result.frame.width * scale
  const frameHeight = result.frame.height * scale
  const photoWidth = result.photo.width * scale
  const photoHeight = result.photo.height * scale
  
  const formatted = calculator.formatDimensions(result)
  // Use the actual calculated margins for positioning
  const topMargin = formatted.top * scale
  const rightMargin = formatted.right * scale
  const bottomMargin = formatted.bottom * scale
  const leftMargin = formatted.left * scale

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Visual Preview</h3>
        
        <div 
          className="relative animate-scale-in" 
          style={{ 
            width: `${frameWidth + 40}px`, 
            height: `${frameHeight + 40}px`,
            minWidth: '200px',
            minHeight: '200px'
          }}
        >
          {/* Frame */}
          <div 
            className="absolute inset-0 bg-gray-800 border-2 border-gray-900 shadow-lg" 
            style={{
              width: `${frameWidth + 16}px`,
              height: `${frameHeight + 16}px`,
              top: '12px',
              left: '12px'
            }}
          />
          
          {/* Mat */}
          <div 
            className="absolute bg-white border-2 border-gray-400 shadow-sm" 
            style={{
              width: `${frameWidth}px`,
              height: `${frameHeight}px`,
              top: '20px',
              left: '20px'
            }}
          >
            
            {/* Photo */}
            <div 
              className="absolute bg-gray-100 border-2 border-gray-600 flex items-center justify-center" 
              style={{
                width: `${photoWidth}px`,
                height: `${photoHeight}px`,
                top: `${topMargin}px`,
                left: `${leftMargin}px`
              }}
            >
              <div className="text-xs text-gray-800 text-center p-2 font-medium">
                <div className="w-8 h-8 mx-auto mb-1 bg-gray-600 border border-gray-700" />
                Photo<br />
                {result.photo.width} × {result.photo.height} mm
              </div>
            </div>
            
            {/* Dimension Annotations */}
            <div 
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-900 bg-white px-2 py-1 border border-gray-400"
            >
              {formatted.top} mm
            </div>
            <div 
              className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-xs font-bold text-gray-900 bg-white px-2 py-1 border border-gray-400 rotate-90 origin-center"
            >
              {formatted.right} mm
            </div>
            <div 
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-900 bg-white px-2 py-1 border border-gray-400"
            >
              {formatted.bottom} mm
            </div>
            <div 
              className="absolute top-1/2 -left-10 transform -translate-y-1/2 text-xs font-bold text-gray-900 bg-white px-2 py-1 border border-gray-400 -rotate-90 origin-center"
            >
              {formatted.left} mm
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 text-center">
          Frame: {result.frame.width} × {result.frame.height} mm<br />
          Scale: {Math.round(scale * 100)}%
        </div>
      </div>
    </div>
  )
}

