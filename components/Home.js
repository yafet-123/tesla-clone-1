import React from 'react'
import Section from './Section'
import styles from '../styles/Home.module.css'

function Homes(){
	return(
		<div>
			<Section 
				title = "Model S"
        		description = "Order Online for Touchless Delivery"
        		image = "/images/model-s.jpg"
        		leftBtnText = "Custom Order"
        		rightBtnText = "Existing Inventory" 
			/>
			<Section 
				title = "Model Y"
       			description = "Order Online for Touchless Delivery"
        		image = "/images/model-y.jpg"
        		leftBtnText = "Custom Order"
        		rightBtnText = "Existing Inventory" 
			/>
			<Section 
				title = "Model 3"
        		description = "Order Online for Touchless Delivery"
        		image = "/images/model-3.jpg"
        		leftBtnText = "Custom Order"
        		rightBtnText = "Existing Inventory" 
			/>
			<Section 
				title = "Model X"
        		description = "Order Online for Touchless Delivery"
        		image = "/images/model-x.jpg"
        		leftBtnText = "Custom Order"
        		rightBtnText = "Existing Inventory" 
			/>

			<Section 
				title = "Lowest Cost Solar panels in America"
        		description = "Money Back Gurante"
        		image = "/images/solar-panel.jpg"
        		leftBtnText = "Order now"
        		rightBtnText = "Learn More" 
			/>

			<Section 
				title = "Solar For New Roofs"
        		description = "Solar Roof Coasts Less Than a New Roofs"
        		image = "/images/solar-roof.jpg"
        		leftBtnText = "Order now"
        		rightBtnText = "Learn More" 
			/>

			<Section 
				title = "Accesories"
        		description = ""
        		image = "/images/accessories.jpg"
        		leftBtnText = "Shop Now"
        		rightBtnText = "" 
			/>
		</div>
	)
}

export default Homes


