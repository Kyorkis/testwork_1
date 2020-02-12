import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import './formComponent.css'

class FormComponent extends React.Component{
    
    render(){
        const CustomForm=()=>{
            if(this.props.data.field_groups!==undefined){
                
                const {data}=this.props
                const dataForMainField = data.fields.filter(item=>item.group==="main")
                const dataForAdditionalField = data.fields.filter(item=>item.group==="additional")
                const {field_groups}=data
                const dataForCheck = data.fields.find(item=>item.name==="agreement")
                const mainFieldData=dataForMainField.map((item)=>{

                    return(
                        <div key={item.name} className="form-group col-md-6"style={{height:"71px"}}>
                            <label >{item.label}</label>
                            <input type={item.type} className="form-control" name={item.name} />
                        </div>
                    )

                })

                const additionalFieldData=dataForAdditionalField.map((item)=>{
                    return(
                        <div key={item.name} className="form-group col-md-12 h-100 p-0">
                            <label style={{height:"13%"}}>{item.label+" (не обязательно)"}</label>
                            <textarea style={{height:"73%"}} type={item.type} className="form-control" name={item.name} />
                        </div>
                    )
                })
                
                let createMarkup=()=> {
                    return {__html: dataForCheck.label};
                }

                return(
                    <form>
                        <div className="form-row">
                            <div className={field_groups.main}>
                                <div className="form-row">
                                    {mainFieldData}
                                </div>
                            </div>
                            <div className={field_groups.additional}>
                                    {additionalFieldData}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="customCheck">
                                <input type="checkbox" id="checkbox-id" />
                                <label className="labelText" htmlFor="checkbox-id" dangerouslySetInnerHTML={createMarkup()}></label>
                            </div>        
                        </div>
                        <div className="form-row">
                            <div className="col-auto">
                                <button type="submit" className="btn customButton">{data.submit_button.text}</button>
                            </div>
                        </div>
                    </form>
                )
            }
            else{
                return(
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner> 
                )   
            }
        }
        return(
            <div>
                <CustomForm/>
            </div>            
        )
}
}
export default FormComponent