import React from "react";
// import "./App.css";

export default function Form() {
	return (
		<>
			<h1 className='uppercase text-center font-bold text-2xl mt-4 tracking-wide'>
				react-hook-form
			</h1>
			<form
				autoComplete='off'
				className='flex flex-col justify-center my-4 max-w-md  font-semibold'
				// onSubmit={submitHandler}
			>
				{/* <div className="grid "> */}
				<label className='mr-2'>Username</label>
				<input
					type='text'
					name='username'
					placeholder='Username'
					className='px-4 py-2 rounded border-2 border-black'
					minLength={3}
					required
				/>
				<label className='mr-2 mt-2'>Age</label>
				<input
					type='number'
					name='age'
					placeholder='Enter your age'
					className='px-4 py-2 rounded border-2 border-black'
					required
				/>
				<label className='mr-2 mt-2'>Email</label>
				<input
					name='email'
					type='email'
					placeholder='Enter email'
					className='px-4 py-2 rounded border-2 border-black'
				/>
				<label className='mr-2 mt-2'>Password:</label>
				<input
					type='password'
					placeholder='Enter password'
					className='px-4 py-2 rounded border-2 border-black'
				/>
				<label className='mr-2 mt-2'>Confirmed Password</label>
				<input
					type='password'
					placeholder='Confirm password'
					className='px-4 py-2 rounded border-2 border-black'
				/>
				{/* </div> */}
				<div className='flex items-start mt-4 gap-3'>
					<label className='inline-flex items-center'>
						<input
							type='checkbox'
							className='hidden peer'
						/>
						<span className='w-6 h-6 border-2 bg-white border-black rounded-sm peer-checked:bg-black peer-checked:border-black'></span>
						<span className='ml-2'>Reminder</span>
					</label>
				</div>
				<button
					type='submit'
					className='bg-blue-700 disabled:bg-gray-500 py-2 rounded text-fuchsia-50 font-bold mt-4 uppercase border-2 border-black tracking-[.25em]'
				>
					Submit
				</button>
			</form>
		</>
	);
}
