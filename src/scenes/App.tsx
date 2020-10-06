import React from 'react'
import Page from 'scenes/Page'

import 'assets/styles/fonts/open-sans.scss'
import 'assets/styles/fonts/circe.scss'
import 'assets/styles/style.scss'

import { Provider } from 'react-redux'
import store from 'store'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Page />
		</Provider>
	)
}

export default App
