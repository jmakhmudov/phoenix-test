import './styles.css'

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outline' | 'primary' | 'bordered';
  className?: string;
}

const styles = {
  outline: ' bg-white bg-opacity-[14%] uppercase text-white border border-white hover:bg-opacity-50 active:bg-opacity-30',
  primary: ' bg-white bg-opacity-[14%] uppercase text-white border border-white',
  bordered: 'bordered border border-green border-opacity-30 hover:bg-green hover:text-white transition-all duration-500 md:py-3'
}

export default function Button({
  children,
  variant,
  className
}: ButtonProps) {
  const variantStyles = variant ? styles[variant] : '';

  return (
    <button className={`${variantStyles} relative rounded-md p-2.5 px-5 font-mediumtransition-all duration-150 text-xs md:text-sm grid place-items-center ${className}`}>
      <span className='flex items-center gap-2'>
        {children}
      </span>
    </button>
  )
}