import { run } from 'rigidparsing';
import fs from 'fs/promises';

export async function test() {

	const text = await fs.readFile('./src/main.rue', 'utf8');
	const result = run(text, {
		main: 'x'
	});

	console.log(result);
	
}