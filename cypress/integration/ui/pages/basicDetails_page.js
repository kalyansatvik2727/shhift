class BasicDetailsPage {
	
	addZIP(){
		const zip = cy.get('input[name="zipCode"]', {timeout:10000});
		zip.type('94117');
	}

	addOOAZIP(){
		const zip = cy.get('input[name="zipCode"]', {timeout:10000});
		zip.type('22201');	
	}

	addMileage(){
		const mileage = cy.get('input[name="mileage"]', {timeout:10000});
		mileage.type('3200');
	}

	add170kMileage(){
		const mileage = cy.get('input[name="mileage"]', {timeout:10000});
		mileage.type('170000');	
	}

	selectTRIM(){
		return cy.get('select[id="trim dropdown"]', {timeout:10000}).select('Premium Plus');
	}

	selectTestlaTRIM(){
		return cy.get('select[id="trim dropdown"]', {timeout:10000}).select('Long Range');
	}

	selectColorBlack(){
		return cy.get('label[for="quote_flow_basic_details_color_Black"]', {timeout:10000}).click();
	}

	selectBody(){
		const fourDoorSedan = cy.get('label[for="quote_flow_basic_details_body_4 Door Sedan"]', {timeout:10000}).click();
		fourDoorSedan.click();
	}

	selectTransmission(){
		const transmission = cy.get('label[for="quote_flow_basic_details_transmission_6-Speed Manual"]', {timeout:10000}).click();
		transmission.click();
	}

	selectTeslaTransmission(){
		const transmission = cy.get('label[for="quote_flow_basic_details_transmission_1-Speed Automatic"]', {timeout:10000}).click();
		transmission.click();
	}

	selectDriveTrain(){
		const driveTrain = cy.get('label[for="quote_flow_basic_details_drivetrain_All Wheel Drive"]', {timeout:10000}).contains('All Wheel Drive');
		driveTrain.click();
	}

	selectRearDriveTrain(){
		const driveTrain = cy.get('label[for="quote_flow_basic_details_drivetrain_Rear Wheel Drive"]', {timeout:10000}).contains('Rear Wheel Drive');
		driveTrain.click();
	}

	selectEngine(){
		const engine = cy.get('label[for="quote_flow_basic_details_engine_2L I-4 Turbocharged Flex-Fuel"]', {timeout:10000}).contains('2L I-4 Turbocharged Flex-Fuel');
		engine.click();
	}

	selectElectricEngine(){
		const engine = cy.get('label[for="quote_flow_basic_details_engine_Electric"]', {timeout:10000}).contains('Electric');
		engine.click();
	}

	clickContinue(){
		const continueButton = cy.get('div').contains('Continue');
		continueButton.click();
	}

}

export default BasicDetailsPage;