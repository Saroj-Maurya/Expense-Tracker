function BudgetComponent({title, budget, image}) {
    return(
        <div className="budget-component">
            <div className="budget-component-details">
                <h2>{title}</h2>
                <p>₹</p>
            </div>
            <div>
                <img src={image} alt="" className="budget-component-image" />
            </div>
        </div>
    )

}

export default BudgetComponent;