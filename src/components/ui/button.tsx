interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outline' | 'primary' | 'secondary';
  className?: string;
}

const styles = {
  outline: 'p-2 px-5 bg-white bg-opacity-[14%] uppercase text-white rounded-md border border-white hover:bg-opacity-50 active:bg-opacity-30',
  primary: 'p-2 px-5 bg-white bg-opacity-[14%] uppercase text-white rounded-md border border-white',
  secondary: 'p-2 px-5 bg-white bg-opacity-[14%] uppercase text-white rounded-md border border-white'
}

export default function Button({
  children,
  variant,
  className
}: ButtonProps) {
  const variantStyles = variant ? styles[variant] : '';

  return (
    <button className={`${variantStyles} font-medium flex items-center justify-center gap-2 transition-all duration-150 text-sm ${className}`}>
      {children}
    </button>
  )
}