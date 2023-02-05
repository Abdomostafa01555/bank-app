
const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 mt-5  bg-blue-gradient font-poppins 
    font-medium text-[18px] text-primary outline-none ${styles} hover:bg-white hover:text-blue-gradient rounded-full `}>
      Get Started 
    </button>
  )
}

export default Button
