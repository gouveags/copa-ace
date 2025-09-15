import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle cx="32" cy="32" r="32" fill="#000000" />

        {/* Main V shape - darker cyan */}
        <path
          d="M32 8 L24 24 L32 40 L40 24 Z"
          fill="#0891b2"
          className="drop-shadow-lg"
        />

        {/* Left wing/ear - lighter cyan */}
        <path
          d="M16 20 L24 24 L20 32 L12 28 Z"
          fill="#22d3ee"
        />

        {/* Right wing/ear - lighter cyan */}
        <path
          d="M48 20 L40 24 L44 32 L52 28 Z"
          fill="#22d3ee"
        />

        {/* Bottom diamond - lighter cyan */}
        <path
          d="M32 40 L28 44 L32 48 L36 44 Z"
          fill="#22d3ee"
        />
      </svg>
    </div>
  )
}
