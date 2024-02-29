import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, Currency, expenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget:  {Currency} 
{<input type="number" step="10" value={newBudget} max={20000} min={totalExpenses} onChange={handleBudgetChange}></input>}
<script>
    if ({newBudget > 20000}){
        alert("Buget cannot increase upper than 20000")
    }
    else if({newBudget < totalExpenses}){
        alert("Cannot decrease the budget value lower than the spending")
    }
</script>
</span>
</div>
    );

};
export default Budget;
