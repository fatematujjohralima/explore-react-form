import React from 'react';

const SimpleForm = () => {

    const handleSubmit =(e) => {
        e.preventDefault();
        alert('Form submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default SimpleForm;