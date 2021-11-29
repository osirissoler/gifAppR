import React, { useState } from 'react';
import Proptypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        // console.log(inputValue)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue])
            // setCategories(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }
    return (
        <form onSubmit={handleSubmit} className="row">
            <div className="col-xl-5 col-9 px-2">
                <input
                    className="form-control "
                    type="text"
                    value={inputValue}
                    placeholder="Buscar gif"
                    onChange={handleInputChange}
                />
            </div>
            <div className="col-xl-1  col-3 ">
                <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired

}


export default AddCategory