import React from 'react'
import Link from 'next/link'

const Forgot = () => {
  return (
    <div>
            <div className="w-full min-h-screen bg-gray-800 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="w-full sm:max-w-md p-5 mx-auto">
                    <h2 className="mb-12 text-center text-5xl font-bold">Recover Your password</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-1" for="email">Email-Address</label>
                            <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                        </div>

                        <div className="mt-6">
                            <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-amber-400 border border-transparent rounded-md font-semibold capitalize text-black hover:text-white hover:bg-amber-500 active:bg-amber-500 focus:outline-none focus:border-amber-500 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Continue</button>
                        </div>
                        <div className="mt-6 text-center">
                            <Link href={'/login'}>
                            <div className="font-bold underline">or you can login also</div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Forgot
