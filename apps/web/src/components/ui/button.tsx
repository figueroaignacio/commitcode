import { cn } from '@/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';

export const button = cva(
  'inline-flex items-center justify-center rounded-lg border border-transparent font-medium cursor-pointer transition-all duration-200 ease-in-out active:scale-90 font-inherit',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:opacity-90',
        outline:
          'bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:opacity-90',
        destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
        ghost: 'bg-transparent text-foreground hover:bg-muted',
      },
      size: {
        default: 'h-9 px-4 text-sm',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-11 px-6 text-base',
        icon: 'h-9 w-9 p-0 text-[0px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(button({ variant, size }), className)} {...props} />;
}
