import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form className="form-inline ml-4">
                <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Pokemon Name"/>

        
                <div className="input-group mb-2 mr-sm-2">
                    <input type="text" className="form-control" placeholder="image URL"/>
                </div>

                <div className="input-group mb-2 mr-sm-2">
                    <select className="custom-select my-1 mr-sm-2">
                        <option selected>Choose Type...</option>
                        <option value="1">Fire</option>
                        <option value="2">Water</option>
                        <option value="3">Psychic</option>
                        <option value="3">Grass</option>
                        <option value="3">Electric</option>
                    </select>
                </div>

                <div className="input-group mb-2 mr-sm-2">
                    <input type="number" className="form-control" placeholder="weight"/>
                </div>

                <div className="input-group mb-2 mr-sm-2">
                    <input type="text-area" className="form-control" placeholder="description"/>
                </div>

                

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        )
    }
}
