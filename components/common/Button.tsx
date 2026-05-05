
interface ButtonProps {
  title: string;
  type : 'primary'| 'secondary',
}

const Button = ({title , type ,
}: ButtonProps) => {
  return (
    <button  className={`mt-2 w-full py-3 rounded-full text-white text-sm  ${type === 'primary' ? 'bg-linear-to-br from-[#0098FF] to-[#00233B]' : 'bg-zinc-700'} hover:opacity-90 transition-opacity`}>
      {title}
   </button>
  )
}

export default Button