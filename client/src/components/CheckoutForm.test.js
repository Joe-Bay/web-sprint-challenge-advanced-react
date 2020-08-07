import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />)
    render(<CheckoutForm />)
    const header = screen.getByText(/React Plants/i)
    
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    // find first name, lastname, address, city, state, zip code, and checkout button

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipCodeInput = screen.getByLabelText(/zip/i)
    const checkoutBtn = screen.getByRole('button', {name: /checkout/i})

    // once all tests pass, time to fire events to type in different inputs

    fireEvent.change(firstNameInput, {target: {value: 'Joe'}})
    fireEvent.change(lastNameInput, {target: {value: 'Bay'}})
    fireEvent.change(addressInput, {target: {value: '1234 N Lancealot Lane'}})
    fireEvent.change(cityInput, {target: {value: 'Camelot'}})
    fireEvent.change(stateInput, {target: {value: 'Alaska'}})
    fireEvent.change(zipCodeInput, {target: {value: '54273'}})

    // asserting that those values did get input into the form
    expect(firstNameInput).toHaveValue('Joe')
    expect(lastNameInput).toHaveValue('Bay')
    expect(addressInput).toHaveValue('1234 N Lancealot Lane')
    expect(cityInput).toHaveValue('Camelot')
    expect(stateInput).toHaveValue('Alaska')
    expect(zipCodeInput).toHaveValue('54273')

    fireEvent.click(checkoutBtn) // clicks the button

    expect(screen.getByTestId(/successMessage/i)).toBeInTheDocument() // veryifys that the submitted result is showing in the document, checking by its Test ID

});
