import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from '../styles/Section.module.css'

function Section({title,description,image,leftBtnText,rightBtnText}){
	return(
		<div className={styles.Wrap} style={{backgroundImage: `url("${image}")`}} >
			<Fade bottom>
				<div className={styles.ItemText}>
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
			</Fade>

			<div>
				<Fade bottom>
					<div className={styles.ButtonGroup}>

						<div className={styles.LeftButton}>
							{leftBtnText}
						</div>

						{rightBtnText &&
							<div className={styles.RightButton}>
								{rightBtnText}
							</div>
						}

					</div>
				</Fade>
				<img className={styles.DownArrow} src="/images/down-arrow.svg" />
			</div>
		</div>
	)
}

export default Section
