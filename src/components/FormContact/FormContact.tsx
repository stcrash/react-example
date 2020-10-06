import React, { useState, useEffect } from 'react'
import { Field, getFormValues, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { changeCustom } from 'store/customState/actions'
import { State } from 'store/reducers'
import { connect } from 'react-redux'
import AdapterInput from 'components/adapters/AdapterInput'
import AdapterRadio from 'components/adapters/AdapterRadio'
import AdapterSwitch from 'components/adapters/AdapterSwitch'
import Accent from 'components/Accent'
import Ruble from 'components/Ruble'
import Helper from 'components/Helper'
import numberFormat from 'helpers/numberFormat'
import './FormContact.scss'
import bem from 'bem'

const b = bem.formContact()

interface FormContactProps {
	handleSubmit: (event: React.FormEvent) => void
	formValues: {
		type: 'oklad' | 'mrot' | 'day' | 'hour'
		tax: boolean
		sum: string
	}
}

const FormContact: React.FC<FormContactProps> = (props) => {
	const { formValues, handleSubmit } = props

	const [salary, setSalary] = useState(0)
	const [tax, setTax] = useState(0)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		const salary: number = formValues.sum ? Number(formValues.sum.replace(/\s/g, '')) : 0
		const _tax: number = salary * 0.13
		const tax: number = salary === 0 ? 0 : (salary * _tax) / (salary - _tax)
		const total: number = salary + tax
		setSalary(salary)
		setTax(tax)
		setTotal(total)
	}, [formValues.sum])

	return (
		<form className={b()} onSubmit={handleSubmit}>
			<div className={b('label')}>Сумма</div>
			<div className={b('field')}>
				<Field component={AdapterRadio} name="type" type="radio" value="oklad">
					Оклад за месяц
				</Field>
			</div>
			<div className={b('field')}>
				<Field component={AdapterRadio} name="type" type="radio" value="mrot">
					МРОТ
				</Field>
				<Helper className="ml-1">МРОТ - минимальный размер оплаты труда. Разный для разных регионов.</Helper>
			</div>
			<div className={b('field')}>
				<Field component={AdapterRadio} name="type" type="radio" value="day">
					Оплата за день
				</Field>
			</div>
			<div className={b('field')}>
				<Field component={AdapterRadio} name="type" type="radio" value="hour">
					Оплата за час
				</Field>
			</div>
			<div className={b('field', { offset: true })}>
				<Field
					component={AdapterSwitch}
					name="tax"
					type="checkbox"
					negative="Указать с НДФЛ"
					positive="Без НДФЛ"
				/>
			</div>
			<div className={b('field', { offset: true })}>
				<Field component={AdapterInput} name="sum" type="text" mask="number" autoComplete="off" />{' '}
				<strong>
					<Ruble />
					{formValues.type === 'day' && ' в день'}
					{formValues.type === 'hour' && ' в час'}
				</strong>
			</div>
			{formValues.type === 'oklad' && (
				<Accent>
					<p>
						<strong>
							{numberFormat(salary)} <Ruble />
						</strong>{' '}
						сотрудник будет получать на руки
					</p>
					<p>
						<strong>
							{numberFormat(tax)} <Ruble />
						</strong>{' '}
						НДФЛ, 13% от оклада
					</p>
					<p>
						<strong>
							{numberFormat(total)} <Ruble />
						</strong>{' '}
						за сотрудника в месяц
					</p>
				</Accent>
			)}

			<br />
			<button type="submit">Submit</button>
			<pre>{JSON.stringify(formValues, null, 4)}</pre>
		</form>
	)
}

const mapStateToProps = (state: State) => {
	return {
		formValues: getFormValues('contact')(state),
	}
}

const mapDispatchToProps = (dispatch: any) => ({
	changeCustom: bindActionCreators(changeCustom, dispatch),
})

const Data = connect(mapStateToProps, mapDispatchToProps)(FormContact as React.FC)

export default reduxForm({
	form: 'contact',
})(Data)
