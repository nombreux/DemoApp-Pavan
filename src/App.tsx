import React, { useState } from 'react';
import './App.css';
import styled from '@emotion/styled';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel, FormControl, TextField } from '@mui/material';
import { css } from '@emotion/css';



const Dropdown = ({label,menuItems}: {
	label: string;
	menuItems:string[]
	
	
	}) => {
	const [val, setValue] = useState();

	return (
		<div>
			<FormControl >
				<InputLabel>{label}</InputLabel>
				<Select
					sx={{ minWidth: '150px' }}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={val}
					label={label}
					onChange={() => setValue}
				>
					{menuItems.map(item => {
						return (
							<MenuItem value={item}>{item}</MenuItem>
						)
					})}

				</Select>
			</FormControl>
		</div>
	)
}


const Section = styled.div({
	display: 'flex',
	flexDirection: 'row',
	gap: '125px',
	alignItems: 'center',
	justifyContent:'space-between'
})

const Questions = styled.div({
	display: 'inline-flex',
	flexDirection: 'row',
	width: '80%',
	gap: '5px'
})

const Border = styled.div({
	height: '1px',
	background: 'grey',
	marginTop: '20px',
	marginBottom: '20px'

})

const InlineInputStyle = styled.div({

	display: 'flex',
	flexDirection: 'row',
	gap: '125px',
	alignItems: 'center',
	justifyContent:'space-between'

})

export interface DropdownProps{
	label: string;
	menuItems:string[]	

}

const QuestionSection = ({ sectionHeading,questionNumber,question,dropdownProps }: {
	sectionHeading?: string;
	questionNumber?: string;
	question?: string;
	dropdownProps:DropdownProps

}) => {
	return (
		<>
			<Section>
				<div>
					<div>
						<h4>{ sectionHeading }</h4>
					</div>
					<div>
						<Questions>
							<div>
								{questionNumber}
							</div>
							<div>
								{question}
							</div>
						</Questions>
					</div>
				</div>
				<div>
					<Dropdown label={dropdownProps.label} menuItems={dropdownProps.menuItems} />
				</div>
			</Section>
		</>

	)
}

const InlineInput = ({ inputLabel, dropdownProps }: {
	inputLabel: string;
	dropdownProps:DropdownProps
}) => {
	return (
		<InlineInputStyle>
			<div className={css({
				width: '60%',
				marginLeft:'100px'
			})}>
				<div>{ inputLabel }</div>
			</div>
			<div className={css({
				marginLeft:'-105px'
			})}>
				<Dropdown label={dropdownProps.label} menuItems={dropdownProps.menuItems} />
			</div>
		</InlineInputStyle>
	)
}

const ComplaintTextBox = () => {
	return (
		<>
			<h4 className={css({
				marginLeft:'10px'
			})}>
				Summary of Observations & Results (Optional)
			</h4>
			<TextField
				id="outlined-multiline-static"
				label=""
				multiline
				rows={4}
				defaultValue=""
				fullWidth
        		/>
		</>
	)
}
function App() {

	return (

		<div className={css({
			marginLeft: '30px',
			marginRight:'30px'
		})} >
			<div>
				<h1>Machine Redable</h1>
			</div>

			<div>
				<div>
					<h3>Online Avaliablity</h3>
				</div>
				<Border />
				<QuestionSection
					key={1}
					questionNumber={'QA1'}
					question='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without'
					dropdownProps={{
						label: "Pass",
						menuItems:['Yes','No','Undefined']
					}}
					sectionHeading='Public Avaliable Website'
				/>
				<Border />

				<div className={css({
					display: 'flex',
					flexDirection:'column',
					gap:'10px'
				})}>

					<InlineInput
						key={'1a'}
						inputLabel='Machine Readable Format'
						dropdownProps={{
							label: 'File Type',
							menuItems:['Type1','Type2','Other']
						}}
					/>

					<InlineInput
						key={'1b'}
						inputLabel='Other File Format'
						dropdownProps={{
							label: 'File Type',
							menuItems:['Type1','Type2','Other']
						}}
					/>
				</div>
				<Border />
				<QuestionSection
					key={2}
					questionNumber={'QA2'}
					question='Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.'
					dropdownProps={{
						label: "Select",
						menuItems:['Option1','Option2','Option3']
					}}
					sectionHeading='Location - Specefic'
				
				/>
				<Border />
				<ComplaintTextBox />


			</div>





		</div>
	);
}

export default App;
