import { useState, useEffect } from 'react';
import { processUploadedImage } from '@/utils/backgroundRemoval';

interface BackgroundRemovedImageProps {
  originalImageUrl: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const BackgroundRemovedImage = ({ 
  originalImageUrl, 
  alt, 
  className = "",
  fallbackSrc 
}: BackgroundRemovedImageProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      setIsProcessing(true);
      setError(null);
      
      try {
        const processedUrl = await processUploadedImage(originalImageUrl);
        setProcessedImageUrl(processedUrl);
      } catch (err) {
        console.error('Failed to process image:', err);
        setError('Failed to process image');
      } finally {
        setIsProcessing(false);
      }
    };

    if (originalImageUrl) {
      processImage();
    }

    return () => {
      // Cleanup object URL when component unmounts
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [originalImageUrl]);

  if (isProcessing) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ojaja-orange"></div>
      </div>
    );
  }

  if (error && fallbackSrc) {
    return (
      <img 
        src={fallbackSrc} 
        alt={alt}
        className={className}
      />
    );
  }

  if (processedImageUrl) {
    return (
      <img 
        src={processedImageUrl} 
        alt={alt}
        className={className}
      />
    );
  }

  return fallbackSrc ? (
    <img 
      src={fallbackSrc} 
      alt={alt}
      className={className}
    />
  ) : null;
};

export default BackgroundRemovedImage;