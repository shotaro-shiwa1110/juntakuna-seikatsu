interface Blob {
  color: string
  size: number
  top?: string | number
  left?: string | number
  right?: string | number
  bottom?: string | number
  opacity?: number
  blur?: number
}

interface Props {
  blobs: Blob[]
  className?: string
}

export default function GradientBlob({ blobs, className = '' }: Props) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      {blobs.map((b, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: b.size,
            height: b.size,
            borderRadius: '50%',
            background: b.color,
            filter: `blur(${b.blur ?? 70}px)`,
            opacity: b.opacity ?? 0.45,
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
          }}
        />
      ))}
    </div>
  )
}
