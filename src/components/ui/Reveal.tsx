import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react'

type RevealProps<T extends ElementType = 'div'> = {
  children: ReactNode
  className?: string
  delay?: number
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className' | 'style'>

export function Reveal<T extends ElementType = 'div'>({
  children,
  className,
  delay = 0,
  as,
  ...rest
}: RevealProps<T>) {
  const Tag = as ?? 'div'
  const style =
    delay > 0 ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined

  return (
    <Tag
      className={className ? `reveal-up ${className}` : 'reveal-up'}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
