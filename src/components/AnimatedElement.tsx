import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'fade-in';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'slide-up',
  delay,
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
  as: Component = 'div',
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  const animationClass = isIntersecting ? `animate-${animation}` : '';
  const delayClass = delay ? `animate-delay-${delay}` : '';

  return (
    <Component
      ref={elementRef}
      className={`animate-on-scroll ${animationClass} ${delayClass} ${className}`}
    >
      {children}
    </Component>
  );
}; 