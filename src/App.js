import { BigSuccessButton, DangerButton } from "./partiallyApply"


const nestedObject = {
	a: 1,
	b: {
		b1: 4,
		b2: {
			b23: 'Hello',
		},
		b3: {
			b31: {
				message: 'Hi',
			},
			b32: {
				message: 'Hi',
			}
		}
	},
	c: {
		c1: 2,
		c2: 3,
	}
}

// Partially applied componets, specify set number of props in a component ahead of time
function App() {
	return (
		<>
			<DangerButton text="Cancel" />
			<BigSuccessButton text="Approve" />
		</>
	);
}

export default App;
