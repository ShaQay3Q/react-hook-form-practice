import React from "react";
// import "./App.css";

export default function Form() {
	return (
		<>
			<form className='flex flex-col justify-center my-4 gap-y-2 max-w-sm'>
				<input
					type='email'
					placeholder='Enter email'
					className='px-4 py-2 rounded'
				/>
				<input
					type='password'
					placeholder='Enter password'
					className='px-4 py-2 rounded'
				/>
				<input
					type='password'
					placeholder='Confirm password'
					className='px-4 py-2 rounded'
				/>
				<button
					type='submit'
					className='bg-blue-700 disabled:bg-gray-500 py-2 rounded text-fuchsia-50 font-bold mt-2'
				>
					Submit
				</button>
			</form>
		</>
	);
}
