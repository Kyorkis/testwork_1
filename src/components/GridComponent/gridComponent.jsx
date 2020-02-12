import React,{Fragment} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import './gridComponents.css'

class GridComponent extends React.Component{
    
    render(){
        const Message = ()=>{
            if(this.props.data.metadata===undefined){
                return(
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                )
            }
            else{
                const {components}=this.props.data.metadata
                const text = components.map((component)=>{
                    let createMarkup=()=> {
                        return {__html: component.metadata.text};
                      }
                    
                    return(
                            <Col md={6} sm={12} key={component.metadata.title}>
                                <h2 className="gridTextHeader">{component.metadata.title}</h2>
                                <div className="gridText" dangerouslySetInnerHTML={createMarkup()}></div>
                            </Col>
                        )
                })
                return text
                
            }
        }
        
        return(
            <Row style={{marginBottom:"40px"}}>
                <Message/>     
            </Row>
        )
    }
}
export default GridComponent