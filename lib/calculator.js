/**
 * Mat calculator for photo framing
 * Calculates optimal dimensions based on different styles
 */

export class MatCalculator {
  constructor() {
    this.styles = {
      proportional: 'Proportional',
      uniform: 'Uniform',
      talon: 'Talon',
      panoramic: 'Panoramic',
      portrait: 'Portrait'
    };
  }

  /**
   * Calculate mat dimensions based on the selected style
   * @param {Object} frame - Frame dimensions {width, height}
   * @param {Object} photo - Photo dimensions {width, height}
   * @param {string} style - Calculation style
   * @returns {Object} Mat dimensions
   */
  calculate(frame, photo, style) {
    const frameWidth = parseFloat(frame.width) || 0;
    const frameHeight = parseFloat(frame.height) || 0;
    const photoWidth = parseFloat(photo.width) || 0;
    const photoHeight = parseFloat(photo.height) || 0;

    if (frameWidth <= 0 || frameHeight <= 0 || photoWidth <= 0 || photoHeight <= 0) {
      return this.getEmptyResult();
    }

    if (photoWidth >= frameWidth || photoHeight >= frameHeight) {
      return {
        ...this.getEmptyResult(),
        error: 'Photo is too large for the frame'
      };
    }

    const availableWidth = frameWidth - photoWidth;
    const availableHeight = frameHeight - photoHeight;

    let result;
    switch (style) {
      case 'proportional':
        result = this.calculateProportional(availableWidth, availableHeight);
        break;
      case 'uniform':
        result = this.calculateUniform(availableWidth, availableHeight);
        break;
      case 'talon':
        result = this.calculateTalon(availableWidth, availableHeight);
        break;
      case 'panoramic':
        result = this.calculatePanoramic(availableWidth, availableHeight);
        break;
      case 'portrait':
        result = this.calculatePortrait(availableWidth, availableHeight);
        break;
      default:
        result = this.calculateProportional(availableWidth, availableHeight);
    }

    return {
      ...result,
      frame: { width: frameWidth, height: frameHeight },
      photo: { width: photoWidth, height: photoHeight },
      style: this.styles[style],
      recommendations: this.getRecommendations(result, style)
    };
  }

  /**
   * Proportional style - equal distribution on all sides
   */
  calculateProportional(availableWidth, availableHeight) {
    const margin = Math.min(availableWidth, availableHeight) / 2;
    return {
      top: margin,
      right: margin,
      bottom: margin,
      left: margin
    };
  }

  /**
   * Uniform style - equal margins calculated from available space
   */
  calculateUniform(availableWidth, availableHeight) {
    const horizontalMargin = availableWidth / 2;
    const verticalMargin = availableHeight / 2;
    const avgMargin = (horizontalMargin + verticalMargin) / 2;
    
    return {
      top: avgMargin,
      right: avgMargin,
      bottom: avgMargin,
      left: avgMargin
    };
  }

  /**
   * Talon style - larger bottom margin (fine arts rule)
   */
  calculateTalon(availableWidth, availableHeight) {
    const horizontalMargin = availableWidth / 2;
    const topMargin = availableHeight * 0.4;
    const bottomMargin = availableHeight * 0.6;
    
    return {
      top: topMargin,
      right: horizontalMargin,
      bottom: bottomMargin,
      left: horizontalMargin
    };
  }

  /**
   * Panoramic style - reduced horizontal margins
   */
  calculatePanoramic(availableWidth, availableHeight) {
    const horizontalMargin = availableWidth * 0.3;
    const verticalMargin = availableHeight / 2;
    
    return {
      top: verticalMargin,
      right: horizontalMargin,
      bottom: verticalMargin,
      left: horizontalMargin
    };
  }

  /**
   * Portrait style - reduced vertical margins
   */
  calculatePortrait(availableWidth, availableHeight) {
    const horizontalMargin = availableWidth / 2;
    const verticalMargin = availableHeight * 0.3;
    
    return {
      top: verticalMargin,
      right: horizontalMargin,
      bottom: verticalMargin,
      left: horizontalMargin
    };
  }

  /**
   * Default empty result
   */
  getEmptyResult() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      error: null
    };
  }

  /**
   * Generate recommendations based on the result
   */
  getRecommendations(result, style) {
    const recommendations = [];
    const { top, right, bottom, left } = result;
    const avgMargin = (top + right + bottom + left) / 4;

    if (avgMargin < 2) {
      recommendations.push('⚠️ Very small margins - consider a larger frame');
    } else if (avgMargin > 10) {
      recommendations.push('💡 Generous margins - perfect for showcasing the photo');
    }

    if (style === 'talon' && bottom > top) {
      recommendations.push('✨ Talon style applied - classic visual effect');
    }

    if (Math.abs(right - left) < 0.1 && Math.abs(top - bottom) < 0.1) {
      recommendations.push('📐 Perfectly balanced margins');
    }

    const minMargin = Math.min(top, right, bottom, left);
    if (minMargin >= 3) {
      recommendations.push('✅ Optimal dimensions for framing');
    }

    return recommendations;
  }

  /**
   * Format dimensions for display
   */
  formatDimensions(dimensions) {
    return {
      top: Math.round(dimensions.top * 10) / 10,
      right: Math.round(dimensions.right * 10) / 10,
      bottom: Math.round(dimensions.bottom * 10) / 10,
      left: Math.round(dimensions.left * 10) / 10
    };
  }
}

