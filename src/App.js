import { BigSuccessButton, DangerButton } from "./composition"
import { RecursiveComponent } from "./RecursiveComponent"

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

// Component compostion, reuse of the component code through compostion recursion
function App() {
	return (
		<>
			<DangerButton text="Cancel" />
			<BigSuccessButton text="Approve" />
		</>
	);
}

export default App;
