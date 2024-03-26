import React from 'react';
import Link from "next/link";

export function PrimaryButton({ text, linkto}) {
  return (
    <div>
      <Link className='font-heading px-4 py-3 rounded-xl text-sm bg-primary border-2 border-blue-500 shadow-md'  href={linkto}>
        {text}
      </Link>
    </div>
  );
}

export function SecondaryButton({ text, linkto }) {
  return (
    <div>
      <Link className='font-heading px-4 py-3 rounded-xl text-sm bg-gray-50 text-gray-900 border-2 border-gray-100 shadow-md' href={linkto}>
        {text}
      </Link>
    </div>
  );
}