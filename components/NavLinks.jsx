
import Link from 'next/link'



const NavLinks = ({href, title}) => {
  return (
    <Link href={href} className='block py-2 pl-3 pr-4 text-cyan-900 dark:text-white sm:text-xl rounded md:p-0 hover:text-blue'>
        {title}
    </Link>
  )
}

export default NavLinks