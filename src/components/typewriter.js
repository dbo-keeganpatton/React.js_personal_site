import React from 'react';
import Typewriter from 'typewriter-effect';

function Typewriters() {
	return (
		<div className="typewriter">
				<Typewriter
					options={{
						autoStart: true,
						loop: true,
						delay: 100,
						strings: ["Hi, I'm Keegan..."]
					}}
				/>
		</div>
	)
}

export default Typewriters;
