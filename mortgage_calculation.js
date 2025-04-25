// const currentDate = new Date();
// console.log(`JS is connected at: ${currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()}`);

function calculateMortgage(event) {
    event.preventDefault();

    try {
        const mortgageAmount = Number(document.querySelector('#mortgage_amount').value);
        const mortgageTerm = Number(document.querySelector('#mortgage_term').value);
        const interestRate = Number(document.querySelector('#interest_rate').value) / 100.00 / 12;
        const mortgageType = document.querySelector('input[name="mortgage_type"]:checked').value;

        // console.log(`Form values: mortgageAmount: ${mortgageAmount}, mortgageTerm: ${mortgageTerm}, interestRate: ${interestRate}, mortgageType: ${mortgageType}`);

        const n = mortgageTerm * 12
        let monthly_repayment =
            mortgageType === 'r'
                ? mortgageAmount * ( (interestRate * Math.pow((1 + interestRate), n) ) / ( Math.pow((1 + interestRate), n) - 1 ) )
                : mortgageAmount * interestRate

        monthly_repayment = monthly_repayment.toFixed(2);
        // console.log(`Monthly repayment: ${monthly_repayment}`);
        document.querySelector('#monthly_repayments_value').textContent = `£${String(monthly_repayment).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

        const total_repayment = (monthly_repayment * n).toFixed(2);
        // console.log(`Total repayment: ${total_repayment}`);
        document.querySelector('#total_repayments_value').textContent = `£${String(total_repayment).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

        // Swap containers
        document.querySelector('.no_result_content').style.display = 'none'
        document.querySelector('.result_content').style.display = 'flex'
    } catch (e) {
        console.error(e);
    }
}

function clearInputs(event) {
    event.preventDefault();

    document.querySelector('#mortgage_amount').value = null
    document.querySelector('#mortgage_term').value = null
    document.querySelector('#interest_rate').value = null
    document.querySelector('input[name="mortgage_type"]:checked').checked = false

    // Swap containers
    document.querySelector('.no_result_content').style.display = 'flex'
    document.querySelector('.result_content').style.display = 'none'
}