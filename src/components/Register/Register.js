import React from 'react';

function Register({ onRouteChange }) {
	return (
		<div>
			<article className='br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
				<form className='measure'>
					<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
						<legend className='f1 fw6 ph0 mh0'>Sign In</legend>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' for='name'>
								Name
							</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='text'
								name='name'
								id='name'></input>
						</div>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' for='email-address'>
								Email
							</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='email'
								name='email-address'
								id='email-address'></input>
						</div>
						<div className='mv3'>
							<label className='db fw6 lh-copy f6' for='password'>
								Password
							</label>
							<input
								className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='password'
								name='password'
								id='password'></input>
						</div>
					</fieldset>
					<div className=''>
						<input
							className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
							type='submit'
							value='Register'
							onClick={() => onRouteChange('home')}></input>
					</div>
				</form>
			</article>
		</div>
	);
}

export default Register;
