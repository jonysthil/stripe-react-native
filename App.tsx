import { StripeProvider } from '@stripe/stripe-react-native'
import { CardField, useStripe } from '@stripe/stripe-react-native';
import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'

const App = () => {
	return (
		<StripeProvider
			publishableKey="pk_test_5a9oB6mjHXvqVtmhSszb3vqw00VBm5flPt"
		>
			<PaymentScreen />
		</StripeProvider>
	)
}

const PaymentScreen = () => {
	const { confirmPayment } = useStripe();
	console.log(confirmPayment)
	return(
		<>
			<CardField
				postalCodeEnabled={false}
				placeholders={{
				number: '4242 4242 4242 4242',
				}}
				cardStyle={{
				backgroundColor: '#FFFFFF',
				textColor: '#000000',
				}}
				style={{
				width: '100%',
				height: 50,
				marginVertical: 30,
				}}
				onCardChange={(cardDetails) => {
				console.log('cardDetails', cardDetails);
				}}
				onFocus={(focusedField) => {
				console.log('focusField', focusedField);
				}}
			/>
			<Button title='Pagar' onPress={() => confirmPayment} />
		</>
	)
} 

const style = StyleSheet.create({

}) 

export default App