import React from 'react';

const CreateCityBlock = ({add, name, changeName}) => {
    return (
        <div>
            <div className="input-group mb-3">
                <input
                    className="form-control"
                    placeholder='Город'
                    type="text"
                    value={name}
                    onChange={changeName}
                />

                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary btn-outline-dark" type="button"
                        onClick={() => add()}
                    >
                        Добавить город
                    </button>

                </div>
            </div>
        </div>
    )
};


export default CreateCityBlock;