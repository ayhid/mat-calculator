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
  const topMargin = formatted.top * scale
  const leftMargin = formatted.left * scale

  return (
    <div className="glass p-6 rounded-2xl">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Visual Preview</h3>
        
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
            className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 rounded-lg shadow-2xl" 
            style={{
              width: `${frameWidth}px`,
              height: `${frameHeight}px`,
              top: '20px',
              left: '20px'
            }}
          />
          
          {/* Mat */}
          <div 
            className="absolute mat-preview rounded-sm" 
            style={{
              width: `${frameWidth}px`,
              height: `${frameHeight}px`,
              top: '20px',
              left: '20px'
            }}
          >
            
            {/* Photo */}
            <div 
              className="absolute photo-preview rounded-sm flex items-center justify-center" 
              style={{
                width: `${photoWidth}px`,
                height: `${photoHeight}px`,
                top: `${topMargin}px`,
                left: `${leftMargin}px`
              }}
            >
              <div className="text-xs text-gray-500 text-center p-2">
                <div className="w-8 h-8 mx-auto mb-1 bg-gray-400 rounded opacity-50" />
                Photo<br />
                {result.photo.width} × {result.photo.height} cm
              </div>
            </div>
            
            {/* Dimension Annotations */}
            <div 
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-primary-600"
            >
              {formatted.top} cm
            </div>
            <div 
              className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-xs font-medium text-primary-600 rotate-90 origin-center"
            >
              {formatted.right} cm
            </div>
            <div 
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-primary-600"
            >
              {formatted.bottom} cm
            </div>
            <div 
              className="absolute top-1/2 -left-8 transform -translate-y-1/2 text-xs font-medium text-primary-600 -rotate-90 origin-center"
            >
              {formatted.left} cm
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 text-center">
          Frame: {result.frame.width} × {result.frame.height} cm<br />
          Scale: {Math.round(scale * 100)}%
        </div>
      </div>
    </div>
  )
}

