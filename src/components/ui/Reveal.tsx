import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react'

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'

type RevealProps<T extends ElementType = 'div'> = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className' | 'style'>

const variantClass: Record<RevealVariant, string> = {
  up: 'reveal-up',
  down: 'reveal-down',
  left: 'reveal-left',
  right: 'reveal-right',
  fade: 'reveal-fade',
  scale: 'reveal-scale',
}

export function Reveal<T extends ElementType = 'div'>({
  children,
  className,
  delay = 0,
  variant = 'up',
  as,
  ...rest
}: RevealProps<T>) {
  const Tag = as ?? 'div'
  const style =
    delay > 0 ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined

  const classes = ['reveal', variantClass[variant], className].filter(Boolean).join(' ')

  return (
    <Tag className={classes} style={style} {...rest}>
      {children}
    </Tag>
  )
}
