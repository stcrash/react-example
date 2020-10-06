import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeCustom } from 'store/customState/actions'
import FormContact from 'components/FormContact'
import { State } from 'store/reducers'
import { CustomState } from 'store/customState/reducer'

interface PageProps {
	changeCustom: (data: CustomState) => void
	customReducer: CustomState
}

const Page: React.FC<PageProps> = (props) => {
	const { customReducer } = props
	if (customReducer.formIsSubmitted) return <p>Form submitted</p>

	return (
		<div className="ib">
			<FormContact
				onSubmit={(values) => {
					console.log(values)
					props.changeCustom({
						formIsSubmitted: true,
					})
				}}
				initialValues={{
					type: 'oklad',
					tax: true,
				}}
			/>
		</div>
	)
}

const mapStateToProps = ({ customReducer }: State) => {
	return { customReducer }
}

const mapDispatchToProps = (dispatch: any) => ({
	changeCustom: bindActionCreators(changeCustom, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
