import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'



import './carousel.css'

class GalleryComponent extends React.Component{
    
     
    render(){
        
        if(document.documentElement.clientWidth>=1254){
            const MyGallery=()=>{
                if(this.props.data.metadata!==undefined){
                    const listOfImageSlides=this.props.data.metadata.images.map((image)=>{
                        
                        return(
                            <React.Fragment>
                                <img className="img-fluid" src={image} />
                            </React.Fragment>
                        )
                    })
                    const addingObertka=()=>{
                        let listOfImages=[]
                        for(let i =0;i<8;i+=3){
                            if(i===0){
                                let item = (
                                    <div className="carousel-item active ">
                                        <div className='d-flex flex-row justify-content-between'>
                                            <div className="col-4 mr-sm-3 p-0 text-left">
                                                {listOfImageSlides[i]}
                                            </div>
                                            <div className="col-4 p-0 text-center">
                                                {listOfImageSlides[i+1]}
                                            </div>
                                            <div className="col-4 ml-sm-3 p-0 text-right">
                                                {listOfImageSlides[i+2]}
                                            </div>
                                        </div>
                                    </div>
                                    
                                )
                                listOfImages=[...listOfImages,item] 
                            }
                            else{
                                let item = (
                                    <div className="carousel-item  ">
                                        <div className='d-flex flex-row justify-content-between'>
                                            <div className="col-4 mr-sm-3 p-0 text-left">
                                                {listOfImageSlides[i]}
                                            </div>
                                            <div className="col-4 p-0 text-center">
                                                {listOfImageSlides[i+1]}
                                            </div>
                                            <div className="col-4 ml-sm-3 p-0 text-right">
                                                {listOfImageSlides[i+2]}
                                            </div>
                                        </div>
                                    </div>
                                    
                                ) 
                                listOfImages=[...listOfImages,item]   
                            }
                            
                            
                        } 
                        return listOfImages   
                    }                
                    return(
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                               
                            <div className="carousel-inner">
                                {addingObertka()}  
                            </div>
                            <div className="d-flex flex-row justify-content-between align-items-center"style={{height:"96px"}}>
                            
                                <a className="arrow-left carousel-control-prev"style={{position:"unset"}}href="#carouselExampleIndicators"role="button" data-slide="prev">
                                    
                                </a>
                                
                                <ol className="align-items-center carousel-indicators d-flex flex-row justify-content-between"style={{position:"unset",margin:"0"}}>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                
                                <a className="arrow-right carousel-control-next"style={{position:"unset"}}href="#carouselExampleIndicators"role="button" data-slide="next">
                                    
                                </a>
                                
                            </div>
                            
                        </div>
                    )
                }
                else{
                    return (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner> 
                    )
                }
            }  
            
            return(
                <div className="galleryDiv">
                    {this.props.data.metadata !== undefined && 
                    <Row className="justify-content-left align-item-center">
                        <Col>
                            <h1 className="galleryHeader">{this.props.data.metadata.title}</h1>
                        </Col>
                    </Row>
                    
                    }
                    <Row style={{marginTop:"24px"}} className="justify-content-center">
                        <Col>
                            <MyGallery/>
                        </Col>
                    </Row>
                    
                </div>
                
            )    
        }
        else{
            if(this.props.data.metadata!==undefined){
            const MyGallery=()=>{
                
                let i=0
                const listOfImgsinSlides=this.props.data.metadata.images.map((image)=>{
                    i+=1
                    if(i>=2){
                        return(
                            <div className="carousel-item">
                                    <img className="img-fluid" src={image}/>  
                            </div>
                        )
                    }
                    else{
                        return(
                            <div className="carousel-item active">
                                    <img className="img-fluid" src={image}/>  
                            </div>    
                        )
                    }
                    
                })
                
                return(
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner text-center">
                        {listOfImgsinSlides}  
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center"style={{height:"96px"}}>
                        <a className="arrow-left carousel-control-prev"style={{position:"unset"}}href="#carouselExampleIndicators"role="button" data-slide="prev">           
                        </a>      
                        <ol className="align-items-center carousel-indicators d-flex flex-row justify-content-between"style={{position:"unset",margin:"0",width:"auto"}}>
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                        </ol>     
                        <a className="arrow-right carousel-control-next"style={{position:"unset"}}href="#carouselExampleIndicators"role="button" data-slide="next">       
                        </a>    
                    </div> 
                </div>  
                )

            }
            return(
                <div className="galleryDiv">
                    {this.props.data.metadata !== undefined && 
                    <Row className="justify-content-left align-item-center">
                        <Col>
                            <h1 className="galleryHeader">{this.props.data.metadata.title}</h1>
                        </Col>
                    </Row>
                    
                    }
                    <Row style={{marginTop:"24px"}} className="justify-content-center">
                        <Col>
                            <MyGallery/>
                        </Col>
                    </Row>
                    
                </div>
                
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
        
        
        
    }
}

export default GalleryComponent




  
  
