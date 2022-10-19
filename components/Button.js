import Link from "next/link";

export default function Button ({name, onClick, linkTo}) {
  if(onClick) {
    return <button className='w-full h-full px-3 text-teal-100 shadow-sm shadow-indigo-200 min-w-fit bg-gradient-to-r hover:from-red-500 hover:to-red-800 from-indigo-500 to-indigo-700 hover:text-red-100 hover:shadow-red-500' onClick={onClick}>{name}</button>;
  } 
  if (linkTo) {
    return (
      <button className='w-full h-full px-3 text-teal-100 shadow-sm shadow-indigo-200 min-w-fit bg-gradient-to-r hover:from-red-500 hover:to-red-800 from-indigo-500 to-indigo-700 hover:text-red-100 hover:shadow-red-500'>
        <Link href={linkTo}>{name}</Link>
      </button>
    );

  }
}